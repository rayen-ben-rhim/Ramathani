import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Bell, MoonStar, Search,  Trophy, Users, } from "lucide-react"


export default function Leaderboard() {
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
            <h1 className="text-lg font-semibold">Leaderboard</h1>
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

        {/* Leaderboard content */}
        <main className="grid gap-4 p-4 md:gap-8 md:p-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Ramadan Leaderboard</CardTitle>
                  <CardDescription className=" hidden sm:block">See who&apos;s leading in spiritual progress</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search users..." className="w-[200px] pl-8" />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="global">
                <TabsList className="mb-4">
                  <TabsTrigger value="global">Global</TabsTrigger>
                  <TabsTrigger value="friends">Friends</TabsTrigger>
                  <TabsTrigger value="local">Local Community</TabsTrigger>
                </TabsList>
                <TabsContent value="global" className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="bg-yellow-500/10 border-yellow-500/20">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative">
                            <div className="absolute -top-1 -right-1">
                              <Badge className="bg-yellow-500 text-white">1</Badge>
                            </div>
                            <Avatar className="h-20 w-20 border-4 border-yellow-500">
                              <AvatarImage src="/placeholder-user.jpg" alt="User" />
                              <AvatarFallback>MK</AvatarFallback>
                            </Avatar>
                          </div>
                          <h3 className="mt-4 text-lg font-bold">Mohammed Khan</h3>
                          <div className="mt-1 flex items-center">
                            <Badge variant="outline" className="bg-yellow-500/20 text-yellow-700 border-yellow-500/30">
                              Level 9
                            </Badge>
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">5,240 XP</p>
                          <div className="mt-4 flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              View Profile
                            </Button>
                            <Button size="sm">Add Friend</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-500/10 border-slate-500/20">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative">
                            <div className="absolute -top-1 -right-1">
                              <Badge className="bg-slate-500 text-white">2</Badge>
                            </div>
                            <Avatar className="h-20 w-20 border-4 border-slate-500">
                              <AvatarImage src="/placeholder-user.jpg" alt="User" />
                              <AvatarFallback>FH</AvatarFallback>
                            </Avatar>
                          </div>
                          <h3 className="mt-4 text-lg font-bold">Fatima Hassan</h3>
                          <div className="mt-1 flex items-center">
                            <Badge variant="outline" className="bg-slate-500/20 text-slate-700 border-slate-500/30">
                              Level 8
                            </Badge>
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">4,890 XP</p>
                          <div className="mt-4 flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              View Profile
                            </Button>
                            <Button size="sm">Add Friend</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-amber-500/10 border-amber-500/20">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative">
                            <div className="absolute -top-1 -right-1">
                              <Badge className="bg-amber-500 text-white">3</Badge>
                            </div>
                            <Avatar className="h-20 w-20 border-4 border-amber-500">
                              <AvatarImage src="/placeholder-user.jpg" alt="User" />
                              <AvatarFallback>YA</AvatarFallback>
                            </Avatar>
                          </div>
                          <h3 className="mt-4 text-lg font-bold">Yusuf Ali</h3>
                          <div className="mt-1 flex items-center">
                            <Badge variant="outline" className="bg-amber-500/20 text-amber-700 border-amber-500/30">
                              Level 8
                            </Badge>
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">4,560 XP</p>
                          <div className="mt-4 flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              View Profile
                            </Button>
                            <Button size="sm">Add Friend</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="rounded-md border overflow-hidden">
                    {/* Desktop Table View */}
                    <div className="relative w-full overflow-x-auto hidden md:block">
                      <table className="w-full caption-bottom text-sm min-w-[800px]">

                        <thead className="[&_tr]:border-b">
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-10 sm:h-12 px-2 sm:px-4 text-left align-middle font-medium whitespace-nowrap">Rank</th>
                            <th className="h-10 sm:h-12 px-2 sm:px-4 text-left align-middle font-medium whitespace-nowrap">User</th>
                            <th className="h-10 sm:h-12 px-2 sm:px-4 text-left align-middle font-medium whitespace-nowrap">Level</th>
                            <th className="h-10 sm:h-12 px-2 sm:px-4 text-left align-middle font-medium whitespace-nowrap">XP</th>
                            <th className="h-10 sm:h-12 px-2 sm:px-4 text-left align-middle font-medium whitespace-nowrap">Streak</th>
                            <th className="h-10 sm:h-12 px-2 sm:px-4 text-left align-middle font-medium whitespace-nowrap">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 sm:p-4 align-middle">
                              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-500 text-white font-bold">
                                1
                              </div>
                            </td>
                            <td className="p-2 sm:p-4 align-middle">
                              <div className="flex items-center gap-2 sm:gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                  <AvatarFallback>MK</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">Mohammed Khan</p>
                                  <p className="text-xs text-muted-foreground">@mohammed_k</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 sm:p-4 align-middle">
                              <Badge
                                variant="outline"
                                className="bg-yellow-500/20 text-yellow-700 border-yellow-500/30"
                              >
                                Level 9
                              </Badge>
                            </td>
                            <td className="p-2 sm:p-4 align-middle">5,240 XP</td>
                            <td className="p-2 sm:p-4 align-middle">15 days</td>
                            <td className="p-2 sm:p-4 align-middle">
                              <Button variant="outline" size="sm">
                                View Profile
                              </Button>
                            </td>
                          </tr>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 sm:p-4 align-middle">
                              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-500 text-white font-bold">
                                2
                              </div>
                            </td>
                            <td className="p-2 sm:p-4 align-middle">
                              <div className="flex items-center gap-2 sm:gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                  <AvatarFallback>FH</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">Fatima Hassan</p>
                                  <p className="text-xs text-muted-foreground">@fatima_h</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 sm:p-4 align-middle">
                              <Badge variant="outline" className="bg-slate-500/20 text-slate-700 border-slate-500/30">
                                Level 8
                              </Badge>
                            </td>
                            <td className="p-2 sm:p-4 align-middle">4,890 XP</td>
                            <td className="p-2 sm:p-4 align-middle">12 days</td>
                            <td className="p-2 sm:p-4 align-middle">
                              <Button variant="outline" size="sm">
                                View Profile
                              </Button>
                            </td>
                          </tr>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 sm:p-4 align-middle">
                              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-white font-bold">
                                3
                              </div>
                            </td>
                            <td className="p-2 sm:p-4 align-middle">
                              <div className="flex items-center gap-2 sm:gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                  <AvatarFallback>YA</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">Yusuf Ali</p>
                                  <p className="text-xs text-muted-foreground">@yusuf_a</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 sm:p-4 align-middle">
                              <Badge variant="outline" className="bg-amber-500/20 text-amber-700 border-amber-500/30">
                                Level 8
                              </Badge>
                            </td>
                            <td className="p-2 sm:p-4 align-middle">4,560 XP</td>
                            <td className="p-2 sm:p-4 align-middle">14 days</td>
                            <td className="p-2 sm:p-4 align-middle">
                              <Button variant="outline" size="sm">
                                View Profile
                              </Button>
                            </td>
                          </tr>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted bg-primary/5">
                            <td className="p-2 sm:p-4 align-middle">
                              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground font-bold">
                                4
                              </div>
                            </td>
                            <td className="p-2 sm:p-4 align-middle">
                              <div className="flex items-center gap-2 sm:gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                  <AvatarFallback>AA</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">Ahmed Abdullah</p>
                                  <p className="text-xs text-muted-foreground">@ahmed_a</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 sm:p-4 align-middle">
                              <Badge>Level 7</Badge>
                            </td>
                            <td className="p-2 sm:p-4 align-middle">3,240 XP</td>
                            <td className="p-2 sm:p-4 align-middle">12 days</td>
                            <td className="p-2 sm:p-4 align-middle">
                              <Badge>You</Badge>
                            </td>
                          </tr>
                          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-2 sm:p-4 align-middle">
                              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground font-bold">
                                5
                              </div>
                            </td>
                            <td className="p-2 sm:p-4 align-middle">
                              <div className="flex items-center gap-2 sm:gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                  <AvatarFallback>ZI</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">Zainab Ibrahim</p>
                                  <p className="text-xs text-muted-foreground">@zainab_i</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-2 sm:p-4 align-middle">
                              <Badge variant="outline">Level 7</Badge>
                            </td>
                            <td className="p-2 sm:p-4 align-middle">3,120 XP</td>
                            <td className="p-2 sm:p-4 align-middle">10 days</td>
                            <td className="p-2 sm:p-4 align-middle">
                              <Button variant="outline" size="sm">
                                View Profile
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Button variant="outline" size="sm">
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="friends">
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Trophy className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium">Add friends to compete with them!</h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-md">
                      Connect with friends to see their progress and compete in friendly challenges throughout Ramadan.
                    </p>
                    <Button className="mt-4">Find Friends</Button>
                  </div>
                </TabsContent>
                <TabsContent value="local">
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Users className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium">Join your local community</h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-md">
                      Connect with people in your area to build a supportive local community during Ramadan.
                    </p>
                    <Button className="mt-4">Find Local Community</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

