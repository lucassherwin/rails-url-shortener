import React from "react";
import Input from "@/design-system/Input";
import Alert from "@/design-system/Alert";
import { useShortenUrlContext } from "@/contexts/ShortenUrlContext";

const UrlInput: React.FC = () => {
  const {
    longUrl,
    setLongUrl,
    alias,
    setAlias,
    handleShortenUrl,
    isLoading,
    createError,
  } = useShortenUrlContext();

  return (
    <>
      {createError && (
        <Alert
          type="error"
          description={createError.message}
          className="mt-4"
        />
      )}

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

      <Input
        name="alias"
        placeholder="Enter a custom alias (optional)..."
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
        error={!!createError && createError.type === "alias"}
        helperText={
          createError?.type === "alias" ? createError.message : undefined
        }
      />
    </>
  );
};

export default UrlInput;
