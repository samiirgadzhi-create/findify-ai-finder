import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SearchFilters } from "@/components/dashboard/SearchFilters";
import { ProductGrid } from "@/components/dashboard/ProductGrid";
import { Chatbot } from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

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

  const nicheLabel = niche ? nicheLabels[niche] : "All Products";

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
        />
      </main>
      <Chatbot />
    </div>
  );
};

export default Products;
