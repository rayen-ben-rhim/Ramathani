import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoonStar, Star, Trophy, Users, BookOpen, Heart, Calendar, Bell } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <MoonStar className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Ramadan Levels</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary">
              Dashboard
            </Link>
            <Link href="/leaderboard" className="text-sm font-medium hover:text-primary">
              Leaderboard
            </Link>
            <Link href="/challenges" className="text-sm font-medium hover:text-primary">
              Challenges
            </Link>
            <Link href="/community" className="text-sm font-medium hover:text-primary">
              Community
            </Link>
          </nav>
          <div className="ml-4 flex items-center gap-2">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Elevate Your Ramadan Journey
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Track your spiritual progress, compete with friends, and make this Ramadan your most rewarding yet
                  with our interactive leveling system.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/learn-more">
                    <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[350px] lg:h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Ramadan dashboard preview"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes it easy to track your spiritual journey throughout Ramadan
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Star className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Earn XP</h3>
                  <p className="text-muted-foreground">
                    Complete daily acts of worship like fasting, praying, reading Quran, and giving charity to earn
                    experience points.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Trophy className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Level Up</h3>
                  <p className="text-muted-foreground">
                    Watch your level increase as you consistently perform good deeds and unlock achievements and badges.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Compete & Connect</h3>
                  <p className="text-muted-foreground">
                    Join the leaderboard, participate in team challenges, and motivate each other to stay consistent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative h-[350px] lg:h-[500px] rounded-xl overflow-hidden order-last lg:order-first">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Ramadan features preview"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="text-muted-foreground md:text-xl">
                  Everything you need to make this Ramadan more meaningful and rewarding
                </p>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Quran Tracking</h3>
                      <p className="text-sm text-muted-foreground">
                        Log your daily Quran reading and track your progress through the entire Quran
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Daily Challenges</h3>
                      <p className="text-sm text-muted-foreground">
                        Complete special daily challenges designed to enhance your Ramadan experience
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Bell className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Prayer Reminders</h3>
                      <p className="text-sm text-muted-foreground">
                        Get notified for prayer times, suhoor, and iftar based on your location
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Charity Tracking</h3>
                      <p className="text-sm text-muted-foreground">
                        Record your charitable acts and donations throughout the month
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Join thousands making the most of Ramadan
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">10K+</h3>
                <p className="text-muted-foreground">Active Users</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">500K+</h3>
                <p className="text-muted-foreground">Good Deeds Logged</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">1M+</h3>
                <p className="text-muted-foreground">Quran Verses Read</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">50K+</h3>
                <p className="text-muted-foreground">Achievements Earned</p>
              </div>
            </div>
            <div className="mt-12">
              <Link href="/signup">
                <Button size="lg" className="px-8">
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <MoonStar className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ramadan Levels. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

