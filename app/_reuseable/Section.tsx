
type secProps = { children: React.ReactNode };
const Section = ({ children }: secProps) => {
  return (
    <section className="flex">
        {children}
    </section>
  )
}

export default Section