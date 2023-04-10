import React from "react";

const Contact = () => {

  return (
    <section id="contact" className="mt-20 mb-20">
      <div className="flex justify-center mb-12">
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 inline-block text-transparent bg-clip-text mx-auto text-center h-12">
          Contact Us
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        <div className="flex flex-col items-center lg:items-end lg:mr-16 lg:mt-8 gap-6">
          <div className="border border-solid border-green-500 w-[265px] md:w-72 lg:w-80 rounded-xl px-16 py-4 lg:p-8">
            <div className="flex justify-center mb-3">
              <img
                src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_256px.png"
                alt="gmail"
                className="w-16 md:w-20"
              />
            </div>
            <h4 className="text-sm mb-1 text-light">Email</h4>
            <a href="mailto:mohammadimrans09t@gmail.com" className="underline">
              send an email
            </a>
          </div>
          <div className="border border-solid border-green-500 w-[265px] md:w-72 lg:w-80 rounded-xl px-16 py-4 lg:p-8">
            <div className="flex justify-center mb-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png"
                alt="messenger"
                className="w-16 md:w-20"
              />
            </div>
            <h4 className="text-sm mb-1 text-light">Messenger</h4>
            <a
              href="https://m.me/profile.php?id=100072489623342"
              className="underline"
            >
              send a message
            </a>
          </div>
        </div>
        <form
          className="text-center lg:text-start lg:mt-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered input-success mb-5 w-72 md:w-80 lg:w-[420px] h-16 bg-transparent border border-solid"
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered input-success mb-5 w-72 md:w-80 lg:w-[420px] h-16 bg-transparent border border-solid"
          />
          <br />
          <textarea
            type="text"
            name="message"
            placeholder="Your Message"
            className="textarea textarea-success mb-5 w-72 md:w-80 lg:w-[420px] h-36 bg-transparent border border-solid"
          ></textarea>
          <br />
          <button type="submit" className="btn btn-info mt-2">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;