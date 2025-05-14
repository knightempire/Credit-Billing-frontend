import { CreditCard, DollarSign, RefreshCw } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface CreditBalanceProps {
  credits: number
  maxCredits: number
  lastPurchase?: string
}

export function CreditBalance({ credits, maxCredits, lastPurchase }: CreditBalanceProps) {
  const percentage = Math.round((credits / maxCredits) * 100)

  // Determine color based on percentage
  const getProgressColor = () => {
    if (percentage < 25) return "bg-red-500"
    if (percentage < 50) return "bg-orange-500"
    if (percentage < 75) return "bg-yellow-500"
    return "bg-green-500"
  }

  return (
    <Card className="overflow-hidden border-t-4 border-t-primary">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center">
          <CreditCard className="mr-2 h-5 w-5 text-primary" />
          Credit Balance
        </CardTitle>
        <CardDescription>Your available credits for uploads and processing</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="text-2xl font-bold">
            {credits} <span className="text-sm font-normal text-muted-foreground">/ {maxCredits} credits</span>
          </div>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Refresh</span>
          </Button>
        </div>
        <Progress value={percentage} className={`h-2 ${getProgressColor()}`} />
        {lastPurchase && <p className="text-xs text-muted-foreground mt-2">Last purchase: {lastPurchase}</p>}
      </CardContent>
      <CardFooter>
        <Button className="w-full gap-1 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700">
          <DollarSign className="h-4 w-4" />
          <span>Buy More Credits</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
