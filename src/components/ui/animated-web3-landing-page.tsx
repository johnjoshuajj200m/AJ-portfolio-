import { useState, useEffect } from "react";

export function Web3HeroAnimated() {
  const pillars = [92, 84, 78, 70, 62, 54, 46, 34, 18, 34, 46, 54, 62, 70, 78, 84, 92];
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes subtlePulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.03); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
      `}</style>

      <section className="relative isolate min-h-screen overflow-hidden bg-neutral-950 text-white">
        <div
          aria-hidden
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: [
              "radial-gradient(80% 55% at 50% 52%, rgba(59,130,246,0.12) 0%, rgba(37,99,235,0.10) 27%, rgba(29,78,216,0.08) 47%, rgba(15,23,42,0.15) 60%, rgba(15,23,42,0.92) 78%, rgba(0,0,0,1) 88%)",
              "radial-gradient(85% 60% at 14% 0%, rgba(75,85,99,0.35) 0%, rgba(55,65,81,0.25) 30%, rgba(30,41,59,0.0) 64%)",
              "radial-gradient(70% 50% at 86% 22%, rgba(30,41,59,0.20) 0%, rgba(15,23,42,0.0) 55%)",
              "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0) 40%)",
            ].join(","),
            backgroundColor: "#0f0f14",
          }}
        />

        <div aria-hidden className="absolute inset-0 -z-20 bg-[radial-gradient(140%_120%_at_50%_0%,transparent_60%,rgba(0,0,0,0.85))]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen opacity-30"
          style={{
            backgroundImage: [
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.09) 0 1px, transparent 1px 96px)",
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 24px)",
              "repeating-radial-gradient(80% 55% at 50% 52%, rgba(255,255,255,0.08) 0 1px, transparent 1px 120px)"
            ].join(","),
            backgroundBlendMode: "screen",
          }}
        />

        <div className="relative z-10 mx-auto grid w-full max-w-5xl place-items-center px-6 py-28 md:py-32 lg:py-36">
          <div className={`mx-auto text-center ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/70 ring-1 ring-white/10 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> open to remote internships & junior roles
            </span>
            <h1 style={{ animationDelay: '200ms' }} className={`mt-6 text-4xl font-bold tracking-tight md:text-6xl ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
              Frontend Developer & Digital Operations
            </h1>
            <p style={{ animationDelay: '300ms' }} className={`mx-auto mt-5 max-w-3xl text-balance text-white/80 md:text-lg ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
              I build practical web interfaces and digital tools using React, TypeScript, JavaScript, and modern frontend technologies — with additional experience in customer communication, business operations, research, and AI-assisted workflows.
            </p>
            <div style={{ animationDelay: '400ms' }} className={`mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row ${isMounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-600 hover:shadow-blue-600/30">View Projects</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm bg-white/5 transition hover:border-white/20 hover:bg-white/10">Contact Me</a>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-white/60">
            {["React", "TypeScript", "JavaScript", "Tailwind CSS", "Supabase", "GitHub", "AI-assisted workflows"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2">{item}</span>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-[128px] left-1/2 z-0 h-36 w-28 -translate-x-1/2 rounded-md bg-gradient-to-b from-gray-700/25 via-gray-600/15 to-transparent" style={{ animation: 'subtlePulse 6s ease-in-out infinite' }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[54vh]">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex h-full items-end gap-px px-[2px]">
            {pillars.map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-black transition-height duration-1000 ease-in-out"
                style={{
                  height: isMounted ? `${h}%` : '0%',
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
