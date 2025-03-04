import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bell,
  MoonStar,
  Users,
  Calendar,
  Clock,
  CheckCircle2,
  BookOpen,
  Heart,
  Flame,
  HandIcon as PrayingHands,
} from "lucide-react"

export default function Challenges() {
  return (
    <div className="flex min-h-screen bg-muted/40">

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <Button variant="outline" size="icon" className="md:hidden">
            <MoonStar className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold">Challenges</h1>
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

        {/* Challenges content */}
        <main className="grid gap-4 p-4 md:gap-8 md:p-6">
          <Tabs defaultValue="daily">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="daily">Daily Challenges</TabsTrigger>
              <TabsTrigger value="weekly">Weekly Challenges</TabsTrigger>
              <TabsTrigger value="special">Special Challenges</TabsTrigger>
            </TabsList>

            <TabsContent value="daily" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <Badge>Today</Badge>
                      <Badge variant="outline">+100 XP</Badge>
                    </div>
                    <CardTitle className="mt-2">Feed a Fasting Person</CardTitle>
                    <CardDescription>Day 12 Challenge</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Heart className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Share your iftar with someone or donate a meal to someone in need.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">0/1</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Complete Challenge</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary">In Progress</Badge>
                      <Badge variant="outline">+75 XP</Badge>
                    </div>
                    <CardTitle className="mt-2">Taraweeh Prayer</CardTitle>
                    <CardDescription>Day 12 Challenge</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <PrayingHands className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Attend Taraweeh prayer at the mosque tonight.</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">Waiting for Isha</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" disabled>
                      Complete After Isha
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary">In Progress</Badge>
                      <Badge variant="outline">+50 XP</Badge>
                    </div>
                    <CardTitle className="mt-2">Quran Reading</CardTitle>
                    <CardDescription>Day 12 Challenge</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Read at least 10 pages of Quran today.</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">5/10 pages</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">
                      Update Progress
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <h2 className="text-lg font-semibold mt-8 mb-4">Completed Today</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="bg-green-500/10 text-green-700 border-green-500/30">
                        Completed
                      </Badge>
                      <Badge variant="outline">+50 XP</Badge>
                    </div>
                    <CardTitle className="mt-2">Morning Dhikr</CardTitle>
                    <CardDescription>Day 12 Challenge</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Complete morning adhkar after Fajr prayer.</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Completed at</span>
                        <span className="font-medium">5:15 AM</span>
                      </div>
                      <Progress value={100} className="h-2 bg-green-200" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline" disabled>
                      Completed
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <h2 className="text-lg font-semibold mt-8 mb-4">Upcoming Challenges</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="opacity-75">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <Badge variant="outline">Tomorrow</Badge>
                      <Badge variant="outline">+100 XP</Badge>
                    </div>
                    <CardTitle className="mt-2">Night Prayer</CardTitle>
                    <CardDescription>Day 13 Challenge</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <MoonStar className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Wake up for Tahajjud prayer in the last third of the night.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" disabled>
                      Available Tomorrow
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="weekly" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Challenges</CardTitle>
                  <CardDescription>Complete these challenges by the end of the week</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 rounded-lg border p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Flame className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">7-Day Streak</h3>
                          <Badge variant="outline">+200 XP</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Complete all daily challenges for 7 consecutive days
                        </p>
                        <div className="mt-2 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span className="font-medium">5/7 days</span>
                          </div>
                          <Progress value={71} className="h-2" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-lg border p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Complete a Juz</h3>
                          <Badge variant="outline">+150 XP</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Finish reading an entire Juz of the Quran this week
                        </p>
                        <div className="mt-2 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span className="font-medium">12/20 pages</span>
                          </div>
                          <Progress value={60} className="h-2" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-lg border p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Heart className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Acts of Kindness</h3>
                          <Badge variant="outline">+175 XP</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Perform at least 5 acts of kindness or charity this week
                        </p>
                        <div className="mt-2 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span className="font-medium">2/5 acts</span>
                          </div>
                          <Progress value={40} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex w-full justify-between text-sm">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Week 2 of Ramadan</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">3 days remaining</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="special" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <Badge className="bg-primary text-primary-foreground">Special</Badge>
                      <Badge variant="outline">+300 XP</Badge>
                    </div>
                    <CardTitle className="mt-2">Laylatul Qadr Challenge</CardTitle>
                    <CardDescription>Last 10 nights of Ramadan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <MoonStar className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm">
                            Maximize your worship during the last 10 nights of Ramadan in search of Laylatul Qadr.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Requirements:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                            Pray Taraweeh each night
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                            Read at least 10 pages of Quran each night
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                            Make extended dua after each prayer
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                            Give charity each night
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" disabled>
                      Unlocks on Day 20
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-gradient-to-br from-amber-500/5 to-amber-500/10 border-amber-500/20">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <Badge className="bg-amber-500 text-white">Team Challenge</Badge>
                      <Badge variant="outline">+250 XP</Badge>
                    </div>
                    <CardTitle className="mt-2">Community Iftar</CardTitle>
                    <CardDescription>Week 3 Special Challenge</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
                          <Users className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm">
                            Organize or participate in a community iftar with your team members.
                          </p>
                        </div>
                      </div>
                      <div className="rounded-lg border p-3 bg-background">
                        <h4 className="text-sm font-medium mb-2">Team Progress:</h4>
                        <div className="flex items-center gap-2 mb-3">
                          <Avatar className="h-6 w-6 border">
                            <AvatarImage src="/placeholder-user.jpg" alt="User" />
                            <AvatarFallback>AA</AvatarFallback>
                          </Avatar>
                          <span className="text-xs">You</span>
                          <Badge variant="outline" className="ml-auto text-xs">
                            Not Started
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <Avatar className="h-6 w-6 border">
                            <AvatarImage src="/placeholder-user.jpg" alt="User" />
                            <AvatarFallback>MK</AvatarFallback>
                          </Avatar>
                          <span className="text-xs">Mohammed K.</span>
                          <Badge
                            variant="outline"
                            className="ml-auto text-xs bg-green-500/10 text-green-700 border-green-500/30"
                          >
                            Completed
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6 border">
                            <AvatarImage src="/placeholder-user.jpg" alt="User" />
                            <AvatarFallback>FH</AvatarFallback>
                          </Avatar>
                          <span className="text-xs">Fatima H.</span>
                          <Badge variant="outline" className="ml-auto text-xs">
                            Not Started
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Join Community Iftar</Button>
                  </CardFooter>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Special Challenges</CardTitle>
                  <CardDescription>Special events and challenges throughout Ramadan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 rounded-lg border p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Quran Completion</h3>
                        <p className="text-sm text-muted-foreground">
                          Complete reading the entire Quran during Ramadan
                        </p>
                      </div>
                      <Badge variant="outline">Day 15</Badge>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Eid Preparation</h3>
                        <p className="text-sm text-muted-foreground">
                          Help prepare for Eid celebrations in your community
                        </p>
                      </div>
                      <Badge variant="outline">Day 25</Badge>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Zakat al-Fitr</h3>
                        <p className="text-sm text-muted-foreground">
                          Give your obligatory Zakat al-Fitr before Eid prayer
                        </p>
                      </div>
                      <Badge variant="outline">Day 29</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}