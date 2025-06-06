import { useQuery } from "@tanstack/react-query"
import { getProperties } from "../services/api/modules/properties"

export function useGetProperties() {
  const query = useQuery({
    queryKey: ['ALL_PROPERTIES'],
    queryFn: getProperties,
  })

  return query
}