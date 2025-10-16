import { Home, Dumbbell, Sparkles, PawPrint, Smartphone, Baby, Shirt, Car, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

const niches = [
  { icon: Home, label: "Home & Kitchen Essentials", value: "home" },
  { icon: Dumbbell, label: "Health & Fitness", value: "health" },
  { icon: Sparkles, label: "Beauty & Personal Care", value: "beauty" },
  { icon: PawPrint, label: "Pet Accessories", value: "pets" },
  { icon: Smartphone, label: "Tech & Gadgets", value: "electronics" },
  { icon: Baby, label: "Baby & Kids", value: "toys" },
  { icon: Shirt, label: "Fashion & Accessories", value: "fashion" },
  { icon: Car, label: "Car Accessories", value: "car" },
  { icon: Wrench, label: "Home Improvement / DIY Tools", value: "diy" },
];

interface NichesSectionProps {
  onNicheSelect: (niche: string) => void;
}

export const NichesSection = ({ onNicheSelect }: NichesSectionProps) => {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">Explore by Niche</h2>
        <p className="text-muted-foreground">
          Discover winning products across trending categories
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {niches.map((niche) => {
          const Icon = niche.icon;
          return (
            <Card
              key={niche.value}
              className="p-6 hover:shadow-lg transition-all cursor-pointer group hover:scale-105 hover:border-primary/50"
              onClick={() => onNicheSelect(niche.value)}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium text-sm leading-tight">{niche.label}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
