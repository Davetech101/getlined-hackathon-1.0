import H3 from "../_reuseable/H3";
import Main from "../_reuseable/Main";
import Section from "../_reuseable/Section";

const Faq = () => {
  const faq = [
    {
      q: "Can I work on a project I started before the hackathon?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia, expedita ex corporis explicabo aspernatur rerum, vel fuga deleniti, recusandae placeat eius! Nam cupiditate id veritatis laborum delectus dolores ullam!",
    },
    {
      q: "What happens if I need help during the hackathon?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia, expedita ex corporis explicabo aspernatur rerum, vel fuga deleniti, recusandae placeat eius! Nam cupiditate id veritatis laborum delectus dolores ullam!",
    },
    {
      q: "What happens if I don't have an idea for a project?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia, expedita ex corporis explicabo aspernatur rerum, vel fuga deleniti, recusandae placeat eius! Nam cupiditate id veritatis laborum delectus dolores ullam!",
    },
    {
      q: "What is the time frame required to complete the Hackathon?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia, expedita ex corporis explicabo aspernatur rerum, vel fuga deleniti, recusandae placeat eius! Nam cupiditate id veritatis laborum delectus dolores ullam!",
    },
    {
      q: "Can I work on a project I started before the hackathon?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia, expedita ex corporis explicabo aspernatur rerum, vel fuga deleniti, recusandae placeat eius! Nam cupiditate id veritatis laborum delectus dolores ullam!",
    },
  ];

  return (
    <Section>
      <Main>
        <div className="">
          <H3 head="Frequently Asked" span="Question" />

          <p className="">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
        </div>
      </Main>
    </Section>
  );
};

export default Faq;
