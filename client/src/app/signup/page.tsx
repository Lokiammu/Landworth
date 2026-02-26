"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthLayout } from "@/components/AuthLayout";
import { AuthCard } from "@/components/AuthCard";
import { FormInput } from "@/components/FormInput";
import { SudarshanChakra } from "@/components/SudarshanChakra";
import { UserPlus, AlertCircle } from "lucide-react";
import { api } from "@/lib/api";

export default function SignupPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const { error: apiError } = await api.auth.signup(
            formData.name,
            formData.email,
            formData.password
        );

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

                    <FormInput
                        label="Full Name"
                        name="name"
                        type="text"
                        placeholder="Arjun Reddy"
                        value={formData.name}
                        onChange={handleChange}
                    />

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
                    />

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
        </AuthLayout>
    );
}
