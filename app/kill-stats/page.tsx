'use client'

import { Sidebar } from "@/components/sidebar"
import { KillPermutations } from "@/components/kill-permutations"

export default function KillStatsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <KillPermutations />
      </main>
    </div>
  )
}
