"use client";

import React, { createContext, useContext, useState } from "react";

interface WalkthroughContextValue {
  openWalkthrough: () => void;
}

const WalkthroughContext = createContext<WalkthroughContextValue>({
  openWalkthrough: () => {},
});

export function useWalkthrough() {
  return useContext(WalkthroughContext);
}

export function WalkthroughProvider({
  children,
  onOpen,
}: {
  children: React.ReactNode;
  onOpen: () => void;
}) {
  return (
    <WalkthroughContext.Provider value={{ openWalkthrough: onOpen }}>
      {children}
    </WalkthroughContext.Provider>
  );
}
