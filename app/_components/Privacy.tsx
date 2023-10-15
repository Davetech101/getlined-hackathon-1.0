import Image from "next/image";
import H3 from "../_reuseable/H3";
import Section from "../_reuseable/Section";

const Privacy = () => {
  return (
    <Section>
      <main className="py-32 px-32 flex items-center justify-between">
        <div className="">
          <div className="">
            <H3 head="Privacy Policy and" span="Terms" />

            <p>Last updated on September 12, 2023</p>

            <p className="">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>

          <div className="">
            <p className="">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <div className="">
              <h6 className="">Licensing Policy</h6>
              <p className="">Here are terms of our Standard License:</p>
            </div>

            <div className="">
              <div className="">
              <Image
              src={"/_assets/check.svg"}
              alt={"check"}
              width={20}
              height={20}
              className=""
            />
                <p className="">The Standard License grants you a non-exclusive right to
                navigate and register for our event</p>
              </div>
              <div className="">
              <Image
              src={"/_assets/check.svg"}
              alt={"check"}
              width={20}
              height={20}
              className=""
            />
                <p className="">You are licensed to use the item available at any free source
                sites, for your project developement</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
        <Image
              src={"/_assets/privacy.svg"}
              alt={"privacy"}
              width={200}
              height={200}
              className=""
            /><Image
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
