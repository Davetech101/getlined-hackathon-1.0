import Image from "next/image";
import Section from "../_reuseable/Section";

const Timeline = () => {
  const timeline = [
    {
      id: 1,
      name: "Hackathon Announcement",
      txt: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      date: "November 18, 2023",
    },

    {
      id: 2,
      name: "Teams Registration begins",
      txt: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
      date: "November 18, 2023",
    },
    {
      id: 3,
      name: "Teams Registration ends",
      txt: "Interested Participants are no longer Allowed to register",
      date: "November 18, 2023",
    },
    {
      id: 4,
      name: "Announcement of the accepted teams and ideas",
      txt: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
      date: "November 18, 2023",
    },
    {
      id: 5,
      name: "Getlinked Hackathon 1.0 Offically Begins",
      txt: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
      date: "November 18, 2023",
    },
    {
      id: 6,
      name: "Demo Day",
      txt: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
      date: "November 18, 2023",
    },
  ];

  const line = timeline.map((line) => {
    return (
      <div key={line.id} className={`flex items-center justify-center gap-24  ${line.id % 2 === 0 ? "flex-row-reverse": "flex-row"}`}>
        <div className={`w-5/12 mb-12 ${line.id % 2 === 0 ? "text-left" : "text-right"}`}>
          <h3 className="text-2xl text-pink mb-4">{line.name}</h3>
          <p className="text-lg">{line.txt}</p>
        </div>

        <div className="bg-gradient-to-r from-pink to-blue w-10 h-10 rounded-full text-center flex items-center justify-center relative">{line.id} <div className="absolute bg-pink w-1 h-20 -top-24"></div></div>

        <p className={`text-2xl text-pink w-5/12 ${line.id % 2 === 0 ? "text-right" : "text-left"}`}>{line.date}</p>
      </div>
    );
  });

  return (
    <Section>
        <main className="relative py-24 px-32 flex items-center flex-col justify-center w-full relative">
          <h3 className="text-4xl mb-6">Timeline</h3>

          <p className="text-xl w-2/6 text-center mb-40">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>

          {line}

          <Image
            src={"/_assets/starPu.png"}
            alt={"star"}
            width={15}
            height={15}
            className="absolute top-64 left-96"
          />
           <Image
            src={"/_assets/star2.png"}
            alt={"star"}
            width={20}
            height={20}
            className="absolute bottom-40 left-80"
          />
          <Image
            src={"/_assets/star.png"}
            alt={"star"}
            width={20}
            height={20}
            className="absolute right-96"
          />
        </main>
    </Section>
  );
};

export default Timeline;
