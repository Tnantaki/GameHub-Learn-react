import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import APIClient from "../services/api-client";

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: {platform: Platform}[]
  metacritic: number
  rating_top: number
}

const gamesService = new APIClient<Game>('/games')

const useGames = (gameQuery: GameQuery) => {
  return useQuery({
    queryKey: ['games', gameQuery],
    queryFn: () => gamesService.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      }
    }),
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