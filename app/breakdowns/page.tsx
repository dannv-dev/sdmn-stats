import { Nav } from "@/components/nav"
import { DataTable } from "@/components/data-table"
import { parseTSV } from "@/lib/parse-tsv"
import { gameBreakdowns } from '@/lib/data-loader'

export default function BreakdownsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="container mx-auto p-8">
        <DataTable data={gameBreakdowns} title="Game Breakdowns" searchable={true} />
        <p className="text-sm text-muted-foreground mt-4">
          Note: This shows a sample of game events. Full dataset contains 4,700+ events across all games.
        </p>
      </main>
    </div>
  )
}
