import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

const useGames = (genreId: number | undefined) =>
  useData<Game>("/games", { params: { genres: genreId } }, [genreId]);

export default useGames;
