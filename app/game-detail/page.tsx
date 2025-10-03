import { Sidebar } from "@/components/sidebar"
import { GameBreakdown } from "@/components/game-breakdown"

export default function GameDetailPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <GameBreakdown />
      </main>
    </div>
  )
}
