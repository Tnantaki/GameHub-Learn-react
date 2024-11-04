import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import { GameTrailer } from "../entities/GameTrailer";

const useGameTrailer = (id: number) => {
  const trailerService = new APIClient<GameTrailer>(`/games/${id}/movies`);

  return useQuery({
    queryKey: ["trailer", id],
    queryFn: trailerService.getAll,
    staleTime: ms("1d"), // 1 day
  });
};

export default useGameTrailer;
