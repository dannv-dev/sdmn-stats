"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/players", label: "Player Stats" },
  { href: "/kills", label: "Kill Permutations" },
  { href: "/imposters", label: "Imposter Combinations" },
  { href: "/games", label: "Games" },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-6 h-16">
          <h1 className="text-xl font-bold">Among Us Stats</h1>
          <div className="flex gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
