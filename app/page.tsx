import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white dark:bg-black text-gray-900 dark:text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b bg-white/80 dark:bg-black/80 backdrop-blur">
        <Link href="/" className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
          ImageSaaS
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-150" href="/auth/login">
            Log In
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-150" href="/auth/register">
            Sign Up
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48 bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_500px] items-center">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Upload, Manage, and Share Your Images
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                  A simple and powerful platform to manage your images. Upload with ease, manage effectively, and share with just a click.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/auth/register">
                    <Button size="lg" className="w-full sm:w-auto transition-transform hover:scale-105">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/auth/login">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto transition-transform hover:scale-105">
                      Log In
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl shadow-xl overflow-hidden border dark:border-gray-800 bg-white dark:bg-gray-950">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm font-medium">Upload Complete</span>
                  </div>
                  <div className="text-xl font-bold">Your image has been uploaded successfully</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    You can now share it with others or add it to your blog.
                  </p>
                  <div className="h-32 w-full rounded-lg bg-gray-100 dark:bg-gray-800" />
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Credits Used</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">1 credit</div>
                    </div>
                    <Button size="sm">Share</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-24 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6 text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Features</h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
                Everything you need to manage and share your images effectively.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto text-left">
              {[{ title: "Easy Uploads", desc: "Upload your images quickly with optional metadata for easy search." },
              { title: "Credit System", desc: "Flexible pay-as-you-go credit system. Only pay for what you use." },
              { title: "Blog Integration", desc: "Easily embed and share your images within your blog posts." }].map((item, index) => (
                <div key={index} className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md transition hover:shadow-lg">
                  <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400">
                    <CheckCircle2 className="h-5 w-5" />
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="w-full py-24 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6 text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About ImageSaaS</h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
                ImageSaaS is designed to simplify how you upload, organize, and share your images. We understand the importance of an efficient image management tool and aim to provide a smooth experience with no complexity. Pay only for what you use with our flexible credit system.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-24 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-900">
          <div className="container px-4 md:px-6 text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">How It Works</h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
                Here’s how you can start using ImageSaaS in just three easy steps:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[{ step: "Step 1", description: "Sign up for an account and get started for free." },
              { step: "Step 2", description: "Upload your images and manage them with ease." },
              { step: "Step 3", description: "Share your images with the world or integrate into your blog." }].map((item, index) => (
                <div key={index} className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
                  <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">{item.step}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-24 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6 text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">What Our Users Say</h2>
            </div>
            <div className="flex gap-8">
              {[{ name: "John Doe", text: "This platform has changed the way I manage my blog images. The credit system is so flexible!" },
              { name: "Jane Smith", text: "Easy to use and so convenient. Uploading and sharing my images has never been easier." }].map((item, index) => (
                <div key={index} className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
                  <p className="text-lg text-gray-600 dark:text-gray-400">“{item.text}”</p>
                  <p className="font-semibold text-indigo-600 dark:text-indigo-400 mt-4">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="w-full py-24 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6 text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[{ question: "What is the credit system?", answer: "You only pay for what you use, allowing you to manage costs effectively." },
              { question: "How do I upload images?", answer: "Simply sign up, and you’ll be able to upload your images directly via the dashboard." },
              { question: "Can I integrate this with my blog?", answer: "Yes! You can embed images into your blog posts with ease." }].map((item, index) => (
                <div key={index} className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md">
                  <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{item.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="border-t bg-white dark:bg-black py-12 px-4 md:px-6 text-sm text-gray-600 dark:text-gray-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">ImageSaaS</h3>
            <p>
              ImageSaaS is a simple, flexible platform to upload, manage, and share your images. Powered by a credit-based system so you only pay for what you use.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/auth/login" className="hover:underline">Log In</Link></li>
              <li><Link href="/auth/register" className="hover:underline">Sign Up</Link></li>
              <li><Link href="#" className="hover:underline">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Features</h4>
            <ul className="space-y-2">
              <li><span className="cursor-default">Easy Uploads</span></li>
              <li><span className="cursor-default">Credit-Based Billing</span></li>
              <li><span className="cursor-default">Blog Integration</span></li>
              <li><span className="cursor-default">Responsive Dashboard</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Twitter</Link></li>
              <li><Link href="#" className="hover:underline">GitHub</Link></li>
              <li><Link href="#" className="hover:underline">Contact Support</Link></li>
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-xs text-gray-400">
          © 2025 ImageSaaS. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
