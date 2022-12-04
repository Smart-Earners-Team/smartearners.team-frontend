import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fvkrmg4",
        "template_l98ibfs",
        form.current,
        "oaYUFuRyBx7w3TAuH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="overflow-x-hidden">
      <div className=" max-w-[100%] bg-cover w-full lg:h-[60vh] bg-bg-img">
        <div className="md:text-5xl text-4xl ml-6 text-white  lg:p-[150px]  lg:pt-24 pt-20 space-y-3 lg:space-y-10">
          <p className="font-bold pb-4">
            Contact $mart <br />
            Earners Team™{" "}
          </p>
        </div>
      </div>

      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center  mx-auto rounded-md mt-12 ">
        <form ref={form} onSubmit={sendEmail}>
          <input
            placeholder="Your name"
            name="name"
            className="my-2 w-full  p-2 outline-none  text-black border border-black text-sm bg-[#9a7c7c04] rounded-xl"
            type="text"
            required
          />
          <input
            placeholder="Email address"
            name="email"
            type="text"
            className="my-2 w-full  p-2 outline-none  text-black border border-black text-sm bg-[#9a7c7c04] rounded-xl"
            required
          />
          <input
            placeholder=" Your phone number"
            name="number"
            className="my-2 w-full  p-2 outline-none  text-black border border-black text-sm bg-[#9a7c7c04] rounded-xl"
            type="text"
            required
          />
          <input
            placeholder="Type your message here"
            name="message"
            type="text"
            required
            className="h-[300px] my-2 w-full  p-2 outline-none  text-black border border-black
             text-sm bg-[#9a7c7c04] rounded-xl"
          />
          <div className="h-[1px] w-full bg-gray-400 my-2" />

          <button
            type="submit"
            className="text-black w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
