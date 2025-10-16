import { Target, TrendingUp, Download } from "lucide-react";
import winningAdsImage from "@/assets/winning-ads.avif";

const features = [
  {
    icon: Target,
    title: "Find different marketing angles",
    description: "Discover unique approaches that resonate with your audience"
  },
  {
    icon: TrendingUp,
    title: "Compare engagement data",
    description: "Analyze metrics to understand what drives conversions"
  },
  {
    icon: Download,
    title: "Easily download all creatives",
    description: "Get instant access to high-performing ad content"
  }
];

export const WinningAds = () => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <img 
                src={winningAdsImage}
                alt="Winning Ads Dashboard"
                className="relative rounded-lg shadow-elegant hover-scale"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Winning Ads
              </h2>
              <p className="text-2xl font-semibold text-foreground">
                The fastest way to spot what sells and goes viral
              </p>
              <p className="text-lg text-muted-foreground">
                The key to profitability lies in creating exceptional ads that captivate your audience. 
                Access the best-performing ads in your niche, in real time.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-background/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
