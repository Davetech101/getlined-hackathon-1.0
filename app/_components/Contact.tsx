import Image from "next/image";

const Contact = () => {
    const inputStyles = "px-10 py-4 bg-transparent border"
  return (
    <main className="py-32 px-48 flex items-center justify-between rounded-3xl">
      <div className="">
        <h3 className="text-pink text-2xl mb-8">Get in touch</h3>

        <p className="text-2xl mb-6">
          Contact <br />
          Information
        </p>

        <p className="text-2xl mb-6">
          27, Alara Street <br />
          Yaba 100012 <br />
          Lagos State
        </p>

        <p className="text-2xl mb-6">Call Us : 07067981819</p>
        <strong className="text-2xl block mb-6">we are open from Monday-Friday <br /> 08:00am - 05:00pm</strong>

        <p className=" text-2xl text-pink gap-4">
          Share on
          <div className="flex items-center mt-3 gap-3">
            <Image
              src={"/_assets/instagram.svg"}
              alt={"ig"}
              width={20}
              height={20}
              className=""
            />
            <Image
              src={"/_assets/vector.svg"}
              alt={"x"}
              width={20}
              height={20}
              className=""
            />
            <Image
              src={"/_assets/fb.svg"}
              alt={"fb"}
              width={10}
              height={10}
              className=""
            />
            <Image
              src={"/_assets/linkedin.svg"}
              alt={"in"}
              width={20}
              height={20}
              className=""
            />
          </div>
        </p>
      </div>

      <div className="bg-contactBg p-24 w-2/4">
        <strong className="text-2xl text-pink mb-2 block">Questions or need assistance?</strong>
        <strong className="text-2xl text-pink">Let us know  about it!</strong>

        <form action="" className="flex flex-col mt-8 gap-10">
            <input type="text" placeholder="First Name" className={inputStyles}/>
            <input type="email" placeholder="email" className={inputStyles}/>
            <textarea placeholder="message" className={`min-h-[100px] ${inputStyles}`}></textarea>

            <button className=" inline-block bg-gradient-to-r from-pink to-blue px-14 py-3 text-2xl rounded">Submit</button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
