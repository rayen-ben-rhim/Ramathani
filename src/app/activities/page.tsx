import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, BookOpen, Clock, Heart, HandIcon as PrayingHands, Star } from "lucide-react"

export default function Activities() {
  return (
    <div className="flex-1">
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <div className="w-full flex-1">
          <h1 className="text-lg font-semibold">Activities</h1>
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

      <main className="grid gap-4 p-4 md:gap-8 md:p-6">
        <Tabs defaultValue="daily">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>

          <TabsContent value="daily" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Today&apos;s Activities</CardTitle>
                <CardDescription>Track your daily worship and good deeds</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 rounded-lg border p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <PrayingHands className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">5 Daily Prayers</h4>
                    <p className="text-sm text-muted-foreground">Complete all 5 obligatory prayers</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Badge variant="secondary">3/5</Badge>
                    <Button size="sm" variant="outline">
                      Log
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Quran Reading</h4>
                    <p className="text-sm text-muted-foreground">Read at least 1 page of Quran</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Badge variant="secondary">5 pages</Badge>
                    <Button size="sm" variant="outline">
                      Log
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Charity</h4>
                    <p className="text-sm text-muted-foreground">Give charity today</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Badge variant="outline">Not Started</Badge>
                    <Button size="sm" variant="outline">
                      Log
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Star className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Extra Good Deeds</h4>
                    <p className="text-sm text-muted-foreground">Perform additional acts of worship</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Badge variant="secondary">2 deeds</Badge>
                    <Button size="sm" variant="outline">
                      Log
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Log All Activities</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Today&apos;s Activities</CardTitle>
                <CardDescription>Your spiritual journey for the day</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>XP Earned Today</span>
                      <span className="font-medium">450 / 1000 XP</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Time spent on activities:</span>
                    </div>
                    <span className="font-medium">2h 30m</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weekly" className="space-y-4">
            {/* Add weekly view content here */}
          </TabsContent>

          <TabsContent value="monthly" className="space-y-4">
            {/* Add monthly view content here */}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
