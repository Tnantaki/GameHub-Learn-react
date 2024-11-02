import genres from "../data/genres"
import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"

export interface Genre {
  id: number
  name: string
  image_background: string
}

const genreService = new APIClient<Genre>('/genres')

const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: {count: genres.length, next: null, results: genres}
  })
}

// const useGenres = () => ({data: genres, isLoading: false, error: null})

// for update platforms by loading from API
// const useGenres = () => useData<Genre>("/genres")

export default useGenres