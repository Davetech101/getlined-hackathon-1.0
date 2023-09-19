import Link from "next/link";

const Header = () => {
  const flex = "flex items-center justify-between";
  const liStyles = "text-2xl"

  return (
    <header className="px-24 py-16 border-b-border border-b">
      <div className={`${flex}`}>
        <Link href="/" className="text-5xl">
          <span className="">get</span>
          <span className="text-pink">linked</span>
        </Link>

        <div className={`${flex} w-7/12 gap-60`}>
          <nav className="w-full">
            <ul className={`${flex} w-full`}>
            <li className={liStyles}>
                <Link href="/">Timeline</Link>
              </li>
              <li className={liStyles}>
                <Link href="/">Overview</Link>
              </li>
              <li className={liStyles}>
                <Link href="/">FAQs</Link>
              </li>
              <li className={liStyles}>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </nav>

          <button className="bg-gradient-to-r from-pink to-blue px-14 py-3 text-2xl rounded">Register</button>
        </div>
      </div>
      <div className="mobile"></div>
    </header>
  );
};

export default Header;
