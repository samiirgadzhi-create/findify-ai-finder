import { TrendingUp, Target, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Easily match top dropshipper strategies",
    description: "Mirror successful strategies from leading dropshippers"
  },
  {
    icon: TrendingUp,
    title: "Pinpoint bestsellers with precision",
    description: "AI-powered analysis identifies winning products instantly"
  },
  {
    icon: DollarSign,
    title: "Minimize advertising test costs",
    description: "Reduce ad spend by testing proven products first"
  }
];

export const WinningProducts = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Winning products
          </h2>
          <p className="text-2xl font-semibold text-foreground">
            Get instantly all data on product. It's magical
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unlock AI-powered insights on product trends and ad engagement, updated 8x daily. 
            Effortlessly spot bestsellers and avoid underperformers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg hover:bg-accent/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
