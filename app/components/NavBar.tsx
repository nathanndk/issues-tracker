import React from "react";
import Link from "next/link";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const links = [
    {
      href: "/dashboard",
      label: "Dashboard",
    },
    {
      href: "/issues",
      label: "Issues",
    },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/dashboard">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
