import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

interface GameDetail {
  name: string
  slug: string
  description_raw: string
}

const gamesService = new APIClient<GameDetail>("/games");

const useGameDetail = (slug: string) => {
  return useQuery({
    queryKey: ['games', slug],
    queryFn: () => gamesService.get(slug),
    staleTime: ms('1d'), // 1 day
  })
}

export default useGameDetail