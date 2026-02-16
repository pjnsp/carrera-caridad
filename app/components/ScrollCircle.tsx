"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const BRAND_COLORS = [
  "#A8C83A", // lime
  "#111111", // ink
  "#666666", // mute
  "#A8C83A", // lime
  "#333333", // dark gray
];

function buildConicGradient(colors: string[]): string {
  const segmentAngle = 360 / colors.length;
  const stops = colors.map((color, index) => {
    const start = segmentAngle * index;
    const end = segmentAngle * (index + 1);
    return `${color} ${start}deg ${end}deg`;
  });
  return `conic-gradient(${stops.join(", ")})`;
}

export function ScrollCircle({
  size = 480,
  thickness = 3,
  logoSrc = "/nsp-logo-white.png",
}: {
  size?: number;
  thickness?: number;
  logoSrc?: string;
}) {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (!ringRef.current) return;
        const scrollY = window.scrollY;
        const rotation = scrollY * 0.15;
        ringRef.current.style.transform = `rotate(${rotation}deg)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const conicGradient = buildConicGradient(BRAND_COLORS);
  const innerSize = size - thickness * 2;
  const logoSize = Math.round(size * 0.95);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Spinning ring — masked to a true annular shape */}
      <div
        ref={ringRef}
        className="absolute inset-0 will-change-transform"
        style={{
          borderRadius: "50%",
          background: conicGradient,
          mask: `radial-gradient(circle, transparent ${innerSize / 2}px, black ${innerSize / 2}px)`,
          WebkitMask: `radial-gradient(circle, transparent ${innerSize / 2}px, black ${innerSize / 2}px)`,
        }}
      />

      {/* Static logo — does not spin */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={logoSrc}
          alt="Nuestra Señora de la Paz"
          width={logoSize}
          height={logoSize}
          className="opacity-70 select-none pointer-events-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
