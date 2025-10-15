import { Brain, TrendingUp, Eye, FileText } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Product Finder",
    description: "Machine learning algorithms analyze trends, engagement, and sales data to find products with the highest success potential.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Store & Ad Insights",
    description: "Track TikTok and Facebook ads, see what's working for competitors, and discover viral products before they saturate.",
  },
  {
    icon: Eye,
    title: "Competitor Store Tracking",
    description: "Monitor successful dropshipping stores, analyze their product strategy, and get alerts when they add new items.",
  },
  {
    icon: FileText,
    title: "One-Click Product Insights",
    description: "Get instant product descriptions, supplier links, profit margins, and AI-generated ad copy ready to use.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Win</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for modern dropshippers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-2xl shadow-elegant hover-scale border border-border"
            >
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
