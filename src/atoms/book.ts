import { atom } from 'recoil'

export const keywordsState = atom<string[]>({
  key: 'keywordState',
  default: []
})
