import React, { KeyboardEvent, useRef } from 'react'

import { SearchHeaderWrapper } from './style'
import useKeywordStore from '../../hooks/useKeywordStore'

import { Button } from '~/common/button'
import Input from '~/common/input'
import { KeyEvent } from '~/constants/event'

const SearchHeader = () => {
  const inputRef = useRef(null)
  const { changeKeyword } = useKeywordStore()

  const keyDownHandler = ({ code }: KeyboardEvent<HTMLInputElement>) => {
    switch (code) {
      case KeyEvent.ENTER:
        changeKeyword(inputRef.current.value)
        return
    }
  }

  const handleButtonClick = () => {
    changeKeyword(inputRef.current.value)
  }

  return (
    <SearchHeaderWrapper>
      <Input ref={inputRef} width='fill' onKeyDown={keyDownHandler} />
      <Button onClick={handleButtonClick}>검색</Button>
    </SearchHeaderWrapper>
  )
}

export default SearchHeader
