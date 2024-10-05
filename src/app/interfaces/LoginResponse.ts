export interface LoginResponse {
    message: string
    errorBean: any
    payload: Payload
  }

  export interface Payload {
    role: string[]
    token: string
  }
