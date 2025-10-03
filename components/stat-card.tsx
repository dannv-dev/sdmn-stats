import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  label: string
  value: string | number
  icon: LucideIcon
  variant?: "default" | "destructive"
}

export function StatCard({ label, value, icon: Icon, variant = "default" }: StatCardProps) {
  const valueColor = variant === "destructive" ? "text-destructive" : "text-primary"
  const iconColor = variant === "destructive" ? "text-destructive/60" : "text-primary/60"

  return (
    <div className="rounded-2xl bg-card p-6 border-4 border-border">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
          <p className={`text-5xl font-bold ${valueColor}`}>{value}</p>
        </div>
        <div className={`rounded-full bg-secondary p-4 border-4 border-border ${iconColor}`}>
          <Icon className="h-8 w-8" />
        </div>
      </div>
    </div>
  )
}
