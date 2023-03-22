/* eslint-disable import/export */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { encodeMessage, decodeMessage, message } from 'protons-runtime'
import type { Codec } from 'protons-runtime'
import type { Uint8ArrayList } from 'uint8arraylist'

export interface PinAddOptions {
  depth?: number
  metadata: Map<string, string>
}

export namespace PinAddOptions {
  export interface PinAddOptions$metadataEntry {
    key: string
    value: string
  }

  export namespace PinAddOptions$metadataEntry {
    let _codec: Codec<PinAddOptions$metadataEntry>

    export const codec = (): Codec<PinAddOptions$metadataEntry> => {
      if (_codec == null) {
        _codec = message<PinAddOptions$metadataEntry>((obj, w, opts = {}) => {
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

    export const encode = (obj: Partial<PinAddOptions$metadataEntry>): Uint8Array => {
      return encodeMessage(obj, PinAddOptions$metadataEntry.codec())
    }

    export const decode = (buf: Uint8Array | Uint8ArrayList): PinAddOptions$metadataEntry => {
      return decodeMessage(buf, PinAddOptions$metadataEntry.codec())
    }
  }

  let _codec: Codec<PinAddOptions>

  export const codec = (): Codec<PinAddOptions> => {
    if (_codec == null) {
      _codec = message<PinAddOptions>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if (obj.depth != null) {
          w.uint32(8)
          w.uint32(obj.depth)
        }

        if (obj.metadata != null && obj.metadata.size !== 0) {
          for (const [key, value] of obj.metadata.entries()) {
            w.uint32(18)
            PinAddOptions.PinAddOptions$metadataEntry.codec().encode({ key, value }, w)
          }
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          metadata: new Map<string, string>()
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.depth = reader.uint32()
              break
            case 2: {
              const entry = PinAddOptions.PinAddOptions$metadataEntry.codec().decode(reader, reader.uint32())
              obj.metadata.set(entry.key, entry.value)
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

  export const encode = (obj: Partial<PinAddOptions>): Uint8Array => {
    return encodeMessage(obj, PinAddOptions.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): PinAddOptions => {
    return decodeMessage(buf, PinAddOptions.codec())
  }
}

export interface PinAddRequest {}

export namespace PinAddRequest {
  let _codec: Codec<PinAddRequest>

  export const codec = (): Codec<PinAddRequest> => {
    if (_codec == null) {
      _codec = message<PinAddRequest>((obj, w, opts = {}) => {
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

  export const encode = (obj: Partial<PinAddRequest>): Uint8Array => {
    return encodeMessage(obj, PinAddRequest.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): PinAddRequest => {
    return decodeMessage(buf, PinAddRequest.codec())
  }
}

export interface PinAddResponse {
  cid: Uint8Array
  depth: number
  metadata: Map<string, string>
}

export namespace PinAddResponse {
  export interface PinAddResponse$metadataEntry {
    key: string
    value: string
  }

  export namespace PinAddResponse$metadataEntry {
    let _codec: Codec<PinAddResponse$metadataEntry>

    export const codec = (): Codec<PinAddResponse$metadataEntry> => {
      if (_codec == null) {
        _codec = message<PinAddResponse$metadataEntry>((obj, w, opts = {}) => {
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

    export const encode = (obj: Partial<PinAddResponse$metadataEntry>): Uint8Array => {
      return encodeMessage(obj, PinAddResponse$metadataEntry.codec())
    }

    export const decode = (buf: Uint8Array | Uint8ArrayList): PinAddResponse$metadataEntry => {
      return decodeMessage(buf, PinAddResponse$metadataEntry.codec())
    }
  }

  let _codec: Codec<PinAddResponse>

  export const codec = (): Codec<PinAddResponse> => {
    if (_codec == null) {
      _codec = message<PinAddResponse>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.cid != null && obj.cid.byteLength > 0)) {
          w.uint32(10)
          w.bytes(obj.cid)
        }

        if ((obj.depth != null && obj.depth !== 0)) {
          w.uint32(16)
          w.uint32(obj.depth)
        }

        if (obj.metadata != null && obj.metadata.size !== 0) {
          for (const [key, value] of obj.metadata.entries()) {
            w.uint32(26)
            PinAddResponse.PinAddResponse$metadataEntry.codec().encode({ key, value }, w)
          }
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          cid: new Uint8Array(0),
          depth: 0,
          metadata: new Map<string, string>()
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.cid = reader.bytes()
              break
            case 2:
              obj.depth = reader.uint32()
              break
            case 3: {
              const entry = PinAddResponse.PinAddResponse$metadataEntry.codec().decode(reader, reader.uint32())
              obj.metadata.set(entry.key, entry.value)
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

  export const encode = (obj: Partial<PinAddResponse>): Uint8Array => {
    return encodeMessage(obj, PinAddResponse.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): PinAddResponse => {
    return decodeMessage(buf, PinAddResponse.codec())
  }
}

export interface PinRmOptions {}

export namespace PinRmOptions {
  let _codec: Codec<PinRmOptions>

  export const codec = (): Codec<PinRmOptions> => {
    if (_codec == null) {
      _codec = message<PinRmOptions>((obj, w, opts = {}) => {
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

  export const encode = (obj: Partial<PinRmOptions>): Uint8Array => {
    return encodeMessage(obj, PinRmOptions.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): PinRmOptions => {
    return decodeMessage(buf, PinRmOptions.codec())
  }
}

export interface PinRmRequest {}

export namespace PinRmRequest {
  let _codec: Codec<PinRmRequest>

  export const codec = (): Codec<PinRmRequest> => {
    if (_codec == null) {
      _codec = message<PinRmRequest>((obj, w, opts = {}) => {
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

  export const encode = (obj: Partial<PinRmRequest>): Uint8Array => {
    return encodeMessage(obj, PinRmRequest.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): PinRmRequest => {
    return decodeMessage(buf, PinRmRequest.codec())
  }
}

export interface PinRmResponse {}

export namespace PinRmResponse {
  let _codec: Codec<PinRmResponse>

  export const codec = (): Codec<PinRmResponse> => {
    if (_codec == null) {
      _codec = message<PinRmResponse>((obj, w, opts = {}) => {
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

  export const encode = (obj: Partial<PinRmResponse>): Uint8Array => {
    return encodeMessage(obj, PinRmResponse.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): PinRmResponse => {
    return decodeMessage(buf, PinRmResponse.codec())
  }
}

export interface PinLsOptions {
  cid?: Uint8Array
}

export namespace PinLsOptions {
  let _codec: Codec<PinLsOptions>

  export const codec = (): Codec<PinLsOptions> => {
    if (_codec == null) {
      _codec = message<PinLsOptions>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if (obj.cid != null) {
          w.uint32(10)
          w.bytes(obj.cid)
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

  export const encode = (obj: Partial<PinLsOptions>): Uint8Array => {
    return encodeMessage(obj, PinLsOptions.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): PinLsOptions => {
    return decodeMessage(buf, PinLsOptions.codec())
  }
}

export interface PinLsRequest {}

export namespace PinLsRequest {
  let _codec: Codec<PinLsRequest>

  export const codec = (): Codec<PinLsRequest> => {
    if (_codec == null) {
      _codec = message<PinLsRequest>((obj, w, opts = {}) => {
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

  export const encode = (obj: Partial<PinLsRequest>): Uint8Array => {
    return encodeMessage(obj, PinLsRequest.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): PinLsRequest => {
    return decodeMessage(buf, PinLsRequest.codec())
  }
}

export interface PinLsResponse {
  cid: Uint8Array
  depth: number
  metadata: Map<string, string>
}

export namespace PinLsResponse {
  export interface PinLsResponse$metadataEntry {
    key: string
    value: string
  }

  export namespace PinLsResponse$metadataEntry {
    let _codec: Codec<PinLsResponse$metadataEntry>

    export const codec = (): Codec<PinLsResponse$metadataEntry> => {
      if (_codec == null) {
        _codec = message<PinLsResponse$metadataEntry>((obj, w, opts = {}) => {
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

    export const encode = (obj: Partial<PinLsResponse$metadataEntry>): Uint8Array => {
      return encodeMessage(obj, PinLsResponse$metadataEntry.codec())
    }

    export const decode = (buf: Uint8Array | Uint8ArrayList): PinLsResponse$metadataEntry => {
      return decodeMessage(buf, PinLsResponse$metadataEntry.codec())
    }
  }

  let _codec: Codec<PinLsResponse>

  export const codec = (): Codec<PinLsResponse> => {
    if (_codec == null) {
      _codec = message<PinLsResponse>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.cid != null && obj.cid.byteLength > 0)) {
          w.uint32(10)
          w.bytes(obj.cid)
        }

        if ((obj.depth != null && obj.depth !== 0)) {
          w.uint32(16)
          w.uint32(obj.depth)
        }

        if (obj.metadata != null && obj.metadata.size !== 0) {
          for (const [key, value] of obj.metadata.entries()) {
            w.uint32(26)
            PinLsResponse.PinLsResponse$metadataEntry.codec().encode({ key, value }, w)
          }
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          cid: new Uint8Array(0),
          depth: 0,
          metadata: new Map<string, string>()
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.cid = reader.bytes()
              break
            case 2:
              obj.depth = reader.uint32()
              break
            case 3: {
              const entry = PinLsResponse.PinLsResponse$metadataEntry.codec().decode(reader, reader.uint32())
              obj.metadata.set(entry.key, entry.value)
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

  export const encode = (obj: Partial<PinLsResponse>): Uint8Array => {
    return encodeMessage(obj, PinLsResponse.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): PinLsResponse => {
    return decodeMessage(buf, PinLsResponse.codec())
  }
}

export interface IsPinnedOptions {}

export namespace IsPinnedOptions {
  let _codec: Codec<IsPinnedOptions>

  export const codec = (): Codec<IsPinnedOptions> => {
    if (_codec == null) {
      _codec = message<IsPinnedOptions>((obj, w, opts = {}) => {
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

  export const encode = (obj: Partial<IsPinnedOptions>): Uint8Array => {
    return encodeMessage(obj, IsPinnedOptions.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): IsPinnedOptions => {
    return decodeMessage(buf, IsPinnedOptions.codec())
  }
}

export interface IsPinnedRequest {
  cid: Uint8Array
}

export namespace IsPinnedRequest {
  let _codec: Codec<IsPinnedRequest>

  export const codec = (): Codec<IsPinnedRequest> => {
    if (_codec == null) {
      _codec = message<IsPinnedRequest>((obj, w, opts = {}) => {
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

  export const encode = (obj: Partial<IsPinnedRequest>): Uint8Array => {
    return encodeMessage(obj, IsPinnedRequest.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): IsPinnedRequest => {
    return decodeMessage(buf, IsPinnedRequest.codec())
  }
}

export interface IsPinnedResponse {
  pinned: boolean
}

export namespace IsPinnedResponse {
  let _codec: Codec<IsPinnedResponse>

  export const codec = (): Codec<IsPinnedResponse> => {
    if (_codec == null) {
      _codec = message<IsPinnedResponse>((obj, w, opts = {}) => {
        if (opts.lengthDelimited !== false) {
          w.fork()
        }

        if ((obj.pinned != null && obj.pinned !== false)) {
          w.uint32(8)
          w.bool(obj.pinned)
        }

        if (opts.lengthDelimited !== false) {
          w.ldelim()
        }
      }, (reader, length) => {
        const obj: any = {
          pinned: false
        }

        const end = length == null ? reader.len : reader.pos + length

        while (reader.pos < end) {
          const tag = reader.uint32()

          switch (tag >>> 3) {
            case 1:
              obj.pinned = reader.bool()
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

  export const encode = (obj: Partial<IsPinnedResponse>): Uint8Array => {
    return encodeMessage(obj, IsPinnedResponse.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): IsPinnedResponse => {
    return decodeMessage(buf, IsPinnedResponse.codec())
  }
}
