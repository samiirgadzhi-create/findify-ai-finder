import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock product data
const mockProducts = [
  {
    id: "1",
    title: "LED Galaxy Projector Light",
    image: "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=400&h=400&fit=crop",
    price: "₹1,299",
    originalPrice: "₹2,999",
    profit: "65%",
    trend: "📈 Trending",
    sales: "2.5K sales/week",
    supplierLink: "https://aliexpress.com/item/xyz",
    niche: "home",
    country: "us",
  },
  {
    id: "2",
    title: "Wireless Earbuds Pro",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    price: "₹899",
    originalPrice: "₹2,499",
    profit: "70%",
    trend: "🔥 Hot",
    sales: "3.8K sales/week",
    supplierLink: "https://aliexpress.com/item/abc",
    niche: "electronics",
    country: "us",
  },
  {
    id: "3",
    title: "Portable Blender Bottle",
    image: "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=400&h=400&fit=crop",
    price: "₹749",
    originalPrice: "₹1,999",
    profit: "68%",
    trend: "⚡ Rising",
    sales: "1.9K sales/week",
    supplierLink: "https://aliexpress.com/item/def",
    niche: "sports",
    country: "uk",
  },
  {
    id: "4",
    title: "Pet Hair Remover Brush",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=400&fit=crop",
    price: "₹499",
    originalPrice: "₹1,299",
    profit: "72%",
    trend: "💎 Winner",
    sales: "4.2K sales/week",
    supplierLink: "https://aliexpress.com/item/ghi",
    niche: "pets",
    country: "in",
  },
  {
    id: "5",
    title: "Silk Scrunchies Set",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    price: "₹299",
    originalPrice: "₹799",
    profit: "75%",
    trend: "🔥 Hot",
    sales: "5.1K sales/week",
    supplierLink: "https://aliexpress.com/item/jkl",
    niche: "fashion",
    country: "us",
  },
  {
    id: "6",
    title: "Smart Ring Light",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop",
    price: "₹1,499",
    originalPrice: "₹3,499",
    profit: "63%",
    trend: "📈 Trending",
    sales: "2.1K sales/week",
    supplierLink: "https://aliexpress.com/item/mno",
    niche: "beauty",
    country: "uk",
  },
];

interface ProductGridProps {
  searchQuery: string;
  selectedNiche: string;
  selectedCountry: string;
}

export const ProductGrid = ({
  searchQuery,
  selectedNiche,
  selectedCountry,
}: ProductGridProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const { toast } = useToast();

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesNiche = selectedNiche === "all" || product.niche === selectedNiche;
    const matchesCountry = selectedCountry === "all" || product.country === selectedCountry;
    return matchesSearch && matchesNiche && matchesCountry;
  });

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Your product list is being prepared for download.",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            {filteredProducts.length} Products Found
          </h2>
          <p className="text-sm text-muted-foreground">
            Updated 2 hours ago • Real-time data
          </p>
        </div>
        <Button onClick={handleExport} variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export List
        </Button>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground">
            No products found matching your filters.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Try adjusting your search criteria
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={() => toggleFavorite(product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
