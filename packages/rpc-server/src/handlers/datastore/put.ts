import { PutOptions, PutRequest, PutResponse } from '@helia/rpc-protocol/datastore'
import { RPCCallMessage, RPCCallMessageType } from '@helia/rpc-protocol/rpc'
import type { RPCServerConfig, Service } from '../../index.js'
import { Key } from 'interface-datastore'

export function createDatastorePut (config: RPCServerConfig): Service {
  return {
    async handle ({ options, stream, signal }): Promise<void> {
      const opts = PutOptions.decode(options)
      const request = await stream.readPB(PutRequest)
      const key = new Key(request.key)

      await config.helia.datastore.put(key, request.value, {
        signal,
        ...opts
      })

      stream.writePB({
        type: RPCCallMessageType.RPC_CALL_MESSAGE,
        message: PutResponse.encode({
        })
      },
      RPCCallMessage)
    }
  }
}
