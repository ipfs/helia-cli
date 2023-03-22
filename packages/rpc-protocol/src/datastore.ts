/* eslint-disable import/export */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { encodeMessage, decodeMessage, message, enumeration } from 'protons-runtime'
import type { Codec } from 'protons-runtime'
import type { Uint8ArrayList } from 'uint8arraylist'

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
  key: string
  value: Uint8Array
}

export namespace PutRequest {
  let _codec: Codec<PutRequest>

  export const codec = (): Codec<PutRequest> => {
    if (_codec == null) {
      _codec = message<PutRequest>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.key != null && obj.key !== '')) {
          w.uint32(10)
          w.string(obj.key)
        }

        if ((obj.value != null && obj.value.byteLength > 0)) {
          w.uint32(18)
          w.bytes(obj.value)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          key: '',
          value: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.key = reader.string()
              break
            case 2:
              obj.value = reader.bytes()
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
  key: string
}

export namespace GetRequest {
  let _codec: Codec<GetRequest>

  export const codec = (): Codec<GetRequest> => {
    if (_codec == null) {
      _codec = message<GetRequest>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.key != null && obj.key !== '')) {
          w.uint32(10)
          w.string(obj.key)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          key: ''
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.key = reader.string()
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

export enum GetResponseType {
  GET_PROGRESS = 'GET_PROGRESS',
  GET_RESULT = 'GET_RESULT'
}

enum __GetResponseTypeValues {
  GET_PROGRESS = 0,
  GET_RESULT = 1
}

export namespace GetResponseType {
  export const codec = (): Codec<GetResponseType> => {
    return enumeration<GetResponseType>(__GetResponseTypeValues)
  }
}
export interface GetResponse {
  type: GetResponseType
  value?: Uint8Array
  progressEventType?: string
  progressEventData?: Uint8Array
}

export namespace GetResponse {
  let _codec: Codec<GetResponse>

  export const codec = (): Codec<GetResponse> => {
    if (_codec == null) {
      _codec = message<GetResponse>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if (obj.type != null && __GetResponseTypeValues[obj.type] !== 0) {
          w.uint32(8)
          GetResponseType.codec().encode(obj.type, w)
        }

        if (obj.value != null) {
          w.uint32(18)
          w.bytes(obj.value)
        }

        if (obj.progressEventType != null) {
          w.uint32(26)
          w.string(obj.progressEventType)
        }

        if (obj.progressEventData != null) {
          w.uint32(34)
          w.bytes(obj.progressEventData)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          type: GetResponseType.GET_PROGRESS
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.type = GetResponseType.codec().decode(reader)
              break
            case 2:
              obj.value = reader.bytes()
              break
            case 3:
              obj.progressEventType = reader.string()
              break
            case 4:
              obj.progressEventData = reader.bytes()
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
  key: string
}

export namespace HasRequest {
  let _codec: Codec<HasRequest>

  export const codec = (): Codec<HasRequest> => {
    if (_codec == null) {
      _codec = message<HasRequest>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.key != null && obj.key !== '')) {
          w.uint32(10)
          w.string(obj.key)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          key: ''
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.key = reader.string()
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
  key: string
}

export namespace DeleteRequest {
  let _codec: Codec<DeleteRequest>

  export const codec = (): Codec<DeleteRequest> => {
    if (_codec == null) {
      _codec = message<DeleteRequest>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.key != null && obj.key !== '')) {
          w.uint32(10)
          w.string(obj.key)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          key: ''
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.key = reader.string()
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
  key: string
  value: Uint8Array
}

export namespace PutManyRequest {
  let _codec: Codec<PutManyRequest>

  export const codec = (): Codec<PutManyRequest> => {
    if (_codec == null) {
      _codec = message<PutManyRequest>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.key != null && obj.key !== '')) {
          w.uint32(10)
          w.string(obj.key)
        }

        if ((obj.value != null && obj.value.byteLength > 0)) {
          w.uint32(18)
          w.bytes(obj.value)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          key: '',
          value: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.key = reader.string()
              break
            case 2:
              obj.value = reader.bytes()
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
  key: string
  value: Uint8Array
}

export namespace PutManyResponse {
  let _codec: Codec<PutManyResponse>

  export const codec = (): Codec<PutManyResponse> => {
    if (_codec == null) {
      _codec = message<PutManyResponse>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.key != null && obj.key !== '')) {
          w.uint32(10)
          w.string(obj.key)
        }

        if ((obj.value != null && obj.value.byteLength > 0)) {
          w.uint32(18)
          w.bytes(obj.value)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          key: '',
          value: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.key = reader.string()
              break
            case 2:
              obj.value = reader.bytes()
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
  key: string
}

export namespace GetManyRequest {
  let _codec: Codec<GetManyRequest>

  export const codec = (): Codec<GetManyRequest> => {
    if (_codec == null) {
      _codec = message<GetManyRequest>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.key != null && obj.key !== '')) {
          w.uint32(10)
          w.string(obj.key)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          key: ''
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.key = reader.string()
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

export enum GetManyResponseType {
  GET_MANY_PROGRESS = 'GET_MANY_PROGRESS',
  GET_MANY_RESULT = 'GET_MANY_RESULT'
}

enum __GetManyResponseTypeValues {
  GET_MANY_PROGRESS = 0,
  GET_MANY_RESULT = 1
}

export namespace GetManyResponseType {
  export const codec = (): Codec<GetManyResponseType> => {
    return enumeration<GetManyResponseType>(__GetManyResponseTypeValues)
  }
}
export interface GetManyResponse {
  type: GetManyResponseType
  value?: Uint8Array
  progressEventType?: string
  progressEventData: Map<string, string>
}

export namespace GetManyResponse {
  export interface GetManyResponse$progressEventDataEntry {
    key: string
    value: string
  }

  export namespace GetManyResponse$progressEventDataEntry {
    let _codec: Codec<GetManyResponse$progressEventDataEntry>

    export const codec = (): Codec<GetManyResponse$progressEventDataEntry> => {
      if (_codec == null) {
        _codec = message<GetManyResponse$progressEventDataEntry>((obj, w, opts = {}) => {
          if (opts.lengthDelimited !== false) {
            w.fork()
          }

          if ((obj.key != null && obj.key !== '')) {
            w.uint32(10)
            w.string(obj.key)
          }

          if ((obj.value != null && obj.value !== '')) {
            w.uint32(18)
            w.string(obj.value)
          }

          if (opts.lengthDelimited !== false) {
            w.ldelim()
          }
        }, (reader, length) => {
          const obj: any = {
            key: '',
            value: ''
          }

          const end = length == null ? reader.len : reader.pos + length

          while (reader.pos < end) {
            const tag = reader.uint32()

            switch (tag >>> 3) {
              case 1:
                obj.key = reader.string()
                break
              case 2:
                obj.value = reader.string()
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

    export const encode = (obj: Partial<GetManyResponse$progressEventDataEntry>): Uint8Array => {
      return encodeMessage(obj, GetManyResponse$progressEventDataEntry.codec())
    }

    export const decode = (buf: Uint8Array | Uint8ArrayList): GetManyResponse$progressEventDataEntry => {
      return decodeMessage(buf, GetManyResponse$progressEventDataEntry.codec())
    }
  }

  let _codec: Codec<GetManyResponse>

  export const codec = (): Codec<GetManyResponse> => {
    if (_codec == null) {
      _codec = message<GetManyResponse>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if (obj.type != null && __GetManyResponseTypeValues[obj.type] !== 0) {
          w.uint32(8)
          GetManyResponseType.codec().encode(obj.type, w)
        }

        if (obj.value != null) {
          w.uint32(18)
          w.bytes(obj.value)
        }

        if (obj.progressEventType != null) {
          w.uint32(26)
          w.string(obj.progressEventType)
        }

        if (obj.progressEventData != null && obj.progressEventData.size !== 0) {
          for (const [key, value] of obj.progressEventData.entries()) {
            w.uint32(34)
            GetManyResponse.GetManyResponse$progressEventDataEntry.codec().encode({ key, value }, w)
          }
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          type: GetManyResponseType.GET_MANY_PROGRESS,
          progressEventData: new Map<string, string>()
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.type = GetManyResponseType.codec().decode(reader)
              break
            case 2:
              obj.value = reader.bytes()
              break
            case 3:
              obj.progressEventType = reader.string()
              break
            case 4: {
              const entry = GetManyResponse.GetManyResponse$progressEventDataEntry.codec().decode(reader, reader.uint32())
              obj.progressEventData.set(entry.key, entry.value)
              break
            }
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
  key: string
}

export namespace DeleteManyRequest {
  let _codec: Codec<DeleteManyRequest>

  export const codec = (): Codec<DeleteManyRequest> => {
    if (_codec == null) {
      _codec = message<DeleteManyRequest>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.key != null && obj.key !== '')) {
          w.uint32(10)
          w.string(obj.key)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          key: ''
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.key = reader.string()
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
  key: string
}

export namespace DeleteManyResponse {
  let _codec: Codec<DeleteManyResponse>

  export const codec = (): Codec<DeleteManyResponse> => {
    if (_codec == null) {
      _codec = message<DeleteManyResponse>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.key != null && obj.key !== '')) {
          w.uint32(10)
          w.string(obj.key)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          key: ''
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.key = reader.string()
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

export interface BatchOptions {}

export namespace BatchOptions {
  let _codec: Codec<BatchOptions>

  export const codec = (): Codec<BatchOptions> => {
    if (_codec == null) {
      _codec = message<BatchOptions>((obj, w, opts = {}) => {
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

  export const encode = (obj: Partial<BatchOptions>): Uint8Array => {
    return encodeMessage(obj, BatchOptions.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): BatchOptions => {
    return decodeMessage(buf, BatchOptions.codec())
  }
}

export enum BatchRequestType {
  BATCH_REQUEST_PUT = 'BATCH_REQUEST_PUT',
  BATCH_REQUEST_DELETE = 'BATCH_REQUEST_DELETE',
  BATCH_REQUEST_COMMIT = 'BATCH_REQUEST_COMMIT'
}

enum __BatchRequestTypeValues {
  BATCH_REQUEST_PUT = 0,
  BATCH_REQUEST_DELETE = 1,
  BATCH_REQUEST_COMMIT = 2
}

export namespace BatchRequestType {
  export const codec = (): Codec<BatchRequestType> => {
    return enumeration<BatchRequestType>(__BatchRequestTypeValues)
  }
}
export interface BatchRequest {
  type: BatchRequestType
  message: Uint8Array
}

export namespace BatchRequest {
  let _codec: Codec<BatchRequest>

  export const codec = (): Codec<BatchRequest> => {
    if (_codec == null) {
      _codec = message<BatchRequest>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if (obj.type != null && __BatchRequestTypeValues[obj.type] !== 0) {
          w.uint32(8)
          BatchRequestType.codec().encode(obj.type, w)
        }

        if ((obj.message != null && obj.message.byteLength > 0)) {
          w.uint32(18)
          w.bytes(obj.message)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          type: BatchRequestType.BATCH_REQUEST_PUT,
          message: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.type = BatchRequestType.codec().decode(reader)
              break
            case 2:
              obj.message = reader.bytes()
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

  export const encode = (obj: Partial<BatchRequest>): Uint8Array => {
    return encodeMessage(obj, BatchRequest.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): BatchRequest => {
    return decodeMessage(buf, BatchRequest.codec())
  }
}

export interface BatchRequestPut {
  key: string
  value: Uint8Array
}

export namespace BatchRequestPut {
  let _codec: Codec<BatchRequestPut>

  export const codec = (): Codec<BatchRequestPut> => {
    if (_codec == null) {
      _codec = message<BatchRequestPut>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.key != null && obj.key !== '')) {
          w.uint32(10)
          w.string(obj.key)
        }

        if ((obj.value != null && obj.value.byteLength > 0)) {
          w.uint32(18)
          w.bytes(obj.value)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          key: '',
          value: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.key = reader.string()
              break
            case 2:
              obj.value = reader.bytes()
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

  export const encode = (obj: Partial<BatchRequestPut>): Uint8Array => {
    return encodeMessage(obj, BatchRequestPut.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): BatchRequestPut => {
    return decodeMessage(buf, BatchRequestPut.codec())
  }
}

export interface BatchRequestDelete {
  key: string
}

export namespace BatchRequestDelete {
  let _codec: Codec<BatchRequestDelete>

  export const codec = (): Codec<BatchRequestDelete> => {
    if (_codec == null) {
      _codec = message<BatchRequestDelete>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.key != null && obj.key !== '')) {
          w.uint32(10)
          w.string(obj.key)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          key: ''
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.key = reader.string()
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

  export const encode = (obj: Partial<BatchRequestDelete>): Uint8Array => {
    return encodeMessage(obj, BatchRequestDelete.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): BatchRequestDelete => {
    return decodeMessage(buf, BatchRequestDelete.codec())
  }
}

export interface BatchResponse {}

export namespace BatchResponse {
  let _codec: Codec<BatchResponse>

  export const codec = (): Codec<BatchResponse> => {
    if (_codec == null) {
      _codec = message<BatchResponse>((obj, w, opts = {}) => {
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

  export const encode = (obj: Partial<BatchResponse>): Uint8Array => {
    return encodeMessage(obj, BatchResponse.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): BatchResponse => {
    return decodeMessage(buf, BatchResponse.codec())
  }
}

export interface QueryOptions {}

export namespace QueryOptions {
  let _codec: Codec<QueryOptions>

  export const codec = (): Codec<QueryOptions> => {
    if (_codec == null) {
      _codec = message<QueryOptions>((obj, w, opts = {}) => {
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

  export const encode = (obj: Partial<QueryOptions>): Uint8Array => {
    return encodeMessage(obj, QueryOptions.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): QueryOptions => {
    return decodeMessage(buf, QueryOptions.codec())
  }
}

export interface QueryRequest {}

export namespace QueryRequest {
  let _codec: Codec<QueryRequest>

  export const codec = (): Codec<QueryRequest> => {
    if (_codec == null) {
      _codec = message<QueryRequest>((obj, w, opts = {}) => {
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

  export const encode = (obj: Partial<QueryRequest>): Uint8Array => {
    return encodeMessage(obj, QueryRequest.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): QueryRequest => {
    return decodeMessage(buf, QueryRequest.codec())
  }
}

export interface QueryResponse {
  key: string
  value: Uint8Array
}

export namespace QueryResponse {
  let _codec: Codec<QueryResponse>

  export const codec = (): Codec<QueryResponse> => {
    if (_codec == null) {
      _codec = message<QueryResponse>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.key != null && obj.key !== '')) {
          w.uint32(10)
          w.string(obj.key)
        }

        if ((obj.value != null && obj.value.byteLength > 0)) {
          w.uint32(18)
          w.bytes(obj.value)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          key: '',
          value: new Uint8Array(0)
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.key = reader.string()
              break
            case 2:
              obj.value = reader.bytes()
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

  export const encode = (obj: Partial<QueryResponse>): Uint8Array => {
    return encodeMessage(obj, QueryResponse.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): QueryResponse => {
    return decodeMessage(buf, QueryResponse.codec())
  }
}

export interface QueryKeysOptions {}

export namespace QueryKeysOptions {
  let _codec: Codec<QueryKeysOptions>

  export const codec = (): Codec<QueryKeysOptions> => {
    if (_codec == null) {
      _codec = message<QueryKeysOptions>((obj, w, opts = {}) => {
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

  export const encode = (obj: Partial<QueryKeysOptions>): Uint8Array => {
    return encodeMessage(obj, QueryKeysOptions.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): QueryKeysOptions => {
    return decodeMessage(buf, QueryKeysOptions.codec())
  }
}

export interface QueryKeysRequest {}

export namespace QueryKeysRequest {
  let _codec: Codec<QueryKeysRequest>

  export const codec = (): Codec<QueryKeysRequest> => {
    if (_codec == null) {
      _codec = message<QueryKeysRequest>((obj, w, opts = {}) => {
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

  export const encode = (obj: Partial<QueryKeysRequest>): Uint8Array => {
    return encodeMessage(obj, QueryKeysRequest.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): QueryKeysRequest => {
    return decodeMessage(buf, QueryKeysRequest.codec())
  }
}

export interface QueryKeysResponse {
  key: string
}

export namespace QueryKeysResponse {
  let _codec: Codec<QueryKeysResponse>

  export const codec = (): Codec<QueryKeysResponse> => {
    if (_codec == null) {
      _codec = message<QueryKeysResponse>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.key != null && obj.key !== '')) {
          w.uint32(10)
          w.string(obj.key)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          key: ''
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.key = reader.string()
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

  export const encode = (obj: Partial<QueryKeysResponse>): Uint8Array => {
    return encodeMessage(obj, QueryKeysResponse.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): QueryKeysResponse => {
    return decodeMessage(buf, QueryKeysResponse.codec())
  }
}
