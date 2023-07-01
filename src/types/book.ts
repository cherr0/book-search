import { DefaultPageResponse, DefaultResponse } from '~/types/api'

export interface Book {
  title: string
  subtitle: string
  isbn13: string
  price: string
  img: string
  url: string
}

export interface NewBookResponse extends DefaultResponse {
  books: Book[]
}

export interface SearchBookResponse extends DefaultPageResponse {
  books: Book[]
}
