import { Header } from "@/components/Header";
import { LinkSection } from "@/components/LinkSection";
import { QRCodeToggle } from "@/components/QRCodeToggle";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-[440px] flex-col items-center gap-10 px-6 py-16">
      {/* Subtle purple radial glow behind header */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.08) 0%, transparent 70%)",
        }}
      />

      <Header />
      <LinkSection section="connect" label="Connect" startDelay={1} />
      <LinkSection section="work" label="Work" startDelay={5} />
      <QRCodeToggle />
      <Footer />
    </main>
  );
}
