type mainProps = { children: React.ReactNode };
const Main = ({ children }: mainProps) => {
  return (
    <main className="relative py-24 px-32 flex items-center justify-between gap-36">
        {children}
    </main>
  )
}

export default Main