import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does ExpenAI stay on top of my subscriptions?",
    answer:
      "We map every recurring charge onto your calendar and flag renewals a few days ahead so you can pause or budget before they post.",
  },
  {
    question: "Can I use ExpenAI before connecting my bank?",
    answer:
      "Yes. Start with the mock calendar to log expenses manually and experiment with AI insights. When you're ready, connect accounts to sync automatically.",
  },
  {
    question: "Will ExpenAI help me split personal and business spending?",
    answer:
      "Tag expenses by workspace or project, then filter the calendar to see only the activity that matters for work, side hustles, or home budgets.",
  },
]

export function FAQ() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-20">
      <h2 className="text-4xl font-semibold tracking-tight text-foreground">
        Questions & answers
      </h2>
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
