import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserCard = () => {
  return (
    <Card className="col-span-full lg:col-span-2">
            <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Avatar className="h-14 w-14">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Ahmed Abdullah</CardTitle>
                <CardDescription>@ahmed_abdullah</CardDescription>
              </div>
              <div className="sm:ml-auto flex flex-col items-start sm:items-end">
                <Badge className="bg-primary text-primary-foreground">Level 7</Badge>
                <span className="text-xs text-muted-foreground mt-1">Ramadan Warrior</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>XP Progress</span>
                  <span className="font-medium">3,240 / 4,000 XP</span>
                </div>
                <Progress value={81} className="h-2" />
                <p className="text-xs text-muted-foreground">760 XP needed for Level 8</p>
              </div>
            </CardContent>
          </Card>
  )
}

export default UserCard