import { Nav } from "@/components/nav"
import { DataTable } from "@/components/data-table"
import { parseTSV } from "@/lib/parse-tsv"
import { imposterCombinations } from '@/lib/data-loader'

export default function ImpostersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="container mx-auto p-8">
        <DataTable data={imposterCombinations} title="Imposter Combinations" searchable={true} />
        <p className="text-sm text-muted-foreground mt-4">
          Note: This shows a sample of imposter combinations. Full dataset contains 200+ combinations with win rates and
          synergy statistics.
        </p>
      </main>
    </div>
  )
}
