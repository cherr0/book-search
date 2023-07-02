import { useRecoilState, useResetRecoilState } from 'recoil'

import { keywordsState } from '~/atoms/book'

const useKeywordStore = () => {
  const [keywords, setKeywords] = useRecoilState(keywordsState)
  const resetKeyword = useResetRecoilState(keywordsState)

  const hasKeyword = keywords.length !== 0

  const ignoreKeywords = keywords
    .filter((keyword) => keyword.includes('-'))
    .reduce<string[]>((acc, keyword) => {
      const ignoreWords = keyword.split('-')
      ignoreWords.shift()

      return [...acc, ...ignoreWords]
    }, [])

  const searchKeywords = keywords.map((word) => {
    if (word.includes('-')) {
      return word.substring(0, word.indexOf('-'))
    }

    return word
  })

  const changeKeyword = (text: string) => {
    setKeywords(text.split('|'))
  }

  const isAvailableBook = (title: string) =>
    ignoreKeywords.every((word) => {
      const checkWord = word.toLowerCase()
      const titleWord = title.toLowerCase()

      return !titleWord.includes(checkWord)
    })

  return {
    keywords,
    hasKeyword,
    searchKeywords,
    ignoreKeywords,
    isAvailableBook,
    changeKeyword,
    resetKeyword
  }
}

export default useKeywordStore
