import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Trophy, Skull } from "lucide-react"
import { Progress } from "./ui/progress"
import { CrewmateAvatar } from "./crewmate-avatar"

const playerData = [
  {
    name: "RedSus",
    color: "#C51111",
    gamesPlayed: 145,
    wins: 89,
    losses: 56,
    winRate: 61,
    crewmateWins: 54,
    imposterWins: 35,
    crewmatePlayed: 98,
    imposterPlayed: 47,
    tasksCompleted: 342,
    kills: 156,
    sabotages: 89,
  },
  {
    name: "BlueCrew",
    color: "#132ED1",
    gamesPlayed: 132,
    wins: 71,
    losses: 61,
    winRate: 54,
    crewmateWins: 48,
    imposterWins: 23,
    crewmatePlayed: 89,
    imposterPlayed: 43,
    tasksCompleted: 298,
    kills: 134,
    sabotages: 67,
  },
  {
    name: "GreenBean",
    color: "#117F2D",
    gamesPlayed: 128,
    wins: 78,
    losses: 50,
    winRate: 61,
    crewmateWins: 52,
    imposterWins: 26,
    crewmatePlayed: 91,
    imposterPlayed: 37,
    tasksCompleted: 312,
    kills: 98,
    sabotages: 54,
  },
  {
    name: "PinkVent",
    color: "#ED54BA",
    gamesPlayed: 119,
    wins: 65,
    losses: 54,
    winRate: 55,
    crewmateWins: 42,
    imposterWins: 23,
    crewmatePlayed: 82,
    imposterPlayed: 37,
    tasksCompleted: 276,
    kills: 121,
    sabotages: 71,
  },
  {
    name: "YellowStar",
    color: "#F5F557",
    gamesPlayed: 108,
    wins: 62,
    losses: 46,
    winRate: 57,
    crewmateWins: 41,
    imposterWins: 21,
    crewmatePlayed: 76,
    imposterPlayed: 32,
    tasksCompleted: 245,
    kills: 87,
    sabotages: 48,
  },
  {
    name: "OrangeFast",
    color: "#EF7D0E",
    gamesPlayed: 115,
    wins: 59,
    losses: 56,
    winRate: 51,
    crewmateWins: 38,
    imposterWins: 21,
    crewmatePlayed: 79,
    imposterPlayed: 36,
    tasksCompleted: 267,
    kills: 76,
    sabotages: 52,
  },
]

export function PlayerStats() {
  return (
    <div className="space-y-6">
      <div className="bg-[#2a3a3c] rounded-2xl border-6 border-[#1a2a2c] p-4 shadow-lg">
        <h2 className="font-display text-3xl text-white">Player Statistics</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {playerData.map((player) => (
          <Card
            key={player.name}
            className="bg-[#2a3a3c] border-6 border-[#1a2a2c] rounded-2xl p-6 space-y-4 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <CrewmateAvatar color={player.color} size="lg" />
                <div>
                  <h3 className="text-2xl">{player.name}</h3>
                  <p className="text-[#8a9a9c] text-sm">{player.gamesPlayed} games played</p>
                </div>
              </div>
              <Badge className="bg-[#55efc4] text-[#1e3a3c] border-2 border-[#3fd5ac] px-4 py-2 rounded-full text-lg">
                {player.winRate}%
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#8a9a9c]">Win Rate</span>
                <span className="text-[#55efc4]">{player.winRate}%</span>
              </div>
              <Progress value={player.winRate} className="h-3" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-500/10 border-2 border-emerald-500/30 rounded-xl p-3">
                <div className="flex items-center gap-2 text-sm text-emerald-400 mb-1">
                  <Trophy className="w-4 h-4" />
                  <span>Wins</span>
                </div>
                <p className="text-2xl text-emerald-400">{player.wins}</p>
              </div>
              <div className="bg-rose-500/10 border-2 border-rose-500/30 rounded-xl p-3">
                <div className="flex items-center gap-2 text-sm text-rose-400 mb-1">
                  <Skull className="w-4 h-4" />
                  <span>Losses</span>
                </div>
                <p className="text-2xl text-rose-400">{player.losses}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t-2 border-[#3a4a4c]">
              <div className="bg-[#55efc4]/10 border-2 border-[#55efc4]/30 rounded-xl p-3">
                <p className="text-xs text-[#55efc4] mb-1">Crewmate</p>
                <p className="text-xl text-[#55efc4]">{player.crewmatePlayed} played</p>
                <p className="text-xs text-[#8a9a9c]">{player.crewmateWins} wins</p>
              </div>
              <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-3">
                <p className="text-xs text-red-400 mb-1">Imposter</p>
                <p className="text-xl text-red-400">{player.imposterPlayed} played</p>
                <p className="text-xs text-[#8a9a9c]">{player.imposterWins} wins</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-3 border-t-2 border-[#3a4a4c]">
              <div className="text-center bg-[#698b8d]/20 rounded-lg p-2">
                <p className="text-xs text-[#8a9a9c]">Tasks</p>
                <p className="text-lg text-cyan-400">{player.tasksCompleted}</p>
              </div>
              <div className="text-center bg-[#698b8d]/20 rounded-lg p-2">
                <p className="text-xs text-[#8a9a9c]">Kills</p>
                <p className="text-lg text-destructive">{player.kills}</p>
              </div>
              <div className="text-center bg-[#698b8d]/20 rounded-lg p-2">
                <p className="text-xs text-[#8a9a9c]">Sabotages</p>
                <p className="text-lg text-orange-400">{player.sabotages}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
