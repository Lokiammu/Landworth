import React from "react";

interface APMapBackgroundProps {
    className?: string;
}

/**
 * Reusable Andhra Pradesh map background with decorative SVG outlines,
 * pulsing district markers, and glowing accent orbs.
 */
export function APMapBackground({ className = "" }: APMapBackgroundProps) {
    return (
        <>
            {/* Abstract AP Vector Map */}
            <div className={`absolute inset-0 z-0 flex items-center justify-center opacity-[0.12] pointer-events-none ${className}`}>
                <svg
                    viewBox="0 0 200 250"
                    className="w-[110%] h-[110%] text-[#C9A84C]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.6"
                >
                    {/* Main AP outline (simplified) */}
                    <path
                        d="M60,30 Q80,15 110,20 Q140,25 160,50 Q175,70 170,100 Q165,130 150,155 Q135,175 120,190 Q100,210 85,220 Q70,225 55,215 Q40,200 35,175 Q30,150 35,120 Q38,95 45,70 Q50,50 60,30Z"
                        fill="currentColor"
                        fillOpacity="0.04"
                        strokeWidth="0.8"
                    />

                    {/* Inner boundaries */}
                    <path d="M70,60 Q90,45 120,55 Q145,65 155,90" strokeDasharray="2,2" opacity="0.5" />
                    <path d="M45,120 Q65,110 90,115 Q120,120 140,140" strokeDasharray="2,2" opacity="0.5" />
                    <path d="M55,170 Q75,160 100,165 Q120,170 130,185" strokeDasharray="2,2" opacity="0.5" />

                    {/* District markers */}
                    {[
                        { cx: 100, cy: 55, label: "Visakhapatnam" },
                        { cx: 130, cy: 85, label: "Kakinada" },
                        { cx: 110, cy: 120, label: "Vijayawada" },
                        { cx: 85, cy: 150, label: "Guntur" },
                        { cx: 70, cy: 185, label: "Kurnool" },
                        { cx: 105, cy: 195, label: "Tirupati" },
                        { cx: 145, cy: 110, label: "Rajahmundry" },
                    ].map((d, i) => (
                        <g key={i}>
                            <circle
                                cx={d.cx}
                                cy={d.cy}
                                r={2.5}
                                fill="currentColor"
                                className="animate-pulse"
                                style={{ animationDelay: `${i * 0.5}s` }}
                            />
                            <circle cx={d.cx} cy={d.cy} r={5} fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
                        </g>
                    ))}

                    {/* Coastline detail */}
                    <path
                        d="M160,50 Q170,65 172,85 Q173,105 168,125 Q160,145 150,160 Q138,178 125,192"
                        strokeWidth="1"
                        opacity="0.3"
                        strokeDasharray="3,1"
                    />
                </svg>
            </div>

            {/* Glowing Accent Orbs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-[10%] left-[15%] w-[30%] h-[30%] bg-[#C9A84C]/8 blur-[100px] rounded-full" />
                <div className="absolute bottom-[20%] right-[10%] w-[35%] h-[35%] bg-[#C9A84C]/8 blur-[120px] rounded-full" />
            </div>
        </>
    );
}
