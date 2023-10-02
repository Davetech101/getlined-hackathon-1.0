import Image from "next/image";
import Section from "../_reuseable/Section";

const Attributes = () => {
  const attributesArr = [
    {
      heading: "Innovation and Creativity",
      txt: "Evaluate the uniqueness and creativity of  the  solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
    },
    {
      heading: "Functionality",
      txt: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
    },
    {
      heading: "Impact and Relevance",
      txt: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
    },
    {
      heading: "Technical Complexity",
      txt: " Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
    },
    {
      heading: "Adherence to Hackathon Rules",
      txt: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
    },
  ];

  const attributes = attributesArr.map((attr) => {
    return (
      <div className="text-2xl mb-4 pr-20" key={attr.heading}>
        <span className="text-darkPink mr-0.5">{attr.heading}:</span>
        <span className="text-lg">{attr.txt}</span>
      </div>
    );
  });
  return (
    <Section>
      <main className="relative py-28 px-32 flex items-center justify-between gap-36">
        <div className="w-full relative">
          <Image
            src={"/_assets/starPu.png"}
            alt={"star"}
            width={20}
            height={20}
          />
          <Image
            src={"/_assets/attr.png"}
            alt={"sittinglady"}
            width={500}
            height={500}
          />

          <Image
            src={"/_assets/star.png"}
            alt={"star"}
            width={20}
            height={20}
            className="absolute -right-4"

          />
        </div>

        <div className="">
          <h3 className="text-5xl mb-10">
            Judging Criteria
            <br /> <span className="text-pink block mt-4">Key attributes</span>
          </h3>

          {attributes}
          <button className="mt-4 inline-block bg-gradient-to-r from-pink to-blue px-14 py-3 text-2xl rounded">
            Register
          </button>
        </div>
      </main>
    </Section>
  );
};

export default Attributes;
