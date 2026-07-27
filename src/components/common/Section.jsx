import Container from "./Container";

function Section({
  children,
  className = "",
  containerClass = "",
  background = "bg-[var(--color-background)]",
}) {
  return (
    <section
        className={`${background} py-16 lg:py-20 ${className}`}
    >
      <Container className={containerClass}>
        {children}
      </Container>
    </section>
  );
}

export default Section;