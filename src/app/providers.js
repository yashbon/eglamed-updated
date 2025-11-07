'use client';
import React, { useState } from "react";
import { ServiceContext } from "../hooks/serviceContext";

export function Providers({ children }) {
  const [context, setContext] = useState("");

  return (
    <ServiceContext.Provider value={{context, setContext}}>
     {children}
    </ServiceContext.Provider>
  );
}