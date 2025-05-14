import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, MessageSquare, ThumbsUp } from "lucide-react"

// Mock blog data
const blogPosts = [
  {
    id: "1",
    title: "Exploring the Beauty of Nature",
    excerpt: "A journey through the most breathtaking landscapes captured in my recent travels.",
    image: "/placeholder.svg?height=400&width=600&text=Nature+Photography",
    date: "May 12, 2025",
    views: 243,
    likes: 56,
    comments: 12,
  },
  {
    id: "2",
    title: "Urban Architecture: Modern Marvels",
    excerpt: "Showcasing the most impressive architectural designs from cities around the world.",
    image: "/placeholder.svg?height=400&width=600&text=Urban+Architecture",
    date: "May 8, 2025",
    views: 187,
    likes: 42,
    comments: 8,
  },
  {
    id: "3",
    title: "Macro Photography: The Hidden World",
    excerpt: "Revealing the intricate details of our world that often go unnoticed.",
    image: "/placeholder.svg?height=400&width=600&text=Macro+Photography",
    date: "May 3, 2025",
    views: 156,
    likes: 38,
    comments: 5,
  },
  {
    id: "4",
    title: "Portrait Photography Tips and Tricks",
    excerpt: "Learn how to capture the essence of your subjects with these professional techniques.",
    image: "/placeholder.svg?height=400&width=600&text=Portrait+Photography",
    date: "April 28, 2025",
    views: 312,
    likes: 87,
    comments: 24,
  },
]

export default function BlogPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Blog Posts</h1>
            <p className="text-muted-foreground">View and manage your published blog posts</p>
          </div>
          <Button>Create New Post</Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="aspect-video relative">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="line-clamp-1">{post.title}</CardTitle>
                <CardDescription className="text-xs">Published on {post.date}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <div className="flex space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Eye className="mr-1 h-3 w-3" />
                    {post.views}
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="mr-1 h-3 w-3" />
                    {post.likes}
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="mr-1 h-3 w-3" />
                    {post.comments}
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/dashboard/blog/${post.id}`}>View Post</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
