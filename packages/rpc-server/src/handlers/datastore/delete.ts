import { DeleteOptions, DeleteRequest, DeleteResponse } from '@helia/rpc-protocol/datastore'
import { RPCCallMessage, RPCCallMessageType } from '@helia/rpc-protocol/rpc'
import type { RPCServerConfig, Service } from '../../index.js'
import { Key } from 'interface-datastore'

export function createDatastoreDelete (config: RPCServerConfig): Service {
  return {
    async handle ({ options, stream, signal }): Promise<void> {
      const opts = DeleteOptions.decode(options)
      const request = await stream.readPB(DeleteRequest)
      const key = new Key(request.key)

      await config.helia.datastore.delete(key, {
        signal,
        ...opts
      })

      stream.writePB({
        type: RPCCallMessageType.RPC_CALL_MESSAGE,
        message: DeleteResponse.encode({
        })
      },
      RPCCallMessage)
    }
  }
}
