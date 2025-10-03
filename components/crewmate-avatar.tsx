interface CrewmateAvatarProps {
  color: string
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  isDead?: boolean
  className?: string
}

const sizeMap = {
  xs: { body: "w-6 h-8", visor: "w-2 h-3", backpack: "w-2 h-3" },
  sm: { body: "w-8 h-10", visor: "w-3 h-4", backpack: "w-2.5 h-4" },
  md: { body: "w-12 h-16", visor: "w-4 h-6", backpack: "w-4 h-6" },
  lg: { body: "w-16 h-20", visor: "w-6 h-8", backpack: "w-5 h-8" },
  xl: { body: "w-24 h-32", visor: "w-9 h-12", backpack: "w-8 h-12" },
}

export function CrewmateAvatar({ color, size = "md", isDead = false, className = "" }: CrewmateAvatarProps) {
  const sizes = sizeMap[size]

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Main body */}
      <div className="relative flex items-end justify-center">
        {/* Backpack/Oxygen tank */}
        <div
          className={`absolute ${sizes.backpack} rounded-full -top-1 -right-1 z-0`}
          style={{
            backgroundColor: color,
            filter: "brightness(0.8)",
          }}
        />

        {/* Body */}
        <div
          className={`relative ${sizes.body} rounded-full z-10`}
          style={{
            backgroundColor: color,
            boxShadow: `0 4px 0 ${color}dd, inset 0 -2px 0 rgba(0, 0, 0, 0.2)`,
          }}
        >
          {/* Visor */}
          <div
            className={`absolute ${sizes.visor} bg-gradient-to-b from-[#aed4e6] to-[#7fb8d4] rounded-full`}
            style={{
              top: "25%",
              right: "20%",
              boxShadow: "inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -1px 2px rgba(0, 0, 0, 0.2)",
            }}
          >
            {/* Visor highlight */}
            <div className="absolute w-1/2 h-1/3 bg-white/40 rounded-full top-[15%] left-[15%]" />
          </div>

          {/* Legs (two small rounded rectangles at bottom) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-0.5" style={{ width: "60%" }}>
            <div
              className="flex-1 h-1.5 rounded-b-full"
              style={{
                backgroundColor: color,
                filter: "brightness(0.7)",
              }}
            />
            <div
              className="flex-1 h-1.5 rounded-b-full"
              style={{
                backgroundColor: color,
                filter: "brightness(0.7)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Dead indicator (X eyes) */}
      {isDead && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            <div
              className="absolute text-red-500"
              style={{ top: "30%", right: "15%", fontSize: size === "xs" ? "8px" : size === "sm" ? "12px" : "16px" }}
            >
              ✕
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
