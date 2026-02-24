"use client";

import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SudarshanChakra } from "./SudarshanChakra";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-[#0A0A0A] flex items-center justify-center">
            <SudarshanChakra size={48} className="animate-spin-60s opacity-30" />
        </div>
    ),
});

/* ─── Static particles (no Math.random — SSR safe) ───────────────── */
const PARTICLES = [
    { left: "15%", delay: "0s", duration: "22s" },
    { left: "45%", delay: "4s", duration: "19s" },
    { left: "78%", delay: "1s", duration: "26s" },
    { left: "30%", delay: "7s", duration: "21s", desktop: true },
    { left: "62%", delay: "3s", duration: "24s", desktop: true },
    { left: "88%", delay: "6s", duration: "18s", desktop: true },
];

export function Hero() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    // No useSpring — scroll progress is used directly so animations
    // are perfectly in sync with the scroll position. Zero lag.
    const p = scrollYProgress;

    /* ── Globe position & scale ──────────────────────────────────────── */
    /*  TIMELINE (zero gaps, cross-fading sections):
        0.00–0.08  Hero title visible → fades out
        0.08–0.20  Globe slides RIGHT, Section 2 text slides in
        0.20–0.35  Section 2 fully visible (hold)
        0.35–0.45  CROSS-FADE: S2 out + globe LEFT + S3 in
        0.45–1.00  Section 3 fully visible (long hold) */
    const globeX = useTransform(
        p,
        [0, 0.08, 0.20, 0.35, 0.45, 1],
        ["0vw", "0vw", "25vw", "25vw", "-25vw", "-25vw"]
    );
    const globeScale = useTransform(
        p, [0, 0.08, 0.20, 1], [1.5, 1.5, 1.05, 1.05]
    );

    /* ── Section 1: Hero title ───────────────────────────────────────── */
    const heroOpacity = useTransform(p, [0, 0.08], [1, 0]);
    const heroY = useTransform(p, [0, 0.08], [0, -80]);

    /* ── Section 2: Valuation (text LEFT, globe RIGHT) ───────────────── */
    const s2Opacity = useTransform(p, [0.10, 0.18, 0.32, 0.40], [0, 1, 1, 0]);
    const s2X = useTransform(p, [0.10, 0.18], [-40, 0]);

    /* ── Section 3: AP Scale (globe LEFT, text RIGHT) ────────────────── */
    /*  Cross-fades with S2 (overlap at 0.37-0.40), then holds to 1.0
        = 55% of 320vh ≈ 176vh of scroll where S3 is fully visible */
    const s3Opacity = useTransform(p, [0.37, 0.45, 1.0], [0, 1, 1]);
    const s3X = useTransform(p, [0.37, 0.45], [40, 0]);

    return (
        <div ref={ref} data-theme="dark" className="relative h-[320vh] bg-[#0A0A0A]">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0A0A0A] bg-rangoli">

                {/* ═══ Floating ₹ particles ════════════════════════════════ */}
                <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                    {PARTICLES.map((p, i) => (
                        <span
                            key={i}
                            className={`absolute text-[#C9A84C] font-inter text-3xl font-bold animate-float-up select-none opacity-[0.08] ${p.desktop ? "hidden md:block" : ""
                                }`}
                            style={{
                                left: p.left,
                                animationDelay: p.delay,
                                animationDuration: p.duration,
                            }}
                        >
                            ₹
                        </span>
                    ))}
                </div>

                {/* ═══ Ghost Chakra watermark ═══════════════════════════════ */}
                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="absolute inset-0 z-[11] flex items-center justify-center pointer-events-none"
                >
                    <div className="w-[180px] h-[180px] md:w-[300px] md:h-[300px]">
                        <SudarshanChakra
                            size={300}
                            className="animate-spin-60s opacity-[0.06] w-full h-full"
                        />
                    </div>
                </motion.div>

                {/* ═══ 3D Globe ═════════════════════════════════════════════ */}
                <motion.div
                    style={{ x: globeX, scale: globeScale }}
                    className="absolute inset-0 z-20 origin-center will-change-transform"
                >
                    <Spline scene="/scene.splinecode" />
                </motion.div>

                {/* ═══ SECTION 1 — Hero Title ══════════════════════════════ */}
                <motion.div
                    style={{ opacity: heroOpacity, y: heroY }}
                    className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none select-none px-4"
                >
                    <h1 className="text-[3.5rem] md:text-[6rem] lg:text-[8rem] font-black tracking-tighter text-white leading-[0.85] text-center">
                        LandWorth
                    </h1>
                    <span className="mt-3 font-telugu text-[#C9A84C] text-[1.8rem] md:text-[2.5rem] tracking-[0.15em] font-semibold text-center">
                        భూమి
                    </span>

                    <p className="mt-6 text-base md:text-xl font-bold tracking-[0.25em] uppercase text-center">
                        <span className="text-white">Satya Moolya.</span>{" "}
                        <span className="text-[#C9A84C]">Sahi Bhumi.</span>
                    </p>
                    <p className="mt-2 text-sm md:text-base font-light text-white/50 text-center">
                        AI-powered land valuation for India.
                    </p>

                    <button className="pointer-events-auto mt-10 px-8 py-4 text-base font-bold text-black bg-gradient-to-r from-[#C9A84C] to-[#e8c96a] rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(201,168,76,0.4)]">
                        Discover True Value →
                    </button>

                    <div className="absolute bottom-8 flex items-center gap-2 animate-bounce">
                        <SudarshanChakra size={16} className="animate-spin-60s" />
                        <span className="font-telugu text-[#C9A84C] text-xs tracking-wider">
                            స్క్రోల్ చేయండి
                        </span>
                    </div>
                </motion.div>

                {/* ═══ SECTION 2 — Valuation (dark, text LEFT) ═════════════ */}
                <motion.div
                    style={{ opacity: s2Opacity }}
                    className="absolute inset-0 z-40 flex flex-col md:flex-row pointer-events-none"
                >
                    <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#0A0A0A]/90 flex items-center justify-center md:justify-end">
                        <motion.div
                            style={{ x: s2X }}
                            className="px-8 md:pr-16 md:pl-12 w-full max-w-xl flex flex-col gap-5 pointer-events-auto"
                        >
                            <div className="flex items-center gap-2">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="2" x2="12" y2="22" />
                                    <line x1="2" y1="12" x2="22" y2="12" />
                                </svg>
                                <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#C9A84C]">
                                    అంచనా · Valuation
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-black tracking-tight text-white leading-[1.1]">
                                Estimate real<br />land prices in<br />milliseconds.
                            </h2>
                            <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-sm">
                                Our AI model consumes satellite data, AP government RTGS records, and 10 years of local market intelligence.
                            </p>

                            <div className="flex flex-wrap items-center gap-3 md:gap-4 py-3 mt-1">
                                <div className="flex flex-col">
                                    <span className="font-inter text-lg md:text-xl font-black text-[#C9A84C]">₹4.2Cr+</span>
                                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">విశ్లేషించబడింది</span>
                                </div>
                                <span className="w-px h-8 bg-[#C9A84C]/30" />
                                <div className="flex flex-col">
                                    <span className="font-inter text-lg md:text-xl font-black text-[#C9A84C]">28</span>
                                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">జిల్లాలు</span>
                                </div>
                                <span className="w-px h-8 bg-[#C9A84C]/30 hidden md:block" />
                                <div className="hidden md:flex flex-col">
                                    <span className="font-inter text-lg md:text-xl font-black text-[#C9A84C]">94%</span>
                                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">కచ్చితత్వం</span>
                                </div>
                            </div>

                            <button className="self-start px-6 py-3 text-sm font-bold text-black bg-[#C9A84C] rounded-full hover:bg-[#e8c96a] shadow-[0_4px_20px_rgba(201,168,76,0.35)] transition-all">
                                Try Estimator →
                            </button>
                        </motion.div>
                    </div>
                    <div className="hidden md:block w-1/2 h-full" />
                </motion.div>

                {/* ═══ SECTION 3 — AP Scale (light, text RIGHT) ════════════ */}
                <motion.div
                    style={{ opacity: s3Opacity }}
                    className="absolute inset-0 z-40 flex flex-col md:flex-row pointer-events-none"
                >
                    <div className="hidden md:block w-1/2 h-full" />
                    <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#FAFAF6] flex items-center">
                        <motion.div
                            style={{ x: s3X }}
                            className="px-8 md:pl-16 md:pr-12 w-full max-w-xl flex flex-col gap-5 pointer-events-auto"
                        >
                            <div className="flex items-center gap-2">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                                <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#C9A84C]">
                                    AP Scale
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-black tracking-tight text-black leading-[1.1]">
                                <span className="font-telugu block text-2xl md:text-3xl text-[#C9A84C] mb-2">
                                    పారదర్శకత. కచ్చితత్వం. విశ్వాసం.
                                </span>
                                Transparent.<br />Precise. Trusted.
                            </h2>
                            <p className="text-sm md:text-base text-black/55 leading-relaxed max-w-sm">
                                From urban plots in Vijayawada to farmland in Kurnool, LandWorth removes the guesswork. Built on AP RTGS data and real-time GIS mapping.
                            </p>

                            {/* AP Map with pulsing dots */}
                            <div className="relative h-20 w-36 mt-1">
                                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" fill="none" stroke="#0A0A0A" strokeWidth="1.5" opacity={0.15}>
                                    <path d="M20,60 Q30,40 50,30 T80,30 Q90,50 80,70 T40,90 Q20,80 20,60" />
                                </svg>
                                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" fill="none">
                                    {[
                                        { x: 50, y: 42 },
                                        { x: 45, y: 55 },
                                        { x: 75, y: 35 },
                                        { x: 35, y: 75 },
                                        { x: 55, y: 68 },
                                    ].map((d, i) => (
                                        <circle key={i} cx={d.x} cy={d.y} r={2.5} fill="#C9A84C" className="animate-pulse" style={{ animationDelay: `${i * 0.4}s` }} />
                                    ))}
                                </svg>
                            </div>

                            <button className="self-start px-6 py-3 text-sm font-bold text-white bg-black rounded-full hover:bg-black/80 transition-all">
                                View Coverage →
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
