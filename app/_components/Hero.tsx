import Section from "../_reuseable/Section";
import RegisterBtn from "../_reuseable/RegisterBtn";
import avatar from "../_assets/avatar.svg"

const Hero = () => {
  return (
    <Section>
      <div className="">
        <div className="star"></div>

        <h2 className="">
          <div className="bulb"></div>
          getlinked Tech Hackathon <span className="">1.0</span>
          <div className="chain"></div>
          <div className="fire"></div>
        </h2>
 
        <small>
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </small>

        <RegisterBtn />

        <div className="star"></div>

        <div className="">
            <div className="">00 <small className="">H</small></div>
            <div className="">00 <small className="">M</small></div>
            <div className="">00 <small className="">S</small></div>
        </div>
      </div>
      <div className="">

        <h3>Igniting a Revolution in HR Innovation</h3>

      </div>
    </Section>
  );
};

export default Hero;
