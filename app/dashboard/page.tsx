import { CreditBalance } from "@/components/credit-balance"
import { DashboardLayout } from "@/components/dashboard-layout"
import { PaymentUI } from "@/components/payment-ui"
import { TaskList } from "@/components/task-list"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, ImageIcon, Upload, Users } from "lucide-react"

// Mock data
const tasks = [
  {
    id: "1",
    title: "Beach Sunset.jpg",
    status: "completed" as const,
    date: "Today at 2:30 PM",
  },
  {
    id: "2",
    title: "Mountain Landscape.png",
    status: "pending" as const,
    date: "Today at 1:15 PM",
  },
  {
    id: "3",
    title: "City Skyline.jpg",
    status: "failed" as const,
    date: "Yesterday at 4:45 PM",
  },
  {
    id: "4",
    title: "Forest Path.jpg",
    status: "completed" as const,
    date: "Yesterday at 11:30 AM",
  },
]

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border shadow-sm">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your account.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-t-4 border-t-blue-500 hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Images</CardTitle>
              <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2">
                <ImageIcon className="h-4 w-4 text-blue-500 dark:text-blue-300" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">+5 from last week</p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-green-500 hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Uploads This Month</CardTitle>
              <div className="rounded-full bg-green-100 dark:bg-green-900 p-2">
                <Upload className="h-4 w-4 text-green-500 dark:text-green-300" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-purple-500 hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blog Views</CardTitle>
              <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-2">
                <ArrowUpRight className="h-4 w-4 text-purple-500 dark:text-purple-300" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,203</div>
              <p className="text-xs text-muted-foreground">+19% from last month</p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-amber-500 hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
              <div className="rounded-full bg-amber-100 dark:bg-amber-900 p-2">
                <Users className="h-4 w-4 text-amber-500 dark:text-amber-300" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">+1 from yesterday</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <CreditBalance credits={350} maxCredits={500} lastPurchase="May 10, 2025" />
          <TaskList tasks={tasks} />
        </div>

        <Tabs defaultValue="billing" className="bg-white dark:bg-gray-800 p-6 rounded-lg border shadow-sm">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="usage">Usage History</TabsTrigger>
          </TabsList>
          <TabsContent value="billing" className="mt-6">
            <PaymentUI />
          </TabsContent>
          <TabsContent value="usage" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">Usage History</CardTitle>
                <CardDescription>Your credit usage history for the past 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                      <div>
                        <p className="font-medium">Image Upload and Processing</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(Date.now() - i * 86400000).toLocaleDateString()} at{" "}
                          {new Date(Date.now() - i * 3600000).toLocaleTimeString()}
                        </p>
                      </div>
                      <div className="font-medium text-red-500 dark:text-red-400">
                        -{Math.floor(Math.random() * 5) + 1} credits
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
