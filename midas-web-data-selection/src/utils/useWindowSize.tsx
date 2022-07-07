import { useLayoutEffect, useState } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

/**
 * This hook listen to window resize event.
 * @returns window size in [width, height]
 */
export default function useWindowSize(): number[] {
  const [size, setSize] = useState<number[]>([0, 0]);
  useIsomorphicLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}