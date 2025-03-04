import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {   PlayCircle } from "lucide-react"

const Videos = () => {
  return (
    <Card className="col-span-full">
    <CardHeader>
      <CardTitle>Inspirational Videos</CardTitle>
      <CardDescription>Watch and learn from these uplifting Ramadan videos</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=200&width=300"
            alt="Video thumbnail"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <PlayCircle className="w-12 h-12 text-white" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-white text-sm font-medium">The Blessings of Ramadan</h3>
          </div>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=200&width=300"
            alt="Video thumbnail"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <PlayCircle className="w-12 h-12 text-white" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-white text-sm font-medium">Tips for a Productive Ramadan</h3>
          </div>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=200&width=300"
            alt="Video thumbnail"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <PlayCircle className="w-12 h-12 text-white" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-white text-sm font-medium">Understanding the Quran</h3>
          </div>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button variant="outline" className="w-full">
        View All Videos
      </Button>
    </CardFooter>
  </Card>
  )
}

export default Videos