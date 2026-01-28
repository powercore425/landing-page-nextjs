"use client";

import { useEffect, useRef, useState } from "react";

interface UseAnimationProps {
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade" | "fadeIn" | "fadeOut" | "zoomIn" | "zoomOut";
  distance?: number; // Distance in pixels for slide animations (default: 8)
}

export function useAnimation({ delay = 0, direction = "up", distance = 8 }: UseAnimationProps = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getTransformClass = () => {
    switch (direction) {
      case "up":
        return isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0";
      case "down":
        return isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-8 opacity-0";
      case "left":
        return isVisible
          ? "translate-x-0 opacity-100"
          : "translate-x-8 opacity-0";
      case "right":
        return isVisible
          ? "translate-x-0 opacity-100"
          : "-translate-x-8 opacity-0";
      case "fade":
      case "fadeIn":
        return isVisible ? "opacity-100" : "opacity-0";
      case "fadeOut":
        return isVisible ? "opacity-0" : "opacity-100";
      case "zoomIn":
        return isVisible
          ? "scale-100 opacity-100"
          : "scale-75 opacity-0";
      case "zoomOut":
        return isVisible
          ? "scale-100 opacity-100"
          : "scale-125 opacity-0";
      default:
        return isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0";
    }
  };

  const getInlineStyle = () => {
    if (distance === 8) return undefined;

    if (!isVisible) {
      switch (direction) {
        case "up":
          return { transform: `translateY(${distance}px)`, opacity: 0 };
        case "down":
          return { transform: `translateY(-${distance}px)`, opacity: 0 };
        case "left":
          return { transform: `translateX(${distance}px)`, opacity: 0 };
        case "right":
          return { transform: `translateX(-${distance}px)`, opacity: 0 };
        default:
          return undefined;
      }
    }
    return { transform: "translate(0, 0)", opacity: 1 };
  };

  const hasCustomDistance = distance !== 8 && ["up", "down", "left", "right"].includes(direction);

  return {
    ref,
    className: hasCustomDistance ? "transition-all duration-700 ease-out" : `transition-all duration-700 ease-out ${getTransformClass()}`,
    style: hasCustomDistance ? getInlineStyle() : undefined,
  };
}
