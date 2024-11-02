import { ResponseData } from "./useData"
import platforms from "../data/platforms"
import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client"

export interface Platform {
  id: number
  name: string
  slug: string
}

// const usePlatforms = () => ({data: platforms, isLoading: false, error: null})
const usePlatforms = () => {
  return useQuery({
    queryKey: ["platform"],
    queryFn: () =>
      apiClient.get<ResponseData<Platform>>("/platforms/lists/parents").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: {count: platforms.length, results: platforms}
  });
}

// for update platforms by loading from API
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents")

export default usePlatforms