export const formatDate = (isoString: string): string => {
  const date = new Date(isoString)

  const year = date.getFullYear()
  const month = ('0' + (date.getMonth() + 1)).slice(-2) // 月は0から始まるので1を足す
  const day = ('0' + date.getDate()).slice(-2)
  const hours = ('0' + date.getHours()).slice(-2)
  const minutes = ('0' + date.getMinutes()).slice(-2)
  const seconds = ('0' + date.getSeconds()).slice(-2)

  return `${year}/${month}/${day} ${hours}:${minutes}`
}

export const isEmptyObject = (obj: object): boolean =>
  Object.keys(obj).length === 0

export const poster = (url, { arg }) =>
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  }).then((res) => res.json())

export const convertFilterDate = (string) =>
  string === 'YYYY/MM/DD' ? '' : string
export const convertKeywords = (array) => (array === '' ? [] : array.split(','))
