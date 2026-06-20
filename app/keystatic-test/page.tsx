"use client";

import { useState, useEffect } from "react";

export default function KeystaticTestPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ padding: 40, fontFamily: "sans-serif", color: "red" }}>
        NOT MOUNTED YET — if you see this and it never changes, the
        useEffect is not firing.
      </div>
    );
  }

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif", color: "green" }}>
      MOUNTED SUCCESSFULLY — useEffect fired correctly, hydration is
      working fine on this route.
    </div>
  );
}
