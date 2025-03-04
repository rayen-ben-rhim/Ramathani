import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle , CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

const PrayerTimes = () => {
  return (
    <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Prayer Times</CardTitle>
              <CardDescription>Today&apos;s prayer schedule for your location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-3">
                  <span className="text-xs font-medium">Fajr</span>
                  <span className="text-lg font-bold">4:32 AM</span>
                  <Badge variant="outline" className="mt-1">
                    Completed
                  </Badge>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-3">
                  <span className="text-xs font-medium">Dhuhr</span>
                  <span className="text-lg font-bold">12:15 PM</span>
                  <Badge variant="outline" className="mt-1">
                    Completed
                  </Badge>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-3">
                  <span className="text-xs font-medium">Asr</span>
                  <span className="text-lg font-bold">3:45 PM</span>
                  <Badge variant="outline" className="mt-1">
                    Completed
                  </Badge>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-3">
                  <span className="text-xs font-medium">Maghrib</span>
                  <span className="text-lg font-bold">6:58 PM</span>
                  <Badge variant="secondary" className="mt-1">
                    In 2 hours
                  </Badge>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-3">
                  <span className="text-xs font-medium">Isha</span>
                  <span className="text-lg font-bold">8:30 PM</span>
                  <Badge variant="outline" className="mt-1 opacity-50">
                    Upcoming
                  </Badge>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-3">
                  <span className="text-xs font-medium">Taraweeh</span>
                  <span className="text-lg font-bold">9:15 PM</span>
                  <Badge variant="outline" className="mt-1 opacity-50">
                    Upcoming
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full flex-col sm:flex-row justify-between text-sm">
                <div className="flex items-center mb-2 sm:mb-0">
                  <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Iftar: 6:58 PM</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Suhoor: 4:02 AM</span>
                </div>
              </div>
            </CardFooter>
          </Card>
  )
}

export default PrayerTimes