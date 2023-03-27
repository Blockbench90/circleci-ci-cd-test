import { useQuery } from 'react-query'

export const useFetchCurrentUser = (userId) => {
  return useQuery(
    [userId],
    ({ queryKey }) => {
      const [userId] = queryKey
      return fetch(`https://swapi.dev/api/people/${userId}`).then((res) => res.json())
    },
    {
      keepPreviousData: true,
      staleTime: 5000,
      cacheTime: 60000,
      onSuccess: () => console.log('Data fetched successfully'),
    },
  )
}
