import { useQuery } from 'react-query'

export const usePagination = (page) => {
  return useQuery(
    [page],
    ({ queryKey }) => {
      const [page] = queryKey
      return fetch(`https://swapi.dev/api/people/?page=${page}`).then((res) => res.json())
    },

    {
      keepPreviousData: true,
      staleTime: 5000,
      cacheTime: 60000,
      onSuccess: () => console.log('Data fetched successfully'),
    },
  )
}
