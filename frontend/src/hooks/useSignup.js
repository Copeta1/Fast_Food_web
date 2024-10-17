import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  }) => {
    const success = handleInputError({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });
    if (!success) return;
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("food-user", JSON.stringify(data));

      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputError({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}) {
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password should be at least 6 characters long");
    return false;
  }
  return true;
}
