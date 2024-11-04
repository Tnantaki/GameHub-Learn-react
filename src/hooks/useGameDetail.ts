import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import { Game } from "../entities/Game";

const gamesService = new APIClient<Game>("/games");

const useGameDetail = (slug: string) => {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => gamesService.get(slug),
    staleTime: ms("1d"), // 1 day
  });
};

export default useGameDetail;
