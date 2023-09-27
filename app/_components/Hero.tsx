import Section from "../_reuseable/Section";
import RegisterBtn from "../_reuseable/RegisterBtn";
import Image from "next/image";

const Hero = () => {
  const nomStyles = ''
  return (
    <Section>
      <div className="">
        <div className="star">
          <Image
            src={"/_assets/star.png"}
            alt={"star"}
            width={20}
            height={20}
          />
        </div>

        <h2 className="">
          <div className="bulb">
            <Image
              src={"/_assets/creative.png"}
              alt={"star"}
              width={20}
              height={20}
            />
          </div>
          <p className="text-9xl ">
            getlinked Tech <br /> Hackathon{" "}
            <span className="text-pink inline-flex items-center justify-center">
              1.0{" "}
              <div className="chain">
                <Image
                  src={"/_assets/chain.png"}
                  alt={"star"}
                  width={60}
                  height={60}
                  className="w-24"
                />
              </div>
              <div className="fire">
                <Image
                  src={"/_assets/fire.png"}
                  alt={"star"}
                  width={60}
                  height={60}
                  className="w-24"
                />
              </div>
            </span>
          </p>
        </h2>

        <small className="text-3xl pr-24 w-3/4 mt-10 mb-14 block">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </small>

        <RegisterBtn />

        <div className="star absolute">
          <Image
            src={"/_assets/star2.png"}
            alt={"star"}
            width={20}
            height={20}
          />
        </div>

        <div className="flex items-center gap-10">
          <div className="text-8xl">
            00 <small className="text-xl -ml-3 inline-block">H</small>
          </div>
          <div className="">
            00 <small className="">M</small>
          </div>
          <div className="">
            00 <small className="">S</small>
          </div>
        </div>
      </div>
      <div className="">
        <h3>Igniting a Revolution in HR Innovation</h3>

        <Image
          src={"/_assets/avatar.png"}
          alt={"star"}
          width={100}
          height={100}
        />
        <Image
          src={"/_assets/spin.png"}
          alt={"star"}
          width={100}
          height={100}
        />
      </div>
    </Section>
  );
};

export default Hero;
