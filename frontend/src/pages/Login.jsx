import { useState } from "react";
import { loginUser } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await loginUser(formData);

      console.log(response.data);

      const token = response.data.token;

      localStorage.setItem("token", token);

      navigate("/todos");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111116] flex items-center justify-center px-4">
      <div className="w-full max-w-[340px]">

        <Link
          to="/"
          className="block text-center text-sm text-gray-500 hover:text-gray-300 transition-colors mb-10"
        >
          TodoApp
        </Link>

        <h1 className="text-xl font-semibold text-gray-50 text-center">
          Log in
        </h1>
        <p className="text-sm text-gray-500 text-center mt-1.5 mb-10">
          Enter your details to continue.
        </p>

        {error && (
          <p className="text-sm text-red-400 mb-6 border-l-2 border-red-400 pl-3">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-7">
          <div>
            <label className="block text-xs text-gray-500 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-transparent border-b border-gray-800 text-gray-50 placeholder-gray-700 py-1.5 outline-none focus:border-violet-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full bg-transparent border-b border-gray-800 text-gray-50 placeholder-gray-700 py-1.5 outline-none focus:border-violet-500 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer w-full bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 disabled:cursor-not-allowed text-gray-50 text-sm font-medium py-2.5 transition-colors"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <p className="mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-gray-300 hover:text-violet-400 transition-colors"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;