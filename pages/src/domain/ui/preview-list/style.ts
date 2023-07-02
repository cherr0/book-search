import styled from 'styled-components'

export const PreviewListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`

export const ContentField = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
  padding: 16px;
  width: 100%;
  height: fit-content;
`
