"use client"

import { useState } from "react"
import { Card } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ListFilter, ArrowUpDown, Search } from "lucide-react"
import { Input } from "./ui/input"

const gamesData = [
  {
    id: "G-2501",
    date: "2025-10-03",
    time: "14:32",
    map: "The Skeld",
    players: 10,
    outcome: "Crew Win",
    duration: "11m 23s",
    imposters: ["RedSus", "PinkVent"],
    tasksCompleted: 45,
    kills: 3,
  },
  {
    id: "G-2500",
    date: "2025-10-03",
    time: "13:15",
    map: "Polus",
    players: 9,
    outcome: "Imposter Win",
    duration: "8m 45s",
    imposters: ["BlueCrew", "GreenBean"],
    tasksCompleted: 28,
    kills: 5,
  },
  {
    id: "G-2499",
    date: "2025-10-02",
    time: "19:45",
    map: "Mira HQ",
    players: 10,
    outcome: "Crew Win",
    duration: "15m 12s",
    imposters: ["YellowStar", "PurpleKing"],
    tasksCompleted: 52,
    kills: 2,
  },
  {
    id: "G-2498",
    date: "2025-10-02",
    time: "18:22",
    map: "The Skeld",
    players: 8,
    outcome: "Imposter Win",
    duration: "6m 33s",
    imposters: ["RedSus", "CyanSpace"],
    tasksCompleted: 15,
    kills: 6,
  },
  {
    id: "G-2497",
    date: "2025-10-02",
    time: "17:05",
    map: "Airship",
    players: 10,
    outcome: "Crew Win",
    duration: "13m 56s",
    imposters: ["LimeQuick", "OrangeFast"],
    tasksCompleted: 48,
    kills: 3,
  },
  {
    id: "G-2496",
    date: "2025-10-01",
    time: "21:15",
    map: "Polus",
    players: 10,
    outcome: "Crew Win",
    duration: "12m 18s",
    imposters: ["WhiteClean", "BlackDark"],
    tasksCompleted: 46,
    kills: 4,
  },
  {
    id: "G-2495",
    date: "2025-10-01",
    time: "20:33",
    map: "The Skeld",
    players: 9,
    outcome: "Imposter Win",
    duration: "9m 41s",
    imposters: ["RedSus", "BrownBear"],
    tasksCompleted: 22,
    kills: 7,
  },
  {
    id: "G-2494",
    date: "2025-10-01",
    time: "19:12",
    map: "Mira HQ",
    players: 10,
    outcome: "Crew Win",
    duration: "14m 05s",
    imposters: ["PinkVent", "BlueCrew"],
    tasksCompleted: 51,
    kills: 2,
  },
]

export function GamesList() {
  const [sortField, setSortField] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")
  const [searchTerm, setSearchTerm] = useState("")

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-[#2a3a3c] rounded-2xl border-6 border-[#1a2a2c] p-4 shadow-lg flex items-center justify-between">
        <h2 className="font-display text-3xl text-white">Games History</h2>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a9a9c]" />
            <Input
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-[#698b8d] border-2 border-[#547273] text-white rounded-xl"
            />
          </div>
          <Button className="bg-[#55efc4] text-[#1e3a3c] hover:bg-[#3fd5ac] border-2 border-[#3fd5ac] rounded-xl px-6 shadow-lg">
            <ListFilter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-[#3a4a4c] hover:bg-transparent bg-[#1a2a2c]">
              <TableHead>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1 hover:text-[#55efc4] uppercase tracking-wider"
                  onClick={() => handleSort("id")}
                >
                  Game ID
                  <ArrowUpDown className="w-3 h-3" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1 hover:text-[#55efc4] uppercase tracking-wider"
                  onClick={() => handleSort("date")}
                >
                  Date & Time
                  <ArrowUpDown className="w-3 h-3" />
                </Button>
              </TableHead>
              <TableHead className="uppercase tracking-wider">Map</TableHead>
              <TableHead className="text-center uppercase tracking-wider">Players</TableHead>
              <TableHead className="uppercase tracking-wider">Outcome</TableHead>
              <TableHead className="uppercase tracking-wider">Duration</TableHead>
              <TableHead className="uppercase tracking-wider">Tasks</TableHead>
              <TableHead className="uppercase tracking-wider">Kills</TableHead>
              <TableHead className="uppercase tracking-wider">Imposters</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gamesData.map((game) => (
              <TableRow
                key={game.id}
                className="border-[#3a4a4c] hover:bg-[#698b8d]/30 cursor-pointer transition-colors"
              >
                <TableCell className="text-[#55efc4] uppercase tracking-wider">{game.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{game.date}</span>
                    <span className="text-xs text-[#8a9a9c]">{game.time}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-[#698b8d] text-white border-2 border-[#547273] rounded-full px-3 uppercase tracking-wide">
                    {game.map}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">{game.players}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      game.outcome === "Crew Win"
                        ? "bg-[#55efc4]/20 text-[#55efc4] border-2 border-[#55efc4]/30 rounded-full px-3 uppercase tracking-wide"
                        : "bg-destructive/20 text-destructive border-2 border-destructive/30 rounded-full px-3 uppercase tracking-wide"
                    }
                  >
                    {game.outcome}
                  </Badge>
                </TableCell>
                <TableCell className="text-[#8a9a9c]">{game.duration}</TableCell>
                <TableCell className="text-cyan-400">{game.tasksCompleted}</TableCell>
                <TableCell className="text-destructive">{game.kills}</TableCell>
                <TableCell>
                  <div className="flex gap-1 flex-wrap">
                    {game.imposters.map((imposter) => (
                      <Badge
                        key={imposter}
                        className="text-xs border-2 border-destructive/30 text-destructive bg-destructive/10 rounded-full uppercase tracking-wide"
                      >
                        {imposter}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <div className="flex justify-center gap-3">
        <Button className="bg-[#698b8d] border-4 border-[#547273] rounded-xl px-6 py-3 shadow-[0_4px_0_#547273] hover:translate-y-1 hover:shadow-[0_2px_0_#547273] transition-all uppercase tracking-wider">
          Previous
        </Button>
        <Button className="bg-[#55efc4] text-[#1e3a3c] border-4 border-[#3fd5ac] rounded-xl px-6 py-3 shadow-[0_4px_0_#3fd5ac] hover:translate-y-1 hover:shadow-[0_2px_0_#3fd5ac] transition-all">
          1
        </Button>
        <Button className="bg-[#698b8d] border-4 border-[#547273] rounded-xl px-6 py-3 shadow-[0_4px_0_#547273] hover:translate-y-1 hover:shadow-[0_2px_0_#547273] transition-all">
          2
        </Button>
        <Button className="bg-[#698b8d] border-4 border-[#547273] rounded-xl px-6 py-3 shadow-[0_4px_0_#547273] hover:translate-y-1 hover:shadow-[0_2px_0_#547273] transition-all">
          3
        </Button>
        <Button className="bg-[#698b8d] border-4 border-[#547273] rounded-xl px-6 py-3 shadow-[0_4px_0_#547273] hover:translate-y-1 hover:shadow-[0_2px_0_#547273] transition-all uppercase tracking-wider">
          Next
        </Button>
      </div>
    </div>
  )
}
