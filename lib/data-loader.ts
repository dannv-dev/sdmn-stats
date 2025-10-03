import { parseTSV } from "./parse-tsv"
import fs from 'fs'
import path from 'path'

// Read files from the public directory at build time
function loadTSV(filename: string) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    return parseTSV(fileContent)
  } catch (error) {
    console.error(`Failed to load ${filename}:`, error)
    return []
  }
}

export const playerStats = loadTSV('player-stats.tsv')
export const killPermutations = loadTSV('kill-perma.tsv')
export const imposterCombinations = loadTSV('imp-combo.tsv')
export const games = loadTSV('games.tsv')
export const gameStats = loadTSV('game-stats.tsv')
export const gameBreakdowns = loadTSV('game-breakdown.tsv')