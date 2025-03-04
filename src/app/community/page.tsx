import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bell, MessageCircle, ThumbsUp, Share2, Users, Calendar } from "lucide-react"

export default function Community() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Community</h1>
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

      {/* Community content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="feed" className="space-y-4">
          <TabsList>
            <TabsTrigger value="feed">Feed</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <div className="flex gap-4">
            <div className="w-full md:w-2/3">
              <TabsContent value="feed">
                <Card>
                  <CardHeader>
                    <CardTitle>Community Feed</CardTitle>
                    <CardDescription>Share and interact with your Ramadan community</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Post creation */}
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback>AA</AvatarFallback>
                      </Avatar>
                      <Input placeholder="Share your thoughts or ask a question..." className="flex-1" />
                      <Button>Post</Button>
                    </div>

                    {/* Feed posts */}
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <div className="flex items-center space-x-4">
                            <Avatar>
                              <AvatarImage src="/placeholder-user.jpg" alt="User" />
                              <AvatarFallback>MK</AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-sm font-medium">Mohammed Khan</CardTitle>
                              <CardDescription className="text-xs">2 hours ago</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p>Alhamdulillah for another blessed day of Ramadan! What&apos;s everyone&apos;s goal for today?</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="mr-2 h-4 w-4" />
                            Like
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Comment
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="mr-2 h-4 w-4" />
                            Share
                          </Button>
                        </CardFooter>
                      </Card>

                      {/* Add more posts here */}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="groups">
                <Card>
                  <CardHeader>
                    <CardTitle>Ramadan Groups</CardTitle>
                    <CardDescription>Join groups to connect with like-minded individuals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Quran Study Circle</CardTitle>
                          <CardDescription>
                            <Users className="inline mr-2 h-4 w-4" />
                            1,234 members
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">Daily Quran discussions and reflections</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            Join Group
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Ramadan Recipes</CardTitle>
                          <CardDescription>
                            <Users className="inline mr-2 h-4 w-4" />
                            987 members
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">Share and discover delicious iftar and suhoor recipes</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            Join Group
                          </Button>
                        </CardFooter>
                      </Card>
                      {/* Add more groups here */}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="events">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Participate in community events during Ramadan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Virtual Iftar Gathering</CardTitle>
                          <CardDescription>
                            <Calendar className="inline mr-2 h-4 w-4" />
                            Tomorrow, 7:00 PM
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Join us for a virtual iftar and share your experiences with the community
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            RSVP
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Laylatul Qadr Preparation Workshop</CardTitle>
                          <CardDescription>
                            <Calendar className="inline mr-2 h-4 w-4" />
                            Next Week, 8:00 PM
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">Learn how to make the most of the blessed nights of Ramadan</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            RSVP
                          </Button>
                        </CardFooter>
                      </Card>
                      {/* Add more events here */}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>

            <div className="hidden md:block md:w-1/3 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Community Leaderboard</CardTitle>
                  <CardDescription>Top contributors this Ramadan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary">1</Badge>
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback>MK</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Mohammed Khan</p>
                        <p className="text-xs text-muted-foreground">500 points</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary">2</Badge>
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback>FH</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Fatima Hassan</p>
                        <p className="text-xs text-muted-foreground">450 points</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary">3</Badge>
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback>YA</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Yusuf Ali</p>
                        <p className="text-xs text-muted-foreground">400 points</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Trending Topics</CardTitle>
                  <CardDescription>Popular discussions in the community</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      #RamadanReflections
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      #IfterRecipes
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      #TaraweehTips
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      #QuranChallenge
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

