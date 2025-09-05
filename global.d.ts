import { MotionProps as OriginalMotionProps } from "framer-motion";

// to avoid type errors with framer-motion on react 19/next 15
declare module "framer-motion" {
  interface MotionProps extends OriginalMotionProps {
    className?: string;
    id?: string;
  }
}
