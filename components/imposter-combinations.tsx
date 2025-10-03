import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Users2, Trophy, TrendingDown } from "lucide-react"
import { Progress } from "./ui/progress"
import { CrewmateAvatar } from "./crewmate-avatar"

const imposterPairs = [
  {
    player1: { name: "RedSus", color: "#C51111" },
    player2: { name: "PinkVent", color: "#ED54BA" },
    gamesPlayed: 23,
    wins: 16,
    losses: 7,
    winRate: 70,
    avgKills: 4.2,
    avgGameTime: "9m 15s",
    synergy: 95,
  },
  {
    player1: { name: "BlueCrew", color: "#132ED1" },
    player2: { name: "GreenBean", color: "#117F2D" },
    gamesPlayed: 19,
    wins: 11,
    losses: 8,
    winRate: 58,
    avgKills: 3.8,
    avgGameTime: "11m 32s",
    synergy: 78,
  },
  {
    player1: { name: "YellowStar", color: "#F5F557" },
    player2: { name: "PurpleKing", color: "#6B2FBB" },
    gamesPlayed: 17,
    wins: 9,
    losses: 8,
    winRate: 53,
    avgKills: 3.5,
    avgGameTime: "10m 45s",
    synergy: 72,
  },
  {
    player1: { name: "OrangeFast", color: "#EF7D0E" },
    player2: { name: "LimeQuick", color: "#50EF39" },
    gamesPlayed: 15,
    wins: 10,
    losses: 5,
    winRate: 67,
    avgKills: 4.1,
    avgGameTime: "8m 52s",
    synergy: 88,
  },
  {
    player1: { name: "CyanSpace", color: "#38FEDC" },
    player2: { name: "WhiteClean", color: "#D6E0F0" },
    gamesPlayed: 14,
    wins: 6,
    losses: 8,
    winRate: 43,
    avgKills: 3.2,
    avgGameTime: "12m 18s",
    synergy: 65,
  },
  {
    player1: { name: "RedSus", color: "#C51111" },
    player2: { name: "BlueCrew", color: "#132ED1" },
    gamesPlayed: 21,
    wins: 14,
    losses: 7,
    winRate: 67,
    avgKills: 4.3,
    avgGameTime: "9m 42s",
    synergy: 90,
  },
]

const tripleImposterGames = [
  {
    players: [
      { name: "RedSus", color: "#C51111" },
      { name: "BlueCrew", color: "#132ED1" },
      { name: "GreenBean", color: "#117F2D" },
    ],
    gamesPlayed: 8,
    wins: 7,
    losses: 1,
    winRate: 88,
    avgKills: 6.5,
    avgGameTime: "7m 23s",
  },
  {
    players: [
      { name: "PinkVent", color: "#ED54BA" },
      { name: "YellowStar", color: "#F5F557" },
      { name: "OrangeFast", color: "#EF7D0E" },
    ],
    gamesPlayed: 6,
    wins: 3,
    losses: 3,
    winRate: 50,
    avgKills: 5.2,
    avgGameTime: "9m 15s",
  },
  {
    players: [
      { name: "RedSus", color: "#C51111" },
      { name: "PinkVent", color: "#ED54BA" },
      { name: "YellowStar", color: "#F5F557" },
    ],
    gamesPlayed: 5,
    wins: 4,
    losses: 1,
    winRate: 80,
    avgKills: 6.8,
    avgGameTime: "6m 50s",
  },
]

const imposterStats = [
  {
    name: "RedSus",
    color: "#C51111",
    totalGamesAsImposter: 47,
    soloWins: 12,
    duoWins: 23,
    bestPartner: "PinkVent",
    worstPartner: "CyanSpace",
  },
  {
    name: "PinkVent",
    color: "#ED54BA",
    totalGamesAsImposter: 37,
    soloWins: 8,
    duoWins: 15,
    bestPartner: "RedSus",
    worstPartner: "YellowStar",
  },
  {
    name: "BlueCrew",
    color: "#132ED1",
    totalGamesAsImposter: 43,
    soloWins: 10,
    duoWins: 21,
    bestPartner: "RedSus",
    worstPartner: "WhiteClean",
  },
]

export function ImposterCombinations() {
  return (
    <div className="space-y-6">
      <div className="bg-[#2a3a3c] rounded-2xl border-6 border-[#1a2a2c] p-4 shadow-lg">
        <h2 className="font-display text-3xl text-white">Imposter Combinations & Synergy</h2>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-4 border-destructive/30 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#8a9a9c] mb-2">Best Duo</p>
              <div className="flex items-center gap-2 mb-2">
                <CrewmateAvatar color="#C51111" size="sm" />
                <span className="text-sm">+</span>
                <CrewmateAvatar color="#ED54BA" size="sm" />
              </div>
              <h3 className="text-xl">RedSus + PinkVent</h3>
              <p className="text-sm text-destructive">70% Win Rate</p>
            </div>
            <Trophy className="w-10 h-10 text-destructive" />
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#55efc4]/20 to-[#55efc4]/5 border-4 border-[#55efc4]/30 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#8a9a9c] mb-2">Total Pairings</p>
              <h3 className="text-4xl">67</h3>
              <p className="text-sm text-[#55efc4]">Unique combinations</p>
            </div>
            <Users2 className="w-10 h-10 text-[#55efc4]" />
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 border-4 border-orange-500/30 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#8a9a9c] mb-2">Avg Duo Win Rate</p>
              <h3 className="text-4xl">59%</h3>
              <p className="text-sm text-orange-400">Across all pairs</p>
            </div>
            <TrendingDown className="w-10 h-10 text-orange-400" />
          </div>
        </Card>
      </div>

      {/* Imposter Duo Statistics */}
      <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg">
        <h3 className="text-xl mb-4 uppercase tracking-wider">Imposter Duo Statistics</h3>
        <div className="space-y-4">
          {imposterPairs.map((pair, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-[#698b8d]/20 border-2 border-[#55efc4]/20 hover:border-[#55efc4]/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <CrewmateAvatar color={pair.player1.color} size="md" />
                    <span className="uppercase tracking-wide">{pair.player1.name}</span>
                  </div>
                  <span className="text-[#8a9a9c] text-xl">+</span>
                  <div className="flex items-center gap-3">
                    <CrewmateAvatar color={pair.player2.color} size="md" />
                    <span className="uppercase tracking-wide">{pair.player2.name}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    className={
                      pair.winRate >= 65
                        ? "bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500/30 rounded-full px-4 text-lg uppercase tracking-wider"
                        : pair.winRate >= 50
                          ? "bg-[#55efc4]/20 text-[#55efc4] border-2 border-[#55efc4]/30 rounded-full px-4 text-lg uppercase tracking-wider"
                          : "bg-destructive/20 text-destructive border-2 border-destructive/30 rounded-full px-4 text-lg uppercase tracking-wider"
                    }
                  >
                    {pair.winRate}% WR
                  </Badge>
                  <Badge className="bg-[#55efc4]/20 text-[#55efc4] border-2 border-[#55efc4]/30 rounded-full px-3 text-sm">
                    Synergy: {pair.synergy}%
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-3">
                <div className="bg-[#698b8d]/30 rounded-lg p-2 text-center">
                  <p className="text-xs text-[#8a9a9c]">Games</p>
                  <p className="text-lg">{pair.gamesPlayed}</p>
                </div>
                <div className="bg-emerald-500/10 rounded-lg p-2 text-center border border-emerald-500/30">
                  <p className="text-xs text-[#8a9a9c]">Wins</p>
                  <p className="text-lg text-emerald-400">{pair.wins}</p>
                </div>
                <div className="bg-rose-500/10 rounded-lg p-2 text-center border border-rose-500/30">
                  <p className="text-xs text-[#8a9a9c]">Losses</p>
                  <p className="text-lg text-rose-400">{pair.losses}</p>
                </div>
                <div className="bg-[#698b8d]/30 rounded-lg p-2 text-center">
                  <p className="text-xs text-[#8a9a9c]">Avg Kills</p>
                  <p className="text-lg text-destructive">{pair.avgKills}</p>
                </div>
                <div className="bg-[#698b8d]/30 rounded-lg p-2 text-center">
                  <p className="text-xs text-[#8a9a9c]">Avg Time</p>
                  <p className="text-lg text-cyan-400">{pair.avgGameTime}</p>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-[#8a9a9c]">
                  <span>Win Rate</span>
                  <span>{pair.winRate}%</span>
                </div>
                <Progress value={pair.winRate} className="h-2" />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Triple Imposter Games */}
      <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg">
        <h3 className="text-xl mb-2 uppercase tracking-wider">Triple Imposter Games</h3>
        <p className="text-sm text-[#8a9a9c] mb-4">Special game modes with 3 imposters (chaos mode)</p>
        <div className="space-y-3">
          {tripleImposterGames.map((game, index) => (
            <div key={index} className="p-4 rounded-xl bg-destructive/10 border-2 border-destructive/30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {game.players.map((player) => (
                    <CrewmateAvatar key={player.name} color={player.color} size="sm" />
                  ))}
                  <div className="ml-2">
                    <div className="flex gap-1 text-sm">
                      {game.players.map((player, i) => (
                        <span key={player.name}>
                          {player.name}
                          {i < game.players.length - 1 && <span className="text-[#8a9a9c]"> + </span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <Badge
                  className={
                    game.winRate >= 60
                      ? "bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500/30 rounded-full px-4 uppercase tracking-wider"
                      : "bg-destructive/20 text-destructive border-2 border-destructive/30 rounded-full px-4 uppercase tracking-wider"
                  }
                >
                  {game.winRate}% WR
                </Badge>
              </div>
              <div className="grid grid-cols-5 gap-3 text-sm bg-[#698b8d]/20 rounded-lg p-3">
                <div className="text-center">
                  <span className="text-[#8a9a9c] block text-xs">Games</span>
                  <span>{game.gamesPlayed}</span>
                </div>
                <div className="text-center">
                  <span className="text-[#8a9a9c] block text-xs">Wins</span>
                  <span className="text-emerald-400">{game.wins}</span>
                </div>
                <div className="text-center">
                  <span className="text-[#8a9a9c] block text-xs">Losses</span>
                  <span className="text-rose-400">{game.losses}</span>
                </div>
                <div className="text-center">
                  <span className="text-[#8a9a9c] block text-xs">Avg Kills</span>
                  <span className="text-destructive">{game.avgKills}</span>
                </div>
                <div className="text-center">
                  <span className="text-[#8a9a9c] block text-xs">Avg Time</span>
                  <span className="text-cyan-400">{game.avgGameTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Individual Imposter Performance */}
      <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg">
        <h3 className="text-xl mb-4 uppercase tracking-wider">Top Imposter Performance</h3>
        <div className="space-y-4">
          {imposterStats.map((player) => (
            <div key={player.name} className="p-4 rounded-xl bg-[#698b8d]/20 border-2 border-destructive/20">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <CrewmateAvatar color={player.color} size="md" />
                  <div>
                    <h4 className="uppercase tracking-wide">{player.name}</h4>
                    <p className="text-xs text-[#8a9a9c]">{player.totalGamesAsImposter} games as imposter</p>
                  </div>
                </div>
                <Badge className="bg-destructive text-white border-2 border-destructive rounded-full px-4 uppercase tracking-wider">
                  IMPOSTER
                </Badge>
              </div>
              <div className="grid grid-cols-4 gap-3 text-sm">
                <div className="bg-[#698b8d]/30 rounded-lg p-2 text-center">
                  <p className="text-xs text-[#8a9a9c]">Solo Wins</p>
                  <p className="text-lg text-[#55efc4]">{player.soloWins}</p>
                </div>
                <div className="bg-[#698b8d]/30 rounded-lg p-2 text-center">
                  <p className="text-xs text-[#8a9a9c]">Duo Wins</p>
                  <p className="text-lg text-emerald-400">{player.duoWins}</p>
                </div>
                <div className="bg-emerald-500/10 rounded-lg p-2 text-center border border-emerald-500/30">
                  <p className="text-xs text-[#8a9a9c]">Best Partner</p>
                  <p className="text-sm text-emerald-400">{player.bestPartner}</p>
                </div>
                <div className="bg-rose-500/10 rounded-lg p-2 text-center border border-rose-500/30">
                  <p className="text-xs text-[#8a9a9c]">Worst Partner</p>
                  <p className="text-sm text-rose-400">{player.worstPartner}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
