"use client"
import { useLayoutEffect, useState } from "react";

export const useDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: null, height: null });

  useLayoutEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    };

    updateDimensions(); // Initial measurement

    // Attach event listeners for future updates
    window.addEventListener("resize", updateDimensions);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [ref]);

  return dimensions;
};
