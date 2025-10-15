import { Target, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Choose your niche",
    description: "Select from trending categories or enter your own niche",
  },
  {
    icon: Sparkles,
    title: "Get AI product suggestions",
    description: "Our AI analyzes millions of data points to find winners",
  },
  {
    icon: Rocket,
    title: "Launch your winning product",
    description: "Get instant insights, supplier links, and ad creatives",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From idea to launch in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 bg-card rounded-2xl shadow-elegant hover-scale"
            >
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              <div className="mt-8">
                <step.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
