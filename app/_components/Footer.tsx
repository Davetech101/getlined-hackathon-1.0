import React from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "../_reuseable/Section";

const Footer = () => {
  return (
    <Section>
      <main className="px-44 py-32 flex flex-col items-center justify-center gap-14">
        <div className="flex items-center justify-between">
          <div className="w-2/6 flex flex-col justify-between">
            <Link href="/" className="text-5xl">
              <span className="">get</span>
              <span className="text-pink">linked</span>
            </Link>

            <p className="text-xl mt-6">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>

            <small className="block flex items-center gap-4 text-xl mt-24">Terms of Use <div className="w-1 h-8 bg-pink inline-block"></div> Privacy Policy</small>
          </div>

          <ul className="flex flex-col items-start gap-4">
            <li className="text-xl text-pink">Useful links</li>
            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>

            <li className="flex items-center text-xl text-pink gap-4">
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
                width={10}
                height={10}
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

          <ul className="flex flex-col items-start gap-6">
            <li className="text-xl text-pink items-center">Contact Us</li>
            <li className="flex gap-6">
              <Image
                src={"/_assets/group.svg"}
                alt={"phone"}
                width={20}
                height={20}
                className=""
              />
              +234 6707653444
            </li>

            <li className="flex gap-6 items-start">
              <Image
                src={"/_assets/location.svg"}
                alt={"location"}
                width={20}
                height={20}
                className=""
              />

              <div className="">
                27, Alara Street <br /> Yaba 100012 <br /> Lagos State
              </div>
            </li>
          </ul>
        </div>
        <p className="">All rights reserved. © getlinked Ltd</p>
      </main>
    </Section>
  );
};

export default Footer;
