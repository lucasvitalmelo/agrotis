import { useQuery } from "@tanstack/react-query"
import { getLabs } from "../services/api/modules/labs"

export function useGetLabs() {
  const query = useQuery({
    queryKey: ['ALL_LABS'],
    queryFn: getLabs,
  })

  return query
}