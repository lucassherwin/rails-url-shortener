import React from "react";
import Input from "@/design-system/Input";
import { useShortenUrlContext } from "@/contexts/ShortenUrlContext";

const UrlInput: React.FC = () => {
  const { longUrl, setLongUrl, handleShortenUrl, isLoading } = useShortenUrlContext();

  return (
    <Input
      name="long_url"
      placeholder="Enter a long URL..."
      value={longUrl}
      onChange={(e) => setLongUrl(e.target.value)}
      button={{
        label: "Shorten URL",
        onClick: handleShortenUrl,
        variant: "default",
        disabled: isLoading || longUrl.trim() === "",
      }}
      disabled={isLoading}
    />
  );
};

export default UrlInput;
