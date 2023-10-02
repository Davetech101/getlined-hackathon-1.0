/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Section from "../_reuseable/Section";
import H3 from "../_reuseable/H3";


const Rules = () => {
  return (
    <Section>
      <main className="relative py-24 px-32 flex items-center justify-between gap-36">
        <div className="">
        <H3 head="Rules and" span="Guidelines"/>
          

          <p className="text-xl leading-10">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>

        <Image
          src={"/_assets/rules.png"}
          alt={"peoplestanding"}
          width={500}
          height={500}
        />
      </main>
    </Section>
  );
};

export default Rules;
