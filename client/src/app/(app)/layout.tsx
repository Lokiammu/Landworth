import { AuthProvider } from "@/context/AuthContext";

/**
 * (app) layout — Protected authenticated pages.
 * Wrapped with AuthProvider for full session management.
 */
export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <AuthProvider>{children}</AuthProvider>;
}
