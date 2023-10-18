import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Genre {
  id: number;
  slug: string;
  name: string;
  games_count: number;
  image_background: string;
}

interface GenresResponse {
  count: number;
  next: string;
  previous: string;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    apiClient
      .get<GenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, loading };
};

export default useGenres;
