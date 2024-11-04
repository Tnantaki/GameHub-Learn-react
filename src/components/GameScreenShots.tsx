import { Image, SimpleGrid, Spinner } from '@chakra-ui/react'
import useGameScreenShots from '../hooks/useGameScreenShots'

interface Props {
  gameId: number
}

const GameScreenShots = ({gameId}: Props) => {
  const {data, error, isLoading} = useGameScreenShots(gameId)

  if (isLoading) return <Spinner />

  if (error) throw new Error()

  return (
    <SimpleGrid columns={{base: 1, lg: 2}} spacing={5} padding={5}>
      {data?.results.map(s => <Image key={s.id} src={s.image} />)}
    </SimpleGrid>
  )
}

export default GameScreenShots