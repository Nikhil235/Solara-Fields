"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalLoader from "./GlobalLoader";
import WalkthroughModal from "./WalkthroughModal";
import { WalkthroughProvider } from "@/lib/walkthrough-context";

interface LayoutShellProps {
  children: React.ReactNode;
}

export default function LayoutShell({ children }: LayoutShellProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <WalkthroughProvider onOpen={() => setModalOpen(true)}>
      <div className="min-h-screen flex flex-col bg-[#f6f1e4] text-[#16211c]">
        {/* 3-Second Branded Global Page Loader */}
        <GlobalLoader />

        {/* Global Navigation Bar */}
        <Navbar onOpenWalkthrough={() => setModalOpen(true)} />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col">{children}</main>

        {/* Global Footer */}
        <Footer onOpenWalkthrough={() => setModalOpen(true)} />

        {/* Global Walkthrough Booking Dialog */}
        <WalkthroughModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </WalkthroughProvider>
  );
}
