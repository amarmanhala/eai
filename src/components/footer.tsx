import { Globe } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const footerColumns = [
  {
    title: "Company",
    links: ["About", "Careers", "Security", "Status", "Terms & privacy"],
  },
  {
    title: "Product",
    links: ["Calendar", "Budgets", "AI insights", "Mobile apps"],
  },
  {
    title: "Resources",
    links: ["Pricing", "Guides", "Community", "Changelog", "Support"],
  },
  {
    title: "ExpenAI for",
    links: ["Freelancers", "Small business", "Households"],
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:justify-between">
        <div className="flex flex-col gap-6 text-sm text-muted-foreground">
          {/* TODO: Insert ExpenAI wordmark */}
          <div className="flex items-center gap-3 text-2xl font-semibold text-foreground">
            ExpenAI
          </div>
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            {[
              "Instagram",
              "Twitter",
              "LinkedIn",
              "Facebook",
              "YouTube",
            ].map((item) => (
              <a key={item} href="#" className="transition-colors hover:text-foreground">
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Select defaultValue="en">
              <SelectTrigger size="sm" className="min-w-[180px]">
                <SelectValue>
                  <span className="flex items-center gap-2">
                    <Globe className="size-4" aria-hidden="true" /> English (US)
                  </span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English (US)</SelectItem>
                <SelectItem value="en-uk">English (UK)</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
              </SelectContent>
            </Select>
            <a href="#" className="hover:text-foreground">
              Cookie settings
            </a>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} ExpenAI. All rights reserved.</p>
        </div>
        <div className="grid flex-1 gap-8 text-sm text-muted-foreground md:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-3">
              <p className="text-sm font-semibold text-foreground">{column.title}</p>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
