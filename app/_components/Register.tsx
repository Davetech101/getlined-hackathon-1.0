import Image from "next/image";

const Register = () => {
  const inputStyles = "px-10 py-4 bg-transparent border text-xl rounded-lg";
  const labelStyles = "text-xl"
  const groupStyles = "flex gap-10"
  const inputCont = "flex flex-col w-full gap-3"
  const selectStyles = ""

  return (
    <main className="flex items-center justify-between pr-32 rounded-3xl">
      <Image
        src={"/_assets/register.png"}
        alt={"register"}
        width={600}
        height={600}
        className=""
      />

      <div className="bg-contactBg p-16 w-2/4">
        <strong className="text-4xl text-pink mb-16 block">Register</strong>

        <p className="text-xl mb-8">Be part of this movement!</p>

        <h2 className="text-3xl">CREATE YOUR ACCOUNT</h2>

        <form action="" className="flex flex-col mt-8 gap-10">
          <div className={groupStyles}>
            <div className={inputCont}>
              <label htmlFor="name" className={labelStyles}>Team&apos;s name</label>
              <input
                type="text"
                placeholder="Enter the name of your group"
                className={inputStyles}
                id="name"
              />
            </div>
            <div className={inputCont}>
              <label htmlFor="phone" className={labelStyles}>Phone</label>

              <input
                type="number"
                placeholder="Enter your phone number"
                className={inputStyles}
                id="phone"
              />
            </div>
          </div>
          <div className={groupStyles}>
            <div className={inputCont}>
              <label htmlFor="email" className={labelStyles}>Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className={inputStyles}
                id="email"
              />
            </div>
            <div className={inputCont}>
              <label htmlFor="topic" className={labelStyles}>Project Topic</label>
              <input
                type="text"
                placeholder="What is your group project topic"
                className={inputStyles}
                id="topic"
              />
            </div>
          </div>

          <div className={groupStyles}>
            <div className={inputCont}>
              <label htmlFor="category" className={labelStyles}>Category</label>
              <select name="category" id="category" className="bg-pink">
                <optgroup label="Select Category">
                  <option value="">Select Your Category</option>
                  <option value="">option1</option>
                  <option value="">option1</option>
                  <option value="">option1</option>
                </optgroup>
              </select>
            </div>

            <div className={inputCont}>
              <label htmlFor="size" className={labelStyles}>Group Size</label>
              <select name="size" id="size" className="bg-pink">
                <optgroup label="Select size">
                  <option value="">Select</option>
                  <option value="">option1</option>
                  <option value="">option1</option>
                  <option value="">option1</option>
                </optgroup>
              </select>
            </div>
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
