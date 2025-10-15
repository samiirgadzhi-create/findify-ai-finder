import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Findify find winning products?",
    answer: "Findify uses advanced AI algorithms to analyze millions of data points from TikTok, Facebook ads, successful dropshipping stores, and market trends. We track engagement rates, sales velocity, competition levels, and profit margins to identify products with the highest success potential before they become saturated.",
  },
  {
    question: "Is there really a free plan?",
    answer: "Absolutely! Our free plan gives you 10 product searches per month with basic insights. It's perfect for testing Findify and seeing the quality of our AI recommendations. No credit card required to start. When you're ready to scale, upgrade to Pro for unlimited searches and advanced features.",
  },
  {
    question: "How is this different from Minea or other tools?",
    answer: "Unlike Minea and other tools, Findify is built specifically for the Indian market with INR pricing, local supplier connections, and region-specific trends. We're also significantly more affordable while offering real-time AI insights, competitor tracking, and one-click product descriptions that save you hours of research.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes! There are no long-term contracts or commitments. You can upgrade, downgrade, or cancel your subscription at any time. If you cancel, you'll still have access to your plan features until the end of your billing period.",
  },
  {
    question: "Do you provide supplier links?",
    answer: "Yes! Every product comes with verified supplier links from AliExpress, CJ Dropshipping, and other trusted platforms. We show you the best suppliers based on price, shipping time, and product quality so you can start selling immediately.",
  },
  {
    question: "How accurate is the trend data?",
    answer: "Our AI refreshes trend data every 24 hours by analyzing over 100K+ stores and millions of social media posts. Pro and Business users get real-time alerts when we detect emerging trends, giving you a competitive advantage to launch products before they go mainstream.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Still have doubts? Chat with our team!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
