import { HasOptions, HasRequest, HasResponse } from '@helia/rpc-protocol/datastore'
import { RPCCallMessage, RPCCallMessageType } from '@helia/rpc-protocol/rpc'
import type { RPCServerConfig, Service } from '../../index.js'
import { Key } from 'interface-datastore'

export function createDatastoreHas (config: RPCServerConfig): Service {
  return {
    async handle ({ options, stream, signal }): Promise<void> {
      const opts = HasOptions.decode(options)
      const request = await stream.readPB(HasRequest)
      const key = new Key(request.key)

      const has = await config.helia.datastore.has(key, {
        signal,
        ...opts
      })

      stream.writePB({
        type: RPCCallMessageType.RPC_CALL_MESSAGE,
        message: HasResponse.encode({
          has
        })
      },
      RPCCallMessage)
    }
  }
}
