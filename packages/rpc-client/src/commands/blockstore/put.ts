import { PutOptions, PutRequest } from '@helia/rpc-protocol/blockstore'
import type { Helia } from '@helia/interface'
import type { HeliaRpcMethodConfig } from '../../index.js'
import type { Pair } from 'interface-blockstore'
import { unaryCall } from '../utils/rpc-call.js'

export function createBlockstorePut (config: HeliaRpcMethodConfig): Helia['blockstore']['put'] {
  return unaryCall<PutOptions, PutRequest, PutRequest>({
    resource: '/blockstore/put',
    optionsCodec: PutOptions,
    transformInput: (pair: Pair): PutRequest => {
      return {
        cid: pair.cid.bytes,
        block: pair.block
      }
    },
    inputCodec: PutRequest
  })(config)
}
