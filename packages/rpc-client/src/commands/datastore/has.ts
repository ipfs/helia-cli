import { HasOptions, HasRequest, HasResponse } from '@helia/rpc-protocol/datastore'
import type { Helia } from '@helia/interface'
import type { HeliaRpcMethodConfig } from '../../index.js'
import type { Key } from 'interface-datastore'
import { unaryCall } from '../utils/rpc-call.js'

export function createDatastoreHas (config: HeliaRpcMethodConfig): Helia['datastore']['has'] {
  return unaryCall<HasOptions, HasRequest, HasResponse>({
    resource: '/datastore/has',
    optionsCodec: HasOptions,
    transformInput: (key: Key) => {
      return {
        key: key.toString()
      }
    },
    inputCodec: HasRequest,
    outputCodec: HasResponse,
    transformOutput: (obj) => {
      return obj.has
    }
  })(config)
}
