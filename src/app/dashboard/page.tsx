import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {  Bell } from "lucide-react"
import UserCard from "@/components/useful/UserCard"
import PrayerTimes from "@/components/useful/PrayerTimes"
import Videos from "@/components/useful/Videos"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
        <Button variant="outline" size="icon">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" alt="User" />
          <AvatarFallback>AA</AvatarFallback>
        </Avatar>
      </header>

      {/* Dashboard content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* User profile and level */}
          <UserCard />

          {/* Streak and Ramadan Progress */}
          <div className="col-span-full lg:col-span-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">           
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Ramadan Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center space-y-2 py-2">
                  <div className="text-4xl font-bold">12/30</div>
                  <p className="text-xs text-muted-foreground">Days completed</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Prayer times */}
         <PrayerTimes />

          {/* Daily activities and challenges */}
         

          {/* Rest of the components remain unchanged */}
         <Videos />
          {/* ... */}
        </div>
      </div>
    </div>
  )
}

