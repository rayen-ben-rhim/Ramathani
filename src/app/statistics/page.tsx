import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, TrendingUp, Zap, BookOpen, Heart, Calendar, Clock, Users } from "lucide-react"

export default function Statistics() {
  return (
    <div className="flex-1">
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <div className="w-full flex-1">
          <h1 className="text-lg font-semibold">Statistics</h1>
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
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total XP</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45,231</div>
              <p className="text-xs text-muted-foreground">+20.1% from last Ramadan</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23 days</div>
              <p className="text-xs text-muted-foreground">7 days until your best streak</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Quran Pages Read</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">230</div>
              <p className="text-xs text-muted-foreground">Avg. 10 pages per day</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Acts of Charity</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
              <p className="text-xs text-muted-foreground">+12 from last week</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Activity Overview</CardTitle>
            <CardDescription>Your spiritual journey throughout Ramadan</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Add a chart or graph here to show activity over time */}
            <div className="h-[200px] bg-muted rounded-md flex items-center justify-center">
              Activity Chart Placeholder
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Top Achievements</CardTitle>
              <CardDescription>Your most significant milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">30-Day Perfect Streak</h4>
                    <p className="text-sm text-muted-foreground">Completed all daily activities for a month</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Quran Hafiz</h4>
                    <p className="text-sm text-muted-foreground">Memorized 5 new surahs</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Generous Soul</h4>
                    <p className="text-sm text-muted-foreground">Donated to charity for 15 consecutive days</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Areas for Improvement</CardTitle>
              <CardDescription>Aspects of worship to focus on</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Night Prayers</h4>
                    <p className="text-sm text-muted-foreground">Try to increase frequency of Tahajjud prayers</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Community Engagement</h4>
                    <p className="text-sm text-muted-foreground">Participate more in local Islamic events</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Tafsir Study</h4>
                    <p className="text-sm text-muted-foreground">
                      Dedicate more time to understanding Quranic interpretations
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

