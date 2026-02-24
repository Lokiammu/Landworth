"use client";

import React from "react";
import { motion } from "framer-motion";

const APMapWatermark = () => {
    const AP = "M297,6 L298,6 L297,7 L298,9 L297,12 L292,17 L286,26 L285,26 L283,29 L281,29 L280,30 L280,32 L273,40 L269,42 L267,42 L258,47 L255,50 L255,51 L250,55 L247,61 L244,61 L243,62 L245,63 L243,64 L242,66 L235,69 L229,73 L227,73 L223,75 L211,84 L207,90 L207,93 L209,95 L211,95 L210,101 L205,107 L201,109 L199,109 L197,111 L194,111 L189,114 L183,113 L182,112 L181,113 L180,112 L178,113 L177,112 L173,112 L170,115 L169,120 L167,124 L167,127 L161,132 L162,134 L161,134 L160,136 L158,135 L158,133 L159,132 L158,130 L156,132 L155,136 L155,132 L153,130 L148,130 L139,134 L134,139 L132,144 L132,147 L128,152 L127,161 L126,162 L127,164 L127,168 L128,169 L128,174 L131,178 L131,180 L132,181 L131,182 L131,189 L130,191 L127,193 L127,194 L128,195 L129,194 L130,202 L134,210 L133,212 L134,217 L131,212 L130,213 L130,215 L129,214 L127,216 L128,220 L127,219 L126,220 L126,222 L123,224 L123,226 L119,228 L117,228 L116,229 L117,231 L115,231 L113,228 L110,229 L107,226 L106,226 L104,228 L104,231 L100,234 L98,233 L97,235 L93,238 L91,238 L88,236 L86,236 L85,238 L84,236 L81,236 L77,238 L75,240 L75,243 L73,248 L71,249 L68,253 L64,252 L61,249 L62,248 L62,246 L63,246 L65,243 L68,245 L70,244 L68,241 L72,236 L73,231 L74,230 L72,228 L71,229 L69,227 L66,227 L66,218 L65,217 L60,217 L58,216 L57,214 L55,214 L57,213 L56,212 L56,208 L54,206 L49,207 L51,205 L50,203 L49,203 L48,205 L47,204 L44,204 L43,205 L44,206 L43,208 L40,210 L36,211 L34,213 L32,213 L32,210 L29,207 L25,207 L21,205 L19,207 L20,210 L18,210 L17,211 L16,210 L15,211 L16,204 L14,202 L14,199 L12,196 L14,196 L14,198 L15,199 L21,203 L22,202 L26,202 L27,205 L30,207 L31,205 L28,200 L29,199 L29,197 L33,195 L33,192 L30,189 L28,190 L29,193 L25,189 L20,189 L18,191 L18,193 L13,192 L11,188 L14,185 L12,183 L9,183 L7,180 L7,176 L8,175 L10,167 L6,165 L7,164 L7,162 L9,162 L11,164 L16,164 L17,165 L21,160 L20,153 L17,151 L17,149 L15,146 L17,144 L16,141 L19,139 L17,135 L17,132 L20,129 L25,128 L26,129 L33,129 L34,130 L38,130 L39,131 L47,131 L48,130 L54,133 L56,133 L61,129 L62,126 L64,126 L66,124 L71,124 L72,125 L74,125 L75,124 L78,126 L81,126 L84,123 L83,122 L85,122 L87,119 L89,118 L93,118 L95,119 L97,117 L98,115 L97,113 L97,108 L99,105 L104,105 L106,103 L109,103 L116,100 L118,100 L119,101 L120,100 L122,103 L124,103 L128,97 L128,95 L126,92 L129,89 L134,88 L136,92 L139,95 L143,97 L146,97 L147,96 L146,94 L147,93 L147,91 L146,90 L141,90 L140,89 L140,87 L142,88 L145,84 L148,84 L152,87 L156,87 L160,81 L164,81 L171,76 L177,75 L180,72 L180,69 L181,68 L182,63 L186,59 L189,58 L191,56 L190,54 L200,49 L207,51 L211,48 L211,46 L212,45 L210,42 L212,39 L212,34 L214,31 L216,31 L216,34 L219,37 L219,41 L220,42 L226,38 L228,34 L230,35 L231,37 L236,36 L237,35 L236,33 L238,31 L236,28 L236,26 L238,23 L240,21 L241,22 L243,22 L249,18 L249,16 L247,15 L246,12 L250,14 L252,12 L252,10 L253,12 L257,8 L259,10 L261,15 L263,14 L262,12 L264,13 L264,15 L267,20 L272,20 L273,19 L278,21 L279,20 L283,20 L285,17 L288,15 L289,11 L293,9 L295,9 L297,7 Z";

    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] text-[#C9A84C] pointer-events-none select-none overflow-hidden">
            <svg viewBox="-2 -2 310 284" className="w-[800px] md:w-[1200px] h-full object-contain" fill="currentColor" preserveAspectRatio="xMidYMid meet">
                <path d={AP} />
            </svg>
        </div>
    );
};

export function FlagDiscrepancy() {
    return (
        <section
            id="contact"
            data-theme="dark"
            className="relative z-10 py-28 md:py-36 bg-[#0A0A0A] border-b-[8px] border-[#C9A84C] overflow-hidden"
        >
            {/* Rich Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.1),transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(201,168,76,0.1),transparent_70%)] pointer-events-none" />

            {/* AP State Map Watermark */}
            <APMapWatermark />

            {/* Inner Decorative Framing for the entire segment */}
            <div className="absolute inset-4 md:inset-8 border-2 border-[#C9A84C]/20 pointer-events-none hidden md:block" />
            <div className="absolute inset-5 md:inset-[38px] border border-[#C9A84C]/10 pointer-events-none hidden md:block" />

            {/* Corner Filigree Borders */}
            <svg className="absolute top-4 left-4 w-12 h-12 text-[#C9A84C]/40 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M0,0 L100,0 L100,20 L20,20 L20,100 L0,100 Z" />
            </svg>
            <svg className="absolute top-4 right-4 w-12 h-12 text-[#C9A84C]/40 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M100,0 L0,0 L0,20 L80,20 L80,100 L100,100 Z" />
            </svg>
            <svg className="absolute bottom-4 left-4 w-12 h-12 text-[#C9A84C]/40 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M0,100 L100,100 L100,80 L20,80 L20,0 L0,0 Z" />
            </svg>
            <svg className="absolute bottom-4 right-4 w-12 h-12 text-[#C9A84C]/40 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M100,100 L0,100 L0,80 L80,80 L80,0 L100,0 Z" />
            </svg>

            <div className="max-w-4xl px-6 md:px-8 mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="w-8 h-[1px] bg-[#C9A84C]" />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A84C] flex items-center justify-center gap-2">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            Flag Discrepancy
                        </span>
                        <span className="w-8 h-[1px] bg-[#C9A84C]" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
                        Government price wrong?
                        <br />
                        <span className="text-[#C9A84C] drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]">Tell us.</span>
                    </h2>
                    <p className="mt-4 font-telugu text-lg md:text-xl text-[#C9A84C]/70 font-semibold italic">
                        ప్రభుత్వ ధర తప్పా? చెప్పండి.
                    </p>
                    <p className="mt-4 text-sm md:text-base text-white/50 leading-relaxed max-w-lg mx-auto">
                        If you believe the registered price doesn&apos;t reflect the actual market value, submit a report. Our AI will re-evaluate and flag it for review.
                    </p>
                </motion.div>

                {/* Form card — Luxury Dark Plaque */}
                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative bg-[#0F0F0F] p-8 md:p-14 rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-[#C9A84C]/50 max-w-3xl mx-auto flex flex-col gap-6"
                    style={{ backgroundImage: "linear-gradient(to bottom, #0A0A0A, #111)" }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    {/* Golden Corner Ornaments (SVG) */}
                    <svg className="absolute top-2 left-2 w-12 h-12 text-[#C9A84C] opacity-80 z-0" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M0,0 L100,0 L100,10 L10,10 L10,100 L0,100 Z" />
                        <circle cx="20" cy="20" r="4" fill="currentColor" />
                    </svg>
                    <svg className="absolute top-2 right-2 w-12 h-12 text-[#C9A84C] opacity-80 z-0" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M100,0 L0,0 L0,10 L90,10 L90,100 L100,100 Z" />
                        <circle cx="80" cy="20" r="4" fill="currentColor" />
                    </svg>
                    <svg className="absolute bottom-2 left-2 w-12 h-12 text-[#C9A84C] opacity-80 z-0" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M0,100 L100,100 L100,90 L10,90 L10,0 L0,0 Z" />
                        <circle cx="20" cy="80" r="4" fill="currentColor" />
                    </svg>
                    <svg className="absolute bottom-2 right-2 w-12 h-12 text-[#C9A84C] opacity-80 z-0" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M100,100 L0,100 L0,90 L90,90 L90,0 L100,0 Z" />
                        <circle cx="80" cy="80" r="4" fill="currentColor" />
                    </svg>

                    {/* Delicate Inner Borders */}
                    <div className="absolute inset-4 border border-[#C9A84C] opacity-30 pointer-events-none z-0" />
                    <div className="absolute inset-[22px] border border-[#C9A84C] opacity-10 pointer-events-none z-0" />

                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-white">
                                Submit Evaluation
                            </h3>
                            <span className="px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-[10px] font-bold uppercase tracking-widest rounded-full">
                                Secure Form
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-widest">
                                    Location / స్థానం
                                </label>
                                <input
                                    type="text"
                                    placeholder="Vijayawada, AP"
                                    className="w-full bg-[#0A0A0A]/50 border-b-2 border-transparent border-b-white/10 text-white px-4 py-3 focus:outline-none focus:border-b-[#C9A84C] focus:bg-[#C9A84C]/5 transition-all font-medium placeholder:text-white/20"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-widest">
                                    Survey Number / సర్వే నంబర్
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. 142/B"
                                    className="w-full bg-[#0A0A0A]/50 border-b-2 border-transparent border-b-white/10 text-white px-4 py-3 focus:outline-none focus:border-b-[#C9A84C] focus:bg-[#C9A84C]/5 transition-all font-medium placeholder:text-white/20"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 text-left mb-8">
                            <label className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-widest">
                                Your Estimated Price (₹) / మీ అంచనా ధర
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. ₹45,00,000"
                                className="w-full bg-[#0A0A0A]/50 border-b-2 border-transparent border-b-white/10 text-[#C9A84C] text-xl px-4 py-3 focus:outline-none focus:border-b-[#C9A84C] focus:bg-[#C9A84C]/5 transition-all font-bold placeholder:text-white/20"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <p className="text-[11px] text-white/40 font-medium text-left leading-relaxed max-w-[250px]">
                                * Not an official government portal. Reports are AI-reviewed and
                                cross-checked against multiple data sources.
                            </p>
                            <button className="w-full md:w-auto px-8 py-4 text-sm font-bold text-black bg-gradient-to-r from-[#C9A84C] to-[#e8c96a] rounded-sm hover:scale-105 shadow-[0_4px_20px_rgba(201,168,76,0.4)] transition-all">
                                Submit Report →
                            </button>
                        </div>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
