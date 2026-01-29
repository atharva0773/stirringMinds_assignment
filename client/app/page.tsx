"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="relative overflow-hidden bg-[#EAEFEF]">
      <div className="mx-auto max-w-7xl px-6 py-28 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 inline-block rounded-full border border-[#25343F]/20 bg-[#BFC9D1] px-4 py-1 text-sm text-[#25343F]"
        >
          Trusted by early-stage founders
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl font-bold tracking-tight text-[#25343F] sm:text-6xl"
        >
          Unlock premium SaaS tools
          <span className="block text-[#25343F]/70">
            without burning your runway
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-[#25343F]/70"
        >
          Exclusive startup-only deals on cloud, marketing, analytics,
          and productivity software — all in one place.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Link
            href="/deals"
            className="rounded-full bg-[#FF9B51] px-8 py-3 text-sm font-medium text-[#25343F] transition hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Deals
          </Link>

          <Link
            href="/register"
            className="rounded-full border border-[#25343F]/30 px-8 py-3 text-sm font-medium text-[#25343F] transition hover:bg-[#BFC9D1]"
          >
            Get Started
          </Link>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-[#FF9B51]/20 blur-3xl" />
      </div>
    </section>
  );
}
