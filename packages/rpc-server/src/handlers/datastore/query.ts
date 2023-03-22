import { QueryOptions, QueryResponse } from '@helia/rpc-protocol/datastore'
import { RPCCallMessage, RPCCallMessageType } from '@helia/rpc-protocol/rpc'
import type { RPCServerConfig, Service } from '../../index.js'

export function createDatastoreQuery (config: RPCServerConfig): Service {
  return {
    async handle ({ options, stream, signal }): Promise<void> {
      const opts = QueryOptions.decode(options)

      for await (const { key, value } of config.helia.datastore.query({
        ...opts
      }, {
        signal
      })) {
        stream.writePB({
          type: RPCCallMessageType.RPC_CALL_MESSAGE,
          message: QueryResponse.encode({
            key: key.toString(),
            value
          })
        },
        RPCCallMessage)
      }
    }
  }
}
