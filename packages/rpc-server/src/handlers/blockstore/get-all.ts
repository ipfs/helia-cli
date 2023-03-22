import { GetAllOptions, GetAllResponse } from '@helia/rpc-protocol/blockstore'
import { RPCCallMessage, RPCCallMessageType } from '@helia/rpc-protocol/rpc'
import type { RPCServerConfig, Service } from '../../index.js'

export function createBlockstoreGetAll (config: RPCServerConfig): Service {
  return {
    async handle ({ options, stream, signal }): Promise<void> {
      const opts = GetAllOptions.decode(options)

      for await (const { cid, block } of config.helia.blockstore.getAll({
          signal,
          ...opts
        })) {
        stream.writePB({
          type: RPCCallMessageType.RPC_CALL_MESSAGE,
          message: GetAllResponse.encode({
            cid: cid.bytes,
            block: block
          })
        },
        RPCCallMessage)
      }
    }
  }
}
