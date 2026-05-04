import { useMutation, useQueryClient } from "@tanstack/react-query";
import useFetch from "./useFetch";

interface ShortenUrlParams {
  long_url: string;
  alias?: string;
  expires_at?: string;
}

interface ShortenUrlResponse {
  id: number;
  long_url: string;
  alias: string | null;
  expires_at: string | null;
  created_at: string;
}

const useShortenUrl = () => {
  const queryClient = useQueryClient();
  const { fetchData: shortenUrl } = useFetch({
    url: "/short_urls",
    method: "POST",
  });

  const { data, error, status, mutate } = useMutation<ShortenUrlResponse, Error, ShortenUrlParams>({
    mutationFn: shortenUrl,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recentUrls"] });
    },
  });

  return { mutate, data, error, status };
};

export default useShortenUrl;
