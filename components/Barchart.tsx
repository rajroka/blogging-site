"use client"

import { useEffect, useState } from "react"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Posts per month chart"

// Chart config (only one series: post count)
const chartConfig = {
  count: {
    label: "Posts",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function ChartBarDefault() {
  const [chartData, setChartData] = useState<{ month: string; count: number }[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        // 👇 Fetch from your API route
        const res = await fetch("/api/posts-per-month")
        if (!res.ok) throw new Error("Failed to fetch data")
        const data = await res.json()
        setChartData(data)
      } catch (err: any) {
        setError(err.message)
        console.error("Error fetching chart data:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <Card className="p-6">
        <p>Loading chart...</p>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="p-6">
        <p className="text-red-500">Error: {error}</p>
      </Card>
    )
  }

  return (
    <Card className="w-100 h-100 ">
      <CardHeader>
        <CardTitle>Posts per Month</CardTitle>
        <CardDescription>Number of blog posts created each month</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value: string) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" fill="var(--color-count)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total posts written each month
        </div>
      </CardFooter>
    </Card>
  )
}
