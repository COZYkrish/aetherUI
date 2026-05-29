"use client";

import { useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {children}
    </>
  );
}
