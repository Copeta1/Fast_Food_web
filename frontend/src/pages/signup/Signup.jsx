import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
        <Link
          to="/"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <AiOutlineClose className="text-2xl" />
        </Link>

        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
          <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
          <form onSubmit={handleSubmit}>
            {/* First Name Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                placeholder="Enter your first name"
                value={inputs.firstName}
                onChange={(e) =>
                  setInputs({ ...inputs, firstName: e.target.value })
                }
              />
            </div>

            {/* Last Name Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                placeholder="Enter your last name"
                value={inputs.lastName}
                onChange={(e) =>
                  setInputs({ ...inputs, lastName: e.target.value })
                }
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                placeholder="Enter your email"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                placeholder="Create a password"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>

            {/* Confirm Password Input */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                placeholder="Confirm your password"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
            </div>

            {/* Link to login */}
            <div className="text-left pb-5">
              <Link
                to="/login"
                className="text-sm text-red-500 hover:underline"
              >
                Already have an account?
              </Link>
            </div>

            {/* Submit button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className=" btn w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
