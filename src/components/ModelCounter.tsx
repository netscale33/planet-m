"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

interface Props {
  total: number;
  filtered: number;
}

export default function ModelCounter({ total, filtered }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-ui)",
        fontSize: "0.7rem",
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#7A6E62",
        padding: "6px 14px",
        border: "1px solid rgba(194,184,170,0.4)",
        borderRadius: 100,
      }}
    >
      <Users size={12} />
      <span>
        {filtered} / {total} Models
      </span>
    </div>
  );
}
