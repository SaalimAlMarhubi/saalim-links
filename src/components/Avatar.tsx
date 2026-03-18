export function Avatar() {
  return (
    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 via-purple-300 to-purple-500 p-[3px]">
      <img
        src="/profile.jpg"
        alt="Saalim Al Marhubi"
        className="h-full w-full rounded-full object-cover"
      />
    </div>
  );
}
