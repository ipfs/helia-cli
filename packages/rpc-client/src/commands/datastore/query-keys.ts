import type { Helia } from '@helia/interface'
import type { HeliaRpcMethodConfig } from '../../index.js'
import { Key } from 'interface-datastore'
import { QueryKeysOptions, QueryKeysRequest, QueryKeysResponse } from '@helia/rpc-protocol/datastore'
import { streamingCall } from '../utils/rpc-call.js'

export function createDatastoreQueryKeys (config: HeliaRpcMethodConfig): Helia['datastore']['queryKeys'] {
  return streamingCall<QueryKeysOptions, QueryKeysRequest, QueryKeysResponse>({
    resource: '/datastore/query-keys',
    optionsCodec: QueryKeysOptions,
    outputCodec: QueryKeysResponse,
    transformOutput: (obj: QueryKeysResponse) => {
      return new Key(obj.key)
    }
  })(config)
}
