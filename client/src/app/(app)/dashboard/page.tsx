"use client";

import { useAuth } from "@/context/AuthContext";
import { Navbar } from "@/components/Navbar";
import { SudarshanChakra } from "@/components/SudarshanChakra";
import { LogOut, LayoutDashboard } from "lucide-react";

export default function DashboardPage() {
    const { user, isLoading, logout } = useAuth();

    if (isLoading) {
        return (
            <div className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex flex-col items-center justify-center gap-4">
                <SudarshanChakra size={48} className="animate-spin" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C9A84C]/60">
                    Loading...
                </span>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#0A0A0A] pt-28 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Welcome Header */}
                    <div className="flex items-center justify-between mb-12">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A84C] to-[#e8c96a] flex items-center justify-center shadow-[0_5px_20px_rgba(201,168,76,0.3)]">
                                <span className="text-2xl font-black text-black uppercase">
                                    {user?.name?.charAt(0) || "U"}
                                </span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-black text-white tracking-tight">
                                    Welcome back, <span className="text-[#C9A84C]">{user?.name?.split(" ")[0] || "User"}</span>
                                </h1>
                                <p className="text-sm text-white/40 mt-0.5">{user?.email}</p>
                            </div>
                        </div>

                        <button
                            onClick={logout}
                            className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.2em] text-[#C9A84C]/70 hover:text-[#C9A84C] border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 rounded-full transition-all hover:shadow-[0_0_15px_rgba(201,168,76,0.15)]"
                        >
                            <LogOut size={16} />
                            Logout
                        </button>
                    </div>

                    {/* Dashboard Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#C9A84C]/30 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <LayoutDashboard size={20} className="text-[#C9A84C]" />
                                <h3 className="text-lg font-bold text-white">Your Valuations</h3>
                            </div>
                            <p className="text-white/40 text-sm">
                                No land valuations yet. Start by searching for a property to get an AI-powered estimate.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#C9A84C]/30 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <SudarshanChakra size={20} />
                                <h3 className="text-lg font-bold text-white">Quick Actions</h3>
                            </div>
                            <p className="text-white/40 text-sm">
                                Access land records, compare market prices, and flag discrepancies from your dashboard.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
