"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, ChevronUp, Minus, Plus, Search } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { TradingChart } from "@/components/trading-chart"

export default function TradingPageWireframe() {
  const [selectedStock, setSelectedStock] = useState("COALINDIA")
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(0)
  const [orderType, setOrderType] = useState("market")
  const [stopLoss, setStopLoss] = useState("")
  const [target, setTarget] = useState("")
  const [enableStopLoss, setEnableStopLoss] = useState(false)
  const [enableTarget, setEnableTarget] = useState(false)
  const [tradeType, setTradeType] = useState("delivery")
  const [searchQuery, setSearchQuery] = useState("")
  const [expiryDate, setExpiryDate] = useState("jun21")

  // Panel sizes
  const [leftPanelWidth, setLeftPanelWidth] = useState(256)
  const [rightPanelWidth, setRightPanelWidth] = useState(320)
  const [bottomPanelHeight, setBottomPanelHeight] = useState(300)

  // Drag state
  const [isDragging, setIsDragging] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mock watchlist data
  const watchlist = [
    { symbol: "COALINDIA", name: "Coal India", price: "245.50", change: "+2.30", changePercent: "+0.95%" },
    { symbol: "RELIANCE", name: "Reliance", price: "2,456.75", change: "-12.25", changePercent: "-0.49%" },
    { symbol: "TCS", name: "TCS", price: "3,245.80", change: "+45.60", changePercent: "+1.42%" },
    { symbol: "INFY", name: "Infosys", price: "1,567.90", change: "+8.45", changePercent: "+0.54%" },
    { symbol: "HDFCBANK", name: "HDFC Bank", price: "1,678.25", change: "-5.75", changePercent: "-0.34%" },
  ]

  // Filter watchlist based on search query
  const filteredWatchlist = watchlist.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Mock data for current stock
  const currentStock = {
    symbol: "COALINDIA",
    name: "Coal India Limited",
    exchange: "NSE",
    price: "245.50",
    change: "+2.30",
    changePercent: "+0.95%",
    volume: "2.5M",
    high: "248.75",
    low: "242.10",
    open: "243.20",
    spotPrice: "398",
  }

  // Mock orders data
  const orders = [
    {
      symbol: "RELIANCE NSE EQ",
      status: "Cancelled",
      time: "09:41: 34am",
      product: "Intraday",
      side: "Buy",
      quantity: "250",
      price: "720",
      ltp: "717",
      targetPrice: "0",
      avgPrice: "0",
    },
    {
      symbol: "SUNTORY NSE EQ",
      status: "Pending",
      time: "09:41: 34am",
      product: "Delivery",
      side: "Buy",
      quantity: "250",
      price: "315",
      ltp: "302",
      targetPrice: "0",
      avgPrice: "0",
    },
  ]

  // Mock option chain data
  const optionChain = [
    {
      strike: "390",
      call: {
        ltp: "12.50",
        oi: "15,678",
        delta: "0.65",
        theta: "-0.12",
        gamma: "0.05",
        vega: "0.15",
        iv: "32.5%",
        volume: "1,245",
      },
      put: {
        ltp: "4.25",
        oi: "12,456",
        delta: "-0.35",
        theta: "-0.08",
        gamma: "0.04",
        vega: "0.12",
        iv: "30.2%",
        volume: "987",
      },
    },
    {
      strike: "395",
      call: {
        ltp: "9.75",
        oi: "12,345",
        delta: "0.58",
        theta: "-0.11",
        gamma: "0.06",
        vega: "0.16",
        iv: "31.8%",
        volume: "1,120",
      },
      put: {
        ltp: "6.50",
        oi: "10,234",
        delta: "-0.42",
        theta: "-0.09",
        gamma: "0.05",
        vega: "0.14",
        iv: "31.5%",
        volume: "876",
      },
      isSpot: true,
    },
    {
      strike: "400",
      call: {
        ltp: "7.25",
        oi: "10,234",
        delta: "0.48",
        theta: "-0.10",
        gamma: "0.07",
        vega: "0.17",
        iv: "30.5%",
        volume: "987",
      },
      put: {
        ltp: "8.75",
        oi: "8,765",
        delta: "-0.52",
        theta: "-0.10",
        gamma: "0.06",
        vega: "0.15",
        iv: "32.8%",
        volume: "765",
      },
    },
    {
      strike: "405",
      call: {
        ltp: "5.15",
        oi: "8,765",
        delta: "0.38",
        theta: "-0.09",
        gamma: "0.06",
        vega: "0.16",
        iv: "29.5%",
        volume: "876",
      },
      put: {
        ltp: "11.25",
        oi: "7,654",
        delta: "-0.62",
        theta: "-0.11",
        gamma: "0.05",
        vega: "0.13",
        iv: "33.5%",
        volume: "654",
      },
    },
  ]

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1))
  const incrementPrice = () => setPrice((prev) => prev + 0.05)
  const decrementPrice = () => setPrice((prev) => Math.max(0, prev - 0.05))

  // Drag handlers
  const handleMouseDown = useCallback((panel: string) => {
    setIsDragging(panel)
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !containerRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()

      if (isDragging === "left") {
        const newWidth = e.clientX - containerRect.left
        if (newWidth >= 200 && newWidth <= 400) {
          setLeftPanelWidth(newWidth)
        }
      } else if (isDragging === "right") {
        const newWidth = containerRect.right - e.clientX
        if (newWidth >= 250 && newWidth <= 500) {
          setRightPanelWidth(newWidth)
        }
      } else if (isDragging === "bottom") {
        const newHeight = containerRect.bottom - e.clientY
        if (newHeight >= 200 && newHeight <= 600) {
          setBottomPanelHeight(newHeight)
        }
      }
    },
    [isDragging],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(null)
  }, [])

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-black text-white">
        {/* Top Navigation */}
        <div
          ref={containerRef}
          className="flex h-[calc(100vh-3.5rem)] relative"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Left Sidebar - Watchlist */}
          <div className="bg-black border-r border-gray-800" style={{ width: leftPanelWidth }}>
            <div className="p-4">
              <h3 className="font-semibold text-sm mb-3 text-white">Watchlist</h3>
              {/* Search Bar */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search symbols..."
                  className="pl-9 bg-[#111] border-gray-800 text-white placeholder:text-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                {filteredWatchlist.map((stock) => (
                  <div
                    key={stock.symbol}
                    className={`p-2 rounded-md cursor-pointer hover:bg-[#111] ${
                      selectedStock === stock.symbol ? "bg-[#111]" : ""
                    }`}
                    onClick={() => setSelectedStock(stock.symbol)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-sm text-white">{stock.symbol}</div>
                        <div className="text-xs text-gray-400 truncate">{stock.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-white">{stock.price}</div>
                        <div className={`text-xs ${stock.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                          {stock.changePercent}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Left Resize Handle */}
          <div
            className="w-1 bg-gray-800 hover:bg-gray-600 cursor-col-resize transition-colors"
            onMouseDown={() => handleMouseDown("left")}
          />
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Chart Section */}
            <div className="flex-1 p-4" style={{ height: `calc(100% - ${bottomPanelHeight}px)` }}>
              <Card className="h-full bg-black border-gray-800">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-white">{currentStock.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="border-gray-800 text-gray-300">
                          {currentStock.exchange}
                        </Badge>
                        <span className="text-xl font-semibold text-white">{currentStock.price}</span>
                        <span
                          className={`flex items-center text-sm ${
                            currentStock.change.startsWith("+") ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {currentStock.change.startsWith("+") ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                          {currentStock.change} ({currentStock.changePercent})
                        </span>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <div>High: {currentStock.high}</div>
                      <div>Low: {currentStock.low}</div>
                      <div>Volume: {currentStock.volume}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="h-[calc(100%-80px)]">
                  <TradingChart symbol={selectedStock} theme="dark" />
                </CardContent>
              </Card>
            </div>
            {/* Bottom Resize Handle */}
            <div
              className="h-1 bg-gray-800 hover:bg-gray-600 cursor-row-resize transition-colors"
              onMouseDown={() => handleMouseDown("bottom")}
            />
            {/* Bottom Tabs Section */}
            <div className="border-t border-gray-800 bg-black" style={{ height: bottomPanelHeight }}>
              <Tabs defaultValue="orders" className="w-full h-full flex flex-col">
                <div className="border-b border-gray-800">
                  <TabsList className="h-12 w-full justify-start rounded-none bg-transparent p-0">
                    <TabsTrigger
                      value="orders"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:bg-transparent text-gray-300 data-[state=active]:text-white"
                    >
                      Orders
                    </TabsTrigger>
                    <TabsTrigger
                      value="positions"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:bg-transparent text-gray-300 data-[state=active]:text-white"
                    >
                      Intraday Positions
                      <Badge variant="secondary" className="ml-2 bg-[#111] text-gray-300">
                        P&L 0.00
                      </Badge>
                    </TabsTrigger>
                    <TabsTrigger
                      value="delivery"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:bg-transparent text-gray-300 data-[state=active]:text-white"
                    >
                      Delivery
                      <Badge variant="secondary" className="ml-2 bg-[#111] text-gray-300">
                        P&L 0.00
                      </Badge>
                    </TabsTrigger>
                    <TabsTrigger
                      value="options"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:bg-transparent text-gray-300 data-[state=active]:text-white"
                    >
                      Option Chain
                    </TabsTrigger>
                  </TabsList>
                </div>
                <div className="flex-1 overflow-auto">
                  <TabsContent value="orders" className="p-6 h-full">
                    {orders.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b border-gray-800">
                              <th className="text-left p-2 text-sm font-medium text-white">Symbol</th>
                              <th className="text-left p-2 text-sm font-medium text-white">Status</th>
                              <th className="text-left p-2 text-sm font-medium text-white">Time</th>
                              <th className="text-left p-2 text-sm font-medium text-white">Product</th>
                              <th className="text-left p-2 text-sm font-medium text-white">Side</th>
                              <th className="text-left p-2 text-sm font-medium text-white">Quantity</th>
                              <th className="text-left p-2 text-sm font-medium text-white">Price</th>
                              <th className="text-left p-2 text-sm font-medium text-white">LTP</th>
                              <th className="text-left p-2 text-sm font-medium text-white">Target Price</th>
                              <th className="text-left p-2 text-sm font-medium text-white">Avg Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orders.map((order, index) => (
                              <tr key={index} className="border-b border-gray-800 hover:bg-[#111]">
                                <td className="p-2 text-sm text-white">{order.symbol}</td>
                                <td className="p-2 text-sm text-white">{order.status}</td>
                                <td className="p-2 text-sm text-white">{order.time}</td>
                                <td className="p-2 text-sm text-white">{order.product}</td>
                                <td className="p-2 text-sm text-white">{order.side}</td>
                                <td className="p-2 text-sm text-white">{order.quantity}</td>
                                <td className="p-2 text-sm text-white">{order.price}</td>
                                <td className="p-2 text-sm text-white">{order.ltp}</td>
                                <td className="p-2 text-sm text-white">{order.targetPrice}</td>
                                <td className="p-2 text-sm text-white">{order.avgPrice}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="text-center text-gray-400">You have no open Orders</div>
                    )}
                  </TabsContent>
                  <TabsContent value="positions" className="p-6 h-full">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-gray-800">
                            <th className="text-left p-2 text-sm font-medium text-white">Symbol</th>
                            <th className="text-left p-2 text-sm font-medium text-white">Product</th>
                            <th className="text-left p-2 text-sm font-medium text-white">Net Qty</th>
                            <th className="text-left p-2 text-sm font-medium text-white">Avg Price</th>
                            <th className="text-left p-2 text-sm font-medium text-white">LTP</th>
                            <th className="text-left p-2 text-sm font-medium text-white">Overall P&L</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={6} className="p-4 text-center text-gray-400">
                              No intraday positions
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                  <TabsContent value="delivery" className="p-6 h-full">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-gray-800">
                            <th className="text-left p-2 text-sm font-medium text-white">Symbol</th>
                            <th className="text-left p-2 text-sm font-medium text-white">Product</th>
                            <th className="text-left p-2 text-sm font-medium text-white">Net Qty</th>
                            <th className="text-left p-2 text-sm font-medium text-white">Avg Price</th>
                            <th className="text-left p-2 text-sm font-medium text-white">LTP</th>
                            <th className="text-left p-2 text-sm font-medium text-white">Overall P&L</th>
                            <th className="text-left p-2 text-sm font-medium text-white">Overall %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={7} className="p-4 text-center text-gray-400">
                              No delivery positions
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                  <TabsContent value="options" className="p-6 h-full">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm text-white">
                        Spot Price: <span className="font-semibold">{currentStock.spotPrice}</span>
                      </div>
                      <Select value={expiryDate} onValueChange={setExpiryDate}>
                        <SelectTrigger className="w-[180px] bg-[#111] border-gray-800 text-white">
                          <SelectValue placeholder="Select expiry" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#111] border-gray-800">
                          <SelectItem value="jun21" className="text-white hover:bg-[#222]">
                            Jun 21, 2024
                          </SelectItem>
                          <SelectItem value="jul19" className="text-white hover:bg-[#222]">
                            Jul 19, 2024
                          </SelectItem>
                          <SelectItem value="aug16" className="text-white hover:bg-[#222]">
                            Aug 16, 2024
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                                          <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-gray-800">
                            <th colSpan={8} className="text-center p-2 text-sm font-medium text-white bg-[#111]">
                              CALLS
                            </th>
                            <th className="text-center p-2 text-sm font-medium text-white bg-[#222]">STRIKE</th>
                            <th colSpan={8} className="text-center p-2 text-sm font-medium text-white bg-[#111]">
                              PUTS
                            </th>
                          </tr>
                          <tr className="border-b border-gray-800 text-xs">
                            <th className="p-2 font-medium text-white">Call</th>
                            <th className="p-2 font-medium text-white">Volume</th>
                            <th className="p-2 font-medium text-white">IV</th>
                            <th className="p-2 font-medium text-white">Vega</th>
                            <th className="p-2 font-medium text-white">Gamma</th>
                            <th className="p-2 font-medium text-white">Theta</th>
                            <th className="p-2 font-medium text-white">Delta</th>
                            <th className="p-2 font-medium text-white">OI</th>
                            <th className="p-2 font-medium text-white text-center bg-[#222]">LTP</th>
                            <th className="p-2 font-medium text-white">LTP</th>
                            <th className="p-2 font-medium text-white">OI</th>
                            <th className="p-2 font-medium text-white">Delta</th>
                            <th className="p-2 font-medium text-white">Theta</th>
                            <th className="p-2 font-medium text-white">Gamma</th>
                            <th className="p-2 font-medium text-white">Vega</th>
                            <th className="p-2 font-medium text-white">IV</th>
                            <th className="p-2 font-medium text-white">Volume</th>
                            <th className="p-2 font-medium text-white">Put</th>
                          </tr>
                        </thead>
                        <tbody>
                          {optionChain.map((option, index) => (
                            <tr
                              key={index}
                              className={`border-b border-gray-800 ${option.isSpot ? "bg-[#111]" : ""} hover:bg-[#111]`}
                            >
                              <td className="p-2 text-xs text-white">-</td>
                              <td className="p-2 text-xs text-white">{option.call.volume}</td>
                              <td className="p-2 text-xs text-white">{option.call.iv}</td>
                              <td className="p-2 text-xs text-white">{option.call.vega}</td>
                              <td className="p-2 text-xs text-white">{option.call.gamma}</td>
                              <td className="p-2 text-xs text-white">{option.call.theta}</td>
                              <td className="p-2 text-xs text-white">{option.call.delta}</td>
                              <td className="p-2 text-xs text-white">{option.call.oi}</td>
                              <td className="p-2 text-xs text-white text-center font-medium bg-[#222]">
                                {option.strike}
                                {option.isSpot && (
                                  <div className="text-[10px] text-gray-400">Spot {currentStock.spotPrice}</div>
                                )}
                              </td>
                              <td className="p-2 text-xs text-white">{option.put.ltp}</td>
                              <td className="p-2 text-xs text-white">{option.put.oi}</td>
                              <td className="p-2 text-xs text-white">{option.put.delta}</td>
                              <td className="p-2 text-xs text-white">{option.put.theta}</td>
                              <td className="p-2 text-xs text-white">{option.put.gamma}</td>
                              <td className="p-2 text-xs text-white">{option.put.vega}</td>
                              <td className="p-2 text-xs text-white">{option.put.iv}</td>
                              <td className="p-2 text-xs text-white">{option.put.volume}</td>
                              <td className="p-2 text-xs text-white">-</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
          {/* Right Resize Handle */}
          <div
            className="w-1 bg-gray-800 hover:bg-gray-600 cursor-col-resize transition-colors"
            onMouseDown={() => handleMouseDown("right")}
          />
          {/* Right Sidebar - Trading Panel */}
          <div className="bg-black border-l border-gray-800" style={{ width: rightPanelWidth }}>
            <div className="p-4">
              <div className="space-y-4">
                {/* Stock Info Header */}
                <div className="text-center">
                  <h3 className="font-semibold text-white">{currentStock.symbol}</h3>
                  <p className="text-sm text-gray-400">{currentStock.exchange}</p>
                </div>
                <Separator className="bg-gray-800" />
                {/* Trade Type Toggle */}
                <div className="flex gap-2">
                  <Button
                    variant={tradeType === "delivery" ? "default" : "outline"}
                    className={`flex-1 ${tradeType === "delivery" ? "bg-white text-black" : "border-gray-800 text-gray-300 hover:bg-[#111]"}`}
                    onClick={() => setTradeType("delivery")}
                  >
                    Delivery
                  </Button>
                  <Button
                    variant={tradeType === "intraday" ? "default" : "outline"}
                    className={`flex-1 ${tradeType === "intraday" ? "bg-white text-black" : "border-gray-800 text-gray-300 hover:bg-[#111]"}`}
                    onClick={() => setTradeType("intraday")}
                  >
                    Intraday
                  </Button>
                </div>
                {/* Quantity and Price Controls */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Quantity</label>
                    <div className="flex items-center border border-gray-800 rounded-md">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-gray-300 hover:bg-[#111]"
                        onClick={decrementQuantity}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                        className="border-0 text-center h-8 bg-transparent text-white"
                        min="1"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-gray-300 hover:bg-[#111]"
                        onClick={incrementQuantity}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Price</label>
                    <div className="flex items-center border border-gray-800 rounded-md">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-gray-300 hover:bg-[#111]"
                        onClick={decrementPrice}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(Number.parseFloat(e.target.value) || 0)}
                        className="border-0 text-center h-8 bg-transparent text-white"
                        step="0.05"
                        min="0"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-gray-300 hover:bg-[#111]"
                        onClick={incrementPrice}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                {/* Order Type */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Order Type</label>
                  <Select value={orderType} onValueChange={setOrderType}>
                    <SelectTrigger className="bg-[#111] border-gray-800 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111] border-gray-800">
                      <SelectItem value="market" className="text-white hover:bg-[#222]">
                        Market
                      </SelectItem>
                      <SelectItem value="limit" className="text-white hover:bg-[#222]">
                        Limit
                      </SelectItem>
                      <SelectItem value="sl" className="text-white hover:bg-[#222]">
                        Stop Loss
                      </SelectItem>
                      <SelectItem value="sl-m" className="text-white hover:bg-[#222]">
                        Stop Loss Market
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* Stop Loss */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="stop-loss"
                      checked={enableStopLoss}
                      onCheckedChange={(checked) => setEnableStopLoss(checked === true)}
                      className="border-gray-800"
                    />
                    <label htmlFor="stop-loss" className="text-sm font-medium text-white">
                      Set Stop Loss
                    </label>
                  </div>
                  <Input
                    placeholder="Price"
                    value={stopLoss}
                    onChange={(e) => setStopLoss(e.target.value)}
                    disabled={!enableStopLoss}
                    className="bg-[#111] border-gray-800 text-white placeholder:text-gray-400"
                  />
                </div>
                {/* Target */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="target"
                      checked={enableTarget}
                      onCheckedChange={(checked) => setEnableTarget(checked === true)}
                      className="border-gray-800"
                    />
                    <label htmlFor="target" className="text-sm font-medium text-white">
                      Set Target
                    </label>
                  </div>
                  <Input
                    placeholder="Price"
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                    disabled={!enableTarget}
                    className="bg-[#111] border-gray-800 text-white placeholder:text-gray-400"
                  />
                </div>
                {/* Buy/Sell Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-4">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">BUY</Button>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">SELL</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
