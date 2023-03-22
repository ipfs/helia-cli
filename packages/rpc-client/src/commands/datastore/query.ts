import type { Helia } from '@helia/interface'
import type { HeliaRpcMethodConfig } from '../../index.js'
import { Key } from 'interface-datastore'
import { QueryOptions, QueryRequest, QueryResponse } from '@helia/rpc-protocol/datastore'
import { streamingCall } from '../utils/rpc-call.js'

export function createDatastoreQuery (config: HeliaRpcMethodConfig): Helia['datastore']['query'] {
  return streamingCall<QueryOptions, QueryRequest, QueryResponse>({
    resource: '/datastore/query',
    optionsCodec: QueryOptions,
    outputCodec: QueryResponse,
    transformOutput: (obj: QueryResponse) => {
      return {
        key: new Key(obj.key),
        value: obj.value
      }
    }
  })(config)
}
