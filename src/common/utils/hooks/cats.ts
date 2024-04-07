import { useQuery } from '@tanstack/react-query';
import { getCats } from './api/cats';

export const useCats = () => {
  const { isLoading, error, data, refetch, isRefetching } = useQuery({
    queryKey: ['/cats/'],
    queryFn: () => getCats(),
    refetchOnWindowFocus: false,
    // onError is not a valid option for useQuery in @tanstack/react-query
  });

  return { isLoading, error, data: data, refetch, isRefetching };
};
