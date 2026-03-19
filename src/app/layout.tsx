import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Saalim Al Marhubi — Links",
  description: "Full Stack Developer. Find all my links here.",
  openGraph: {
    title: "Saalim Al Marhubi — Links",
    description: "Full Stack Developer. Find all my links here.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔗</text></svg>",
        type: "image/svg+xml",
      },
    ],
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
