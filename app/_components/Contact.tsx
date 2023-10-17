import Image from "next/image";

const Contact = () => {
  return (
    <main>
      <div className="">
        <h3 className="">Get in touch</h3>

        <p>
          Contact <br />
          Information
        </p>

        <p className="">
          27,Alara Street <br />
          Yaba 100012 <br />
          Lagos State
        </p>

        <p className="">Call Us : 07067981819</p>
        <strong>we are open from Monday-Friday 08:00am - 05:00pm</strong>

        <p className=" text-xl text-pink gap-4">
          Share on
          <div className="flex items-center">
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

      <div className="">
        <p>Questions or need assistance?</p>
        <p>Let us know  about it!</p>

        <form action="">
            <input type="text" placeholder="First Name" />
            <input type="email" name="" id="" />
            <textarea name="" id=""></textarea>
        </form>
      </div>
    </main>
  );
};

export default Contact;
