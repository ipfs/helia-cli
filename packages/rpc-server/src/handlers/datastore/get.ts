import { GetOptions, GetRequest, GetResponse } from '@helia/rpc-protocol/datastore'
import { RPCCallMessage, RPCCallMessageType } from '@helia/rpc-protocol/rpc'
import type { RPCServerConfig, Service } from '../../index.js'
import { Key } from 'interface-datastore'

export function createDatastoreGet (config: RPCServerConfig): Service {
  return {
    async handle ({ options, stream, signal }): Promise<void> {
      const opts = GetOptions.decode(options)
      const request = await stream.readPB(GetRequest)
      const key = new Key(request.key)

      const value = await config.helia.datastore.get(key, {
        signal,
        ...opts
      })

      stream.writePB({
        type: RPCCallMessageType.RPC_CALL_MESSAGE,
        message: GetResponse.encode({
          value
        })
      },
      RPCCallMessage)
    }
  }
}
