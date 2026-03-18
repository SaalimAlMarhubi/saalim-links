"use client";

import { useState, useEffect } from "react";

export function QRCodeToggle() {
  const [show, setShow] = useState(false);
  const [qrSrc, setQrSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!show) return;

    let cancelled = false;

    import("qrcode").then((mod) => {
      const QRCode = mod.default ?? mod;
      QRCode.toDataURL(window.location.href, {
        width: 200,
        margin: 2,
        color: {
          dark: "#0f172a",
          light: "#ffffff",
        },
      }).then((url: string) => {
        if (!cancelled) setQrSrc(url);
      });
    });

    return () => {
      cancelled = true;
    };
  }, [show]);

  return (
    <div className="animate-fade-up delay-7 flex w-full flex-col items-center gap-4">
      <button
        onClick={() => setShow(!show)}
        aria-expanded={show}
        className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300 transition-colors duration-200 hover:border-slate-600 hover:text-slate-100"
      >
        {show ? "Hide QR Code" : "Show QR Code"}
      </button>

      {show && (
        <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-4">
          {qrSrc ? (
            <img src={qrSrc} alt="QR code for this page" width={200} height={200} />
          ) : (
            <div className="flex h-[200px] w-[200px] items-center justify-center">
              <span className="text-sm text-slate-400">Loading…</span>
            </div>
          )}
          <p className="text-xs text-slate-500">Scan to open this page</p>
        </div>
      )}
    </div>
  );
}
