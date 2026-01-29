import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen bg-[#EAEFEF] text-[#25343F]">
        <Navbar />
        <main className="h-[calc(100vh-64px)] overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
