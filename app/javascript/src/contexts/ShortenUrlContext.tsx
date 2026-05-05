import React, { createContext, useContext, useState } from "react";
import useShortenUrl from "@/hooks/useShortenUrl";
import { ApiError } from "@/hooks/useFetch";

interface ShortenUrlResponse {
  id: number;
  long_url: string;
  alias: string | null;
  expires_at: string | null;
  created_at: string;
}

interface CreateError {
  type: "alias" | "general";
  message: string;
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
  createError: CreateError | null;
}

const ShortenUrlContext = createContext<ShortenUrlContextValue | undefined>(
  undefined,
);

export const ShortenUrlProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [longUrl, setLongUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [createError, setCreateError] = useState<CreateError | null>(null);
  const { mutate, data, error, status } = useShortenUrl();

  const isLoading = status === "pending";

  const handleSetAlias = (value: string) => {
    setAlias(value);
    if (createError) setCreateError(null);
  };

  const handleShortenUrl = () => {
    setCreateError(null);
    mutate(
      { long_url: longUrl, alias },
      {
        onSuccess: () => {
          setLongUrl("");
          setAlias("");
        },
        onError: (e) => {
          if (e instanceof ApiError) {
            const aliasErrors = e.errors.filter((msg) =>
              msg.toLowerCase().includes("alias"),
            );

            const otherErrors = e.errors.filter(
              (msg) => !msg.toLowerCase().includes("alias"),
            );

            if (aliasErrors.length > 0) {
              setCreateError({
                type: "alias",
                message: "Alias is already in use",
              });
            }

            if (otherErrors.length > 0) {
              setCreateError({
                type: "general",
                message: otherErrors.join(". "),
              });
            }
          } else {
            setCreateError({
              type: "general",
              message: e.message || "Something went wrong",
            });
          }
        },
      },
    );
  };

  return (
    <ShortenUrlContext.Provider
      value={{
        longUrl,
        setLongUrl,
        alias,
        setAlias: handleSetAlias,
        handleShortenUrl,
        data,
        error,
        isLoading,
        createError,
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
