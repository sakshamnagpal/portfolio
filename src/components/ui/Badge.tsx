export function Badge({ label }: { label: string }) {
  return (
    <span className="font-mono text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full">
      {label}
    </span>
  );
}
