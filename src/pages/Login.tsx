import { useState } from "react";
import supabase from "../lib/supabase";
import AuthLayout from "../layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";    
import { stringify } from "node:querystring";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setError(error.message);
    
    else navigate("/reward");

     localStorage.setItem("user_email", data.user?.email || "");
      const userString = JSON.stringify(data.user);
    localStorage.setItem("user_data", userString);
    setLoading(false);
  }

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-primary mb-2">
          Welcome back to Flowva
        </h2>
        <p className="text-gray-500 mb-6">Login to continue</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email address"
            required
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary bg-purple-700 text-white font-semibold p-3 rounded-lg transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-primary font-semibold">
            Sign up
          </Link>
        </p>
      </div>
      </AuthLayout> 
  );
}
