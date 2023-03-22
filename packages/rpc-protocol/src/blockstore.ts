/* eslint-disable import/export */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { encodeMessage, decodeMessage, message } from 'protons-runtime'
import type { Codec } from 'protons-runtime'
import type { Uint8ArrayList } from 'uint8arraylist'

export interface Pair {
  cid: Uint8Array
  block: Uint8Array
}

export namespace Pair {
  let _codec: Codec<Pair>

  export const codec = (): Codec<Pair> => {
    if (_codec == null) {
      _codec = message<Pair>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.cid != null && obj.cid.byteLength > 0)) {
          w.uint32(10)
          w.bytes(obj.cid)
        }

        if ((obj.block != null && obj.block.byteLength > 0)) {
          w.uint32(18)
          w.bytes(obj.block)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          cid: new Uint8Array(0),
          block: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.cid = reader.bytes()
              break
            case 2:
              obj.block = reader.bytes()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<Pair>): Uint8Array => {
    return encodeMessage(obj, Pair.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): Pair => {
    return decodeMessage(buf, Pair.codec())
  }
}

export interface PutOptions {}

export namespace PutOptions {
  let _codec: Codec<PutOptions>

  export const codec = (): Codec<PutOptions> => {
    if (_codec == null) {
      _codec = message<PutOptions>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {}

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<PutOptions>): Uint8Array => {
    return encodeMessage(obj, PutOptions.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): PutOptions => {
    return decodeMessage(buf, PutOptions.codec())
  }
}

export interface PutRequest {
  cid: Uint8Array
  block: Uint8Array
}

export namespace PutRequest {
  let _codec: Codec<PutRequest>

  export const codec = (): Codec<PutRequest> => {
    if (_codec == null) {
      _codec = message<PutRequest>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.cid != null && obj.cid.byteLength > 0)) {
          w.uint32(10)
          w.bytes(obj.cid)
        }

        if ((obj.block != null && obj.block.byteLength > 0)) {
          w.uint32(18)
          w.bytes(obj.block)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          cid: new Uint8Array(0),
          block: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.cid = reader.bytes()
              break
            case 2:
              obj.block = reader.bytes()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<PutRequest>): Uint8Array => {
    return encodeMessage(obj, PutRequest.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): PutRequest => {
    return decodeMessage(buf, PutRequest.codec())
  }
}

export interface PutResponse {}

export namespace PutResponse {
  let _codec: Codec<PutResponse>

  export const codec = (): Codec<PutResponse> => {
    if (_codec == null) {
      _codec = message<PutResponse>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {}

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<PutResponse>): Uint8Array => {
    return encodeMessage(obj, PutResponse.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): PutResponse => {
    return decodeMessage(buf, PutResponse.codec())
  }
}

export interface GetOptions {}

export namespace GetOptions {
  let _codec: Codec<GetOptions>

  export const codec = (): Codec<GetOptions> => {
    if (_codec == null) {
      _codec = message<GetOptions>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {}

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<GetOptions>): Uint8Array => {
    return encodeMessage(obj, GetOptions.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): GetOptions => {
    return decodeMessage(buf, GetOptions.codec())
  }
}

export interface GetRequest {
  cid: Uint8Array
}

export namespace GetRequest {
  let _codec: Codec<GetRequest>

  export const codec = (): Codec<GetRequest> => {
    if (_codec == null) {
      _codec = message<GetRequest>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.cid != null && obj.cid.byteLength > 0)) {
          w.uint32(10)
          w.bytes(obj.cid)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          cid: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.cid = reader.bytes()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<GetRequest>): Uint8Array => {
    return encodeMessage(obj, GetRequest.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): GetRequest => {
    return decodeMessage(buf, GetRequest.codec())
  }
}

export interface GetResponse {
  block: Uint8Array
}

export namespace GetResponse {
  let _codec: Codec<GetResponse>

  export const codec = (): Codec<GetResponse> => {
    if (_codec == null) {
      _codec = message<GetResponse>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.block != null && obj.block.byteLength > 0)) {
          w.uint32(18)
          w.bytes(obj.block)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          block: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 2:
              obj.block = reader.bytes()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<GetResponse>): Uint8Array => {
    return encodeMessage(obj, GetResponse.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): GetResponse => {
    return decodeMessage(buf, GetResponse.codec())
  }
}

export interface HasOptions {}

export namespace HasOptions {
  let _codec: Codec<HasOptions>

  export const codec = (): Codec<HasOptions> => {
    if (_codec == null) {
      _codec = message<HasOptions>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {}

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<HasOptions>): Uint8Array => {
    return encodeMessage(obj, HasOptions.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): HasOptions => {
    return decodeMessage(buf, HasOptions.codec())
  }
}

export interface HasRequest {
  cid: Uint8Array
}

export namespace HasRequest {
  let _codec: Codec<HasRequest>

  export const codec = (): Codec<HasRequest> => {
    if (_codec == null) {
      _codec = message<HasRequest>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.cid != null && obj.cid.byteLength > 0)) {
          w.uint32(10)
          w.bytes(obj.cid)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          cid: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.cid = reader.bytes()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<HasRequest>): Uint8Array => {
    return encodeMessage(obj, HasRequest.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): HasRequest => {
    return decodeMessage(buf, HasRequest.codec())
  }
}

export interface HasResponse {
  has: boolean
}

export namespace HasResponse {
  let _codec: Codec<HasResponse>

  export const codec = (): Codec<HasResponse> => {
    if (_codec == null) {
      _codec = message<HasResponse>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.has != null && obj.has !== false)) {
          w.uint32(8)
          w.bool(obj.has)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          has: false
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.has = reader.bool()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<HasResponse>): Uint8Array => {
    return encodeMessage(obj, HasResponse.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): HasResponse => {
    return decodeMessage(buf, HasResponse.codec())
  }
}

export interface DeleteOptions {}

export namespace DeleteOptions {
  let _codec: Codec<DeleteOptions>

  export const codec = (): Codec<DeleteOptions> => {
    if (_codec == null) {
      _codec = message<DeleteOptions>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {}

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<DeleteOptions>): Uint8Array => {
    return encodeMessage(obj, DeleteOptions.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): DeleteOptions => {
    return decodeMessage(buf, DeleteOptions.codec())
  }
}

export interface DeleteRequest {
  cid: Uint8Array
}

export namespace DeleteRequest {
  let _codec: Codec<DeleteRequest>

  export const codec = (): Codec<DeleteRequest> => {
    if (_codec == null) {
      _codec = message<DeleteRequest>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.cid != null && obj.cid.byteLength > 0)) {
          w.uint32(10)
          w.bytes(obj.cid)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          cid: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.cid = reader.bytes()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<DeleteRequest>): Uint8Array => {
    return encodeMessage(obj, DeleteRequest.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): DeleteRequest => {
    return decodeMessage(buf, DeleteRequest.codec())
  }
}

export interface DeleteResponse {}

export namespace DeleteResponse {
  let _codec: Codec<DeleteResponse>

  export const codec = (): Codec<DeleteResponse> => {
    if (_codec == null) {
      _codec = message<DeleteResponse>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {}

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<DeleteResponse>): Uint8Array => {
    return encodeMessage(obj, DeleteResponse.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): DeleteResponse => {
    return decodeMessage(buf, DeleteResponse.codec())
  }
}

export interface PutManyOptions {}

export namespace PutManyOptions {
  let _codec: Codec<PutManyOptions>

  export const codec = (): Codec<PutManyOptions> => {
    if (_codec == null) {
      _codec = message<PutManyOptions>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {}

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<PutManyOptions>): Uint8Array => {
    return encodeMessage(obj, PutManyOptions.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): PutManyOptions => {
    return decodeMessage(buf, PutManyOptions.codec())
  }
}

export interface PutManyRequest {
  cid: Uint8Array
  block: Uint8Array
}

export namespace PutManyRequest {
  let _codec: Codec<PutManyRequest>

  export const codec = (): Codec<PutManyRequest> => {
    if (_codec == null) {
      _codec = message<PutManyRequest>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.cid != null && obj.cid.byteLength > 0)) {
          w.uint32(10)
          w.bytes(obj.cid)
        }

        if ((obj.block != null && obj.block.byteLength > 0)) {
          w.uint32(18)
          w.bytes(obj.block)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          cid: new Uint8Array(0),
          block: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.cid = reader.bytes()
              break
            case 2:
              obj.block = reader.bytes()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<PutManyRequest>): Uint8Array => {
    return encodeMessage(obj, PutManyRequest.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): PutManyRequest => {
    return decodeMessage(buf, PutManyRequest.codec())
  }
}

export interface PutManyResponse {
  cid: Uint8Array
  block: Uint8Array
}

export namespace PutManyResponse {
  let _codec: Codec<PutManyResponse>

  export const codec = (): Codec<PutManyResponse> => {
    if (_codec == null) {
      _codec = message<PutManyResponse>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.cid != null && obj.cid.byteLength > 0)) {
          w.uint32(10)
          w.bytes(obj.cid)
        }

        if ((obj.block != null && obj.block.byteLength > 0)) {
          w.uint32(18)
          w.bytes(obj.block)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          cid: new Uint8Array(0),
          block: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.cid = reader.bytes()
              break
            case 2:
              obj.block = reader.bytes()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<PutManyResponse>): Uint8Array => {
    return encodeMessage(obj, PutManyResponse.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): PutManyResponse => {
    return decodeMessage(buf, PutManyResponse.codec())
  }
}

export interface GetAllOptions {}

export namespace GetAllOptions {
  let _codec: Codec<GetAllOptions>

  export const codec = (): Codec<GetAllOptions> => {
    if (_codec == null) {
      _codec = message<GetAllOptions>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {}

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<GetAllOptions>): Uint8Array => {
    return encodeMessage(obj, GetAllOptions.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): GetAllOptions => {
    return decodeMessage(buf, GetAllOptions.codec())
  }
}

export interface GetAllRequest {}

export namespace GetAllRequest {
  let _codec: Codec<GetAllRequest>

  export const codec = (): Codec<GetAllRequest> => {
    if (_codec == null) {
      _codec = message<GetAllRequest>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {}

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<GetAllRequest>): Uint8Array => {
    return encodeMessage(obj, GetAllRequest.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): GetAllRequest => {
    return decodeMessage(buf, GetAllRequest.codec())
  }
}

export interface GetAllResponse {
  cid: Uint8Array
  block: Uint8Array
}

export namespace GetAllResponse {
  let _codec: Codec<GetAllResponse>

  export const codec = (): Codec<GetAllResponse> => {
    if (_codec == null) {
      _codec = message<GetAllResponse>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.cid != null && obj.cid.byteLength > 0)) {
          w.uint32(10)
          w.bytes(obj.cid)
        }

        if ((obj.block != null && obj.block.byteLength > 0)) {
          w.uint32(18)
          w.bytes(obj.block)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          cid: new Uint8Array(0),
          block: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.cid = reader.bytes()
              break
            case 2:
              obj.block = reader.bytes()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<GetAllResponse>): Uint8Array => {
    return encodeMessage(obj, GetAllResponse.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): GetAllResponse => {
    return decodeMessage(buf, GetAllResponse.codec())
  }
}

export interface GetManyOptions {}

export namespace GetManyOptions {
  let _codec: Codec<GetManyOptions>

  export const codec = (): Codec<GetManyOptions> => {
    if (_codec == null) {
      _codec = message<GetManyOptions>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {}

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<GetManyOptions>): Uint8Array => {
    return encodeMessage(obj, GetManyOptions.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): GetManyOptions => {
    return decodeMessage(buf, GetManyOptions.codec())
  }
}

export interface GetManyRequest {
  cid: Uint8Array
}

export namespace GetManyRequest {
  let _codec: Codec<GetManyRequest>

  export const codec = (): Codec<GetManyRequest> => {
    if (_codec == null) {
      _codec = message<GetManyRequest>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.cid != null && obj.cid.byteLength > 0)) {
          w.uint32(10)
          w.bytes(obj.cid)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          cid: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.cid = reader.bytes()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<GetManyRequest>): Uint8Array => {
    return encodeMessage(obj, GetManyRequest.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): GetManyRequest => {
    return decodeMessage(buf, GetManyRequest.codec())
  }
}

export interface GetManyResponse {
  block: Uint8Array
}

export namespace GetManyResponse {
  let _codec: Codec<GetManyResponse>

  export const codec = (): Codec<GetManyResponse> => {
    if (_codec == null) {
      _codec = message<GetManyResponse>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.block != null && obj.block.byteLength > 0)) {
          w.uint32(10)
          w.bytes(obj.block)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          block: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.block = reader.bytes()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<GetManyResponse>): Uint8Array => {
    return encodeMessage(obj, GetManyResponse.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): GetManyResponse => {
    return decodeMessage(buf, GetManyResponse.codec())
  }
}

export interface DeleteManyOptions {}

export namespace DeleteManyOptions {
  let _codec: Codec<DeleteManyOptions>

  export const codec = (): Codec<DeleteManyOptions> => {
    if (_codec == null) {
      _codec = message<DeleteManyOptions>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {}

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<DeleteManyOptions>): Uint8Array => {
    return encodeMessage(obj, DeleteManyOptions.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): DeleteManyOptions => {
    return decodeMessage(buf, DeleteManyOptions.codec())
  }
}

export interface DeleteManyRequest {
  cid: Uint8Array
}

export namespace DeleteManyRequest {
  let _codec: Codec<DeleteManyRequest>

  export const codec = (): Codec<DeleteManyRequest> => {
    if (_codec == null) {
      _codec = message<DeleteManyRequest>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.cid != null && obj.cid.byteLength > 0)) {
          w.uint32(10)
          w.bytes(obj.cid)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          cid: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.cid = reader.bytes()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<DeleteManyRequest>): Uint8Array => {
    return encodeMessage(obj, DeleteManyRequest.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): DeleteManyRequest => {
    return decodeMessage(buf, DeleteManyRequest.codec())
  }
}

export interface DeleteManyResponse {
  cid: Uint8Array
}

export namespace DeleteManyResponse {
  let _codec: Codec<DeleteManyResponse>

  export const codec = (): Codec<DeleteManyResponse> => {
    if (_codec == null) {
      _codec = message<DeleteManyResponse>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.cid != null && obj.cid.byteLength > 0)) {
          w.uint32(10)
          w.bytes(obj.cid)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          cid: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.cid = reader.bytes()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }

        return obj
      })
    }

    return _codec
  }

  export const encode = (obj: Partial<DeleteManyResponse>): Uint8Array => {
    return encodeMessage(obj, DeleteManyResponse.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): DeleteManyResponse => {
    return decodeMessage(buf, DeleteManyResponse.codec())
  }
}
