import { Nav } from "@/components/nav"
import { DataTable } from "@/components/data-table"
import { parseTSV } from "@/lib/parse-tsv"
import { playerStats } from '@/lib/data-loader'

export default function PlayersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="container mx-auto p-8">
        <DataTable data={playerStats} title="Player Statistics" searchable={true} />
        <p className="text-sm text-muted-foreground mt-4">
          Showing all 28 players with complete statistics across all games.
        </p>
      </main>
    </div>
  )
}
