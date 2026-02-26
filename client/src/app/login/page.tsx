"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthLayout } from "@/components/AuthLayout";
import { AuthCard } from "@/components/AuthCard";
import { FormInput } from "@/components/FormInput";
import { SudarshanChakra } from "@/components/SudarshanChakra";
import { LogIn, AlertCircle } from "lucide-react";
import { api } from "@/lib/api";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const { error: apiError } = await api.auth.login(formData.email, formData.password);

        if (apiError) {
            setError(apiError);
            setIsLoading(false);
            return;
        }

        router.push("/dashboard");
        router.refresh();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <AuthLayout>
            <AuthCard
                title="Welcome Back"
                subtitle="Login to access your land valuation dashboard and saved records."
            >
                <form className="space-y-5" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-xl text-sm flex items-center gap-3">
                            <AlertCircle size={18} />
                            <span>{error}</span>
                        </div>
                    )}

                    <FormInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="yours@example.com"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        labelAction={
                            <Link
                                href="#"
                                className="text-[10px] font-bold text-white/30 hover:text-[#C9A84C] transition-colors uppercase tracking-wider"
                            >
                                Forgot Password?
                            </Link>
                        }
                    />

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-[#C9A84C] to-[#e8c96a] text-black font-black py-4 rounded-xl shadow-[0_10px_20px_rgba(201,168,76,0.2)] hover:shadow-[0_15px_30px_rgba(201,168,76,0.3)] hover:scale-[1.02] transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {isLoading ? (
                            <>
                                <SudarshanChakra size={20} className="animate-spin" />
                                <span>LOGGING IN...</span>
                            </>
                        ) : (
                            <>
                                <LogIn size={18} className="translate-y-[1px]" />
                                <span>LOG IN</span>
                            </>
                        )}
                    </button>

                    <p className="text-center text-sm text-white/40 mt-8">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="text-[#C9A84C] font-bold hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </AuthCard>
        </AuthLayout>
    );
}
