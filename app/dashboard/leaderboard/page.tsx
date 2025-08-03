import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpRight, Search } from "lucide-react"

export default function LeaderboardPage() {
  // Mock data for the leaderboard
  const traders = [
    {
      rank: 1,
      name: "Alex Johnson",
      profit: "$4,582.30",
      profitPercentage: "+12.3%",
      winRate: "68%",
      tradingDays: 18,
    },
    {
      rank: 2,
      name: "Sarah Williams",
      profit: "$3,879.45",
      profitPercentage: "+10.5%",
      winRate: "65%",
      tradingDays: 20,
    },
    {
      rank: 3,
      name: "Michael Brown",
      profit: "$3,421.67",
      profitPercentage: "+9.2%",
      winRate: "62%",
      tradingDays: 19,
    },
    {
      rank: 4,
      name: "Emily Davis",
      profit: "$3,105.92",
      profitPercentage: "+8.7%",
      winRate: "60%",
      tradingDays: 17,
    },
    {
      rank: 5,
      name: "David Wilson",
      profit: "$2,987.14",
      profitPercentage: "+7.9%",
      winRate: "59%",
      tradingDays: 21,
    },
    {
      rank: 6,
      name: "Jessica Martinez",
      profit: "$2,845.33",
      profitPercentage: "+7.6%",
      winRate: "58%",
      tradingDays: 16,
    },
    {
      rank: 7,
      name: "Robert Taylor",
      profit: "$2,734.21",
      profitPercentage: "+7.3%",
      winRate: "57%",
      tradingDays: 18,
    },
    {
      rank: 8,
      name: "Jennifer Anderson",
      profit: "$2,612.87",
      profitPercentage: "+7.0%",
      winRate: "56%",
      tradingDays: 19,
    },
    {
      rank: 9,
      name: "Christopher Thomas",
      profit: "$2,501.45",
      profitPercentage: "+6.7%",
      winRate: "55%",
      tradingDays: 20,
    },
    {
      rank: 10,
      name: "Lisa Jackson",
      profit: "$2,398.76",
      profitPercentage: "+6.4%",
      winRate: "54%",
      tradingDays: 17,
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Leaderboard</h2>
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search traders..." className="pl-8" />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Traders</CardTitle>
            <CardDescription>Traders ranked by profit percentage over the current evaluation period</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Rank</TableHead>
                  <TableHead>Trader</TableHead>
                  <TableHead>Profit</TableHead>
                  <TableHead>Profit %</TableHead>
                  <TableHead>Win Rate</TableHead>
                  <TableHead className="text-right">Trading Days</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {traders.map((trader) => (
                  <TableRow key={trader.rank}>
                    <TableCell className="font-medium">{trader.rank}</TableCell>
                    <TableCell>{trader.name}</TableCell>
                    <TableCell>{trader.profit}</TableCell>
                    <TableCell className="text-emerald-500 flex items-center">
                      <ArrowUpRight className="mr-1 h-3 w-3" />
                      {trader.profitPercentage}
                    </TableCell>
                    <TableCell>{trader.winRate}</TableCell>
                    <TableCell className="text-right">{trader.tradingDays}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Position</CardTitle>
            <CardDescription>Your current standing on the leaderboard</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Rank</TableHead>
                  <TableHead>Trader</TableHead>
                  <TableHead>Profit</TableHead>
                  <TableHead>Profit %</TableHead>
                  <TableHead>Win Rate</TableHead>
                  <TableHead className="text-right">Trading Days</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-muted/50">
                  <TableCell className="font-medium">42</TableCell>
                  <TableCell>You</TableCell>
                  <TableCell>$1,234.56</TableCell>
                  <TableCell className="text-emerald-500 flex items-center">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    +4.9%
                  </TableCell>
                  <TableCell>52%</TableCell>
                  <TableCell className="text-right">14</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
