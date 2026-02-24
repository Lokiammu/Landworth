"use client";

import React from "react";
import { motion } from "framer-motion";

export function FlagDiscrepancy() {
    return (
        <section
            id="contact"
            data-theme="dark"
            className="relative z-10 py-28 md:py-36 bg-[#0A0A0A] overflow-hidden"
        >
            {/* Giant ghost ₹ watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <span className="text-[300px] font-black text-[#C9A84C] opacity-[0.04] leading-none">
                    ₹
                </span>
            </div>

            <div className="max-w-4xl px-6 md:px-8 mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A84C] flex items-center justify-center gap-2 mb-4">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Flag Discrepancy
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
                        Government price wrong?
                        <br />
                        Tell us.
                    </h2>
                    <p className="mt-3 font-telugu text-lg text-[#C9A84C]">
                        ప్రభుత్వ ధర తప్పా? చెప్పండి.
                    </p>
                    <p className="mt-4 text-sm md:text-base text-white/45 leading-relaxed max-w-lg mx-auto">
                        If you believe the registered price doesn&apos;t reflect the actual market value, submit a report. Our AI will re-evaluate and flag it for review.
                    </p>
                </motion.div>

                {/* Form card — dark card with gold border */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-[#1A1A1A] p-8 md:p-12 rounded-2xl border border-[#C9A84C]/30 max-w-3xl mx-auto flex flex-col gap-6"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <h3 className="text-2xl font-black tracking-tighter text-white mb-2 text-left">
                        Submit Evaluation
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                                Location / స్థానం
                            </label>
                            <input
                                type="text"
                                placeholder="Vijayawada, AP"
                                className="w-full bg-[#0A0A0A] border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-all font-medium placeholder:text-white/20"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                                Survey Number / సర్వే నంబర్
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. 142/B"
                                className="w-full bg-[#0A0A0A] border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-all font-medium placeholder:text-white/20"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 text-left">
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                            Your Estimated Price (₹) / మీ అంచనా ధర
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. ₹45,00,000"
                            className="w-full bg-[#0A0A0A] border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-all font-medium placeholder:text-white/20"
                        />
                    </div>

                    <button className="mt-2 w-full md:w-auto self-end px-8 py-4 text-sm font-bold text-black bg-[#C9A84C] rounded-full hover:bg-[#e8c96a] hover:scale-105 shadow-[0_4px_20px_rgba(201,168,76,0.3)] transition-all">
                        Submit Report →
                    </button>

                    <p className="text-[11px] text-white/30 font-medium text-left leading-relaxed">
                        * Not an official government portal. Reports are AI-reviewed and
                        cross-checked against 5 data sources.
                    </p>
                </motion.form>
            </div>
        </section>
    );
}
