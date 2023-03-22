import { GetAllOptions, GetAllRequest, GetAllResponse } from '@helia/rpc-protocol/blockstore'
import type { Helia } from '@helia/interface'
import type { HeliaRpcMethodConfig } from '../../index.js'
import { CID } from 'multiformats/cid'
import { streamingCall } from '../utils/rpc-call.js'

export function createBlockstoreGetAll (config: HeliaRpcMethodConfig): Helia['blockstore']['getAll'] {
  return streamingCall<GetAllOptions, GetAllRequest, GetAllResponse>({
    resource: '/blockstore/get-all',
    optionsCodec: GetAllOptions,
    transformInput: (cid: CID) => {
      return {
        cid: cid.bytes
      }
    },
    inputCodec: GetAllRequest,
    outputCodec: GetAllResponse,
    transformOutput: (obj) => {
      return {
        cid: CID.decode(obj.cid),
        block: obj.block
      }
    }
  })(config)
}
