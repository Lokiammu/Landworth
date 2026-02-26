/**
 * (marketing) layout — Static landing page segment.
 * No AuthProvider, no dynamic auth checks.
 * The Navbar here uses a lightweight static version.
 */
export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
