"use client";

import { OpeningInvitation } from "@/components/OpeningInvitation";
import { MainContentSection } from "@/components/sections";
import { MusicPlayer } from "@/components/MusicPlayer";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Mobile Layout */}
      <div className="md:hidden relative w-full h-screen">
        <OpeningInvitation isOpen={isOpen} onOpenInvitation={handleOpenInvitation} />
        <MainContentSection isOpen={isOpen} />
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-12 md:h-screen">
        {/* Couple Image Section - 8 columns */}
        <div className="col-span-8 relative overflow-hidden">
          <OpeningInvitation
            isOpen={isOpen}
            onOpenInvitation={handleOpenInvitation}
            isDesktop={true}
          />
        </div>

        {/* Main Content Section - 4 columns */}
        <div className="col-span-4 relative overflow-y-auto">
          <MainContentSection
            isOpen={isOpen}
            isDesktop={true}
            onInteraction={handleOpenInvitation}
          />
        </div>
      </div>
      <MusicPlayer isInvitationOpen={isOpen} />
    </div>
  );
}
