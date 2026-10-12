function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-full bg-linear-to-b from-black to-gray-800 text-white p-4">
      <div className="max-w-5xl mx-auto h-full flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Contact
          </p>
          <p className="py-6">Get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="bg-transparent p-2 border-2 rounded-md text-white mb-4 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="bg-transparent p-2 border-2 rounded-md text-white mb-4 focus:outline-none"
            />
            <textarea
              name=""
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white mb-4 focus:outline-none"></textarea>
            <button className="bg-linear-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 mx-auto my-8 rounded-md flex items-center hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
