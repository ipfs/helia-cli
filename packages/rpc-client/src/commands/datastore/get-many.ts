import { GetManyOptions, GetManyRequest, GetManyResponse } from '@helia/rpc-protocol/datastore'
import type { Helia } from '@helia/interface'
import type { HeliaRpcMethodConfig } from '../../index.js'
import type { Key } from 'interface-datastore'
import { streamingCall } from '../utils/rpc-call.js'

export function createDatastoreGetMany (config: HeliaRpcMethodConfig): Helia['datastore']['getMany'] {
  return streamingCall<GetManyOptions, GetManyRequest, GetManyResponse>({
    resource: '/datastore/get-many',
    optionsCodec: GetManyOptions,
    transformInput: (key: Key) => {
      return {
        key: key.toString()
      }
    },
    inputCodec: GetManyRequest,
    outputCodec: GetManyResponse,
    transformOutput: (obj) => {
      return obj.value
    }
  })(config)
}
