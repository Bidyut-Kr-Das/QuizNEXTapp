"use client";

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  const navigate = (routeName: string) => {
    router.push(routeName);
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-8">
      <h1> About Page</h1>
      <button
        className="border-2 border-black/50 rounded-md"
        onClick={(): void => navigate("/")}
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default About;
