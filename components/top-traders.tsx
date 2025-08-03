"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Medal, Award } from "lucide-react"

interface Trader {
  id: number
  name: string
  value: number
  percentage: number
  avatar?: string
}

const topTraders: Trader[] = [
  { id: 1, name: "Carl", value: 4500, percentage: 12 },
  { id: 2, name: "Sarah", value: 4200, percentage: 11 },
  { id: 3, name: "Mike", value: 3800, percentage: 10 },
  { id: 4, name: "Emma", value: 3500, percentage: 9 },
  { id: 5, name: "Alex", value: 3200, percentage: 8 },
  { id: 6, name: "Lisa", value: 2900, percentage: 7 },
  { id: 7, name: "David", value: 2600, percentage: 6 },
  { id: 8, name: "Anna", value: 2300, percentage: 5 },
  { id: 9, name: "John", value: 2000, percentage: 4 },
  { id: 10, name: "Maria", value: 1700, percentage: 3 },
]

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="h-4 w-4 text-yellow-500" />
    case 2:
      return <Medal className="h-4 w-4 text-gray-400" />
    case 3:
      return <Award className="h-4 w-4 text-amber-600" />
    default:
      return <span className="text-sm font-medium text-muted-foreground">{rank}</span>
  }
}

export function TopTraders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Top Traders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="max-h-[400px] overflow-y-auto space-y-3 pr-2">
          {topTraders.map((trader, index) => (
            <div key={trader.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                  {getRankIcon(index + 1)}
                </div>
                                 <div className="flex items-center gap-2">
                   <span className="font-medium text-sm">{trader.name}</span>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-sm">₹{trader.value.toLocaleString()}</span>
                <span className="text-xs text-emerald-500 font-medium">+{trader.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 