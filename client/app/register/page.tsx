"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) throw new Error("Registration failed");

      const data = await res.json();
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    } catch {
      setError("Unable to register. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EAEFEF] px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md rounded-2xl bg-[#BFC9D1] p-8 text-[#25343F] shadow-sm"
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-[#25343F]/70">
            Unlock exclusive benefits for your startup
          </p>
        </div>

        {/* Error */}
        {error && (
          <p className="mt-4 rounded-md bg-red-100 p-2 text-sm text-red-700">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium">
              Full name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full rounded-lg border border-[#25343F]/20 bg-[#EAEFEF] px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-[#FF9B51]/40"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@startup.com"
              required
              className="w-full rounded-lg border border-[#25343F]/20 bg-[#EAEFEF] px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-[#FF9B51]/40"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full rounded-lg border border-[#25343F]/20 bg-[#EAEFEF] px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-[#FF9B51]/40"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#FF9B51] py-2.5 text-sm font-medium text-[#25343F] transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Get Started"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-[#25343F]/70">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[#25343F] hover:underline"
          >
            Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
