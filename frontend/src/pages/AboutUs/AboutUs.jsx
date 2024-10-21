import team1 from "../../assets/AboutUs/team1.jpg";
import team2 from "../../assets/AboutUs/team2.jpg";
import restaurant from "../../assets/AboutUs/restaurant.jpg";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${restaurant})`,
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full absolute inset-0"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold">About FastFood American</h1>
          <p className="text-2xl mt-4">Serving delicious food since 1999</p>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At FastFood American, our mission is to bring high-quality, delicious
          fast food to our customers. Whether {"you're"} craving burgers, pizza,
          or a sweet dessert, we have something for everyone.
        </p>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src={team1}
                alt="Team Member 1"
                className="rounded-full mx-auto w-48 h-48 object-cover mb-4 shadow-lg"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src={team2}
                alt="Team Member 2"
                className="rounded-full mx-auto w-48 h-48 object-cover mb-4 shadow-lg"
              />
              <h3 className="text-xl font-bold">Joe Smith</h3>
              <p className="text-gray-600">Head Chef</p>
            </div>
            <div className="text-center">
              <img
                src={team1}
                alt="Team Member 3"
                className="rounded-full mx-auto w-48 h-48 object-cover mb-4 shadow-lg"
              />
              <h3 className="text-xl font-bold">Alex Brown</h3>
              <p className="text-gray-600">Marketing Manager</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We envision a world where fast food is not just convenient, but also
          healthy, sustainable, and tailored to meet the unique tastes of our
          customers. Our goal is to expand our reach while maintaining the
          quality and freshness of every meal.
        </p>
      </section>

      <section className="bg-red-500 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to taste the difference?</h2>
        <p className="text-lg mt-4 mb-5">
          Visit one of our locations or order online today!
        </p>
        <Link
          to="/"
          className="mt-6 bg-white text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Back to Home
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
