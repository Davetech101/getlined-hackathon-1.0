"use client";
import { useState, useCallback, SetStateAction } from "react";
import Image from "next/image";
import H3 from "../_reuseable/H3";
import Main from "../_reuseable/Main";
import Section from "../_reuseable/Section";

const Faq = () => {
  const [activeArc, setActiveArc] = useState();
  const [openArc, setOpenArc] = useState(false);

  const faq = [
    {
      idx: 1,
      q: "Can I work on a project I started before the hackathon?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia, expedita ex corporis explicabo aspernatur rerum, vel fuga deleniti, recusandae placeat eius! Nam cupiditate id veritatis laborum delectus dolores ullam!",
    },
    {
      idx: 2,
      q: "What happens if I need help during the hackathon?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia, expedita ex corporis explicabo aspernatur rerum, vel fuga deleniti, recusandae placeat eius! Nam cupiditate id veritatis laborum delectus dolores ullam!",
    },
    {
      idx: 3,
      q: "What happens if I don't have an idea for a project?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia, expedita ex corporis explicabo aspernatur rerum, vel fuga deleniti, recusandae placeat eius! Nam cupiditate id veritatis laborum delectus dolores ullam!",
    },
    {
      idx: 4,
      q: "What is the time frame required to complete the Hackathon?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia, expedita ex corporis explicabo aspernatur rerum, vel fuga deleniti, recusandae placeat eius! Nam cupiditate id veritatis laborum delectus dolores ullam!",
    },
    {
      idx: 5,
      q: "Can I work on a project I started before the hackathon?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia, expedita ex corporis explicabo aspernatur rerum, vel fuga deleniti, recusandae placeat eius! Nam cupiditate id veritatis laborum delectus dolores ullam!",
    },
  ];

  const handleClick = useCallback(
    (id: any) => {
      setActiveArc(id);
      if (id === activeArc) {
        setActiveArc(undefined);
      }
    },
    [activeArc]
  );

  const faqs = faq.map((faq) => {
    return (
      <div key={faq.idx} className="w-full">
        <button
          className="border-b border-pink text-2xl mt-4 mb-3 pb-4 flex items-center justify-between w-full"
          onClick={() => handleClick(faq.idx)}
        >
          <span className="">{faq.q}</span>{" "}
          <span className="inline-block text-pink text-4xl">
            {faq.idx === activeArc ? "-" : "+"}
          </span>
        </button>
        <div
          className={`text-pink text-xl transition-all duration-100 ${
            faq.idx === activeArc
              ? "h-20 visible opacity-100"
              : "text-xl h-0 invisible opacity-0"
          }`}
        >
          {faq.a}
        </div>
      </div>
    );
  });

  return (
    <Section>
      <Main>
        <div className="">
          <H3 head="Frequently Asked" span="Question" />

          <p className="text-2xl mb-20">
            We got answers to the questions that you <br /> might want to ask
            about getlinked Hackathon 1.0
          </p>

          {faqs}
        </div>

        <div className="relative w-full pt-10">
          <div className="">
            <div
              style={{ textShadow: "0 0 3px #A866FD, 0 0 5px #A866FD" }}
              className="text-bg absolute text-8xl -top-1 left-24"
            >
              ?
            </div>
            <div
              style={{ textShadow: "0 0 3px #D434FE, 0 0 5px #D434FE" }}
              className="text-bg absolute text-9xl left-64 -top-16"
            >
              ?
            </div>
            <div
              style={{ textShadow: "0 0 3px #A866FD, 0 0 5px #A866FD" }}
              className="text-bg absolute text-8xl right-72 -top-1"
            >
              ?
            </div>
          </div>

          <Image
            src={"/_assets/faq.png"}
            alt={"peoplestanding"}
            width={500}
            height={500}
            className="w-full"
          />

          <Image
            src={"/_assets/starPu.png"}
            alt={"star"}
            width={15}
            height={15}
            className="absolute right-96 top-1"
          />

          <Image
            src={"/_assets/starPu.png"}
            alt={"star"}
            width={15}
            height={15}
            className="absolute top-44 left-36"
          />
           <Image
            src={"/_assets/star2.png"}
            alt={"star"}
            width={20}
            height={20}
            className="absolute top-96"
          />
          <Image
            src={"/_assets/star.png"}
            alt={"star"}
            width={20}
            height={20}
            className="absolute right-44"
          />
        </div>
      </Main>
    </Section>
  );
};

export default Faq;
