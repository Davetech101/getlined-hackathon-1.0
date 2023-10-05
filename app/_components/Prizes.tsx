import Image from "next/image";
import Section from "../_reuseable/Section";
import H3 from "../_reuseable/H3";

const Prizes = () => {
  return (
    <Section>
      <main className="relative py-24 px-32 flex">
        <Image
          src={"/_assets/prize.png"}
          alt={"prize"}
          width={500}
          height={500}
          className=""
        />

        <div className="">
          <H3 head={"Prizes and"} span={"Rewards"} />

          <p className="text-2xl mb-20">
            Highlight of the prizes or rewards for winners and for
            participants.
          </p>

          <div className="flex gap-10">
            <div className="">
              <Image
                src={"/_assets/second.png"}
                alt={"2nd"}
                width={200}
                height={200}
                className=""
              />
              <h4>2nd</h4>
              <p>Runner</p>
              <p className="">N300,000</p>
            </div>

            <div className="">
              <Image
                src={"/_assets/first.png"}
                alt={"1st"}
                width={250}
                height={250}
                className=""
              />
              <h4>1st</h4>
              <p>Runner</p>
              <p className="">N500,000</p>
            </div>

            <div className="">
              <Image
                src={"/_assets/third.png"}
                alt={"3rd"}
                width={200}
                height={200}
                className=""
              />
              <h4>3rd</h4>
              <p>Runner</p>
              <p className="">N150,000</p>
            </div>
          </div>
        </div>
      </main>
    </Section>
  );
};

export default Prizes;
