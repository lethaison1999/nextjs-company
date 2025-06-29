"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const tabs = [
  { href: "/guide/register", label: "Đăng ký" },
  { href: "/guide/deposit", label: "Nạp tiền" },
  { href: "/guide/withdraw", label: "Rút tiền" },
];

export function GuideTabs() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col space-y-2">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={clsx(
            "text-sm font-medium",
            pathname === tab.href
              ? "text-blue-600 font-bold"
              : "text-gray-600 hover:text-blue-600"
          )}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
