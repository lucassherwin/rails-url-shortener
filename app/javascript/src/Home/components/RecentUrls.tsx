import React, { useState } from "react";
import useRecentUrls from "@/hooks/useRecentUrls";
import Card from "@/design-system/Card";
import { Button } from "@/components/ui/button";

const RecentUrls: React.FC = () => {
  const { data: urls, isLoading } = useRecentUrls();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  if (isLoading || !urls?.length) return null;

  return (
    <Card
      title="Your recent links"
      description="Links you've shortened in this session"
      content={
        <ul className="divide-y">
          {urls.map((url) => (
            <li
              key={url.id}
              className="flex items-center justify-between gap-4 py-3"
              onMouseEnter={() => setHoveredId(url.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="min-w-0">
                <p className="text-sm truncate text-muted-foreground">{url.long_url}</p>
                <p className="text-sm font-medium">{window.location.origin}/{url.alias}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigator.clipboard.writeText(`${window.location.origin}/${url.alias}`)}
                className={`transition-opacity ${hoveredId === url.id ? "opacity-100" : "opacity-0"}`}
              >
                Copy
              </Button>
            </li>
          ))}
        </ul>
      }
    />
  );
};

export default RecentUrls;
