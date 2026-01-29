import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-primary">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
