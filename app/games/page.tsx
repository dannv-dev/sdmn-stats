import { Nav } from "@/components/nav"
import { DataTable } from "@/components/data-table"
import { parseTSV } from "@/lib/parse-tsv"
import { games } from '@/lib/data-loader'

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="container mx-auto p-8">
        <DataTable data={games} title="All Games" searchable={true} />
        <p className="text-sm text-muted-foreground mt-4">
          Note: This shows a sample of games. Full dataset contains all 402 games with complete details including
          players, roles, winners, and video links.
        </p>
      </main>
    </div>
  )
}
