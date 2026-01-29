"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Claim = {
  _id: string;
  status: "pending" | "approved" | "rejected";
  deal: {
    title: string;
  };
};

export default function DashboardPage() {
  const [claims, setClaims] = useState<Claim[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 🔐 Protect dashboard
    if (!token) {
      window.location.href = "/login";
      return;
    }

    fetch("http://localhost:5000/api/claims/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => setClaims(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <p className="p-6 text-[#25343F]">
        Loading dashboard...
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
        Dashboard
      </motion.h1>

      {/* Profile */}
      <div className="mt-8 rounded-2xl border border-[#25343F]/20 bg-[#BFC9D1] p-6">
        <p className="font-medium">
          Welcome back 👋
        </p>
        <p className="text-sm text-[#25343F]/70">
          Manage your claimed startup benefits
        </p>
      </div>

      {/* Claims */}
      <div className="mt-10">
        <h2 className="mb-4 text-xl font-medium">
          Your Claimed Deals
        </h2>

        {claims.length === 0 ? (
          <p className="text-sm text-[#25343F]/70">
            You haven’t claimed any deals yet.
          </p>
        ) : (
          <div className="space-y-4">
            {claims.map((claim) => (
              <motion.div
                key={claim._id}
                whileHover={{ scale: 1.01 }}
                className="flex items-center justify-between rounded-xl border border-[#25343F]/20 bg-[#BFC9D1] p-5"
              >
                <p>{claim.deal.title}</p>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    claim.status === "approved"
                      ? "bg-[#D1FAE5] text-[#065F46]"   // green
                      : claim.status === "rejected"
                      ? "bg-[#FEE2E2] text-[#991B1B]"   // red
                      : "bg-[#FEF3C7] text-[#92400E]"   // yellow
                  }`}
                >
                  {claim.status}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
