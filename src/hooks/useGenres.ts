import useData from "./useData"
import genres from "../data/genres"

export interface Genre {
  id: number
  name: string
  image_background: string
}

const useGenres = () => ({data: genres, isLoading: false, error: null})

// for update platforms by loading from API
// const useGenres = () => useData<Genre>("/genres")

export default useGenres