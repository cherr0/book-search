import React from 'react'

import useBookDetailQuery from '../../hooks/useBookDetailQuery'

const BookDetailInfo = () => {
  const { bookInfo } = useBookDetailQuery()

  return (
    <div>
      {Object.values(bookInfo)
        .filter((v) => typeof v === 'string')
        .map((info, key) => (
          <div key={key}>{info}</div>
        ))}
    </div>
  )
}

export default BookDetailInfo
