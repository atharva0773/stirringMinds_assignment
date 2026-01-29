"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Deals", href: "/deals" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-[#EAEFEF]/90 backdrop-blur-md border-b border-[#25343F]/10"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-[#25343F]">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF9B51] to-[#FFB97A] font-bold text-[#25343F] shadow-sm">
            SB
          </div>
          <span className="text-lg font-semibold tracking-tight">
            StartupBenefits
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-[#25343F]/70 hover:text-[#25343F] transition"
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#FF9B51]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-[#25343F]/70 hover:text-[#25343F] transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-full bg-[#FF9B51] px-5 py-2 text-sm font-medium text-[#25343F] shadow-sm transition hover:bg-[#FFB97A] active:scale-[0.97]"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/dashboard"
                className="rounded-full bg-[#FF9B51] px-5 py-2 text-sm font-medium text-[#25343F] shadow-sm transition hover:bg-[#FFB97A] active:scale-[0.97]"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="text-sm font-medium text-[#25343F]/70 hover:text-[#25343F] transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </motion.header>
  );
}
