import { AuthProvider } from "@/context/AuthContext";

/**
 * (auth) layout — Login/Signup pages.
 * Wrapped with AuthProvider so auth forms can use useAuth().
 */
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <AuthProvider>{children}</AuthProvider>;
}
