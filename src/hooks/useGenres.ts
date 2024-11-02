import { ResponseData } from "./useData"
import genres from "../data/genres"
import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client"

export interface Genre {
  id: number
  name: string
  image_background: string
}

const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient.get<ResponseData<Genre>>('/genres').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: {count: genres.length, results: genres}
  })
}

// const useGenres = () => ({data: genres, isLoading: false, error: null})

// for update platforms by loading from API
// const useGenres = () => useData<Genre>("/genres")

export default useGenres