# book search

## Introduction

[itbook.store](https://api.itbook.store/) API를 활용한 간단한 도서 검색 사이트입니다.


## Used Library
### Core
* Typescript
* Next.js
* react-query
* recoil
* styled-components

### Util
* axios
* dayjs

### Config
* husky
  * lint-staged
* storybook


## Getting Started

```bash
# yarn 기반 레포지토리
yarn

# 개발 서버 시작
yarn dev

# Storybook 서버 시작
yarn sb
```


## Page Directory

```
📦 pages
┣  book
┃   ┗ [bookId]
┃       ┣  src
┃       ┗  index.pages.tsx <-- Detail
┣  src
┃   ┣ domain --- index 페이지에 사용되는 source 
┃   ┗ root --- header,footer와 같은 레이아웃에 사용되는 컴포넌트
┗  index.pages.tsx <-- Home
```

[디렉토리 기본 구조](https://cherro.notion.site/React-0b32725d223f45ca9bc88167fdb22e90?pvs=4)는 다음과 같은 기준으로 작업 진행했습니다.
