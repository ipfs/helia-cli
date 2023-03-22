import { DeleteManyOptions, DeleteManyRequest, DeleteManyResponse } from '@helia/rpc-protocol/datastore'
import type { Helia } from '@helia/interface'
import type { HeliaRpcMethodConfig } from '../../index.js'
import { Key } from 'interface-datastore'
import { streamingCall } from '../utils/rpc-call.js'

export function createDatastoreDeleteMany (config: HeliaRpcMethodConfig): Helia['datastore']['deleteMany'] {
  return streamingCall<DeleteManyOptions, DeleteManyRequest, DeleteManyResponse>({
    resource: '/datastore/delete-many',
    optionsCodec: DeleteManyOptions,
    transformInput: (key: Key) => {
      return {
        key: key.toString()
      }
    },
    inputCodec: DeleteManyRequest,
    outputCodec: DeleteManyResponse,
    transformOutput: (obj: DeleteManyResponse) => {
      return new Key(obj.key)
    }
  })(config)
}
