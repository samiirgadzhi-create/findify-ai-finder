import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Home, Dumbbell, Sparkles, PawPrint, Smartphone, Baby, Shirt, Car, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Chatbot } from "@/components/Chatbot";
import { useUserProfile } from "@/hooks/useUserProfile";

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

const NicheSelection = () => {
  const navigate = useNavigate();
  const { user, loading } = useUserProfile();

  // Redirect to auth if not logged in
  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  const handleNicheSelect = (nicheValue: string) => {
    navigate(`/products/${nicheValue}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-text">
            Choose Your Niche
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select a category to discover trending products and winning opportunities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {niches.map((niche) => {
            const Icon = niche.icon;
            return (
              <Card
                key={niche.value}
                className="p-8 hover:shadow-elegant transition-all cursor-pointer group hover-scale border-2 hover:border-primary/50"
                onClick={() => handleNicheSelect(niche.value)}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-xl gradient-bg group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-semibold text-sm leading-tight">{niche.label}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-md">
            <span className="text-sm text-muted-foreground">Not sure where to start?</span>
            <span className="text-sm font-medium text-primary">Try Health & Fitness 🔥</span>
          </div>
        </div>
      </main>
      
      <Chatbot />
    </div>
  );
};

export default NicheSelection;
