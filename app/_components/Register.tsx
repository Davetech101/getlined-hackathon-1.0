import Image from "next/image";

const Register = () => {
  const inputStyles = "px-10 py-4 bg-transparent border";
  return (
    <main className="flex items-center justify-between pr-32 rounded-3xl">
      <Image
        src={"/_assets/register.png"}
        alt={"register"}
        width={600}
        height={600}
        className=""
      />

      <div className="bg-contactBg p-24 w-2/4">
        <strong className="text-4xl text-pink mb-16 block">Register</strong>

        <p className="text-xl mb-8">Be part of this movement!</p>

        <h2 className="text-3xl">CREATE YOUR ACCOUNT</h2>

        <form action="" className="flex flex-col mt-8 gap-10">
          <div className="">
            <input
              type="text"
              placeholder="Enter the name of your group"
              className={inputStyles}
            />
            <input
              type="number"
              placeholder="Enter your phone number"
              className={inputStyles}
            />
          </div>
          <div className="">
            <input
              type="email"
              placeholder="Enter your email address"
              className={inputStyles}
            />
            <input
              type="text"
              placeholder="What is your group project topic"
              className={inputStyles}
            />
          </div>
          <address>
            Please review your registration details before submitting
          </address>

          <div className="">
            <input type="checkbox" name="" id="" />
            <p className="">
              {" "}
              agreed with the event terms and conditions and privacy policy
            </p>
          </div>

          <button className=" inline-block bg-gradient-to-r from-pink to-blue px-14 py-3 text-2xl rounded">
            Register Now
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;
