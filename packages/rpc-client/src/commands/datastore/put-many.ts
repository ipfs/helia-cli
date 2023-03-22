import { PutManyOptions, PutManyRequest, PutManyResponse } from '@helia/rpc-protocol/datastore'
import type { Helia } from '@helia/interface'
import type { HeliaRpcMethodConfig } from '../../index.js'
import { streamingCall } from '../utils/rpc-call.js'
import type { Pair } from 'interface-datastore'

export function createDatastorePutMany (config: HeliaRpcMethodConfig): Helia['datastore']['putMany'] {
  return streamingCall<PutManyOptions, PutManyRequest, PutManyResponse>({
    resource: '/datastore/put-many',
    optionsCodec: PutManyOptions,
    transformInput: (pair: Pair) => {
      return {
        key: pair.key.toString(),
        value: pair.value
      }
    },
    inputCodec: PutManyRequest,
    outputCodec: PutManyResponse,
    transformOutput: (obj): Uint8Array => {
      return obj.value
    }
  })(config)
}
