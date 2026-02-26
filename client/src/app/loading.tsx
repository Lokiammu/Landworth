import { SudarshanChakra } from "@/components/SudarshanChakra";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex flex-col items-center justify-center gap-4">
            <SudarshanChakra size={48} className="animate-spin" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C9A84C]/60">
                Loading...
            </span>
        </div>
    );
}
