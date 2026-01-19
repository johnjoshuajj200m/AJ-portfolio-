import { useState, useEffect } from "react";

export function Web3HeroAnimated() {
  // Symmetric pillar heights (percent). Tall at edges, low at center.
  const pillars = [92, 84, 78, 70, 62, 54, 46, 34, 18, 34, 46, 54, 62, 70, 78, 84, 92];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes subtlePulse {
            0%, 100% {
              opacity: 0.8;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.03);
            }
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
        `}
      </style>

      <section className="relative isolate h-screen overflow-hidden bg-neutral-950 text-white">
        {/* ================== BACKGROUND ================== */}
        {/* Dark gray base with very subtle blue glow (10-15% opacity max) */}
        <div
          aria-hidden
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: [
              // Main central base - dark gray, with VERY subtle soft blue glow (10-15% opacity)
              "radial-gradient(80% 55% at 50% 52%, rgba(59,130,246,0.12) 0%, rgba(37,99,235,0.10) 27%, rgba(29,78,216,0.08) 47%, rgba(15,23,42,0.15) 60%, rgba(15,23,42,0.92) 78%, rgba(0,0,0,1) 88%)",
              // Soft top gradient - minimal, mostly gray
              "radial-gradient(85% 60% at 14% 0%, rgba(75,85,99,0.35) 0%, rgba(55,65,81,0.25) 30%, rgba(30,41,59,0.0) 64%)",
              // Subtle rim - gray, not blue
              "radial-gradient(70% 50% at 86% 22%, rgba(30,41,59,0.20) 0%, rgba(15,23,42,0.0) 55%)",
              // Soft top vignette
              "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0) 40%)",
            ].join(","),
            backgroundColor: "#0f0f14",
          }}
        />

        {/* Vignette corners for extra contrast */}
        <div aria-hidden className="absolute inset-0 -z-20 bg-[radial-gradient(140%_120%_at_50%_0%,transparent_60%,rgba(0,0,0,0.85))]" />

        {/* Grid overlay: vertical columns + subtle curved horizontal arcs */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen opacity-30"
          style={{
            backgroundImage: [
              // Vertical grid lines (major & minor)
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.09) 0 1px, transparent 1px 96px)",
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 24px)",
              // Curved horizontal arcs via repeating elliptical radial gradient
              "repeating-radial-gradient(80% 55% at 50% 52%, rgba(255,255,255,0.08) 0 1px, transparent 1px 120px)"
            ].join(","),
            backgroundBlendMode: "screen",
          }}
        />

        {/* ================== COPY ================== */}
        <div className="relative z-10 mx-auto grid w-full max-w-5xl place-items-center px-6 py-16 md:py-24 lg:py-28">
          {/* We set opacity to 0 and apply the animation class to trigger the fade-in effect */}
          <div className={`mx-auto text-center ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/70 ring-1 ring-white/10 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" /> software developer
            </span>
            {/* Stagger animations with inline animation-delay */}
            <h1 style={{ animationDelay: '200ms' }} className={`mt-6 text-4xl font-bold tracking-tight md:text-6xl ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>Full-Stack Developer & Designer</h1>
            <p style={{ animationDelay: '300ms' }} className={`mx-auto mt-5 max-w-2xl text-balance text-white/80 md:text-lg ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>Crafting beautiful, performant web experiences with React, TypeScript, and modern technologies. 5+ years building scalable applications.</p>
            <div style={{ animationDelay: '400ms' }} className={`mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-600 hover:shadow-blue-600/30">View My Work</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm bg-white/5 transition hover:border-white/20 hover:bg-white/10">Get In Touch</a>
            </div>
          </div>
        </div>

        {/* ================== PARTNERS ================== */}
        <div className="relative z-10 mx-auto mt-10 w-full max-w-6xl px-6 pb-24">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70">
            {["git", "npm", "Lucidchart", "wrike", "jquery", "openstack", "servicenow", "Paysafe"].map((brand) => (
              <div key={brand} className="text-xs uppercase tracking-wider text-white/70">{brand}</div>
            ))}
          </div>
        </div>

        {/* ================== FOREGROUND ================== */}
        {/* Center-bottom rectangular glow - VERY subtle gray glow, not blue */}
        <div
          className="pointer-events-none absolute bottom-[128px] left-1/2 z-0 h-36 w-28 -translate-x-1/2 rounded-md bg-gradient-to-b from-gray-700/25 via-gray-600/15 to-transparent"
          style={{ animation: 'subtlePulse 6s ease-in-out infinite' }}
        />

        {/* Stepped pillars silhouette */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[54vh]">
          {/* dark fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
          {/* bars */}
          <div className="absolute inset-x-0 bottom-0 flex h-full items-end gap-px px-[2px]">
            {pillars.map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-black transition-height duration-1000 ease-in-out"
                style={{
                  // Animate height from 0% to its target value when isMounted is true.
                  height: isMounted ? `${h}%` : '0%',
                  // Stagger the animation delay to create a wave effect from the center out.
                  transitionDelay: `${Math.abs(i - Math.floor(pillars.length / 2)) * 60}ms`
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
