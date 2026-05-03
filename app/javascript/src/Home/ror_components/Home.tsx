import React from "react";
import Card from "@/design-system/Card";

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">
        Welcome to the URL Shortener
      </h1>
      <div className="max-w-md mx-auto mt-8">
        <Card
          title="URL Shortener"
          description="Shorten your long URLs with ease"
          content="This is a simple URL shortening service that allows you to create shorter links for your long URLs."
          footer="Try it out today!"
          action={{
            label: "Get Started",
            onClick: () => console.log("Get Started clicked")
          }}
        />
      </div>
    </div>
  );
};

export default Home;
