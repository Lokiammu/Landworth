"use client";

import React from "react";
import { motion } from "framer-motion";
import { SudarshanChakra } from "./SudarshanChakra";

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function AuthCard({ children, title, subtitle }: AuthCardProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Ghost Chakra Background */}
      <div className="absolute -top-12 -right-12 pointer-events-none opacity-10">
        <SudarshanChakra size={160} className="animate-spin-60s" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 overflow-hidden bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
      >
        {/* Top Border Gradient */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-black tracking-tight text-white mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-white/50 font-medium">
                {subtitle}
              </p>
            )}
          </div>

          {children}
        </div>
      </motion.div>

      {/* Bottom accent */}
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#C9A84C]/5 blur-3xl -z-10 rounded-full" />
    </div>
  );
}
