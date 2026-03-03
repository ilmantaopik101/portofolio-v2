"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
}

export default function SplitText({
  text = "",
  className = "",
  delay = 50,
  duration = 0.5,
  ease = "power3.out",
}: SplitTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    setLetters(text.split(""));
  }, [text]);

  useEffect(() => {
    if (letters.length > 0 && containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.letter');
      gsap.fromTo(elements, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: duration,
          ease: ease,
          stagger: delay / 1000,
          delay: 0.2
        }
      );
    }
  }, [letters, delay, duration, ease]);

  return (
    <p ref={containerRef} className={`flex flex-wrap justify-center ${className}`}>
      {letters.map((letter, i) => (
        <span 
          key={i} 
          className="letter inline-block"
          style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter}
        </span>
      ))}
    </p>
  );
}