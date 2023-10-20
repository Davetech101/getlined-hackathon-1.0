"use client"

import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import NavLink from "next/link";
import RegisterBtn from "../_reuseable/RegisterBtn";

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  console.log(pathname);
  
  const flex = "flex items-center justify-between";
  const liStyles = "text-2xl p-2 hover:text-pink"
  const linkStyles = "active:bg-violet-700"

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.body.getBoundingClientRect().top <= -90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <header className={`px-24 py-10 border-b-border border-b z-50 transition-all   ${scrolled ? "fixed bg-bground w-full" : ""}`}>
      <div className={`${flex}`}>
        <NavLink href="/" className="text-5xl">
          <span className="">get</span>
          <span className="text-pink">linked</span>
        </NavLink>

        <div className={`${flex} w-7/12 gap-60`}>
          <nav className="w-full">
            <ul className={`${flex} w-full`}>
            <li className={liStyles}>
                <NavLink href="/" className={linkStyles}>Timeline</NavLink>
              </li>
              <li className={liStyles}>
                <NavLink href="/" className={linkStyles}>Overview</NavLink>
              </li>
              <li className={liStyles}>
                <NavLink href="/" className={linkStyles}>FAQs</NavLink>
              </li>
              <li className={liStyles}>
                <NavLink href="/contact" className={pathname == "/contact" ? "bg-gradient-to-r from-blue to-pink bg-clip-text text-transparent" : " "} >Contact</NavLink>
              </li>
            </ul>
          </nav>

          <RegisterBtn/>
        </div>
      </div>
      <div className="mobile"></div>
    </header>
  );
};

export default Header;
