"use client";

import { useState, useEffect, useRef } from "react";

const words = [
  "Identity",
  "Voice",
  "Culture",
  "Stories",
  "Brands",
  "Studio",
];

const TYPE_SPEED = 30;
const DELETE_SPEED = 15;
const PAUSE_AFTER_DELETE = 0;

export default function HeroFlip() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing"
  );

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentWord = words[wordIndex];
  const isStudio = currentWord === "Studio";

  useEffect(() => {
    const pauseAfterType = isStudio ? 1200 : 700;

    if (phase === "typing") {
      if (displayText.length < currentWord.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, TYPE_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => {
          setPhase("pausing");
        }, pauseAfterType);
      }
    } else if (phase === "pausing") {
      timeoutRef.current = setTimeout(() => {
        setPhase("deleting");
      }, pauseAfterType);
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
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, phase, wordIndex, currentWord, isStudio]);

  return (
    <h1 className="text-[22vw] font-medium leading-[0.9] tracking-tight">
      Dishoom
      <br />

      <span className="inline-flex items-baseline">
        <span
          className={`transition-colors duration-500 ${
            isStudio ? "text-accent" : ""
          }`}
        >
          {displayText.split("").map((char, i) => (
            <span
              key={`${wordIndex}-${i}`}
              className="inline-block animate-char-in"
            >
              {char}
            </span>
          ))}
        </span>

        <span className="text-accent inline-block ml-[0.05em]">
          .
        </span>
      </span>
    </h1>
  );
}