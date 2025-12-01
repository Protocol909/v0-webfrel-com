import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface FAQItem {
  id: string
  title: string
  content: string
}

interface Accordion05Props {
  items?: FAQItem[]
}

const defaultItems: FAQItem[] = [
  {
    id: "1",
    title: "What services does Webfrel offer?",
    content:
      "We offer comprehensive digital services including website design & development, branding & identity, digital marketing & SEO, AI-powered tools, and consulting services to help businesses thrive online.",
  },
  {
    id: "2",
    title: "How long does a typical project take?",
    content:
      "Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while comprehensive branding projects can take 6-8 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    id: "3",
    title: "What is your pricing model?",
    content:
      "We offer flexible pricing options including project-based pricing and monthly retainer packages. Our pricing is transparent with no hidden fees, and we tailor solutions to fit your budget and goals.",
  },
  {
    id: "4",
    title: "Do you provide ongoing support?",
    content:
      "Yes! We offer comprehensive maintenance and support packages to ensure your digital presence stays up-to-date, secure, and optimized for performance.",
  },
  {
    id: "5",
    title: "Can you work with existing brands?",
    content:
      "Absolutely. Whether you're starting fresh or looking to refresh an existing brand, our team can work with your current assets while elevating your digital presence.",
  },
  {
    id: "6",
    title: "What makes Webfrel different?",
    content:
      "We combine cutting-edge technology with creative excellence. Our approach is data-driven yet design-focused, ensuring measurable results without compromising aesthetics.",
  },
]

export function Accordion05({ items = defaultItems }: Accordion05Props) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" defaultValue="1" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="last:border-b border-white/10">
            <AccordionTrigger className="text-left pl-4 md:pl-14 overflow-hidden text-white/40 duration-200 hover:no-underline cursor-pointer -space-y-6 data-[state=open]:space-y-0 data-[state=open]:text-white [&>svg]:hidden py-6">
              <div className="flex flex-1 items-start gap-4">
                <p className="text-xs text-muted-foreground">{item.id}</p>
                <h1 className={cn("uppercase relative text-left text-xl md:text-3xl lg:text-4xl font-bold")}>
                  {item.title}
                </h1>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground pb-6 pl-4 md:px-20 text-base">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
