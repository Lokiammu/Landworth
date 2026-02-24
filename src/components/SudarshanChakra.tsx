"use client";

import React from "react";

/**
 * Sudarshana Chakra — Vishnu's spinning disc.
 * A circular wheel with radiating spokes and flame-like edges.
 */
export function SudarshanChakra({
    size = 36,
    className = "",
    style,
}: {
    size?: number;
    className?: string;
    style?: React.CSSProperties;
}) {
    const spokes = 24;
    const cx = 50,
        cy = 50;

    return (
        <svg
            viewBox="0 0 100 100"
            width={size}
            height={size}
            className={className}
            style={style}
            fill="none"
        >
            <defs>
                <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C9A84C" />
                    <stop offset="100%" stopColor="#E8C96A" />
                </linearGradient>
            </defs>

            {/* Outer dotted aura ring */}
            <circle cx={cx} cy={cy} r={47} stroke="url(#gold-grad)" strokeWidth="1" strokeDasharray="2 4" opacity={0.4} />

            {/* Inner jagged/layered rings */}
            <circle cx={cx} cy={cy} r={39} stroke="url(#gold-grad)" strokeWidth="2" opacity={0.8} />
            <circle cx={cx} cy={cy} r={33} stroke="url(#gold-grad)" strokeWidth="1.5" opacity={0.5} />

            {/* Central core */}
            <circle cx={cx} cy={cy} r={10} stroke="url(#gold-grad)" strokeWidth="2" fill="#0A0A0A" />
            <circle cx={cx} cy={cy} r={4} fill="url(#gold-grad)" />

            {/* 24 Curved Blades (Spokes) & Flames */}
            {Array.from({ length: spokes }).map((_, i) => {
                const angle = (i * 360) / spokes;
                const rad = (angle * Math.PI) / 180;

                // Base of the blade
                const innerX = (cx + 10 * Math.cos(rad)).toFixed(3);
                const innerY = (cy + 10 * Math.sin(rad)).toFixed(3);

                // Tip of the blade
                const outerX = (cx + 39 * Math.cos(rad + 0.15)).toFixed(3);
                const outerY = (cy + 39 * Math.sin(rad + 0.15)).toFixed(3);

                // Control point for quadratic curve (gives it the swoosh)
                const ctrlX = (cx + 25 * Math.cos(rad - 0.2)).toFixed(3);
                const ctrlY = (cy + 25 * Math.sin(rad - 0.2)).toFixed(3);

                // Flame tips outside the ring
                const fx = (cx + 49 * Math.cos(rad + 0.05)).toFixed(3);
                const fy = (cy + 49 * Math.sin(rad + 0.05)).toFixed(3);

                return (
                    <g key={i}>
                        {/* Curved Blade */}
                        <path
                            d={`M ${innerX} ${innerY} Q ${ctrlX} ${ctrlY} ${outerX} ${outerY}`}
                            stroke="url(#gold-grad)"
                            strokeWidth={i % 2 === 0 ? "1.6" : "0.8"}
                            opacity={i % 2 === 0 ? 1 : 0.6}
                            fill="none"
                        />
                        {/* Outer Flames every 3rd blade */}
                        {i % 3 === 0 && (
                            <line
                                x1={outerX}
                                y1={outerY}
                                x2={fx}
                                y2={fy}
                                stroke="url(#gold-grad)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                opacity={0.9}
                            />
                        )}
                        {/* Micro triangles on outer ring for serrated edge */}
                        <polygon
                            points={`
                                ${(cx + 39 * Math.cos(rad)).toFixed(3)},${(cy + 39 * Math.sin(rad)).toFixed(3)}
                                ${(cx + 43 * Math.cos(rad + 0.05)).toFixed(3)},${(cy + 43 * Math.sin(rad + 0.05)).toFixed(3)}
                                ${(cx + 39 * Math.cos(rad + 0.1)).toFixed(3)},${(cy + 39 * Math.sin(rad + 0.1)).toFixed(3)}
                            `}
                            fill="url(#gold-grad)"
                            opacity={0.4}
                        />
                    </g>
                );
            })}
        </svg>
    );
}
