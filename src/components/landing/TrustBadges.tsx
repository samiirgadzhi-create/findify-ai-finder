import { Shield, Zap, HeadphonesIcon, TrendingUp } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your data is encrypted and safe",
  },
  {
    icon: Zap,
    title: "Instant Access",
    description: "Start finding products in seconds",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "We're here whenever you need us",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "98% success rate for our users",
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-16 border-y border-border bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">{badge.title}</h4>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
