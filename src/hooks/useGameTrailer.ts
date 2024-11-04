import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import GameTrailer from "../entities/GameTrailer";
import APIClient from "../services/api-client";

const useGameTrailer = (id: number) => {
  const trailerService = new APIClient<GameTrailer>(`/games/${id}/movies`);

  return useQuery({
    queryKey: ["trailer", id],
    queryFn: trailerService.getAll,
    staleTime: ms("1d"), // 1 day
  });
};

export default useGameTrailer;
