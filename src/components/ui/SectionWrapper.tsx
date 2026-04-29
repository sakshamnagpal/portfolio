export function SectionWrapper({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-24 max-w-6xl mx-auto px-6">
      {children}
    </section>
  );
}
