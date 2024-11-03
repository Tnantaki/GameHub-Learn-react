import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import urlCropImage from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const setGenreId = useGameQueryStore(s => s.setGenreId)

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                src={urlCropImage(genre.image_background)}
                boxSize="40px"
                borderRadius={8}
                objectFit="cover" // not change the aspect ratio of image
              />
              <Button
                fontWeight={genreId === genre.id ? "bold" : "normal"}
                onClick={() => setGenreId(genre.id)}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
