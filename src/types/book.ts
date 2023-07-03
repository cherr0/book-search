import { DefaultPageResponse, DefaultResponse } from '~/types/api'

export interface Book {
  title: string
  subtitle: string
  isbn13: string
  price: string
  image: string
  url: string
}

export interface BookDetail extends Book {
  authors: string
  publisher: string
  isbn10: string
  pages: string
  year: string
  rating: string
  desc: string
  pdf: string
}

export interface NewBookResponse extends DefaultResponse {
  books: Book[]
  total: number
}

export interface SearchBookResponse extends DefaultPageResponse {
  books: Book[]
  total: number
}

export interface BookDetailResponse extends DefaultResponse, BookDetail {}
