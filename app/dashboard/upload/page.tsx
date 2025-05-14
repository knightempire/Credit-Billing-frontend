import { DashboardLayout } from "@/components/dashboard-layout"
import { UploadForm } from "@/components/upload-form"
import { CreditBalance } from "@/components/credit-balance"

export default function UploadPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Upload Image</h1>
          <p className="text-muted-foreground">Upload and process your images with metadata</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <UploadForm />
          </div>
          <div>
            <CreditBalance credits={350} maxCredits={500} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
