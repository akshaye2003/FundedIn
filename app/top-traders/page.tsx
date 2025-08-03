"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Award, ArrowLeft } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"
import Link from "next/link"

interface Trader {
  id: number
  name: string
  value: number
  percentage: number
  avatar?: string
}

const topTraders: Trader[] = [
  { id: 1, name: "Alex Johnson", value: 4582.30, percentage: 12.3 },
  { id: 2, name: "Sarah Williams", value: 3879.45, percentage: 10.5 },
  { id: 3, name: "Michael Brown", value: 3421.67, percentage: 9.2 },
  { id: 4, name: "Emily Davis", value: 3105.92, percentage: 8.7 },
  { id: 5, name: "David Wilson", value: 2987.14, percentage: 7.9 },
  { id: 6, name: "Carl", value: 4500, percentage: 12 },
  { id: 7, name: "Sarah", value: 4200, percentage: 11 },
  { id: 8, name: "Mike", value: 3800, percentage: 10 },
  { id: 9, name: "Emma", value: 3500, percentage: 9 },
  { id: 10, name: "Alex", value: 3200, percentage: 8 },
  { id: 11, name: "Lisa", value: 2900, percentage: 7 },
  { id: 12, name: "David", value: 2600, percentage: 6 },
  { id: 13, name: "Anna", value: 2300, percentage: 5 },
  { id: 14, name: "John", value: 2000, percentage: 4 },
  { id: 15, name: "Maria", value: 1700, percentage: 3 },
]

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="h-5 w-5 text-yellow-500" />
    case 2:
      return <Medal className="h-5 w-5 text-gray-400" />
    case 3:
      return <Award className="h-5 w-5 text-amber-600" />
    default:
      return <span className="text-sm font-medium text-muted-foreground">{rank}</span>
  }
}

export default function TopTradersPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h2 className="text-3xl font-bold tracking-tight">Top Traders</h2>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Top Traders</CardTitle>
            <p className="text-muted-foreground">Current leaderboard standings</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topTraders.map((trader, index) => (
                <div key={trader.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted">
                      {getRankIcon(index + 1)}
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{trader.name}</div>
                      <div className="text-sm text-muted-foreground">Rank #{index + 1}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">₹{trader.value.toLocaleString()}</div>
                    <div className="text-sm text-emerald-500 font-medium">+{trader.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
} 