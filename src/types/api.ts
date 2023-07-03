export interface ErrorResponse {
  error: string
  message: string[]
  statusCode: number
}
export interface DefaultResponse {
  error: string
}

export interface DefaultPageResponse extends DefaultResponse {
  page: number
}
