import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

// Mock product data - organized by niche
const mockProducts = [
  // Home & Kitchen Essentials
  {
    id: "1",
    title: "Air Fryer - 6L Capacity",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=400&fit=crop",
    price: "₹2,499",
    originalPrice: "₹5,999",
    profit: "68%",
    trend: "🔥 Hot",
    sales: "4.2K sales/week",
    supplierLink: "https://aliexpress.com/item/air-fryer",
    roposoLink: "https://roposo.com/product/air-fryer",
    niche: "home",
    country: "in",
  },
  {
    id: "2",
    title: "Silicone Cooking Utensils Set",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=400&fit=crop",
    price: "₹499",
    originalPrice: "₹1,299",
    profit: "72%",
    trend: "📈 Trending",
    sales: "3.1K sales/week",
    supplierLink: "https://aliexpress.com/item/silicone-utensils",
    roposoLink: "https://roposo.com/product/silicone-utensils",
    niche: "home",
    country: "us",
  },
  {
    id: "3",
    title: "Reusable Food Storage Bags",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop",
    price: "₹349",
    originalPrice: "₹899",
    profit: "75%",
    trend: "⚡ Rising",
    sales: "2.8K sales/week",
    supplierLink: "https://aliexpress.com/item/food-storage",
    niche: "home",
    country: "uk",
  },
  {
    id: "4",
    title: "Magnetic Spice Jar Set",
    image: "https://images.unsplash.com/photo-1596040033229-a0b3b75d6bcd?w=400&h=400&fit=crop",
    price: "₹799",
    originalPrice: "₹1,999",
    profit: "70%",
    trend: "💎 Winner",
    sales: "2.3K sales/week",
    supplierLink: "https://aliexpress.com/item/spice-jars",
    niche: "home",
    country: "in",
  },
  
  // Health & Fitness
  {
    id: "5",
    title: "Smart Fitness Band",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
    price: "₹1,299",
    originalPrice: "₹3,499",
    profit: "73%",
    trend: "🔥 Hot",
    sales: "5.5K sales/week",
    supplierLink: "https://aliexpress.com/item/fitness-band",
    roposoLink: "https://roposo.com/product/fitness-band",
    niche: "health",
    country: "us",
  },
  {
    id: "6",
    title: "Resistance Loop Bands Set",
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    price: "₹449",
    originalPrice: "₹1,199",
    profit: "76%",
    trend: "📈 Trending",
    sales: "4.1K sales/week",
    supplierLink: "https://aliexpress.com/item/resistance-bands",
    roposoLink: "https://roposo.com/product/resistance-bands",
    niche: "health",
    country: "in",
  },
  {
    id: "7",
    title: "Massage Gun Pro",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    price: "₹1,899",
    originalPrice: "₹4,999",
    profit: "69%",
    trend: "💎 Winner",
    sales: "3.9K sales/week",
    supplierLink: "https://aliexpress.com/item/massage-gun",
    niche: "health",
    country: "us",
  },
  {
    id: "8",
    title: "Posture Corrector Belt",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
    price: "₹599",
    originalPrice: "₹1,499",
    profit: "71%",
    trend: "⚡ Rising",
    sales: "3.2K sales/week",
    supplierLink: "https://aliexpress.com/item/posture-corrector",
    niche: "health",
    country: "uk",
  },
  
  // Beauty & Personal Care
  {
    id: "9",
    title: "Vitamin C Serum - 30ml",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    price: "₹699",
    originalPrice: "₹1,899",
    profit: "74%",
    trend: "🔥 Hot",
    sales: "6.2K sales/week",
    supplierLink: "https://aliexpress.com/item/vitamin-c-serum",
    niche: "beauty",
    country: "in",
  },
  {
    id: "10",
    title: "Hair Growth Treatment Kit",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=400&fit=crop",
    price: "₹1,299",
    originalPrice: "₹3,499",
    profit: "72%",
    trend: "💎 Winner",
    sales: "5.1K sales/week",
    supplierLink: "https://aliexpress.com/item/hair-growth",
    niche: "beauty",
    country: "us",
  },
  {
    id: "11",
    title: "LED Face Mask - 7 Colors",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop",
    price: "₹2,499",
    originalPrice: "₹6,999",
    profit: "70%",
    trend: "📈 Trending",
    sales: "4.3K sales/week",
    supplierLink: "https://aliexpress.com/item/led-face-mask",
    niche: "beauty",
    country: "uk",
  },
  {
    id: "12",
    title: "Eyelash Growth Serum",
    image: "https://images.unsplash.com/photo-1631214540205-3e63c2d0d7b1?w=400&h=400&fit=crop",
    price: "₹549",
    originalPrice: "₹1,499",
    profit: "75%",
    trend: "⚡ Rising",
    sales: "3.8K sales/week",
    supplierLink: "https://aliexpress.com/item/eyelash-serum",
    niche: "beauty",
    country: "in",
  },
  
  // Pet Accessories
  {
    id: "13",
    title: "Interactive Pet Toy Ball",
    image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?w=400&h=400&fit=crop",
    price: "₹699",
    originalPrice: "₹1,799",
    profit: "73%",
    trend: "🔥 Hot",
    sales: "3.5K sales/week",
    supplierLink: "https://aliexpress.com/item/pet-toy",
    niche: "pets",
    country: "us",
  },
  {
    id: "14",
    title: "Waterproof Pet Bed - Large",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=400&fit=crop",
    price: "₹1,499",
    originalPrice: "₹3,999",
    profit: "71%",
    trend: "💎 Winner",
    sales: "2.9K sales/week",
    supplierLink: "https://aliexpress.com/item/pet-bed",
    niche: "pets",
    country: "in",
  },
  {
    id: "15",
    title: "Slow Feeder Bowl",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=400&fit=crop",
    price: "₹449",
    originalPrice: "₹1,199",
    profit: "74%",
    trend: "📈 Trending",
    sales: "2.6K sales/week",
    supplierLink: "https://aliexpress.com/item/slow-feeder",
    niche: "pets",
    country: "uk",
  },
  {
    id: "16",
    title: "GPS Pet Collar Tracker",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
    price: "₹1,999",
    originalPrice: "₹4,999",
    profit: "68%",
    trend: "⚡ Rising",
    sales: "2.1K sales/week",
    supplierLink: "https://aliexpress.com/item/gps-collar",
    niche: "pets",
    country: "us",
  },
  
  // Tech & Gadgets
  {
    id: "17",
    title: "Wireless Earbuds Pro",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    price: "₹899",
    originalPrice: "₹2,499",
    profit: "70%",
    trend: "🔥 Hot",
    sales: "7.8K sales/week",
    supplierLink: "https://aliexpress.com/item/earbuds",
    niche: "electronics",
    country: "us",
  },
  {
    id: "18",
    title: "Mini Projector - 1080P",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=400&fit=crop",
    price: "₹3,499",
    originalPrice: "₹8,999",
    profit: "67%",
    trend: "💎 Winner",
    sales: "3.2K sales/week",
    supplierLink: "https://aliexpress.com/item/mini-projector",
    niche: "electronics",
    country: "in",
  },
  {
    id: "19",
    title: "Smartwatch with Heart Monitor",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    price: "₹1,799",
    originalPrice: "₹4,999",
    profit: "72%",
    trend: "📈 Trending",
    sales: "6.5K sales/week",
    supplierLink: "https://aliexpress.com/item/smartwatch",
    niche: "electronics",
    country: "uk",
  },
  {
    id: "20",
    title: "Phone Gimbal Stabilizer",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
    price: "₹1,299",
    originalPrice: "₹3,499",
    profit: "73%",
    trend: "⚡ Rising",
    sales: "2.4K sales/week",
    supplierLink: "https://aliexpress.com/item/gimbal",
    niche: "electronics",
    country: "us",
  },
  {
    id: "21",
    title: "Portable Power Bank - 20000mAh",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    price: "₹999",
    originalPrice: "₹2,799",
    profit: "71%",
    trend: "🔥 Hot",
    sales: "5.9K sales/week",
    supplierLink: "https://aliexpress.com/item/power-bank",
    niche: "electronics",
    country: "in",
  },
  
  // Baby & Kids
  {
    id: "22",
    title: "Montessori Learning Toy Set",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=400&fit=crop",
    price: "₹899",
    originalPrice: "₹2,499",
    profit: "74%",
    trend: "💎 Winner",
    sales: "4.1K sales/week",
    supplierLink: "https://aliexpress.com/item/montessori-toy",
    niche: "toys",
    country: "us",
  },
  {
    id: "23",
    title: "Silicone Baby Feeder",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
    price: "₹349",
    originalPrice: "₹999",
    profit: "76%",
    trend: "📈 Trending",
    sales: "3.3K sales/week",
    supplierLink: "https://aliexpress.com/item/baby-feeder",
    niche: "toys",
    country: "in",
  },
  {
    id: "24",
    title: "Convertible Baby Carrier",
    image: "https://images.unsplash.com/photo-1566454834342-3bde3eed4e3f?w=400&h=400&fit=crop",
    price: "₹1,499",
    originalPrice: "₹3,999",
    profit: "72%",
    trend: "⚡ Rising",
    sales: "2.7K sales/week",
    supplierLink: "https://aliexpress.com/item/baby-carrier",
    niche: "toys",
    country: "uk",
  },
  {
    id: "25",
    title: "Non-Toxic Crayons Set",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=400&h=400&fit=crop",
    price: "₹299",
    originalPrice: "₹799",
    profit: "75%",
    trend: "🔥 Hot",
    sales: "3.8K sales/week",
    supplierLink: "https://aliexpress.com/item/crayons",
    niche: "toys",
    country: "us",
  },
  
  // Fashion & Accessories
  {
    id: "26",
    title: "Graphic Tees Collection",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    price: "₹499",
    originalPrice: "₹1,299",
    profit: "73%",
    trend: "🔥 Hot",
    sales: "8.2K sales/week",
    supplierLink: "https://aliexpress.com/item/graphic-tees",
    niche: "fashion",
    country: "in",
  },
  {
    id: "27",
    title: "Polarized Sunglasses",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    price: "₹799",
    originalPrice: "₹2,199",
    profit: "74%",
    trend: "💎 Winner",
    sales: "5.9K sales/week",
    supplierLink: "https://aliexpress.com/item/sunglasses",
    niche: "fashion",
    country: "us",
  },
  {
    id: "28",
    title: "Minimalist Wallet - RFID",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    price: "₹599",
    originalPrice: "₹1,599",
    profit: "72%",
    trend: "📈 Trending",
    sales: "4.5K sales/week",
    supplierLink: "https://aliexpress.com/item/wallet",
    niche: "fashion",
    country: "uk",
  },
  {
    id: "29",
    title: "Layered Necklace Set",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    price: "₹449",
    originalPrice: "₹1,199",
    profit: "75%",
    trend: "⚡ Rising",
    sales: "6.1K sales/week",
    supplierLink: "https://aliexpress.com/item/necklace",
    niche: "fashion",
    country: "in",
  },
  {
    id: "30",
    title: "Athleisure Leggings",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop",
    price: "₹699",
    originalPrice: "₹1,899",
    profit: "71%",
    trend: "🔥 Hot",
    sales: "7.3K sales/week",
    supplierLink: "https://aliexpress.com/item/leggings",
    niche: "fashion",
    country: "us",
  },
  
  // Car Accessories
  {
    id: "31",
    title: "Magnetic Phone Mount",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=400&fit=crop",
    price: "₹399",
    originalPrice: "₹999",
    profit: "76%",
    trend: "📈 Trending",
    sales: "3.6K sales/week",
    supplierLink: "https://aliexpress.com/item/phone-mount",
    niche: "car",
    country: "in",
  },
  {
    id: "32",
    title: "LED Interior Lights Kit",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=400&fit=crop",
    price: "₹599",
    originalPrice: "₹1,599",
    profit: "73%",
    trend: "💎 Winner",
    sales: "2.8K sales/week",
    supplierLink: "https://aliexpress.com/item/led-lights",
    niche: "car",
    country: "us",
  },
  {
    id: "33",
    title: "Trunk Organizer - Foldable",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=400&fit=crop",
    price: "₹799",
    originalPrice: "₹1,999",
    profit: "70%",
    trend: "⚡ Rising",
    sales: "2.3K sales/week",
    supplierLink: "https://aliexpress.com/item/trunk-organizer",
    niche: "car",
    country: "uk",
  },
  {
    id: "34",
    title: "Portable Car Vacuum",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    price: "₹1,299",
    originalPrice: "₹3,499",
    profit: "72%",
    trend: "🔥 Hot",
    sales: "3.1K sales/week",
    supplierLink: "https://aliexpress.com/item/car-vacuum",
    niche: "car",
    country: "in",
  },
  
  // Home Improvement / DIY Tools
  {
    id: "35",
    title: "Cordless Drill Set - 21V",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=400&fit=crop",
    price: "₹2,999",
    originalPrice: "₹7,999",
    profit: "68%",
    trend: "💎 Winner",
    sales: "2.5K sales/week",
    supplierLink: "https://aliexpress.com/item/cordless-drill",
    niche: "diy",
    country: "us",
  },
  {
    id: "36",
    title: "Multi-Tool Set - 32 Pieces",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=400&fit=crop",
    price: "₹1,499",
    originalPrice: "₹3,999",
    profit: "73%",
    trend: "📈 Trending",
    sales: "2.9K sales/week",
    supplierLink: "https://aliexpress.com/item/multi-tool",
    niche: "diy",
    country: "in",
  },
  {
    id: "37",
    title: "Electric Paint Sprayer",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=400&fit=crop",
    price: "₹1,999",
    originalPrice: "₹5,499",
    profit: "71%",
    trend: "⚡ Rising",
    sales: "1.8K sales/week",
    supplierLink: "https://aliexpress.com/item/paint-sprayer",
    niche: "diy",
    country: "uk",
  },
  {
    id: "38",
    title: "Magnetic Tool Wristband",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop",
    price: "₹299",
    originalPrice: "₹799",
    profit: "75%",
    trend: "🔥 Hot",
    sales: "2.2K sales/week",
    supplierLink: "https://aliexpress.com/item/magnetic-wristband",
    niche: "diy",
    country: "us",
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
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Simulate loading products
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [selectedNiche, selectedCountry, searchQuery]);

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
          <h2 className="text-2xl font-bold flex items-center gap-2">
            {isLoading ? (
              <>
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
                Loading Products...
              </>
            ) : (
              `${filteredProducts.length} Products Found`
            )}
          </h2>
          <p className="text-sm text-muted-foreground">
            {isLoading ? "Fetching latest data..." : "Updated 2 hours ago • Real-time data"}
          </p>
        </div>
        <Button onClick={handleExport} variant="outline" disabled={isLoading}>
          <Download className="mr-2 h-4 w-4" />
          Export List
        </Button>
      </div>

      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <Skeleton className="h-[200px] w-full rounded-xl" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <div className="flex gap-2">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-20" />
              </div>
            </div>
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
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
