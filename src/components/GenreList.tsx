import useGenres, { Genre } from "../hooks/useGenres";
import {
  HStack,
  Image,
  Text,
  List,
  ListItem,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface GenreListProps {
  selectedGenre: Genre | null;
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: GenreListProps) => {
  const { data, error, loading } = useGenres();

  return (
    <>
      <Heading size="lg" mb="4">
        Genres
      </Heading>
      {loading && <Spinner />}
      {error && data.length === 0 && <Text>{error}</Text>}
      <List spacing={3}>
        {data.map((genre) => (
          <ListItem
            key={genre.id}
            cursor="pointer"
            onClick={() => onSelectedGenre(genre)}
          >
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background, 600, 400)}
                alt={genre.name}
                boxSize="32px"
                objectFit="cover"
                borderRadius="md"
                userSelect={"none"}
              />
              <Text
                whiteSpace={"nowrap"}
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                userSelect={"none"}
              >
                {genre.name}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
