import parents from "../data/parents";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: parents, loading: false, error: null });

export default usePlatforms;
