import { useRecoilState } from 'recoil'

import { keywordsState } from '~/atoms/book'

const useKeywordStore = () => {
  const [keywords, setKeywords] = useRecoilState(keywordsState)

  const ignoreKeywords = keywords
    .filter((keyword) => keyword.includes('-'))
    .reduce<string[]>((acc, keyword) => {
      const ignoreWords = keyword.split('-')
      ignoreWords.shift()

      return [...acc, ...ignoreWords]
    }, [])

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
    ignoreKeywords,
    isAvailableBook,
    changeKeyword
  }
}

export default useKeywordStore
