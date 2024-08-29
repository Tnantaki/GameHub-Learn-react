import useData from "./useData"
import platforms from "../data/platforms"

interface Platform {
  id: number
  name: string
  slug: string
}

const usePlatforms = () => ({data: platforms, isLoading: false, error: null})

// for update platforms by loading from API
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents")

export default usePlatforms