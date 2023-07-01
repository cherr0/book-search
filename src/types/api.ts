export interface ErrorResponse {
  error: string
  message: string[]
  statusCode: number
}
export interface DefaultResponse {
  error: string
  total: number
}

export interface DefaultPageResponse extends DefaultResponse {
  page: number
}
