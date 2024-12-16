import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const YourProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("/api/auth/me", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user profile.");
        }

        const data = await response.json();
        setFormData((prev) => ({
          ...prev,
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
        }));
      } catch (error) {
        console.error(error);
        toast.error("Failed to load profile data.");
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/auth/updateProfile", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile.");
      }

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Error updating profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <h1 className="text-2xl font-bold mb-7">Basic Information</h1>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 mb-2 mr-8">First Name:</label>
          <input
            type="text"
            name="firstName"
            className="p-1 border rounded w-64"
            value={formData.firstName}
            onChange={handleChange}
            disabled={loading}
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 mb-2 mr-8">Last Name:</label>
          <input
            type="text"
            name="lastName"
            className="p-1 border rounded w-64"
            value={formData.lastName}
            onChange={handleChange}
            disabled={loading}
          />
        </div>
        <hr className="my-8 border-gray-300" />
        <h1 className="text-2xl font-bold mb-7">Email Address</h1>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 mb-2 mr-8">Email:</label>
          <input
            type="email"
            name="email"
            className="p-1 border rounded w-64"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
          />
        </div>
        <hr className="my-8 border-gray-300" />
        <h1 className="text-2xl font-bold mb-7">Password</h1>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 mb-2 mr-8">Password:</label>
          <input
            type="password"
            name="password"
            className="p-1 border rounded w-64"
            value={formData.password}
            onChange={handleChange}
            disabled={loading}
            placeholder="Enter new password"
          />
        </div>
        <hr className="my-8 border-gray-300" />
        <button
          type="submit"
          className={` p-3 bg-blue-500 text-white py-2 rounded ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          } transition`}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default YourProfile;
