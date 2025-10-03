import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Target, TrendingUp, Skull } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { CrewmateAvatar } from "./crewmate-avatar"

const killsByPlayer = [
  { name: "RedSus", kills: 156, color: "#C51111", efficiency: 3.3 },
  { name: "BlueCrew", kills: 134, color: "#132ED1", efficiency: 3.1 },
  { name: "PinkVent", kills: 121, color: "#ED54BA", efficiency: 3.3 },
  { name: "GreenBean", kills: 98, color: "#117F2D", efficiency: 2.6 },
  { name: "YellowStar", kills: 87, color: "#F5F557", efficiency: 2.7 },
  { name: "OrangeFast", kills: 76, color: "#EF7D0E", efficiency: 2.1 },
  { name: "PurpleKing", kills: 65, color: "#6B2FBB", efficiency: 1.8 },
  { name: "CyanSpace", kills: 54, color: "#38FEDC", efficiency: 1.7 },
]

const killPatterns = [
  {
    killer: "RedSus",
    killerColor: "#C51111",
    victim: "YellowStar",
    victimColor: "#F5F557",
    count: 12,
    avgTime: "4m 23s",
    locations: ["Electrical", "Storage", "Admin"],
  },
  {
    killer: "RedSus",
    killerColor: "#C51111",
    victim: "BlueCrew",
    victimColor: "#132ED1",
    count: 9,
    avgTime: "5m 12s",
    locations: ["Cafeteria", "Weapons", "Navigation"],
  },
  {
    killer: "PinkVent",
    killerColor: "#ED54BA",
    victim: "GreenBean",
    victimColor: "#117F2D",
    count: 11,
    avgTime: "3m 45s",
    locations: ["MedBay", "Security", "Reactor"],
  },
  {
    killer: "BlueCrew",
    killerColor: "#132ED1",
    victim: "OrangeFast",
    victimColor: "#EF7D0E",
    count: 8,
    avgTime: "6m 01s",
    locations: ["O2", "Admin", "Storage"],
  },
  {
    killer: "GreenBean",
    killerColor: "#117F2D",
    victim: "PurpleKing",
    victimColor: "#6B2FBB",
    count: 7,
    avgTime: "4m 50s",
    locations: ["Communications", "Shields", "Navigation"],
  },
  {
    killer: "PinkVent",
    killerColor: "#ED54BA",
    victim: "CyanSpace",
    victimColor: "#38FEDC",
    count: 10,
    avgTime: "3m 20s",
    locations: ["Engine", "Electrical", "Security"],
  },
]

const locationHotspots = [
  { location: "Electrical", kills: 89, deathRate: 26 },
  { location: "MedBay", kills: 67, deathRate: 20 },
  { location: "Navigation", kills: 54, deathRate: 16 },
  { location: "Security", kills: 48, deathRate: 14 },
  { location: "Admin", kills: 42, deathRate: 12 },
  { location: "Storage", kills: 38, deathRate: 11 },
  { location: "Cafeteria", kills: 31, deathRate: 9 },
  { location: "Reactor", kills: 24, deathRate: 7 },
]

const killMethodData = [
  { method: "Direct Kill", value: 65 },
  { method: "Vent Kill", value: 20 },
  { method: "Sabotage Kill", value: 10 },
  { method: "Door Trap", value: 5 },
]

export function KillPermutations() {
  return (
    <div className="space-y-6">
      <div className="bg-[#2a3a3c] rounded-2xl border-6 border-[#1a2a2c] p-4 shadow-lg">
        <h2 className="font-display text-3xl text-white">Kill Patterns & Analysis</h2>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-destructive/20 to-destructive/5 border-4 border-destructive/30 rounded-xl p-6 shadow-lg">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#8a9a9c] text-sm">
              <Target className="w-5 h-5 text-destructive" />
              <span>Most Dangerous Player</span>
            </div>
            <div className="flex items-center gap-3">
              <CrewmateAvatar color="#C51111" size="lg" />
              <div>
                <h3 className="text-2xl">RedSus</h3>
                <p className="text-sm text-destructive">156 total kills</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 border-4 border-orange-500/30 rounded-xl p-6 shadow-lg">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#8a9a9c] text-sm">
              <Skull className="w-5 h-5 text-orange-400" />
              <span>Deadliest Location</span>
            </div>
            <div>
              <h3 className="text-2xl">Electrical</h3>
              <p className="text-sm text-orange-400">89 kills (26% death rate)</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-[#55efc4]/20 to-[#55efc4]/5 border-4 border-[#55efc4]/30 rounded-xl p-6 shadow-lg">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#8a9a9c] text-sm">
              <TrendingUp className="w-5 h-5 text-[#55efc4]" />
              <span>Avg Kill Time</span>
            </div>
            <div>
              <h3 className="text-2xl">4m 18s</h3>
              <p className="text-sm text-[#55efc4]">After round start</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-destructive" />
            <h3 className="text-xl uppercase tracking-wider">Kills by Player</h3>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={killsByPlayer} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#3a4a4c" />
              <XAxis type="number" stroke="#8a9a9c" />
              <YAxis dataKey="name" type="category" stroke="#8a9a9c" width={100} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#2a3a3c",
                  border: "2px solid #55efc4",
                  borderRadius: "8px",
                  color: "#ffffff",
                }}
              />
              <Bar dataKey="kills" radius={[0, 8, 8, 0]}>
                {killsByPlayer.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-orange-400" />
            <h3 className="text-xl uppercase tracking-wider">Kill Location Hotspots</h3>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={locationHotspots}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3a4a4c" />
              <XAxis dataKey="location" stroke="#8a9a9c" angle={-45} textAnchor="end" height={100} />
              <YAxis stroke="#8a9a9c" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#2a3a3c",
                  border: "2px solid #55efc4",
                  borderRadius: "8px",
                  color: "#ffffff",
                }}
              />
              <Bar dataKey="kills" fill="#EF7D0E" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Kill Patterns */}
      <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg">
        <h3 className="text-xl mb-4 uppercase tracking-wider">Common Kill Patterns</h3>
        <div className="space-y-3">
          {killPatterns.map((pattern, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl bg-[#698b8d]/20 border-2 border-[#55efc4]/20 hover:border-[#55efc4]/40 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1">
                <CrewmateAvatar color={pattern.killerColor} size="md" />
                <span className="uppercase tracking-wide">{pattern.killer}</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-12 h-0.5 bg-destructive"></div>
                <Target className="w-6 h-6 text-destructive" />
                <div className="w-12 h-0.5 bg-destructive"></div>
              </div>

              <div className="flex items-center gap-3 flex-1">
                <CrewmateAvatar color={pattern.victimColor} size="md" isDead />
                <span className="uppercase tracking-wide">{pattern.victim}</span>
              </div>

              <div className="flex items-center gap-3">
                <Badge className="bg-destructive text-white border-2 border-destructive rounded-full text-sm px-3 uppercase tracking-wider">
                  {pattern.count} kills
                </Badge>
                <Badge className="bg-[#698b8d] text-white border-2 border-[#547273] rounded-full text-sm px-3">
                  {pattern.avgTime}
                </Badge>
                <div className="hidden xl:flex gap-1">
                  {pattern.locations.slice(0, 2).map((location) => (
                    <Badge
                      key={location}
                      className="text-xs border-2 border-[#55efc4]/20 bg-[#55efc4]/10 text-[#55efc4] rounded-full uppercase tracking-wide"
                    >
                      {location}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Kill Efficiency */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg">
          <h3 className="text-xl mb-4 uppercase tracking-wider">Kill Efficiency</h3>
          <div className="space-y-3">
            {killsByPlayer.slice(0, 5).map((player, index) => (
              <div key={player.name} className="bg-[#698b8d]/20 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <CrewmateAvatar color={player.color} size="sm" />
                    <span className="uppercase tracking-wide">{player.name}</span>
                  </div>
                  <Badge className="bg-[#55efc4]/20 text-[#55efc4] border-2 border-[#55efc4]/30 rounded-full px-3">
                    {player.efficiency} kills/game
                  </Badge>
                </div>
                <div className="w-full bg-[#3a4a4c] rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-destructive to-orange-400 h-2 rounded-full"
                    style={{ width: `${(player.efficiency / 4) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg">
          <h3 className="text-xl mb-4 uppercase tracking-wider">Kill Method Distribution</h3>
          <div className="space-y-3">
            {killMethodData.map((method, index) => (
              <div key={method.method} className="bg-[#698b8d]/20 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="uppercase tracking-wide text-sm">{method.method}</span>
                  <Badge className="bg-[#55efc4]/20 text-[#55efc4] border-2 border-[#55efc4]/30 rounded-full px-3">
                    {method.value}%
                  </Badge>
                </div>
                <div className="w-full bg-[#3a4a4c] rounded-full h-2">
                  <div className="bg-[#55efc4] h-2 rounded-full" style={{ width: `${method.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
