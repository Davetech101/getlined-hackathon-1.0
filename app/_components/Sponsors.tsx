import Image from "next/image";
import Main from "../_reuseable/Main";
import Section from "../_reuseable/Section";

function Sponsors() {
    const dash = "bg-pink h-px w-1/4"
    const line = "bg-pink w-px h-32"
    
  return (
    <Section>
      <main className="py-24 px-32 mx-auto text-center flex flex-col w-full items-center">
        <div className="mb-24">
          {" "}
          <h3 className="text-4xl mb-8">Partners and Sponsors</h3>
          <p>
            etlinked Hackathon 1.0 is honored to have the following major <br />
            companies as its partners and sponsors
          </p>
        </div>

        <div className="border border-2 rounded-md px-20 w-full py-24 border-border">
          <div className="flex justify-around items-center mb-16 px-20 h-full">
            <Image
              src={"/_assets/liberty.png"}
              alt={"logo"}
              width={100}
              height={100}
              className=""
            />
            <div className={line}></div>
            <Image
              src={"/_assets/libertypay.png"}
              alt={"logo"}
              width={100}
              height={100}
              className=""
            />
            <div className={line}></div>
            <Image
              src={"/_assets/winwise.png"}
              alt={"logo"}
              width={100}
              height={100}
              className=""
            />
          </div>
          <div className="flex justify-around items-center mb-16">
            <div className={dash}></div>
            <div className={dash}></div>
            <div className={dash}></div>
          </div>
          <div className="flex justify-around items-center px-20">
            <Image
              src={"/_assets/wisper.png"}
              alt={"logo"}
              width={100}
              height={100}
              className=""
            />
            <div className={line}></div>
            <Image
              src={"/_assets/winwise.png"}
              alt={"logo"}
              width={100}
              height={100}
              className=""
            />
            <div className={line}></div>
            <Image
              src={"/_assets/liberty.png"}
              alt={"logo"}
              width={100}
              height={100}
              className=""
            />
          </div>
        </div>
      </main>
    </Section>
  );
}

export default Sponsors;
