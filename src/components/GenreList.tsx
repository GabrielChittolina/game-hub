import useGenres from "../hooks/useGenres";
import {
  Link,
  HStack,
  Image,
  Text,
  List,
  ListItem,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, error, loading } = useGenres();

  return (
    <>
      <Heading size="lg" mb="4">
        Genres
      </Heading>
      <List spacing={3}>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background, 600, 400)}
                alt={genre.name}
                boxSize="32px"
                objectFit="cover"
                borderRadius="md"
              />
              <Text whiteSpace={"nowrap"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
