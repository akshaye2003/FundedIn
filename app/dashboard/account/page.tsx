import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ArrowDownRight, ArrowUpRight, Clock, DollarSign, TrendingUp, TrendingDown, Target, Calendar, CalendarDays } from "lucide-react"

export default function AccountPage() {
  // Mock data for recent trades
  const recentTrades = [
    {
      id: "TR-7829",
      symbol: "AAPL",
      type: "Buy",
      quantity: 10,
      entryPrice: "₹182.45",
      exitPrice: "₹187.32",
      profit: "+₹48.70",
      profitPercentage: "+2.67%",
      date: "2024-05-20",
      status: "Closed",
    },
    {
      id: "TR-7830",
      symbol: "MSFT",
      type: "Sell",
      quantity: 5,
      entryPrice: "₹415.23",
      exitPrice: "₹410.78",
      profit: "+₹22.25",
      profitPercentage: "+1.07%",
      date: "2024-05-19",
      status: "Closed",
    },
    {
      id: "TR-7831",
      symbol: "TSLA",
      type: "Buy",
      quantity: 8,
      entryPrice: "₹178.54",
      exitPrice: "₹175.21",
      profit: "-₹26.64",
      profitPercentage: "-1.86%",
      date: "2024-05-18",
      status: "Closed",
    },
    {
      id: "TR-7832",
      symbol: "AMZN",
      type: "Buy",
      quantity: 6,
      entryPrice: "₹178.92",
      exitPrice: "₹183.47",
      profit: "+₹27.30",
      profitPercentage: "+2.54%",
      date: "2024-05-17",
      status: "Closed",
    },
    {
      id: "TR-7833",
      symbol: "NVDA",
      type: "Buy",
      quantity: 3,
      entryPrice: "₹924.73",
      exitPrice: "-",
      profit: "+₹15.21",
      profitPercentage: "+0.55%",
      date: "2024-05-21",
      status: "Open",
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Account Overview</h2>
          <Button>Download Statement</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Account Balance</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹26,234.56</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
                <span>+4.9% from initial</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Profit/Loss</CardTitle>
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-500">+₹1,234.56</div>
              <p className="text-xs text-muted-foreground">Since account creation</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">52%</div>
              <p className="text-xs text-muted-foreground">26 winning trades out of 50</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Trading Days</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14</div>
              <p className="text-xs text-muted-foreground">Out of 30 required</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="trades">
          <TabsList>
            <TabsTrigger value="trades">Recent Trades</TabsTrigger>
            <TabsTrigger value="statistics">Statistics</TabsTrigger>
          </TabsList>
          <TabsContent value="trades" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Trades</CardTitle>
                <CardDescription>Your most recent trading activity</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Symbol</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Entry Price</TableHead>
                      <TableHead>Exit Price</TableHead>
                      <TableHead>Profit/Loss</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTrades.map((trade) => (
                      <TableRow key={trade.id}>
                        <TableCell className="font-medium">{trade.id}</TableCell>
                        <TableCell>{trade.symbol}</TableCell>
                        <TableCell>{trade.type}</TableCell>
                        <TableCell>{trade.quantity}</TableCell>
                        <TableCell>{trade.entryPrice}</TableCell>
                        <TableCell>{trade.exitPrice}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {trade.profit.startsWith("+") ? (
                              <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
                            ) : (
                              <ArrowDownRight className="mr-1 h-3 w-3 text-red-500" />
                            )}
                            <span className={trade.profit.startsWith("+") ? "text-emerald-500" : "text-red-500"}>
                              {trade.profit} ({trade.profitPercentage})
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>{trade.date}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              trade.status === "Open"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            }`}
                          >
                            {trade.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="statistics" className="space-y-6">
            {/* Account Progress Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* Daily Loss Limit */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold">Daily Loss Limit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Current loss percentage:</span>
                    <span className="font-semibold text-red-500">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Current Draw down level:</span>
                    <span className="font-semibold">₹600</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </CardContent>
              </Card>

              {/* Max Loss Limit */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold">Max Loss Limit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Current loss percentage:</span>
                    <span className="font-semibold text-red-500">5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Current Draw down level:</span>
                    <span className="font-semibold">₹600</span>
                  </div>
                  <Progress value={5} className="h-2" />
                </CardContent>
              </Card>

              {/* Profit */}
              <Card className="md:col-span-2 lg:col-span-1">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold">Profit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Current Profit percentage:</span>
                    <span className="font-semibold text-green-500">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Profit:</span>
                    <span className="font-semibold text-green-500">₹10,000</span>
                  </div>
                  <Progress value={20} className="h-2 bg-green-100" />
                </CardContent>
              </Card>
            </div>

            {/* Challenge Progress Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Challenge Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  {/* Minimum Trading Days */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">Minimum Trading Days</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">10 days remaining</span>
                        <span className="font-semibold">5/10</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                  </div>

                  {/* Time Left */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">Time Left</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">85 days remaining</span>
                        <span className="font-semibold">5/40</span>
                      </div>
                      <Progress value={12.5} className="h-2" />
                    </div>
                  </div>

                  {/* Start Date */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">Start Date</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="font-semibold">1/02/2025</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trading Statistics Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Trading Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Winning Trades */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <span className="font-semibold text-lg">Winning Trades</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Average Win</span>
                        <span className="font-semibold text-green-500">₹4,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Biggest Win</span>
                        <span className="font-semibold text-green-500">₹10,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Winning Trades</span>
                        <span className="font-semibold text-green-500">30</span>
                      </div>
                    </div>
                  </div>

                  {/* Losing Trades */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <TrendingDown className="h-5 w-5 text-red-500" />
                      <span className="font-semibold text-lg">Losing Trades</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Average Loss</span>
                        <span className="font-semibold text-red-500">₹3,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Biggest Loss</span>
                        <span className="font-semibold text-red-500">₹7,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Losing Trades</span>
                        <span className="font-semibold text-red-500">19</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bottom Small Boxes */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {/* Win Rate */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-500">68.5%</div>
                  <p className="text-xs text-muted-foreground">30W/19L</p>
                </CardContent>
              </Card>

              {/* Profit Factor */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Profit Factor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1.85</div>
                  <p className="text-xs text-muted-foreground">Gross Profit/Gross Loss</p>
                </CardContent>
              </Card>

              {/* Total Trades */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Total Trades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">49</div>
                  <p className="text-xs text-muted-foreground">All time</p>
                </CardContent>
              </Card>

              {/* Charges & Taxes */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Charges & Taxes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹0</div>
                  <p className="text-xs text-muted-foreground">No charges applied</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
