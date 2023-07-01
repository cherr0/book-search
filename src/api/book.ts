import axios, { AxiosResponse } from 'axios'
import { max } from 'lodash-es'

import { QueryKey } from '~/constants/query'
import api from '~/lib/api'
import { NewBookResponse, SearchBookResponse } from '~/types/book'
import { addSlashParams } from '~/utils/formatString'

export const getBookSearchList = async (queries: string[], page: number) => {
  const requests = queries.map((query) =>
    api.get<SearchBookResponse>(
      addSlashParams(QueryKey.GET_BOOK_SEARCH, { query, page })
    )
  )

  const response: SearchBookResponse = await axios
    .all<AxiosResponse<SearchBookResponse>>(requests)
    .then((responses) => {
      return responses.reduce(
        (acc, { data }) => {
          return {
            page,
            total: max([acc.total, data.total]),
            books: [...acc.books, ...data.books],
            error: data.error
          }
        },
        {
          error: '',
          page: 1,
          total: 0,
          books: []
        } as SearchBookResponse
      )
    })

  return response
}

export const getNewBookList = async () => {
  const { data } = await api.get<NewBookResponse>(QueryKey.GET_NEW_RELEASE)

  return data
}
