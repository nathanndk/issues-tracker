"use client";

import React from "react";
import Link from "next/link";
import { FaBug } from "react-icons/fa";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname);

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
            // className={`${link.href === pathname ? 'text-zinc-900' : 'text-zinc-500'} hover:text-zinc-800 transition-colors`}
            className={classNames({
              "text-zinc-900": link.href === pathname,
              "text-zinc-500": link.href !== pathname,
              "hover:text-zinc-800 transition-colors": true,
            })}
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
