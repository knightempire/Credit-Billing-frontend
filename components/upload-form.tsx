"use client"

import type React from "react"

import { useState } from "react"
import { Upload, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function UploadForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setSelectedFile(file)

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setPreview(null)
    }
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
    setPreview(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile) return

    setIsUploading(true)

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false)
      setSelectedFile(null)
      setPreview(null)
    }, 2000)
  }

  return (
    <Card className="border-t-4 border-t-primary">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20">
        <CardTitle className="text-lg font-medium flex items-center">
          <Upload className="mr-2 h-5 w-5 text-primary" />
          Upload Image
        </CardTitle>
        <CardDescription>Upload an image and add metadata for better organization</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="image-upload">Image</Label>
            <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 transition-colors hover:border-primary/50 bg-gray-50 dark:bg-gray-800">
              {preview ? (
                <div className="relative w-full">
                  <img
                    src={preview || "/placeholder.svg"}
                    alt="Preview"
                    className="mx-auto max-h-64 rounded-lg object-contain"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background shadow-md"
                    onClick={handleRemoveFile}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove file</span>
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">Drag and drop or click to upload</p>
                    <p className="text-xs text-muted-foreground">Supports JPG, PNG and GIF up to 10MB</p>
                  </div>
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("image-upload")?.click()}
                  >
                    Select File
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter image title" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter image description" rows={3} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nature">Nature</SelectItem>
                  <SelectItem value="people">People</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="travel">Travel</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input id="tags" placeholder="Enter tags separated by commas" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="credits">Credits to use</Label>
            <Select defaultValue="1">
              <SelectTrigger id="credits">
                <SelectValue placeholder="Select credits" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 credit (Standard)</SelectItem>
                <SelectItem value="2">2 credits (High Quality)</SelectItem>
                <SelectItem value="5">5 credits (Premium)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">Higher credit usage provides better processing quality</p>
          </div>
        </form>
      </CardContent>
      <CardFooter className="bg-gray-50 dark:bg-gray-800 border-t">
        <Button
          className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700"
          disabled={!selectedFile || isUploading}
          onClick={handleSubmit}
        >
          {isUploading ? "Uploading..." : "Upload Image"}
        </Button>
      </CardFooter>
    </Card>
  )
}
