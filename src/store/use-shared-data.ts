import useSWR from 'swr'

export const useSharedData = (url) => {
  const { data, error, isLoading, mutate } = useSWR(url)

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
