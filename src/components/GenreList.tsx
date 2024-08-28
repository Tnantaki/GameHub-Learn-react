import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import urlCropImage from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void
}

const GenreList = ({onSelectGenre}: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null
  if (isLoading) return <Spinner />

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={1}>
          <HStack>
            <Image
              src={urlCropImage(genre.image_background)}
              boxSize="40px"
              borderRadius={8}
            />
            <Button onClick={() => onSelectGenre(genre)} fontSize="lg" variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList