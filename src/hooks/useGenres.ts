import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import Genre from "../entities/Genre";
import APIClient from "../services/api-client";

const genreService = new APIClient<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: ms("1d"), // 1 day
    initialData: genres,
  });
};

// const useGenres = () => ({data: genres, isLoading: false, error: null})

// for update platforms by loading from API
// const useGenres = () => useData<Genre>("/genres")

export default useGenres;
