import { PutOptions, PutRequest } from '@helia/rpc-protocol/datastore'
import type { Helia } from '@helia/interface'
import type { HeliaRpcMethodConfig } from '../../index.js'
import type { Pair } from 'interface-datastore'
import { unaryCall } from '../utils/rpc-call.js'

export function createDatastorePut (config: HeliaRpcMethodConfig): Helia['datastore']['put'] {
  return unaryCall<PutOptions, PutRequest, PutRequest>({
    resource: '/datastore/put',
    optionsCodec: PutOptions,
    transformInput: (pair: Pair): PutRequest => {
      return {
        key: pair.key.toString(),
        value: pair.value
      }
    },
    inputCodec: PutRequest
  })(config)
}
