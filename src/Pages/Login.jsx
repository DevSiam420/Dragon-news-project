import React, { useContext, useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { LogIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate(); // ✅ lowercase by convention

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Redirect destination after login
  const from = location?.state?.from?.pathname || location?.state || "/";

  const handleLogIn = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    LogIn(email, password)
      .then((result) => {
        console.log("User logged in successfully:", result.user);
        navigate(from, { replace: true }); // ✅ replace prevents going back to login
      })
      .catch((err) => {
        console.error(err);
        // ✅ User-friendly error messages
        switch (err.code) {
          case "auth/user-not-found":
            setError("No account found with this email.");
            break;
          case "auth/wrong-password":
            setError("Incorrect password. Please try again.");
            break;
          case "auth/invalid-credential":
            setError("Invalid email or password.");
            break;
          case "auth/too-many-requests":
            setError("Too many failed attempts. Try again later.");
            break;
          default:
            setError("Login failed. Please try again.");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-10">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-700">
          Login your account
        </h2>

        <div className="divider my-6"></div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-3 rounded-md mb-4 text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogIn} className="space-y-5">
          {/* Email */}
          <div>
            <label className="label" htmlFor="email">
              <span className="label-text font-semibold text-gray-700">
                Email address
              </span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaEnvelope />
              </span>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full pl-10 bg-gray-100"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="label" htmlFor="password">
              <span className="label-text font-semibold text-gray-700">
                Password
              </span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaLock />
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full pl-10 pr-10 bg-gray-100"
                required
              />
              {/* Toggle Password Visibility */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Forgot Password */}
            <div className="text-right mt-2">
              <Link
                to="/auth/forgot-password"
                className="text-sm text-gray-500 hover:text-gray-700 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn w-full bg-gray-800 text-white hover:bg-black border-none disabled:opacity-60"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Login"
            )}
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 pt-2">
            Don&apos;t Have An Account?{" "}
            <Link
              to="/auth/register"
              className="text-red-500 font-semibold underline hover:text-red-700"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
