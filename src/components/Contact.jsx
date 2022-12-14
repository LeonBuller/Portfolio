import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 text-gray-300"
    >
      <form
        method="POST"
        action="https://getform.io/f/33566e4c-77ba-400f-bd49-242b1451b89e"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#ff66c4]">
            Contact
          </p>
          <p className="py-4 text-lg">Contact me using the form below.</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-1 text-gray-800"
          type="text"
          placeholder="Name"
          name="name"
        />

        <input
          className="my-4 p-2 bg-[#ccd6f6] text-gray-800"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-1 text-gray-800"
          name="message"
          rows="10"
          placeholder="Message "
        ></textarea>

        <button className="text-[#ccd6f6] group border-2  border-[#ccd6f6] py-2 px-4 flex mx-auto my-4 items-center hover:bg-[#ff66c4] hover:border-[#ff66c4] hover:text-white">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
