export default function Section({ children, className = "" }) {
  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}