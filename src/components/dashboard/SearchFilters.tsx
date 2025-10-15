import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedNiche: string;
  setSelectedNiche: (niche: string) => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
}

const niches = [
  { value: "all", label: "All Niches" },
  { value: "fashion", label: "Fashion & Accessories" },
  { value: "beauty", label: "Beauty & Cosmetics" },
  { value: "home", label: "Home & Garden" },
  { value: "electronics", label: "Electronics & Gadgets" },
  { value: "pets", label: "Pet Supplies" },
  { value: "sports", label: "Sports & Fitness" },
  { value: "toys", label: "Toys & Kids" },
];

const countries = [
  { value: "all", label: "All Countries" },
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "in", label: "India" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
];

export const SearchFilters = ({
  searchQuery,
  setSearchQuery,
  selectedNiche,
  setSelectedNiche,
  selectedCountry,
  setSelectedCountry,
}: SearchFiltersProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8 shadow-elegant">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products or stores..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={selectedNiche} onValueChange={setSelectedNiche}>
          <SelectTrigger>
            <SelectValue placeholder="Select niche" />
          </SelectTrigger>
          <SelectContent className="bg-background">
            {niches.map((niche) => (
              <SelectItem key={niche.value} value={niche.value}>
                {niche.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedCountry} onValueChange={setSelectedCountry}>
          <SelectTrigger>
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent className="bg-background">
            {countries.map((country) => (
              <SelectItem key={country.value} value={country.value}>
                {country.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
