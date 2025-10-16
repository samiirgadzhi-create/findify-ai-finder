import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SearchFilters } from "@/components/dashboard/SearchFilters";
import { ProductGrid } from "@/components/dashboard/ProductGrid";
import { NichesSection } from "@/components/dashboard/NichesSection";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNiche, setSelectedNiche] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");

  return (
    <div className="min-h-screen bg-muted/20">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Product Dashboard</h1>
          <p className="text-muted-foreground">
            Discover trending products with AI-powered insights
          </p>
        </div>

        <SearchFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedNiche={selectedNiche}
          setSelectedNiche={setSelectedNiche}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />

        <NichesSection onNicheSelect={setSelectedNiche} />

        <ProductGrid
          searchQuery={searchQuery}
          selectedNiche={selectedNiche}
          selectedCountry={selectedCountry}
        />
      </main>
    </div>
  );
};

export default Dashboard;
