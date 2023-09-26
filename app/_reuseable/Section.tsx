
type secProps = { children: React.ReactNode };
const Section = ({ children }: secProps) => {
  return (
    <section className="flex items-center justify-between py-20 px-24">
        {children}
    </section>
  )
}

export default Section