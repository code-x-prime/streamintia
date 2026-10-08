import type { Metadata, Viewport } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import { site } from "@/config/site";
import { assets } from "@/config/assets";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Container } from "@/components/ui/Container";
import { DotGridBackground } from "@/components/layout/DotGridBackground";
import { themeInitScript } from "@/components/layout/ThemeToggle";
import "./globals.css";
import "@/styles/campaign.css";
import "@/styles/typography.css";
import "@/styles/dark.css";
const display = Manrope({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = DM_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  icons: { icon: assets.brand.icon, apple: assets.brand.icon },
  robots: { index: site.indexable, follow: site.indexable },
  alternates: { types: { "application/rss+xml": "/blog/feed.xml" } },
};
export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light dark",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${display.variable} ${body.variable} antialiased max-[767px]:pb-20`}
      >
        <DotGridBackground />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="py-8">
          <Container>{children}</Container>
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
