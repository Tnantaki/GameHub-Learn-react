import { Spinner } from "@chakra-ui/react";
import useGameTrailer from "../hooks/useGameTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameTrailer(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw new Error();

  if (!data || !data.results[0]) return null

  const trailer = data.results[0];

  return (
    <video poster={trailer.preview} src={trailer.data[480]} controls />
  );
};

export default GameTrailer;
