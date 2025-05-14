import { CheckCircle2, Clock, XCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Task {
  id: string
  title: string
  status: "completed" | "pending" | "failed"
  date: string
}

interface TaskListProps {
  tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps) {
  const getStatusIcon = (status: Task["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "failed":
        return <XCircle className="h-4 w-4 text-red-500" />
    }
  }

  const getStatusBadge = (status: Task["status"]) => {
    switch (status) {
      case "completed":
        return (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
          >
            Completed
          </Badge>
        )
      case "pending":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800"
          >
            Pending
          </Badge>
        )
      case "failed":
        return (
          <Badge
            variant="outline"
            className="bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800"
          >
            Failed
          </Badge>
        )
    }
  }

  return (
    <Card className="border-t-4 border-t-indigo-500">
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center">
          <Clock className="mr-2 h-5 w-5 text-indigo-500" />
          Recent Tasks
        </CardTitle>
        <CardDescription>Your recent image uploads and processing tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-md transition-colors"
            >
              <div className="flex items-start space-x-3">
                <div className="mt-0.5">{getStatusIcon(task.status)}</div>
                <div>
                  <p className="font-medium">{task.title}</p>
                  <p className="text-sm text-muted-foreground">{task.date}</p>
                </div>
              </div>
              <div>{getStatusBadge(task.status)}</div>
            </div>
          ))}

          {tasks.length === 0 && (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <p className="text-sm text-muted-foreground">No tasks found</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
