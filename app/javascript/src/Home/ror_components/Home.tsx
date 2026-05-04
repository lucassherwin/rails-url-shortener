import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Card from "@/design-system/Card";
import UrlInput from "../components/UrlInput";
import RecentUrls from "../components/RecentUrls";
import { ShortenUrlProvider } from "@/contexts/ShortenUrlContext";

const queryClient = new QueryClient();

const Home: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ShortenUrlProvider>
        <div>
          <h1 className="text-4xl font-bold text-center mt-10">
            Welcome to the URL Shortener
          </h1>
          <div className="max-w-3xl mx-auto mt-8 space-y-6">
            <Card
              title="URL Shortener"
              description="Shorten your long URLs with ease"
              content={<UrlInput />}
            />
            <RecentUrls />
          </div>
        </div>
      </ShortenUrlProvider>
    </QueryClientProvider>
  );
};

export default Home;
