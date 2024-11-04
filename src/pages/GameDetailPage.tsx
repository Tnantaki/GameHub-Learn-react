import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ShowMoreText from "../components/ShowMoreText";
import useGameDetail from "../hooks/useGameDetail";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  // use ! after variable for tell compliler it can't be null
  const { data: game, error, isLoading } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw new Error();

  return (
    <>
      <Heading>{game.name}</Heading>
      <ShowMoreText>{game.description_raw}</ShowMoreText>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
