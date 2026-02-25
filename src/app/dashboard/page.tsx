"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function DashboardPage() {
    const router = useRouter();

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/");
        router.refresh();
    };

    return (
        <main className="min-h-screen bg-[#0A0A0A] flex items-start justify-end p-6">
            <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.2em] text-[#C9A84C]/70 hover:text-[#C9A84C] border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 rounded-full transition-all hover:shadow-[0_0_15px_rgba(201,168,76,0.15)]"
            >
                <LogOut size={16} />
                Logout
            </button>
        </main>
    );
}
