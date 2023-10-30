"use client";

import React, { useState, createContext, useContext } from 'react';
import { SectionName } from "@/lib/types";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
}

// for type of context, saying we'll provide the active section type and the corresponding set function
// can get set function type by hovering over setActiveSection in vscode
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

// use union to let compiler know null is an option
export const ActiveSectionContext = 
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ 
  children 
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');

  // keep track of this to disable the observer temporarily when user clicks a link
  // prevents jerky movement with header tracker when clicking links
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider 
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
      }}
    >
      {children}
    </ActiveSectionContext.Provider>);
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}