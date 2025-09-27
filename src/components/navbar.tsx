import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "About us", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
]

export function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <NavigationMenu viewport={false} className="flex-1 !justify-start">
          <NavigationMenuList className="!justify-start gap-6">
            {navLinks.map((item) => (
              <NavigationMenuItem key={item.label} className="list-none">
                <NavigationMenuLink
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:text-foreground"
                  href={item.href}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <Button size="sm" className="px-4">
            Join the waitlist
          </Button>
        </div>
      </nav>
    </header>
  )
}
