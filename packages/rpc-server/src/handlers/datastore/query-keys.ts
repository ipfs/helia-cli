import { QueryKeysOptions, QueryKeysResponse } from '@helia/rpc-protocol/datastore'
import { RPCCallMessage, RPCCallMessageType } from '@helia/rpc-protocol/rpc'
import type { RPCServerConfig, Service } from '../../index.js'

export function createDatastoreQueryKeys (config: RPCServerConfig): Service {
  return {
    async handle ({ options, stream, signal }): Promise<void> {
      const opts = QueryKeysOptions.decode(options)

      for await (const key of config.helia.datastore.queryKeys({
        ...opts
      }, {
        signal
      })) {
        stream.writePB({
          type: RPCCallMessageType.RPC_CALL_MESSAGE,
          message: QueryKeysResponse.encode({
            key: key.toString()
          })
        },
        RPCCallMessage)
      }
    }
  }
}
