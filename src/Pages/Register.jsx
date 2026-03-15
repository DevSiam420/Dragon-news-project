import React, { useContext, useState } from "react";
import {
  FaUser,
  FaImage,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Password Validation Function
  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number.";
    }
    return null;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Terms & Conditions check
    if (!termsAccepted) {
      setError("You must accept Terms & Conditions.");
      return;
    }

    // Password Validation check
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    setLoading(true);

    createUser(email, password)
      .then((result) => {
        // Firebase Profile Update
        updateUser({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({
              ...result.user,
              displayName: name,
              photoURL: photo,
            });
            setSuccess("Account created successfully!");
            form.reset();
            setTermsAccepted(false);
            setTimeout(() => {
              navigate("/");
            }, 2000);
          })
          .catch((err) => {
            setError("Failed to update profile.");
            // console.error(err);
          });
      })
      .catch((err) => {
        // console.error(err);
        switch (err.code) {
          case "auth/email-already-in-use":
            setError("An account with this email already exists.");
            break;
          case "auth/invalid-email":
            setError("Invalid email address.");
            break;
          case "auth/weak-password":
            setError("Password is too weak.");
            break;
          default:
            setError("Registration failed. Please try again.");
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
          Register your account
        </h2>

        <div className="divider my-6"></div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-3 rounded-md mb-4 text-center">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="bg-green-100 text-green-600 text-sm p-3 rounded-md mb-4 text-center">
            {success}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="label" htmlFor="name">
              <span className="label-text font-semibold text-gray-700">
                Your Name
              </span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaUser />
              </span>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full pl-10 bg-gray-100"
                required
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="label" htmlFor="photo">
              <span className="label-text font-semibold text-gray-700">
                Photo URL
              </span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaImage />
              </span>
              <input
                id="photo"
                name="photo"
                type="url"
                placeholder="Enter photo URL"
                className="input input-bordered w-full pl-10 bg-gray-100"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="label" htmlFor="email">
              <span className="label-text font-semibold text-gray-700">
                Email
              </span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FaEnvelope />
              </span>
              <input
                id="email"
                name="email"
                type="email"
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
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full pl-10 pr-10 bg-gray-100"
                required
              />
              {/* Password Toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              At least 6 characters, one uppercase, one lowercase and one number
            </p>
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <p className="text-sm text-gray-600">
              Accept{" "}
              <span className="font-medium underline cursor-pointer">
                Terms &amp; Conditions
              </span>
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn w-full bg-gray-800 text-white hover:bg-black border-none disabled:opacity-60"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Register"
            )}
          </button>

          {/* Login link */}
          <p className="text-center text-sm text-gray-600 pt-2">
            Already Have An Account?{" "}
            <Link
              to="/auth/login"
              className="text-red-500 font-semibold underline hover:text-red-700"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
