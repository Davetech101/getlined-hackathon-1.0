import Section from "../_reuseable/Section";
import RegisterBtn from "../_reuseable/RegisterBtn";
import Image from "next/image";

const Hero = () => {
  const nomStyles = "text-8xl";
  const txtStyles = "text-xl -ml-3 inline-block";

  return (
    <Section>
      <div className="h-3/6 flex items-center pl-24 pt-28">
        <div className="relative">
          <div className="star absolute -top-32 left-10">
            <Image
              src={"/_assets/star.png"}
              alt={"star"}
              width={20}
              height={20}
            />
          </div>

          <h2 className="">
            <div className="bulb absolute right-96 -top-16">
              <Image
                src={"/_assets/creative.png"}
                alt={"creative"}
                width={40}
                height={40}
              />
            </div>
            <p className="text-8xl ">
              getlinked Tech <br /> Hackathon{" "}
              <span className="text-pink inline-flex items-center justify-center">
                1.0{" "}
                <div className="chain">
                  <Image
                    src={"/_assets/chain.png"}
                    alt={"chain"}
                    width={60}
                    height={60}
                    className="w-24"
                  />
                </div>
                <div className="fire">
                  <Image
                    src={"/_assets/fire.png"}
                    alt={"fire"}
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

          <div className="star absolute bottom-24 right-96 mr-14">
            <Image
              src={"/_assets/star2.png"}
              alt={"star"}
              width={20}
              height={20}
            />
          </div>

          <div className="flex items-center gap-10 mt-28">
            <div className={nomStyles}>
              00 <small className={txtStyles}>H</small>
            </div>
            <div className={nomStyles}>
              00 <small className={txtStyles}>M</small>
            </div>
            <div className={nomStyles}>
              00 <small className={txtStyles}>S</small>
            </div>
          </div>
        </div>
        <div className="flex flex-col align-center justify-between relative">
          <div className="relative  -top-14">
            <h3 className="text-5xl">Igniting a Revolution in HR Innovation</h3>
            <div className="relative w-14 -right-96 ml-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="255"
                height="17"
                viewBox="0 0 255 17"
                fill="none"
              >
                <path
                  d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
                  stroke="#FF26B9"
                  stroke-width="5"
                />
              </svg>
            </div>
          </div>

          <Image
            src={"/_assets/avatar.png"}
            alt={"avatar"}
            width={700}
            height={700}
          />
          <Image
            src={"/_assets/spin.png"}
            alt={"spin"}
            width={700}
            height={700}
            className="w-full absolute"
          />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
