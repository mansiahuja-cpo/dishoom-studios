"use client";

import { useState, useEffect, useRef } from "react";

const words = ["Impact", "Brands", "Stories", "Studio"];
const TYPE_SPEED = 85;
const DELETE_SPEED = 85;
const PAUSE_AFTER_TYPE = 500;
const PAUSE_AFTER_DELETE = 200;

export default function HeroFlip() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (phase === "typing") {
      if (displayText.length < currentWord.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, TYPE_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => setPhase("pausing"), PAUSE_AFTER_TYPE);
      }
    } else if (phase === "pausing") {
      timeoutRef.current = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE);
    } else if (phase === "deleting") {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, DELETE_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
          setPhase("typing");
        }, PAUSE_AFTER_DELETE);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, phase, wordIndex]);

  return (
    <h1 className="text-[18vw] font-medium leading-[0.9] tracking-tight">
      Dishoom
      <br />
      <span className="inline-flex items-baseline">
        {displayText.split("").map((char, i) => (
          <span
            key={`${wordIndex}-${i}`}
            className="inline-block animate-char-in"
          >
            {char}
          </span>
        ))}
        <span className="text-accent inline-block ml-[0.05em] transition-transform duration-300 ease-in-out">
          .
        </span>
      </span>
    </h1>
  );
}