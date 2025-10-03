"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Users, List, FileText, Target, UserX } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "OVERVIEW", href: "/", icon: BarChart3 },
  { name: "PLAYERS", href: "/players", icon: Users },
  { name: "GAMES LIST", href: "/games", icon: List },
  { name: "GAME DETAIL", href: "/game-detail", icon: FileText },
  { name: "KILL STATS", href: "/kill-stats", icon: Target },
  { name: "IMPOSTERS", href: "/imposters", icon: UserX },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-80 flex-col bg-[#2a3a3c] border-r-4 border-[#1a2a2c] p-6">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-4 rounded-2xl bg-[#698b8d] p-6 border-4 border-[#547273]">
        <div className="relative h-16 w-16">
          {/* Among Us crewmate icon */}
          <div className="absolute inset-0 rounded-full bg-[#C51111]" />
          <div className="absolute left-1/2 top-1/2 h-8 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#aed4e6]" />
        </div>
        <div className="font-mono text-3xl font-bold tracking-tight text-white">
          <div>AMONG</div>
          <div>US</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-6 py-4 text-sm font-semibold uppercase tracking-wide transition-all border-4",
                isActive
                  ? "bg-[#55efc4] text-[#1e3a3c] border-[#3fd5ac] shadow-lg"
                  : "bg-[#698b8d] text-white border-[#547273] hover:bg-[#547273]",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Footer Buttons */}
      <div className="mt-auto flex gap-3">
        <button className="flex-1 rounded-xl bg-[#698b8d] px-4 py-3 text-sm font-semibold uppercase text-white border-4 border-[#547273] hover:bg-[#547273] transition-all">
          Credits
        </button>
        <button className="flex-1 rounded-xl bg-[#698b8d] px-4 py-3 text-sm font-semibold uppercase text-white border-4 border-[#547273] hover:bg-[#547273] transition-all">
          Quit
        </button>
      </div>
    </div>
  )
}
