import { useQuery } from "@tanstack/react-query";
import useFetch from "./useFetch";

interface RecentUrlResponse {
  id: number;
  long_url: string;
  alias: string | null;
  expires_at: string | null;
  created_at: string;
  clicks_count: number;
}

const useRecentUrls = () => {
  const { fetchData } = useFetch({ url: "/short_urls", method: "GET" });

  return useQuery<RecentUrlResponse[]>({
    queryKey: ["recentUrls"],
    queryFn: fetchData,
  });
};

export default useRecentUrls;
