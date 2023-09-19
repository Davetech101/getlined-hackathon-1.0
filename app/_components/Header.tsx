import Link from "next/link"

const Header = () => {
  return (
    <header className="p-10">
        <div className="">
            <Link href="/" className="text-5xl"><span className="">get</span><span className="">linked</span></Link>

            <nav>
                <ul>
                    <li>
                        <Link href="/">Timeline</Link>
                        <Link href="/">Overview</Link>
                        <Link href="/">FAQs</Link>
                        <Link href="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            <button className="">Register</button>
        </div>
        <div className="mobile"></div>
    </header>
  )
}

export default Header