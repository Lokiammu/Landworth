"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/AuthCard";
import { SudarshanChakra } from "@/components/SudarshanChakra";
import { ArrowLeft, Mail, UserPlus, AlertCircle } from "lucide-react";

export default function SignupPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to create account");
            }

            // Successful signup
            router.push("/dashboard");
            router.refresh();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <main className="min-h-screen bg-[#0A0A0A] bg-rangoli flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#C9A84C]/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#C9A84C]/5 blur-[120px] rounded-full" />
            </div>

            <div className="w-full max-w-md z-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-bold tracking-widest uppercase">Back to Home</span>
                </Link>

                <AuthCard
                    title="Join LandWorth"
                    subtitle="Create an account to track valuations and access professional land tools."
                >
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-xl text-sm flex items-center gap-3">
                                <AlertCircle size={18} />
                                <span>{error}</span>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A84C] block ml-1">
                                Full Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Arjun Reddy"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/50 transition-all font-medium"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A84C] block ml-1">
                                Email Address
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="yours@example.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/50 transition-all font-medium"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A84C] block ml-1">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/50 transition-all font-medium"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-[#C9A84C] to-[#e8c96a] text-black font-black py-4 rounded-xl shadow-[0_10px_20px_rgba(201,168,76,0.2)] hover:shadow-[0_15px_30px_rgba(201,168,76,0.3)] hover:scale-[1.02] transition-all active:scale-[0.98] mt-2 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            {isLoading ? (
                                <>
                                    <SudarshanChakra size={20} className="animate-spin" />
                                    <span>CREATING ACCOUNT...</span>
                                </>
                            ) : (
                                <>
                                    <UserPlus size={18} className="translate-y-[1px]" />
                                    <span>CREATE ACCOUNT</span>
                                </>
                            )}
                        </button>


                        <p className="text-center text-sm text-white/40 mt-8">
                            Already have an account?{" "}
                            <Link href="/login" className="text-[#C9A84C] font-bold hover:underline">
                                Log In
                            </Link>
                        </p>
                    </form>
                </AuthCard>

                <div className="mt-12 flex flex-col items-center gap-2 text-white/20">
                    <SudarshanChakra size={24} className="opacity-20 animate-spin-60s" />
                    <span className="text-[10px] font-telugu tracking-[0.2em] uppercase">LandWorth · సత్య మూల్య</span>
                </div>
            </div>
        </main>
    );
}
