import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";

import { AiOutlineClose } from "react-icons/ai";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <AiOutlineClose className="text-2xl" />
        </Link>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* Contact Form */}
          <div className="md:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 shadow-md rounded-md"
            >
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 h-32"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-md transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="md:w-1/3 bg-gray-100 p-8 shadow-md rounded-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Contact Info
            </h2>
            <p className="text-gray-600 mb-4">
              Have any questions or need assistance? Feel free to reach out to
              us!
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +385 91 123 4567
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> info@fastfoodamerican.com
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Address:</strong> 123 Main Street, Zagreb, Croatia
            </p>

            <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md">
              <span className="text-gray-500">Map Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
