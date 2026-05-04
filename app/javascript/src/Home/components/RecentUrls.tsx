import React from "react";
import useRecentUrls from "@/hooks/useRecentUrls";
import Card from "@/design-system/Card";

const RecentUrls: React.FC = () => {
  const { data: urls, isLoading } = useRecentUrls();

  if (isLoading || !urls?.length) return null;

  return (
    <Card
      title="Your recent links"
      description="Links you've shortened in this session"
      content={
        <ul className="divide-y">
          {urls.map((url) => (
            <li key={url.id} className="flex items-center justify-between gap-4 py-3">
              <div className="min-w-0">
                <p className="text-sm truncate text-muted-foreground">{url.long_url}</p>
                <p className="text-sm font-medium">{window.location.origin}/{url.alias}</p>
              </div>
              <button
                onClick={() => navigator.clipboard.writeText(`${window.location.origin}/${url.alias}`)}
                className="shrink-0 text-sm font-medium text-primary hover:underline"
              >
                Copy
              </button>
            </li>
          ))}
        </ul>
      }
    />
  );
};

export default RecentUrls;
