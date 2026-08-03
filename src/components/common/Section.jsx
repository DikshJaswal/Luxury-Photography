import Container from "./Container";

function Section({
  children,
  className = "",
  containerClass = "",
  background = "bg-[var(--color-background)]",
  id,
}) {
  return (
    <section
      id={id}
      className={`${background} scroll-mt-24 py-16 lg:py-20 ${className}`}
    >
      <Container className={containerClass}>
        {children}
      </Container>
    </section>
  );
}

export default Section;
