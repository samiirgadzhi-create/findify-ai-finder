import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SearchFilters } from "@/components/dashboard/SearchFilters";
import { ProductGrid } from "@/components/dashboard/ProductGrid";
import { Chatbot } from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock } from "lucide-react";
import { useUserProfile } from "@/hooks/useUserProfile";
import { Card } from "@/components/ui/card";

const nicheLabels: Record<string, string> = {
  home: "Home & Kitchen Essentials",
  health: "Health & Fitness",
  beauty: "Beauty & Personal Care",
  pets: "Pet Accessories",
  electronics: "Tech & Gadgets",
  toys: "Baby & Kids",
  fashion: "Fashion & Accessories",
  car: "Car Accessories",
  diy: "Home Improvement / DIY Tools",
};

const Products = () => {
  const { niche } = useParams<{ niche: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const { user, planType, loading } = useUserProfile();

  const nicheLabel = niche ? nicheLabels[niche] : "All Products";

  // Redirect to auth if not logged in
  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

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
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/niche-selection")}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Niches
          </Button>
          
          <h1 className="text-4xl font-bold mb-2 gradient-text">{nicheLabel}</h1>
          <p className="text-muted-foreground">
            Discover trending products with AI-powered insights
          </p>

          {planType === 'free' && (
            <Card className="mt-4 p-4 bg-muted/50 border-primary/20">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <p className="font-semibold">Free Plan - Limited Access</p>
                  <p className="text-sm text-muted-foreground">
                    You can view 6 products. Upgrade to Pro for unlimited access.
                  </p>
                </div>
                <Button 
                  onClick={() => window.location.href = "/#pricing"}
                  className="gradient-bg"
                >
                  Upgrade Now
                </Button>
              </div>
            </Card>
          )}
        </div>

        <SearchFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedNiche={niche || "all"}
          setSelectedNiche={() => {}}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          hideNicheFilter={true}
        />

        <ProductGrid
          searchQuery={searchQuery}
          selectedNiche={niche || "all"}
          selectedCountry={selectedCountry}
          planType={planType}
        />
      </main>
      <Chatbot />
    </div>
  );
};

export default Products;
