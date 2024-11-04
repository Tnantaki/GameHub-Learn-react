import { Heading, Spinner, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import useGameDetail from "../hooks/useGameDetail";
import ShowMoreText from "../components/ShowMoreText";

const GameDetailPage = () => {
  const { slug } = useParams();
  // use ! after variable for tell compliler it can't be null
  const { data: game, error, isLoading } = useGameDetail(slug!);

  if (isLoading) return <Spinner />

  if (error || !game) throw new Error()

  return (
    <>
      <Heading>{game.name}</Heading>
      <ShowMoreText>{game.description_raw}</ShowMoreText>
    </>
  )
}

export default GameDetailPage