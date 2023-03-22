import type { Helia } from '@helia/interface'
import type { HeliaRpcMethodConfig } from '../../index.js'
import type { Key } from 'interface-datastore'
import { unaryCall } from '../utils/rpc-call.js'
import { DeleteOptions, DeleteRequest } from '@helia/rpc-protocol/datastore'

export function createDatastoreDelete (config: HeliaRpcMethodConfig): Helia['datastore']['delete'] {
  return unaryCall<DeleteOptions, DeleteRequest>({
    resource: '/datastore/delete',
    optionsCodec: DeleteOptions,
    transformInput: (key: Key) => {
      return {
        key: key.toString()
      }
    },
    inputCodec: DeleteRequest
  })(config)
}
