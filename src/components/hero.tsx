import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 py-24 text-center">
      {/* TODO: Insert ExpenAI mark once available */}
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        ExpenAI
      </p>
      <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
        Every expense, finally in view.
      </h1>
      <p className="text-lg text-muted-foreground sm:text-xl">
        Every spend and subscription in one calm calendar. Meet the AI that spots the patterns and keeps your cash flow steady.
      </p>
      <Button size="lg">
        Get started with ExpenAI
      </Button>
    </section>
  )
}
