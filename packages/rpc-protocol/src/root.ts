/* eslint-disable import/export */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { encodeMessage, decodeMessage, message } from 'protons-runtime'
import type { Codec } from 'protons-runtime'
import type { Uint8ArrayList } from 'uint8arraylist'

export interface GcOptions {}

export namespace GcOptions {
  let _codec: Codec<GcOptions>

  export const codec = (): Codec<GcOptions> => {
    if (_codec == null) {
      _codec = message<GcOptions>((obj, w, opts = {}) => {
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

  export const encode = (obj: Partial<GcOptions>): Uint8Array => {
    return encodeMessage(obj, GcOptions.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): GcOptions => {
    return decodeMessage(buf, GcOptions.codec())
  }
}

export interface GcRequest {}

export namespace GcRequest {
  let _codec: Codec<GcRequest>

  export const codec = (): Codec<GcRequest> => {
    if (_codec == null) {
      _codec = message<GcRequest>((obj, w, opts = {}) => {
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

  export const encode = (obj: Partial<GcRequest>): Uint8Array => {
    return encodeMessage(obj, GcRequest.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): GcRequest => {
    return decodeMessage(buf, GcRequest.codec())
  }
}

export interface GcResponse {}

export namespace GcResponse {
  let _codec: Codec<GcResponse>

  export const codec = (): Codec<GcResponse> => {
    if (_codec == null) {
      _codec = message<GcResponse>((obj, w, opts = {}) => {
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

  export const encode = (obj: Partial<GcResponse>): Uint8Array => {
    return encodeMessage(obj, GcResponse.codec())
  }

  export const decode = (buf: Uint8Array | Uint8ArrayList): GcResponse => {
    return decodeMessage(buf, GcResponse.codec())
  }
}
