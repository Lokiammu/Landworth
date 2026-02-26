import { MarketingNavbar } from "@/components/MarketingNavbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustAuthenticity } from "@/components/TrustAuthenticity";
import { FlagDiscrepancy } from "@/components/FlagDiscrepancy";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="relative">
            <MarketingNavbar />
            <Hero />
            <Features />
            <HowItWorks />
            <TrustAuthenticity />
            <FlagDiscrepancy />
            <Footer />
        </main>
    );
}
