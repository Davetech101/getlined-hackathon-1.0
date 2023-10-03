"use client";
import { useState } from "react";
import Image from "next/image";
import H3 from "../_reuseable/H3";
import Main from "../_reuseable/Main";
import Section from "../_reuseable/Section";

const Faq = () => {
  const [activeArc, setActiveArc] = useState();
  const [arcIdx, setArcIdx] = useState();

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

  const faqs = faq.map((faq) => {
    return (
      <div key={faq.idx} className="w-full">
        <button className="border-b border-pink text-2xl mt-4 mb-3 pb-4 flex items-center justify-between w-full">
          <span className="">{faq.q}</span>{" "}
          <span className="inline-block  text-pink">+</span>
        </button>
        <div className="text-xl h-0 invisible">{faq.a}</div>
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

        <Image
          src={"/_assets/faq.png"}
          alt={"peoplestanding"}
          width={500}
          height={500}
          className="w-1/2"
        />
      </Main>
    </Section>
  );
};

export default Faq;
