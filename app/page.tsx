import { Nav } from "@/components/nav"
import { Card } from "@/components/ui/card"

// Inline the game stats data
const gameStatsData = [
  { label: "Total Games", value: "402" },
  { label: "Crewmate Wins", value: "182" },
  { label: "Imposter Wins", value: "182" },
  { label: "Draws", value: "38" },
  { label: "Total Players", value: "54" },
  { label: "Total Kills", value: "1,847" },
  { label: "Total Tasks Completed", value: "12,456" },
]

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">MoreSidemen Among Us Statistics</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {gameStatsData.map((stat) => (
            <Card key={stat.label} className="p-6">
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">About This Dashboard</h2>
          <p className="text-muted-foreground mb-4">
            This dashboard contains comprehensive statistics from all MoreSidemen Among Us games. Use the navigation
            above to explore different data views:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <strong>Player Stats:</strong> Individual player performance across all games (54 players)
            </li>
            <li>
              <strong>Kill Permutations:</strong> Who killed whom and how often (700+ kill records)
            </li>
            <li>
              <strong>Imposter Combinations:</strong> Imposter duo/trio synergy and win rates (200+ combinations)
            </li>
            <li>
              <strong>Games:</strong> Complete list of all 402 games with details
            </li>
          </ul>
        </Card>
      </main>
    </div>
  )
}
