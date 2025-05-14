"use client"

import type React from "react"

import { useState } from "react"
import { Check, CreditCard } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface PricingPlan {
  id: string
  name: string
  credits: number
  price: number
  popular?: boolean
  color: string
}

export function PaymentUI() {
  const [selectedPlan, setSelectedPlan] = useState<string>("pro")
  const [isProcessing, setIsProcessing] = useState(false)

  const plans: PricingPlan[] = [
    { id: "basic", name: "Basic", credits: 100, price: 9.99, color: "border-blue-400 bg-blue-50 dark:bg-blue-950" },
    {
      id: "pro",
      name: "Pro",
      credits: 500,
      price: 39.99,
      popular: true,
      color: "border-purple-400 bg-purple-50 dark:bg-purple-950",
    },
    {
      id: "premium",
      name: "Premium",
      credits: 1000,
      price: 69.99,
      color: "border-amber-400 bg-amber-50 dark:bg-amber-950",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
    }, 2000)
  }

  const selectedPlanData = plans.find((p) => p.id === selectedPlan)

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20">
        <CardTitle className="text-lg font-medium">Purchase Credits</CardTitle>
        <CardDescription>Select a plan to purchase more credits for your account</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="grid gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <Label
                key={plan.id}
                htmlFor={plan.id}
                className={`flex flex-col rounded-lg border-2 p-4 cursor-pointer hover:border-primary/50 transition-all ${
                  selectedPlan === plan.id ? `border-primary ${plan.color}` : ""
                } ${plan.popular ? "relative shadow-md" : ""}`}
              >
                {plan.popular && (
                  <span className="absolute -top-2 -right-2 rounded-full bg-primary px-2 py-0.5 text-xs text-white font-medium">
                    Popular
                  </span>
                )}
                <RadioGroupItem id={plan.id} value={plan.id} className="sr-only" />
                <div className="flex flex-col space-y-1">
                  <span className="font-medium">{plan.name}</span>
                  <span className="text-2xl font-bold">${plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.credits} credits</span>
                </div>
                {selectedPlan === plan.id && (
                  <div className="absolute bottom-4 right-4 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="h-3 w-3" />
                  </div>
                )}
              </Label>
            ))}
          </RadioGroup>

          <div className="space-y-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div className="space-y-2">
              <Label htmlFor="card-number">Card Number</Label>
              <Input id="card-number" placeholder="1234 5678 9012 3456" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name on Card</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="bg-gray-50 dark:bg-gray-800 border-t">
        <Button
          className="w-full gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700"
          disabled={isProcessing}
          onClick={handleSubmit}
        >
          <CreditCard className="h-4 w-4" />
          {isProcessing ? "Processing..." : `Pay $${selectedPlanData?.price.toFixed(2)}`}
        </Button>
      </CardFooter>
    </Card>
  )
}
