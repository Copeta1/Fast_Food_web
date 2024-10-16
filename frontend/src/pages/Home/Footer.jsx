const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800">
        <div className="container mx-auto flex justify-between items-center py-4 px-32 text-white">
          <div>
            <h1 className="text-3xl font-bold">FastFood American</h1>
            <div className="pt-4">
              <div>
                <b>Address:</b> 123456 Zagreb
              </div>
              <div>
                <b>Email:</b> email@email.com
              </div>
            </div>
          </div>
          <div className="h-24 w-[1px] bg-gray-400 mx-9"></div>

          <div className="flex flex-col items-start">
            <span className="text-3xl mb-2 font-bold">NEWSLETTER</span>
            <div className="flex space-x-2">
              <input
                type="text"
                className="p-2 w-64 rounded-3xl border-2 border-gray-300 focus:outline-none focus:border-red-500"
                placeholder="Enter your email"
              />
              <button className="px-4 py-2 bg-red-500 text-white rounded-3xl hover:bg-red-600 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-white shadow-md p-4 px-48">
        <div className="flex  items-center text-gray-600 justify-between">
          &copy; 2024 FastFood American. All rights reserved.
          <div className="flex justify-center items-center text-gray-600">
            <a
              className="hover:border-red-500 hover:text-red-500 transition duration-300"
              href="/"
            >
              Privacy Policy
            </a>
            <span className="mx-4">|</span>
            <a
              className="hover:border-red-500 hover:text-red-500 transition duration-300"
              href="/"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
