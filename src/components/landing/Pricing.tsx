import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "/month",
    description: "Perfect for testing the waters",
    features: [
      "10 product searches per month",
      "Basic product insights",
      "Community support",
      "7-day data history",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "₹149",
    period: "/month",
    description: "For serious dropshippers",
    features: [
      "Unlimited product searches",
      "Advanced AI insights",
      "Real-time trend alerts",
      "Competitor tracking",
      "Priority support",
      "90-day data history",
      "Ad spy tools",
    ],
    cta: "Get Pro",
    popular: true,
  },
  {
    name: "Business",
    price: "₹499",
    period: "/month",
    description: "For agencies & teams",
    features: [
      "Everything in Pro",
      "Team collaboration (5 members)",
      "White-label reports",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "Unlimited data history",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-card rounded-2xl shadow-elegant border ${
                plan.popular ? "border-primary scale-105" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 gradient-bg text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${plan.popular ? "gradient-bg" : ""}`}
                variant={plan.popular ? "default" : "outline"}
                size="lg"
                onClick={() => navigate("/auth")}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
