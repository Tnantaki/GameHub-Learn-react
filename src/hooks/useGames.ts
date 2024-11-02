import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { ResponseData } from "./useData";
import apiClient from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: {platform: Platform}[]
  metacritic: number
  rating_top: number
}

const useGames = (gameQuery: GameQuery) => {
  return useQuery({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient.get<ResponseData<Game>>('/games', {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      }
    }).then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  })
}
// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText,
//       },
//     },
//     [gameQuery]
//   );

export default useGames