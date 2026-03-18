import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Saalim Al Marhubi — Links",
  description: "Full-stack developer & consultant. Find all my links here.",
  openGraph: {
    title: "Saalim Al Marhubi — Links",
    description: "Full-stack developer & consultant. Find all my links here.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body className="noise-overlay bg-slate-900 font-[family-name:var(--font-urbanist)] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
