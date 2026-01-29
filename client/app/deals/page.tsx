"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Deal = {
  _id: string;
  title: string;
  description: string;
  category: string;
  isLocked: boolean;
};

export default function DealsPage() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/deals")
      .then((res) => res.json())
      .then((data) => setDeals(data))
      .finally(() => setLoading(false));
  }, []);

  const filteredDeals = deals.filter((deal) => {
    const matchesSearch = deal.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || deal.category === category;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <p className="p-6 text-[#25343F]">
        Loading deals...
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 text-[#25343F]">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-semibold"
      >
        Available Deals
      </motion.h1>

      <p className="mt-2 text-[#25343F]/70">
        Exclusive benefits curated for early-stage startups.
      </p>

      {/* Filters */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <input
          placeholder="Search deals..."
          className="w-full rounded-lg border border-[#25343F]/20 bg-[#EAEFEF] px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-[#FF9B51]/40"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="rounded-lg border border-[#25343F]/20 bg-[#EAEFEF] px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-[#FF9B51]/40"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Cloud</option>
          <option>Productivity</option>
          <option>Analytics</option>
        </select>
      </div>

      {/* Deals Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDeals.map((deal) => (
          <motion.div
            key={deal._id}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative rounded-xl border border-[#25343F]/20 bg-[#BFC9D1] p-6"
          >
            {/* Lock Overlay */}
            {deal.isLocked && (
              <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-[#EAEFEF]/80 backdrop-blur-sm">
                <div className="text-center">
                  <p className="text-sm font-medium">
                    🔒 Locked
                  </p>
                  <p className="mt-1 text-xs text-[#25343F]/70">
                    Verify your startup to unlock
                  </p>
                </div>
              </div>
            )}

            <h3 className="text-lg font-semibold">
              {deal.title}
            </h3>

            <p className="mt-2 text-sm text-[#25343F]/70">
              {deal.description}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="rounded-full bg-[#EAEFEF] px-3 py-1 text-xs text-[#25343F]">
                {deal.category}
              </span>

              {!deal.isLocked && (
                <Link
                  href={`/deals/${deal._id}`}
                  className="text-sm font-medium text-[#25343F] hover:underline"
                >
                  View →
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
