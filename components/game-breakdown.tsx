import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"
import { MapPin, Users, Clock, Target, AlertCircle, Skull } from "lucide-react"
import { ScrollArea } from "./ui/scroll-area"
import { CrewmateAvatar } from "./crewmate-avatar"

const gameDetails = {
  id: "G-2501",
  date: "2025-10-03",
  time: "14:32",
  map: "The Skeld",
  outcome: "Crew Win",
  duration: "11m 23s",
  totalPlayers: 10,
  tasksCompleted: 45,
  totalTasks: 52,
  emergencyMeetings: 4,
  bodiesReported: 3,
  imposters: [
    { name: "RedSus", color: "#C51111", kills: 2, sabotages: 3 },
    { name: "PinkVent", color: "#ED54BA", kills: 1, sabotages: 2 },
  ],
  crew: [
    { name: "BlueCrew", color: "#132ED1", survived: true, tasksCompleted: 8 },
    { name: "GreenBean", color: "#117F2D", survived: true, tasksCompleted: 7 },
    { name: "YellowStar", color: "#F5F557", survived: false, killedBy: "RedSus", killedAt: "1:23", tasksCompleted: 2 },
    { name: "OrangeFast", color: "#EF7D0E", survived: true, tasksCompleted: 9 },
    {
      name: "PurpleKing",
      color: "#6B2FBB",
      survived: false,
      killedBy: "PinkVent",
      killedAt: "4:45",
      tasksCompleted: 5,
    },
    { name: "CyanSpace", color: "#38FEDC", survived: true, tasksCompleted: 6 },
    { name: "LimeQuick", color: "#50EF39", survived: true, tasksCompleted: 7 },
    { name: "WhiteClean", color: "#D6E0F0", survived: false, killedBy: "RedSus", killedAt: "8:20", tasksCompleted: 1 },
  ],
}

const events = [
  { time: "0:00", event: "Game Started", icon: "start", description: "10 players entered The Skeld", type: "start" },
  {
    time: "1:23",
    event: "Body Reported",
    icon: "alert",
    description: "YellowStar found dead in Electrical by BlueCrew",
    type: "death",
  },
  {
    time: "2:15",
    event: "Emergency Meeting",
    icon: "meeting",
    description: "Discussion and voting initiated",
    type: "meeting",
  },
  { time: "2:45", event: "Vote Results", icon: "vote", description: "Tied vote - No one was ejected", type: "vote" },
  {
    time: "3:20",
    event: "O2 Sabotaged",
    icon: "sabotage",
    description: "Imposters sabotaged oxygen system",
    type: "sabotage",
  },
  { time: "3:45", event: "Sabotage Fixed", icon: "fix", description: "Crew fixed O2 in time", type: "fix" },
  {
    time: "4:45",
    event: "Body Reported",
    icon: "alert",
    description: "PurpleKing found dead in MedBay by GreenBean",
    type: "death",
  },
  {
    time: "5:30",
    event: "Emergency Meeting",
    icon: "meeting",
    description: "Discussion and voting initiated",
    type: "meeting",
  },
  {
    time: "6:10",
    event: "Player Ejected",
    icon: "eject",
    description: "RedSus was ejected (Was an Imposter)",
    type: "eject",
  },
  {
    time: "7:15",
    event: "Lights Sabotaged",
    icon: "sabotage",
    description: "Imposters sabotaged electrical",
    type: "sabotage",
  },
  { time: "7:40", event: "Sabotage Fixed", icon: "fix", description: "Crew fixed lights", type: "fix" },
  {
    time: "8:20",
    event: "Body Reported",
    icon: "alert",
    description: "WhiteClean found dead in Cafeteria by CyanSpace",
    type: "death",
  },
  {
    time: "9:05",
    event: "Emergency Meeting",
    icon: "meeting",
    description: "Discussion and voting initiated",
    type: "meeting",
  },
  {
    time: "9:50",
    event: "Player Ejected",
    icon: "eject",
    description: "PinkVent was ejected (Was an Imposter)",
    type: "eject",
  },
  {
    time: "11:23",
    event: "Crew Victory",
    icon: "win",
    description: "All imposters eliminated - Crew wins!",
    type: "win",
  },
]

export function GameBreakdown() {
  return (
    <div className="space-y-6">
      <div className="bg-[#2a3a3c] rounded-2xl border-6 border-[#1a2a2c] p-4 shadow-lg">
        <h2 className="font-display text-3xl text-white">Detailed Game Breakdown</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg space-y-4">
          <h3 className="text-xl uppercase tracking-wider">Game Details</h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between bg-[#698b8d]/20 rounded-lg p-3">
              <span className="text-sm text-[#8a9a9c]">Game ID</span>
              <span className="text-[#55efc4]">{gameDetails.id}</span>
            </div>

            <div className="flex items-center justify-between bg-[#698b8d]/20 rounded-lg p-3">
              <span className="text-sm text-[#8a9a9c]">Date</span>
              <span>{gameDetails.date}</span>
            </div>

            <div className="flex items-center justify-between bg-[#698b8d]/20 rounded-lg p-3">
              <span className="text-sm text-[#8a9a9c]">Start Time</span>
              <span>{gameDetails.time}</span>
            </div>

            <Separator className="bg-[#3a4a4c]" />

            <div className="flex items-center gap-2 bg-[#698b8d]/20 rounded-lg p-3">
              <MapPin className="w-4 h-4 text-[#55efc4]" />
              <span className="text-sm text-[#8a9a9c]">Map</span>
              <Badge className="ml-auto bg-[#698b8d] border-2 border-[#547273] rounded-full px-3">
                {gameDetails.map}
              </Badge>
            </div>

            <div className="flex items-center gap-2 bg-[#698b8d]/20 rounded-lg p-3">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-[#8a9a9c]">Duration</span>
              <span className="ml-auto">{gameDetails.duration}</span>
            </div>

            <div className="flex items-center gap-2 bg-[#698b8d]/20 rounded-lg p-3">
              <Users className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-[#8a9a9c]">Players</span>
              <span className="ml-auto">{gameDetails.totalPlayers}</span>
            </div>

            <Separator className="bg-[#3a4a4c]" />

            <div className="bg-[#55efc4]/10 border-2 border-[#55efc4]/30 rounded-lg p-3">
              <p className="text-sm text-[#8a9a9c] mb-2">Outcome</p>
              <Badge className="bg-[#55efc4] text-[#1e3a3c] border-2 border-[#3fd5ac] px-4 py-1 rounded-full uppercase tracking-wider">
                {gameDetails.outcome}
              </Badge>
            </div>

            <div className="bg-[#698b8d]/20 rounded-lg p-3">
              <p className="text-sm text-[#8a9a9c] mb-2">Tasks Completed</p>
              <p className="text-2xl text-cyan-400">
                {gameDetails.tasksCompleted}/{gameDetails.totalTasks}
              </p>
              <div className="w-full bg-[#3a4a4c] rounded-full h-2 mt-2">
                <div
                  className="bg-cyan-400 h-2 rounded-full"
                  style={{ width: `${(gameDetails.tasksCompleted / gameDetails.totalTasks) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg space-y-4 lg:col-span-2">
          <h3 className="text-xl uppercase tracking-wider">Players</h3>

          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-destructive" />
                <h4 className="uppercase tracking-wider">Imposters</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {gameDetails.imposters.map((imposter) => (
                  <div
                    key={imposter.name}
                    className="flex items-center gap-3 p-4 rounded-xl bg-destructive/10 border-2 border-destructive/30"
                  >
                    <CrewmateAvatar color={imposter.color} size="md" />
                    <div className="flex-1">
                      <span className="uppercase tracking-wide block">{imposter.name}</span>
                      <div className="flex gap-2 text-xs text-[#8a9a9c] mt-1">
                        <span>{imposter.kills} kills</span>
                        <span>•</span>
                        <span>{imposter.sabotages} sabotages</span>
                      </div>
                    </div>
                    <Badge className="bg-destructive text-white border-2 border-destructive rounded-full text-xs uppercase tracking-wider">
                      IMPOSTER
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="bg-[#3a4a4c]" />

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-[#55efc4]" />
                <h4 className="uppercase tracking-wider">Crewmates</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {gameDetails.crew.map((crew) => (
                  <div
                    key={crew.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#55efc4]/5 border-2 border-[#55efc4]/20"
                  >
                    <CrewmateAvatar color={crew.color} size="sm" isDead={!crew.survived} />
                    <div className="flex-1">
                      <span className="text-sm uppercase tracking-wide block">{crew.name}</span>
                      <div className="text-xs text-[#8a9a9c]">
                        {crew.survived ? (
                          <span>{crew.tasksCompleted} tasks done</span>
                        ) : (
                          <span className="text-destructive">
                            Killed by {crew.killedBy} at {crew.killedAt}
                          </span>
                        )}
                      </div>
                    </div>
                    {crew.survived ? (
                      <Badge className="text-xs border-2 border-emerald-500/30 text-emerald-400 bg-emerald-500/10 rounded-full uppercase tracking-wider">
                        ALIVE
                      </Badge>
                    ) : (
                      <Skull className="w-5 h-5 text-destructive" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card className="bg-[#2a3a3c] border-4 border-[#1a2a2c] rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-5 h-5 text-[#55efc4]" />
          <h3 className="text-xl uppercase tracking-wider">Event Timeline</h3>
        </div>

        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      event.type === "start"
                        ? "bg-[#55efc4]"
                        : event.type === "death"
                          ? "bg-destructive"
                          : event.type === "meeting"
                            ? "bg-yellow-400"
                            : event.type === "vote"
                              ? "bg-blue-400"
                              : event.type === "eject"
                                ? "bg-purple-400"
                                : event.type === "sabotage"
                                  ? "bg-orange-400"
                                  : event.type === "fix"
                                    ? "bg-cyan-400"
                                    : event.type === "win"
                                      ? "bg-emerald-400"
                                      : "bg-[#55efc4]"
                    }`}
                  ></div>
                  {index < events.length - 1 && <div className="w-0.5 h-full bg-[#698b8d]/30 mt-1"></div>}
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className="text-xs border-2 border-[#55efc4]/30 bg-[#55efc4]/10 text-[#55efc4] rounded-full uppercase tracking-wider">
                      {event.time}
                    </Badge>
                    <span className="uppercase tracking-wide">{event.event}</span>
                  </div>
                  <p className="text-sm text-[#8a9a9c]">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  )
}
