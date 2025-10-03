import { Nav } from "@/components/nav"
import { DataTable } from "@/components/data-table"
import { parseTSV } from "@/lib/parse-tsv"
import { killPermutations } from '@/lib/data-loader'

export default function KillsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="container mx-auto p-8">
        <DataTable data={killPermutations} title="Kill Permutations" searchable={true} />
        <p className="text-sm text-muted-foreground mt-4">
          Note: This shows a sample of kill data. Full dataset contains 700+ kill records.
        </p>
      </main>
    </div>
  )
}
