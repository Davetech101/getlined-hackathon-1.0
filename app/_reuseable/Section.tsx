
type secProps = { children: React.ReactNode };
const Section = ({ children }: secProps) => {
  return (
    <section className="">
        {children}
    </section>
  )
}

export default Section