export const addSlashParams = (
  api: string,
  queryData: Record<string, unknown>
) => {
  const notEmptyDataList = Object.values(queryData).filter((value) => !!value)

  return notEmptyDataList.reduce<string>((pre, cur) => {
    return pre + `/${cur}`
  }, api)
}
