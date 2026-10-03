import React from "react";
import { useCustomCursor } from "../../hooks/useCustomCursor";

export const CustomCursor: React.FC = () => {
  const { position, isPointer, isVisible, isMobile } = useCustomCursor();

  if (isMobile || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Primary Dot */}
      <div
        className={`fixed top-0 left-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 ease-out ${
          isPointer ? "bg-cyan-400 scale-150 shadow-[0_0_12px_#38bdf8]" : "bg-cyan-300 shadow-[0_0_8px_#38bdf8]"
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isPointer ? 1.4 : 1})`,
        }}
      />
      {/* Trailing Soft Glow Ring */}
      <div
        className={`fixed top-0 left-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30 transition-all duration-300 ease-out ${
          isPointer ? "bg-cyan-500/10 scale-150 border-cyan-400/60" : "bg-transparent scale-100"
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
    </div>
  );
};
