import { BatchOptions, BatchRequest, BatchRequestDelete, BatchRequestPut, BatchRequestType } from '@helia/rpc-protocol/datastore'
import type { Helia } from '@helia/interface'
import type { HeliaRpcMethodConfig } from '../../index.js'
import type { Key } from 'interface-datastore'
import { RPCCallMessage, RPCCallRequest, RPCCallMessageType } from '@helia/rpc-protocol/rpc'
import { HELIA_RPC_PROTOCOL } from '@helia/rpc-protocol'
import { pbStream } from 'it-pb-stream'
import type { Pair, Batch } from 'interface-datastore'

export function createDatastoreBatch (config: HeliaRpcMethodConfig): Helia['datastore']['batch'] {
  const batch = (): Batch => {
    let puts: Pair[] = []
    let dels: Key[] = []

    const batch: Batch = {
      put (key, value) {
        puts.push({ key, value })
      },

      delete (key) {
        dels.push(key)
      },

      commit: async (options) => {
        const duplex = await config.libp2p.dialProtocol(config.multiaddr, HELIA_RPC_PROTOCOL)

        try {
          const stream = pbStream(duplex)

          stream.writePB({
            resource: '/datastore/batch',
            method: 'INVOKE',
            authorization: config.authorization,
            options: BatchOptions.encode({
              ...options
            })
          }, RPCCallRequest)

          for (const { key, value } of puts) {
            stream.writePB({
              type: RPCCallMessageType.RPC_CALL_MESSAGE,
              message: BatchRequest.encode({
                type: BatchRequestType.BATCH_REQUEST_PUT,
                message: BatchRequestPut.encode({
                  key: key.toString(),
                  value
                })
              })
            }, RPCCallMessage)
          }

          puts = []

          for (const key of dels) {
            stream.writePB({
              type: RPCCallMessageType.RPC_CALL_MESSAGE,
              message: BatchRequest.encode({
                type: BatchRequestType.BATCH_REQUEST_DELETE,
                message: BatchRequestDelete.encode({
                  key: key.toString()
                })
              })
            }, RPCCallMessage)
          }

          dels = []

          stream.writePB({
            type: RPCCallMessageType.RPC_CALL_MESSAGE,
            message: BatchRequest.encode({
              type: BatchRequestType.BATCH_REQUEST_COMMIT
            })
          }, RPCCallMessage)
        } finally {
          duplex.close()
        }
      }
    }

    return batch
  }

  return batch
}
