import { Zap } from "lucide-react"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeatureHighlight() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-10 px-6 py-20 text-center">
      <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Money management, simplified.
      </h2>
      <Card className="w-full border-none bg-muted/40 p-10 text-left shadow-none sm:p-12">
        <CardHeader className="flex flex-row items-start gap-6">
          <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Zap className="size-5" aria-hidden="true" />
          </span>
          <div className="space-y-2">
            <CardTitle className="text-2xl font-semibold">
              Spot trends before they surprise you
            </CardTitle>
            <CardDescription className="text-lg leading-relaxed text-muted-foreground">
              ExpenAI maps every expense onto your calendar, then highlights recurring charges and spending spikes so you always know what&rsquo;s coming next.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
      <div className="grid w-full gap-6 text-left sm:grid-cols-2">
        {[
          {
            title: "Know what renews next",
            description:
              "Auto-detect subscriptions, surface their renewal dates, and avoid surprise charges before they post.",
          },
          {
            title: "Track habits across paychecks",
            description:
              "Line up recurring bills with your payday so you can pace spending and stay ahead of cash flow dips.",
          },
        ].map((feature) => (
          <Card
            key={feature.title}
            className="border-none bg-muted/40 p-8 shadow-none"
          >
            <CardHeader className="space-y-3">
              <CardTitle className="text-xl font-semibold">
                {feature.title}
              </CardTitle>
              <CardDescription className="text-base leading-relaxed text-muted-foreground">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
