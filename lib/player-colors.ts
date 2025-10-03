// Map player names to Among Us colors
export const playerColors: Record<string, string> = {
  Josh: "#C51111", // Red
  Tobi: "#132ED1", // Blue
  Ethan: "#117F2D", // Green
  Vik: "#ED54BA", // Pink
  Simon: "#F5F557", // Yellow
  Harry: "#EF7D0E", // Orange
  JJ: "#6B2FBB", // Purple
  Deji: "#38FEDC", // Cyan
  Lazarbeam: "#50EF39", // Lime
  Randolph: "#D6E0F0", // White
  Lachlan: "#71491E", // Brown
  Viz: "#000000", // Black
  DannyAarons: "#EF7D0E", // Orange
  PieFace: "#38FEDC", // Cyan
  Ellum: "#6B2FBB", // Purple
  Ginge: "#50EF39", // Lime
  JME: "#132ED1", // Blue
  Callux: "#117F2D", // Green
  ChrisMD: "#F5F557", // Yellow
  MaxFosh: "#ED54BA", // Pink
  Calfreezy: "#C51111", // Red
  "George Clarkey": "#EF7D0E", // Orange
  ArthurTV: "#38FEDC", // Cyan
  WillNE: "#6B2FBB", // Purple
  Theo: "#50EF39", // Lime
  MilkInABag: "#D6E0F0", // White
  Chip: "#71491E", // Brown
  AB: "#000000", // Black
}

export function getPlayerColor(name: string): string {
  return playerColors[name] || "#698b8d" // Default gray if not found
}
