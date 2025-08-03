"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    TradingView: any
  }
}

interface TradingChartProps {
  symbol: string
  theme?: "light" | "dark"
}

export function TradingChart({ symbol, theme = "dark" }: TradingChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartContainerRef.current) {
      const script = document.createElement("script")
      script.src = "https://s3.tradingview.com/tv.js"
      script.async = true
      script.onload = () => {
        if (window.TradingView) {
          new window.TradingView.widget({
            autosize: true,
            symbol: `NSE:${symbol}`,
            interval: "1D",
            timezone: "Asia/Kolkata",
            theme: theme,
            style: "1",
            locale: "en",
            toolbar_bg: theme === "dark" ? "#000000" : "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: chartContainerRef.current?.id || "tradingview_chart",
            studies: ["Volume@tv-basicstudies", "MACD@tv-basicstudies"],
            overrides: {
              "paneProperties.background": theme === "dark" ? "#000000" : "#ffffff",
              "paneProperties.vertGridProperties.color": theme === "dark" ? "#363c4e" : "#e1e3e6",
              "paneProperties.horzGridProperties.color": theme === "dark" ? "#363c4e" : "#e1e3e6",
              "symbolWatermarkProperties.transparency": 90,
              "scalesProperties.textColor": theme === "dark" ? "#ffffff" : "#131722",
            },
          })
        }
      }
      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [symbol, theme])

  return <div id="tradingview_chart" ref={chartContainerRef} className="w-full h-full" />
}
