import useData from "./useData";

export interface Genre {
  id: number;
  slug: string;
  name: string;
  games_count: number;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
