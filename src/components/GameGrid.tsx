import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react'

interface Game {
  id: number
  name: string
}

interface GameData {
  count: number
  results: Game[]
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setErrro] = useState("")

  // useEffect(() => {
  //   apiClient.get<GameData>("/gamesx")
  //     .then(res => setGames(res.data.results))
  //     .catch(err => setErrro(err.message))
  // });
  console.log(import.meta.env.VITE_RAWG_API_KEY)
  return (
    <>
      { error && <Text>{error}</Text> }
      <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  )
}

export default GameGrid