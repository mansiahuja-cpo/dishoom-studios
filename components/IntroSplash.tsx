"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const SESSION_KEY = "dishoom-intro-seen";

export default function IntroSplash() {
  const [show, setShow] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const seen = sessionStorage.getItem(SESSION_KEY);

    if (seen || prefersReducedMotion) {
      return;
    }

    setShow(true);
    document.body.style.overflow = "hidden";

    const exitTimer = setTimeout(() => setExiting(true), 1000);
    const removeTimer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
      sessionStorage.setItem(SESSION_KEY, "1");
    }, 1750);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "#F5E000" }}
          initial={{ y: 0 }}
          animate={{ y: exiting ? "-100%" : 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <motion.p
            className="text-4xl md:text-6xl font-medium tracking-tight"
            style={{ color: "#111111" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          >
            Dishoom Studio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}