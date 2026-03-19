"use client";

import posthog from "posthog-js";
import { Icon } from "./Icons";
import type { Link } from "@/lib/links";

export function LinkCard({ link, delay }: { link: Link; delay: number }) {
  const isFeatured = link.featured;

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        posthog.capture("link_clicked", {
          link_title: link.title,
          link_url: link.href,
          link_section: link.section,
        })
      }
      className={`animate-fade-up group relative flex items-center gap-4 overflow-hidden rounded-xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/5 ${
        isFeatured
          ? "border-emerald-500/15 bg-gradient-to-br from-emerald-500/8 to-slate-800"
          : "border-slate-700 bg-slate-800 hover:border-slate-600 hover:bg-slate-800/80"
      } delay-${delay}`}
    >
      {/* Purple hover fill — slides up from bottom */}
      <div
        className="absolute inset-0 translate-y-full bg-purple-300/[0.04] transition-transform duration-300 ease-out group-hover:translate-y-0"
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${link.iconTheme}`}
      >
        <Icon name={link.icon} />
      </div>

      {/* Text */}
      <div className="relative z-10 min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-100">{link.title}</span>
          {link.badge && (
            <span className="rounded-full bg-emerald-500/12 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-emerald-400">
              {link.badge}
            </span>
          )}
        </div>
        <p className="text-sm text-slate-400">{link.description}</p>
      </div>

      {/* Chevron */}
      <div className="relative z-10 text-slate-500 transition-all duration-200 group-hover:translate-x-1 group-hover:text-purple-400">
        <Icon name="chevron" />
      </div>
    </a>
  );
}
