"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DealDetailsPage() {
  const isLoggedIn = false;
  const isLocked = true;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-semibold">AWS Startup Credits</h1>
        <p className="mt-2 text-gray-600">
          Get up to $5,000 in AWS credits to scale your startup.
        </p>
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-10 rounded-2xl border bg-white p-8"
      >
        {/* Partner Info */}
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center font-bold">
            AWS
          </div>
          <div>
            <p className="font-medium">Amazon Web Services</p>
            <p className="text-sm text-gray-500">Cloud Infrastructure</p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-700 leading-relaxed">
          This benefit provides AWS credits for eligible early-stage startups.
          Credits can be used for compute, storage, and other AWS services.
        </p>

        {/* Eligibility */}
        <div className="mt-6">
          <h3 className="font-medium">Eligibility</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
            <li>Startup must be less than 5 years old</li>
            <li>Valid company website required</li>
            <li>Not previously received AWS credits</li>
          </ul>
        </div>

        {/* Claim Section */}
        <div className="mt-8 border-t pt-6">
          {isLocked && (
            <div className="mb-4 rounded-lg bg-yellow-50 p-4 text-sm text-yellow-700">
              🔒 This deal is locked. Verify your startup to unlock.
            </div>
          )}

          {!isLoggedIn ? (
            <Link
              href="/login"
              className="inline-block rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition"
            >
              Login to Claim
            </Link>
          ) : (
            <button
              disabled={isLocked}
              className={`rounded-full px-6 py-3 text-sm font-medium text-white transition ${
                isLocked
                  ? "cursor-not-allowed bg-gray-300"
                  : "bg-black hover:bg-gray-800"
              }`}
            >
              Claim Deal
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
