import Image from "next/image";
import H3 from "../_reuseable/H3";
import Section from "../_reuseable/Section";

const Privacy = () => {
  return (
    <Section>
      <main className="py-32 px-32 flex items-center justify-between">
        <div className="w-2/4">
            <H3 head="Privacy Policy and" span="Terms" />

            <p className="mb-8 text-xl">Last updated on September 12, 2023</p>

            <p className="text-xl mb-20 pr-72">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>

          <div className="border border-pink p-24">
            <p className="text-xl mb-8">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <div className="mb-8">
              <h6 className="text-pink text-xl">Licensing Policy</h6>
              <p className="text-xl">Here are terms of our Standard License:</p>
            </div>

              <div className="flex items-start gap-10 mb-8">
                <Image
                  src={"/_assets/check.svg"}
                  alt={"check"}
                  width={20}
                  height={20}
                  className=""
                />
                <p className="text-xl">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="flex items-start gap-10">
                <Image
                  src={"/_assets/check.svg"}
                  alt={"check"}
                  width={20}
                  height={20}
                  className=""
                />
                <p className="text-xl">
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>

              <button className="mx-auto mt-12 block bg-gradient-to-r from-pink to-blue px-14 py-3 text-2xl rounded">
                Read More
              </button>
          </div>
        </div>
        <div className="">
          <Image
            src={"/_assets/privacy.svg"}
            alt={"privacy"}
            width={200}
            height={200}
            className=""
          />
          <Image
            src={"/_assets/privacy.png"}
            alt={"lock"}
            width={200}
            height={200}
            className=""
          />
        </div>
      </main>
    </Section>
  );
};

export default Privacy;
