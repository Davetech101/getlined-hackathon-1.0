/* eslint-disable react/no-unescaped-entities */
import Section from "../_reuseable/Section";
import Image from "next/image";
import H3 from "../_reuseable/H3";

const Intro = () => {
  return (
    <Section>
      <main className="relative py-28 px-32 flex items-center justify-between gap-36">
        <Image
          src={"/_assets/bigIdea.png"}
          alt={"idea"}
          width={500}
          height={500}
        />

        <div className="">
          <div className="flex items-center justify-between">
            <H3 head="Introduction to getlinked" span="tech Hackathon 1.0" />

            <Image
              src={"/_assets/starPu.png"}
              alt={"star"}
              width={30}
              height={20}
            />
          </div>

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
          src={"/_assets/arrow.png"}
          alt={"arrow"}
          width={50}
          height={50}
          className="absolute bottom-40 left-2/4 -ml-32"
        />
      </main>
    </Section>
  );
};

export default Intro;
