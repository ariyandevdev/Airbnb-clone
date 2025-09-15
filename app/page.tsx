import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Button variant="outline" size="lg" className=" capitalize m-8">
        Click me
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="bg-blue-500 capitalize m-8"
      >
        Click me
      </Button>
    </div>
  );
};

export default HomePage;
