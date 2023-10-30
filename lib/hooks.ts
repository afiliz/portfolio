import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

// custom hook to set context to given section when in view, for use with header tracker
export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView} = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  // don't set state during rendering, need this in useEffect to do before render happens
  // when synchronizing data with external system (ex context), need to do before render in useEffect
  useEffect(() =>{
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  }
}