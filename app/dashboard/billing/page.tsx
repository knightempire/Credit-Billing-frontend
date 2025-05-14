import { DashboardLayout } from "@/components/dashboard-layout"
import { PaymentUI } from "@/components/payment-ui"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Receipt } from "lucide-react"

// Mock invoice data
const invoices = [
  {
    id: "INV-001",
    date: "May 10, 2025",
    amount: "$39.99",
    status: "Paid",
    description: "500 Credits Purchase",
  },
  {
    id: "INV-002",
    date: "April 15, 2025",
    amount: "$9.99",
    status: "Paid",
    description: "100 Credits Purchase",
  },
  {
    id: "INV-003",
    date: "March 22, 2025",
    amount: "$39.99",
    status: "Paid",
    description: "500 Credits Purchase",
  },
  {
    id: "INV-004",
    date: "February 8, 2025",
    amount: "$69.99",
    status: "Paid",
    description: "1000 Credits Purchase",
  },
]

export default function BillingPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Billing</h1>
          <p className="text-muted-foreground">Manage your billing information and purchase credits</p>
        </div>

        <Tabs defaultValue="purchase">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="purchase">Purchase Credits</TabsTrigger>
            <TabsTrigger value="history">Billing History</TabsTrigger>
          </TabsList>
          <TabsContent value="purchase" className="mt-6">
            <PaymentUI />
          </TabsContent>
          <TabsContent value="history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">Billing History</CardTitle>
                <CardDescription>View your past invoices and payment history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {invoices.map((invoice) => (
                    <div
                      key={invoice.id}
                      className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-start gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Receipt className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{invoice.description}</p>
                          <div className="flex gap-2 text-sm text-muted-foreground">
                            <span>{invoice.date}</span>
                            <span>•</span>
                            <span>{invoice.id}</span>
                            <span>•</span>
                            <span className="text-green-600 dark:text-green-400">{invoice.status}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="font-medium">{invoice.amount}</div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download invoice</span>
                        </Button>
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
