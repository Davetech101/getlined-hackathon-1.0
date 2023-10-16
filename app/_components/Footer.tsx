import React from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "../_reuseable/Section";

const Footer = () => {
  return (
    <Section>
      <main className="px-44 py-32">
        <div className="">
          <Link href="/" className="text-5xl">
            <span className="">get</span>
            <span className="text-pink">linked</span>
          </Link>

          <p>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>

          <small>Terms of Use Privacy Policy</small>
        </div>

        <ul className="">
          <li>Useful links</li>
          <li>Overview</li>
          <li>Timeline</li>
          <li>Timeline</li>
          <li>FAq</li>
          <li>Register</li>

          <li className="flex items-center">
            Follow us
            <Image
              src={"/_assets/instagram.svg"}
              alt={"ig"}
              width={20}
              height={20}
              className=""
            />
            <Image
              src={"/_assets/vector.svg"}
              alt={"x"}
              width={20}
              height={20}
              className=""
            />
            <Image
              src={"/_assets/fb.svg"}
              alt={"fb"}
              width={20}
              height={20}
              className=""
            />
            <Image
              src={"/_assets/linkedin.svg"}
              alt={"in"}
              width={20}
              height={20}
              className=""
            />
          </li>
        </ul>

        <ul>
          <li>
            <Image
              src={"/_assets/group.svg"}
              alt={"phone"}
              width={20}
              height={20}
              className=""
            />
            +234 6707653444
          </li>

          <li>
            <Image
              src={"/_assets/loc.svg"}
              alt={"location"}
              width={20}
              height={20}
              className=""
            />

            <div className="">
              27,Alara Street <br /> Yaba 100012 <br /> Lagos State
            </div>
          </li>
        </ul>
      </main>
    </Section>
  );
};

export default Footer;
