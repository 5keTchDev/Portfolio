"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [count, setCount] = useState(10);
  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center bg-black overflow-hidden">
      {/* Star background */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" className="absolute inset-0" style={{ display: 'block' }}>
          <defs>
            <radialGradient id="star" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff" stopOpacity="1" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          {Array.from({ length: 180 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1920}
              cy={Math.random() * 1080}
              r={Math.random() * 1.5 + 0.2}
              fill="url(#star)"
              opacity={Math.random() * 0.7 + 0.2}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full px-4 pt-24 md:pt-0 ">
        <div className="flex-1 flex flex-col items-start justify-center text-left max-w-xl ml-14">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide drop-shadow-lg">Oops! You ran out of oxygen.</h1>
          <p className="text-gray-400 text-base md:text-lg mb-4 leading-relaxed drop-shadow">The page you&apos;re looking for is now beyond our reach.<br />Let&apos;s get you.</p>
          <div className="flex flex-row items-center gap-4 mb-2">
            <span className="text-gray-300 text-base md:text-lg">Back Home in</span>
            <span className="text-white text-base md:text-lg font-mono">00:00:{count.toString().padStart(2, '0')}</span>
          </div>
          <Link href="/" className="inline-block mt-2">
            <button
              className="px-5 py-2 rounded bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition-colors text-xs md:text-sm"
              type="button"
            >
              HOME PAGE
            </button>
          </Link>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center relative mt-10 md:mt-0">
          <div className="flex flex-row items-center justify-center">
            <span className="text-[7rem] md:text-[12rem] font-extrabold text-white tracking-widest leading-none select-none" style={{letterSpacing: '0.1em'}}>
              4
            </span>
            <span className="relative mx-2 flex items-center justify-center">
              <img
                src="/astronaut.jpg"
                alt="Astronaut"
                width={180}
                height={220}
                className="object-contain"
              />
            </span>
            <span className="text-[7rem] md:text-[12rem] font-extrabold text-white tracking-widest leading-none select-none" style={{letterSpacing: '0.1em'}}>
              4
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}