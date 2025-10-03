import { Card } from "./ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
} from "recharts"
import { Gamepad2, Users, Clock, Target } from "lucide-react"

const gamesOverTimeData = [
  { month: "Jan", games: 45, crewWins: 28, imposterWins: 17 },
  { month: "Feb", games: 52, crewWins: 31, imposterWins: 21 },
  { month: "Mar", games: 48, crewWins: 29, imposterWins: 19 },
  { month: "Apr", games: 61, crewWins: 36, imposterWins: 25 },
  { month: "May", games: 55, crewWins: 33, imposterWins: 22 },
  { month: "Jun", games: 68, crewWins: 41, imposterWins: 27 },
]

const outcomeData = [
  { name: "Crew Wins", value: 198, color: "#55efc4" },
  { name: "Imposter Wins", value: 131, color: "#C51111" },
  { name: "Disconnects", value: 12, color: "#698b8d" },
]

const roleDistribution = [
  { name: "Crewmate", value: 360, color: "#55efc4" },
  { name: "Imposter", value: 164, color: "#C51111" },
]

const mapStats = [
  { map: "The Skeld", games: 125, crewWins: 78, imposterWins: 47 },
  { map: "Mira HQ", games: 87, crewWins: 52, imposterWins: 35 },
  { map: "Polus", games: 94, crewWins: 56, imposterWins: 38 },
  { map: "Airship", games: 35, crewWins: 21, imposterWins: 14 },
]

export function GameStats() {
  return (
    <div className="space-y-6">
      <div className="bg-[#2a3a3c] rounded-2xl border-6 border-[#1a2a2c] p-4 shadow-lg">
        <h2 className="font-display text-3xl text-white">Game Statistics Overview</h2>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#8a9a9c] uppercase tracking-wider">Total Games</p>
              <h2 className="text-4xl mt-2 text-[#55efc4]">341</h2>
            </div>
            <div className="w-14 h-14 rounded-full bg-[#55efc4]/20 flex items-center justify-center border-2 border-[#55efc4]/40">
              <Gamepad2 className="w-7 h-7 text-[#55efc4]" />
            </div>
          </div>
        </Card>

        <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#8a9a9c] uppercase tracking-wider">Avg Game Time</p>
              <h2 className="text-4xl mt-2 text-[#55efc4]">11m</h2>
            </div>
            <div className="w-14 h-14 rounded-full bg-[#55efc4]/20 flex items-center justify-center border-2 border-[#55efc4]/40">
              <Clock className="w-7 h-7 text-[#55efc4]" />
            </div>
          </div>
        </Card>

        <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#8a9a9c] uppercase tracking-wider">Total Players</p>
              <h2 className="text-4xl mt-2 text-[#55efc4]">47</h2>
            </div>
            <div className="w-14 h-14 rounded-full bg-[#55efc4]/20 flex items-center justify-center border-2 border-[#55efc4]/40">
              <Users className="w-7 h-7 text-[#55efc4]" />
            </div>
          </div>
        </Card>

        <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#8a9a9c] uppercase tracking-wider">Total Kills</p>
              <h2 className="text-4xl mt-2 text-destructive">892</h2>
            </div>
            <div className="w-14 h-14 rounded-full bg-destructive/20 flex items-center justify-center border-2 border-destructive/40">
              <Target className="w-7 h-7 text-destructive" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg">
          <h3 className="text-xl mb-4">Games Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={gamesOverTimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3a4a4c" />
              <XAxis dataKey="month" stroke="#8a9a9c" />
              <YAxis stroke="#8a9a9c" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#2a3a3c",
                  border: "2px solid #55efc4",
                  borderRadius: "8px",
                  color: "#ffffff",
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="games" stroke="#55efc4" strokeWidth={3} name="Total Games" />
              <Line type="monotone" dataKey="crewWins" stroke="#3fd5ac" strokeWidth={2} name="Crew Wins" />
              <Line type="monotone" dataKey="imposterWins" stroke="#C51111" strokeWidth={2} name="Imposter Wins" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg">
          <h3 className="text-xl mb-4">Game Outcomes</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={outcomeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {outcomeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#2a3a3c",
                  border: "2px solid #55efc4",
                  borderRadius: "8px",
                  color: "#ffffff",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg">
          <h3 className="text-xl mb-4">Map Statistics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mapStats}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3a4a4c" />
              <XAxis dataKey="map" stroke="#8a9a9c" angle={-20} textAnchor="end" height={80} />
              <YAxis stroke="#8a9a9c" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#2a3a3c",
                  border: "2px solid #55efc4",
                  borderRadius: "8px",
                  color: "#ffffff",
                }}
              />
              <Legend />
              <Bar dataKey="crewWins" fill="#55efc4" name="Crew Wins" radius={[8, 8, 0, 0]} />
              <Bar dataKey="imposterWins" fill="#C51111" name="Imposter Wins" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg">
          <h3 className="text-xl mb-4">Role Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={roleDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}`}
              >
                {roleDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#2a3a3c",
                  border: "2px solid #55efc4",
                  borderRadius: "8px",
                  color: "#ffffff",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  )
}
