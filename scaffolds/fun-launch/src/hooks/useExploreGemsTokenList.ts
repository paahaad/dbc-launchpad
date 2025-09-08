import { ApeQueries, QueryData } from '@/components/Explore/queries';
import { useExplore } from '@/contexts/ExploreProvider';
import { useQuery } from '@tanstack/react-query';

export function useExploreGemsTokenList<T = QueryData<typeof ApeQueries.gemsTokenList>>(
  select?: (data: QueryData<typeof ApeQueries.gemsTokenList>) => T
) {
  const { request } = useExplore();

  return useQuery({
    ...ApeQueries.gemsTokenList(request),
    select,
    refetchInterval: 5000, // Changed to 5 seconds
    // TODO: set time, we dont want to keep inactive tabs in cache at all
  });
}
