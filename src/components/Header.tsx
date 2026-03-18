import { Avatar } from "./Avatar";

export function Header() {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <Avatar />
      <div>
        <h1 className="text-3xl font-extrabold tracking-tighter text-slate-100">
          Saalim Al Marhubi
        </h1>
        <p className="mt-1.5 bg-gradient-to-tr from-purple-500 via-purple-200 to-purple-500 bg-clip-text text-sm font-bold uppercase tracking-[.2em] text-transparent">
          Full-Stack Developer &amp; Consultant
        </p>
      </div>
    </header>
  );
}
