import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Game from "../entities/Game";
import APIClient from "../services/api-client";

const gamesService = new APIClient<Game>("/games");

const useGameDetail = (slug: string) => {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => gamesService.get(slug),
    staleTime: ms("1d"), // 1 day
  });
};

export default useGameDetail;
