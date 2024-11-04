import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ShowMoreText from "../components/ShowMoreText";
import useGameDetail from "../hooks/useGameDetail";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenShots from "../components/GameScreenShots";

const GameDetailPage = () => {
  const { slug } = useParams();
  // use ! after variable for tell compliler it can't be null
  const { data: game, error, isLoading } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw new Error();

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={3} padding={3}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ShowMoreText>{game.description_raw}</ShowMoreText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenShots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
