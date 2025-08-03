import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Download, Search, Users } from "lucide-react"

export default function AdminPage() {
  // Mock data for traders
  const traders = [
    {
      id: "TR-1001",
      name: "John Smith",
      email: "john.smith@example.com",
      balance: "₹26,234.56",
      profit: "+₹1,234.56",
      profitPercentage: "+4.9%",
      tradingDays: 14,
      status: "Active",
    },
    {
      id: "TR-1002",
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      balance: "₹28,879.45",
      profit: "+₹3,879.45",
      profitPercentage: "+15.5%",
      tradingDays: 20,
      status: "Active",
    },
    {
      id: "TR-1003",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      balance: "₹23,421.67",
      profit: "-₹1,578.33",
      profitPercentage: "-6.3%",
      tradingDays: 19,
      status: "Warning",
    },
    {
      id: "TR-1004",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      balance: "₹28,105.92",
      profit: "+₹3,105.92",
      profitPercentage: "+12.4%",
      tradingDays: 17,
      status: "Active",
    },
    {
      id: "TR-1005",
      name: "David Wilson",
      email: "david.wilson@example.com",
      balance: "₹22,987.14",
      profit: "-₹2,012.86",
      profitPercentage: "-8.0%",
      tradingDays: 21,
      status: "Warning",
    },
    {
      id: "TR-1006",
      name: "Jessica Martinez",
      email: "jessica.martinez@example.com",
      balance: "₹27,845.33",
      profit: "+₹2,845.33",
      profitPercentage: "+11.4%",
      tradingDays: 16,
      status: "Active",
    },
    {
      id: "TR-1007",
      name: "Robert Taylor",
      email: "robert.taylor@example.com",
      balance: "₹27,734.21",
      profit: "+₹2,734.21",
      profitPercentage: "+10.9%",
      tradingDays: 18,
      status: "Active",
    },
    {
      id: "TR-1008",
      name: "Jennifer Anderson",
      email: "jennifer.anderson@example.com",
      balance: "₹27,612.87",
      profit: "+₹2,612.87",
      profitPercentage: "+10.5%",
      tradingDays: 19,
      status: "Active",
    },
    {
      id: "TR-1009",
      name: "Christopher Thomas",
      email: "christopher.thomas@example.com",
      balance: "₹19,501.45",
      profit: "-₹5,498.55",
      profitPercentage: "-22.0%",
      tradingDays: 20,
      status: "Suspended",
    },
    {
      id: "TR-1010",
      name: "Lisa Jackson",
      email: "lisa.jackson@example.com",
      balance: "₹27,398.76",
      profit: "+₹2,398.76",
      profitPercentage: "+9.6%",
      tradingDays: 17,
      status: "Active",
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Admin Panel</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Traders</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-muted-foreground">+12 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Traders</CardTitle>
              <Users className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">102</div>
              <p className="text-xs text-muted-foreground">79.7% of total traders</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profitable Traders</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87</div>
              <p className="text-xs text-muted-foreground">68.0% of total traders</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Profit</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+₹1,876.45</div>
              <p className="text-xs text-muted-foreground">+7.5% average return</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="all">All Traders</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="warning">Warning</TabsTrigger>
              <TabsTrigger value="suspended">Suspended</TabsTrigger>
            </TabsList>
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search traders..." className="pl-8" />
            </div>
          </div>
          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All Traders</CardTitle>
                <CardDescription>Manage all traders and their performance</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Balance</TableHead>
                      <TableHead>Profit/Loss</TableHead>
                      <TableHead>Trading Days</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {traders.map((trader) => (
                      <TableRow key={trader.id}>
                        <TableCell className="font-medium">{trader.id}</TableCell>
                        <TableCell>{trader.name}</TableCell>
                        <TableCell>{trader.email}</TableCell>
                        <TableCell>{trader.balance}</TableCell>
                        <TableCell>
                          <span className={trader.profit.startsWith("+") ? "text-emerald-500" : "text-red-500"}>
                            {trader.profit} ({trader.profitPercentage})
                          </span>
                        </TableCell>
                        <TableCell>{trader.tradingDays}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              trader.status === "Active"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : trader.status === "Warning"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                            }`}
                          >
                            {trader.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                            {trader.status === "Active" && trader.profit.startsWith("+") && (
                              <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50">
                                Promote
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="active" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Traders</CardTitle>
                <CardDescription>Traders with active accounts in good standing</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Balance</TableHead>
                      <TableHead>Profit/Loss</TableHead>
                      <TableHead>Trading Days</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {traders
                      .filter((trader) => trader.status === "Active")
                      .map((trader) => (
                        <TableRow key={trader.id}>
                          <TableCell className="font-medium">{trader.id}</TableCell>
                          <TableCell>{trader.name}</TableCell>
                          <TableCell>{trader.email}</TableCell>
                          <TableCell>{trader.balance}</TableCell>
                          <TableCell>
                            <span className={trader.profit.startsWith("+") ? "text-emerald-500" : "text-red-500"}>
                              {trader.profit} ({trader.profitPercentage})
                            </span>
                          </TableCell>
                          <TableCell>{trader.tradingDays}</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                              {trader.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="warning" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Warning Traders</CardTitle>
                <CardDescription>Traders approaching performance limits</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Balance</TableHead>
                      <TableHead>Profit/Loss</TableHead>
                      <TableHead>Trading Days</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {traders
                      .filter((trader) => trader.status === "Warning")
                      .map((trader) => (
                        <TableRow key={trader.id}>
                          <TableCell className="font-medium">{trader.id}</TableCell>
                          <TableCell>{trader.name}</TableCell>
                          <TableCell>{trader.email}</TableCell>
                          <TableCell>{trader.balance}</TableCell>
                          <TableCell>
                            <span className={trader.profit.startsWith("+") ? "text-emerald-500" : "text-red-500"}>
                              {trader.profit} ({trader.profitPercentage})
                            </span>
                          </TableCell>
                          <TableCell>{trader.tradingDays}</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                              {trader.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">
                                View
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="suspended" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Suspended Traders</CardTitle>
                <CardDescription>Traders who have exceeded performance limits</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Balance</TableHead>
                      <TableHead>Profit/Loss</TableHead>
                      <TableHead>Trading Days</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {traders
                      .filter((trader) => trader.status === "Suspended")
                      .map((trader) => (
                        <TableRow key={trader.id}>
                          <TableCell className="font-medium">{trader.id}</TableCell>
                          <TableCell>{trader.name}</TableCell>
                          <TableCell>{trader.email}</TableCell>
                          <TableCell>{trader.balance}</TableCell>
                          <TableCell>
                            <span className={trader.profit.startsWith("+") ? "text-emerald-500" : "text-red-500"}>
                              {trader.profit} ({trader.profitPercentage})
                            </span>
                          </TableCell>
                          <TableCell>{trader.tradingDays}</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                              {trader.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">
                                View
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
