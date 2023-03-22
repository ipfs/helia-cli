import { GetOptions, GetRequest, GetResponse, GetResponseType } from '@helia/rpc-protocol/datastore'
import type { Helia } from '@helia/interface'
import type { HeliaRpcMethodConfig } from '../../index.js'
import type { Key } from 'interface-datastore'
import { unaryCall } from '../utils/rpc-call.js'
import { CustomProgressEvent } from 'progress-events'

export function createDatastoreGet (config: HeliaRpcMethodConfig): Helia['datastore']['get'] {
  return unaryCall<GetOptions, GetRequest, GetResponse>({
    resource: '/datastore/get',
    optionsCodec: GetOptions,
    transformInput: (key: Key) => {
      return {
        key: key.toString()
      }
    },
    inputCodec: GetRequest,
    outputCodec: GetResponse,
    transformOutput: (obj, onProgress): Uint8Array | undefined => {
      if (obj.type === GetResponseType.GET_RESULT) {
        return obj.value
      }

      if (obj.type === GetResponseType.GET_PROGRESS && obj.progressEventType != null && onProgress != null) {
        // todo: decode progress event CBOR

        const event = new CustomProgressEvent(obj.progressEventType)
        onProgress(event)
      }
    }
  })(config)
}
