declare module 'urllib' {

    import * as net from 'net'
    import * as http from 'http'
    import * as stream from 'stream'
    import * as events from 'events'

    type HttpMethod = "GET" | "POST" | "DELETE" | "PUT"

    export interface RequestOptions {
      method: HttpMethod,
      data?: Object,
      content?: string|Buffer,
      stream?: stream.Readable,
      writeStream?: stream.Writable,
      contentType?: string,
      dataType?: string,
      fixJSONCtlChars?: boolean,
      headers?: Object,
      timeout?: number,
      auth?: string,
      digestAuth?: string,
      agent?: http.Agent | boolean,
      ca?: string|Buffer|Array<string>,
      rejectUnauthorized?: boolean,
      pfx?: string | Buffer,
      key?: string | Buffer,
      cert?: string | Buffer,
      passphrase?: string,
      ciphers?: string,
      secureProtocol?: string,
      followRedirect?: boolean,
      maxRedirects?: number,
      beforeRequest?: Function,
      streaming?: boolean,
      gzip?: boolean
    }

    export interface Response{
      data: Object,
      status: number,
      headers: Object,
      res: http.IncomingMessage
    }

    export class HttpClient extends events.EventEmitter {
      request (url:string, options: RequestOptions, callback: (err: Error, data: Buffer | any, res: http.IncomingMessage)=>void): http.ClientRequest
      request (url:string, callback: (err: Error, data: Buffer | any, res: http.IncomingMessage)=>void): http.ClientRequest
      curl (url:string, options: RequestOptions, callback: (err: Error, data: Buffer | any, res: http.IncomingMessage)=>void): http.ClientRequest
      curl (url:string, callback: (err: Error, data: Buffer | any, res: http.IncomingMessage)=>void): http.ClientRequest
      requestThunk(url: string, args: RequestOptions): (error: Error, res: Response)=>void
    }

    export function request(url: string, callback: (err: Error, data: Buffer | any, res: http.IncomingMessage)=>void ): http.ClientRequest
    export function request(url: string, options: RequestOptions, callback: (err: Error, data: Buffer|any, res: http.IncomingMessage)=>void ): http.ClientRequest
    export function create()
    export function requestThunk(url: string, args: RequestOptions): (error: Error, res: Response)=>void

}

