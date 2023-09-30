
type secProps = { children: React.ReactNode };
const Section = ({ children }: secProps) => {
  return (
    <section className="flex items-center justify-between border-b border-border">
        {children}
    </section>
  )
}

export default Section