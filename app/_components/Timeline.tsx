import Main from "../_reuseable/Main";
import Section from "../_reuseable/Section";

const Timeline = () => {
  const timeline = [
    {
      id: "1",
      name: "Hackathon Announcement",
      txt: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      date: "November 18, 2023",
    },

    {
      id: "2",
      name: "Teams Registration begins",
      txt: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
      date: "November 18, 2023",
    },
    {
      id: "3",
      name: "Teams Registration ends",
      txt: "Interested Participants are no longer Allowed to register",
      date: "November 18, 2023",
    },
    {
      id: "4",
      name: "",
      txt: "",
      date: "November 18, 2023",
    },
    {
      id: "5",
      name: "Announcement of the accepted teams and ideas",
      txt: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
      date: "November 18, 2023",
    },
    {
      id: "6",
      name: "Demo Day",
      txt: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
      date: "November 18, 2023",
    },
    {
      id: "",
      name: "",
      txt: "",
      date: "",
    },
  ];

  return (
    <Section>
      <Main>
        <h3 className="">Timeline</h3>

        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </Main>
    </Section>
  );
};

export default Timeline;
