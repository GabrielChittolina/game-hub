import { useEffect, useState } from "react";
import apiClient, {
  AxiosRequestConfig,
  CanceledError,
} from "../services/api-client";

interface DataResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(
    () => {
      setLoading(true);
      const controller = new AbortController();

      apiClient
        .get<DataResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData((prevData) =>
            requestConfig?.params?.page && requestConfig?.params?.page > 1
              ? [...prevData, ...res.data.results]
              : res.data.results
          );
          setLoading(false);
          setError("");
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, loading };
};

export default useData;
