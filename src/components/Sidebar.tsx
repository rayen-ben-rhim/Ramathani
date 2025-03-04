"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MoonStar, Home, Star, Trophy, Gift, Users, BarChart, Settings, LogOut, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/contexts/language-context"

const navItems = [
  { href: "/dashboard", icon: Home, labelKey: "dashboard" },
  { href: "/activities", icon: Star, labelKey: "activities" },
  { href: "/leaderboard", icon: Trophy, labelKey: "leaderboard" },
  { href: "/challenges", icon: Gift, labelKey: "challenges" },
  { href: "/community", icon: Users, labelKey: "community" },
  { href: "/statistics", icon: BarChart, labelKey: "statistics" },
  { href: "/settings", icon: Settings, labelKey: "settings" },
]

export function Sidebar() {
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const t = {
    dashboard: language === "ar"? "لوحة القيادة" : "Dashboard",
    activities: language === "ar"? "النشاطات" : "Activities",
    leaderboard: language === "ar"? "الرتبة" : "Leaderboard",
    challenges: language === "ar"? "المهام" : "Challenges",
    community: language === "ar"? "المجتمع" : "Community",
    statistics: language === "ar"? "الإحصائيات" : "Statistics",
    settings: language === "ar"? "الإعدادات" : "Settings",
    logout: language === "ar"? "تسجيل خروج" : "Log out",
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const SidebarContent = () => (
    <>
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <MoonStar className="h-5 w-5 text-primary" />
          <span>{language === "ar" ? "مستويات رمضان" : "Ramadan Levels"}</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  pathname === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className="h-4 w-4" />
                {t[item.labelKey]}
              </Link>
            )
          })}
          <Link
            href="/logout"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground mt-auto"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <LogOut className="h-4 w-4" />
            {t.logout}
          </Link>
        </nav>
      </div>
      <div className="px-4 py-2 border-t">
        <Button onClick={() => setLanguage(language === "en" ? "ar" : "en")} variant="outline" className="w-full">
          {language === "ar" ? "Switch to English" : "التبديل إلى العربية"}
        </Button>
      </div>
    </>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-background border-r">
          <SidebarContent />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden fixed top-4 left-4 z-40">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  )
}

