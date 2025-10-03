// Utility functions to parse TSV data from text attachments

export function parseTSV(tsvContent: string): Record<string, string>[] {
  const lines = tsvContent.trim().split("\n")
  if (lines.length < 2) return []

  const headers = lines[0].split("\t")
  const data: Record<string, string>[] = []

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split("\t")
    const row: Record<string, string> = {}

    headers.forEach((header, index) => {
      row[header] = values[index] || ""
    })

    data.push(row)
  }

  return data
}

export function parseNumber(value: string): number {
  const parsed = Number.parseFloat(value)
  return isNaN(parsed) ? 0 : parsed
}

export function parsePercentage(value: string): number {
  const cleaned = value.replace("%", "")
  return parseNumber(cleaned)
}
