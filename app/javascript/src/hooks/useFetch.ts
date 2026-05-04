interface UseFetchProps {
  url: string;
  method?: string;
  body?: any;
}

const useFetch = ({ url, method = "GET", body }: UseFetchProps) => {
  const csrfToken = () =>
    document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')
      ?.content ?? "";

  const fetchData = async (variables?: unknown) => {
    const resolvedBody = variables ?? body;
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-CSRF-Token": csrfToken(),
        },
        body: method !== "GET" && resolvedBody ? JSON.stringify(resolvedBody) : undefined,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      return await response.json();
    } catch (err) {
      throw err instanceof Error ? err : new Error("An unknown error occurred");
    } finally {
    }
  };

  return { fetchData };
};

export default useFetch;
