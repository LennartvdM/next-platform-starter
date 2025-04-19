"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md p-4 z-50">
      <ul className="flex gap-6 justify-center">
        {["Home", "About", "Contact"].map((label) => (
          <li key={label}>
            <Link href={label === "Home" ? "/" : `/${label.toLowerCase()}`}>
              <span className="font-medium hover:text-teal-600">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
