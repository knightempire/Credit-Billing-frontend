import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-xl">ImageSaaS</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/auth/login">
            Log In
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/auth/register">
            Sign Up
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Upload, Manage, and Share Your Images
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Our platform makes it easy to upload, manage, and share your images. Pay only for what you use with
                    our credit-based system.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/auth/register">
                    <Button size="lg" className="w-full">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/auth/login">
                    <Button size="lg" variant="outline" className="w-full">
                      Log In
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 p-8 dark:from-purple-950/50 dark:to-indigo-950/50">
                  <div className="absolute inset-0 bg-grid-black/5 [mask-image:linear-gradient(to_bottom,transparent,black)]" />
                  <div className="relative flex h-full w-full flex-col items-start justify-between rounded-lg border bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-950">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <div className="text-sm font-medium">Upload Complete</div>
                      </div>
                      <div className="text-xl font-bold">Your image has been uploaded successfully</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        You can now share it with others or add it to your blog.
                      </div>
                    </div>
                    <div className="w-full space-y-4">
                      <div className="h-32 w-full rounded-lg bg-gray-100 dark:bg-gray-800" />
                      <div className="flex items-center gap-4">
                        <div className="flex-1 space-y-1">
                          <div className="text-sm font-medium">Credits Used</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">1 credit</div>
                        </div>
                        <Button size="sm">Share</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform offers a range of features to help you manage your images.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Easy Uploads</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Upload your images with just a few clicks. Add metadata to make them easier to find.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Credit System</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Pay only for what you use with our flexible credit-based system. Buy credits as you need them.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Blog Integration</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Easily integrate your images into your blog posts. Share your content with the world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 ImageSaaS. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
