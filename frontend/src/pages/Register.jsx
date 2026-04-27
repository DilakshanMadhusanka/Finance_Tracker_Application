import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      await API.post("/auth/register", {
        email: form.email,
        password: form.password
      });

      navigate("/login");
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex">

      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-green-500 to-teal-600 text-white items-center justify-center">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">Join Us</h1>
          <p className="opacity-80">
            Create an account and start managing your finances smartly.
          </p>
        </div>
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-96">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Create Account
          </h2>

          {error && (
            <p className="text-red-500 text-sm mb-3">{error}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition"
          >
            Register
          </button>

          <p className="text-sm mt-4 text-center">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-green-600 cursor-pointer font-medium"
            >
              Login
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}