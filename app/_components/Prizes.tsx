import Image from "next/image";
import Section from "../_reuseable/Section";
import H3 from "../_reuseable/H3";

const Prizes = () => {
  return (
    <Section>
      <main className="relative py-24 px-32 flex items-center">
        <Image
          src={"/_assets/prize.png"}
          alt={"prize"}
          width={500}
          height={500}
          className=""
        />

        <div className="">
          <H3 head={"Prizes and"} span={"Rewards"} />

          <p className="text-2xl mb-72">
            Highlight of the prizes or rewards for winners and <br /> for participants.
          </p>

          <div className="flex gap-10 -mt-20">
            <div className="text-center ">
              <Image
                src={"/_assets/second.png"}
                alt={"2nd"}
                width={200}
                height={200}
                className="relative z-10"
              />
              <div className="relative -top-28  bg-lightPink border pt-40 pb-14 border-border rounded-2xl">
                <h4 className="text-4xl">2nd</h4>
                <p className="text-2xl mb-4">Runner</p>
                <p className="text-pink text-3xl">N300,000</p>
              </div>
            </div>

            <div className="text-center">
              <Image
                src={"/_assets/first.png"}
                alt={"1st"}
                width={300}
                height={300}
                className="relative -top-20 z-10"
              />

              <div className="relative -top-60 bg-lightBlue border  pt-40 pb-16 -pr-16 border-border rounded-2xl">
                <h4 className="text-5xl">1st</h4>
                <p className="text-2xl mb-4">Runner</p>
                <p className="text-blue text-3xl">N400,000</p>
              </div>
            </div>

            <div className="text-center">
              <Image
                src={"/_assets/third.png"}
                alt={"3rd"}
                width={200}
                height={200}
                className="relative z-10"
              />
              <div className="relative -top-28 bg-lightPink border pt-40 pb-14 border-border rounded-2xl">
                <h4 className="text-4xl">3rd</h4>
                <p className="text-2xl mb-4">Runner</p>
                <p className="text-pink text-3xl">N150,000</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Section>
  );
};

export default Prizes;
