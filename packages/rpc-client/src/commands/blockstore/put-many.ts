import { PutManyOptions, PutManyRequest, PutManyResponse } from '@helia/rpc-protocol/blockstore'
import type { Helia } from '@helia/interface'
import type { HeliaRpcMethodConfig } from '../../index.js'
import { streamingCall } from '../utils/rpc-call.js'
import type { Pair } from 'interface-blockstore'

export function createBlockstorePutMany (config: HeliaRpcMethodConfig): Helia['blockstore']['putMany'] {
  return streamingCall<PutManyOptions, PutManyRequest, PutManyResponse>({
    resource: '/blockstore/put-many',
    optionsCodec: PutManyOptions,
    transformInput: (pair: Pair) => {
      return {
        cid: pair.cid.bytes,
        block: pair.block
      }
    },
    inputCodec: PutManyRequest,
    outputCodec: PutManyResponse,
    transformOutput: (obj): Uint8Array => {
      return obj.block
    }
  })(config)
}
