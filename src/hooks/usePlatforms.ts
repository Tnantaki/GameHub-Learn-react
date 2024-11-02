import platforms from "../data/platforms"
import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"

export interface Platform {
  id: number
  name: string
  slug: string
}

const platformService = new APIClient<Platform>("/platforms/lists/parents")

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platform"],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: {count: platforms.length, results: platforms}
  });
}

// for update platforms by loading from API
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents")

export default usePlatforms