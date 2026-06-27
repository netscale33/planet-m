"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
  delay?: number;
  scrollTrigger?: boolean;
  triggerOnView?: boolean;
}

export default function SplitText({
  children,
  as: Tag = "h2",
  className,
  style,
  stagger = 0.04,
  delay = 0,
  scrollTrigger = false,
  triggerOnView = true,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const letters = el.querySelectorAll<HTMLSpanElement>(".split-letter");
    if (!letters.length) return;

    gsap.set(letters, { y: 40, rotateX: -20, opacity: 0 });

    const config: gsap.TweenVars = {
      y: 0,
      rotateX: 0,
      opacity: 1,
      duration: 0.7,
      stagger,
      ease: "expo.out",
      delay,
    };

    if (scrollTrigger && triggerOnView) {
      config.scrollTrigger = {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none reverse",
      };
    }

    gsap.to(letters, config);

    return () => {
      gsap.killTweensOf(letters);
    };
  }, [children, stagger, delay, scrollTrigger, triggerOnView]);

  return (
    <Tag ref={ref as any} className={className} style={style}>
      {children.split("").map((char, i) => (
        <span
          key={i}
          className="split-letter"
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
}
