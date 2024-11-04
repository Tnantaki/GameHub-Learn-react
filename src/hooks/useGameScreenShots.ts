import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ScreenShot from "../entities/ScreenShot";
import APIClient from "../services/api-client";

const useGameScreenShots = (id: number) => {
  const trailerService = new APIClient<ScreenShot>(`/games/${id}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", id],
    queryFn: trailerService.getAll,
    staleTime: ms("1d"), // 1 day
  });
};

export default useGameScreenShots