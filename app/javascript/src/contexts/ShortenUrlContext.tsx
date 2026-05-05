import React, { createContext, useContext, useState } from "react";
import useShortenUrl from "@/hooks/useShortenUrl";

interface ShortenUrlResponse {
  id: number;
  long_url: string;
  alias: string | null;
  expires_at: string | null;
  created_at: string;
}

interface ShortenUrlContextValue {
  longUrl: string;
  setLongUrl: (url: string) => void;
  alias: string;
  setAlias: (alias: string) => void;
  handleShortenUrl: () => void;
  data: ShortenUrlResponse | undefined;
  error: Error | null;
  isLoading: boolean;
}

const ShortenUrlContext = createContext<ShortenUrlContextValue | undefined>(
  undefined,
);

export const ShortenUrlProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [longUrl, setLongUrl] = useState("");
  const [alias, setAlias] = useState("");
  const { mutate, data, error, status } = useShortenUrl();

  const isLoading = status === "pending";

  const handleShortenUrl = () => {
    mutate({ long_url: longUrl, alias });
  };

  return (
    <ShortenUrlContext.Provider
      value={{
        longUrl,
        setLongUrl,
        alias,
        setAlias,
        handleShortenUrl,
        data,
        error,
        isLoading,
      }}
    >
      {children}
    </ShortenUrlContext.Provider>
  );
};

export const useShortenUrlContext = () => {
  const context = useContext(ShortenUrlContext);
  if (!context) {
    throw new Error(
      "useShortenUrlContext must be used within a ShortenUrlProvider",
    );
  }
  return context;
};
