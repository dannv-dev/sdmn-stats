"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"

interface DataTableProps {
  data: Record<string, string>[]
  title: string
  searchable?: boolean
}

export function DataTable({ data, title, searchable = true }: DataTableProps) {
  const [search, setSearch] = useState("")

  if (!data || data.length === 0) {
    return (
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground">No data available</p>
      </Card>
    )
  }

  const headers = Object.keys(data[0])

  const filteredData = searchable
    ? data.filter((row) => Object.values(row).some((value) => value.toLowerCase().includes(search.toLowerCase())))
    : data

  return (
    <Card className="p-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Showing {filteredData.length} of {data.length} records
        </p>
        {searchable && (
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm"
          />
        )}
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {headers.map((header) => (
                <TableHead key={header} className="whitespace-nowrap">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={index}>
                {headers.map((header) => (
                  <TableCell key={header} className="whitespace-nowrap">
                    {row[header]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
