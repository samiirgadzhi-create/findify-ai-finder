import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const featuredProducts = [
  {
    id: 1,
    title: "Wireless Car Vacuum Cleaner",
    description: "Portable, powerful, and trending among car owners — great for TikTok ads!",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400&h=300&fit=crop",
    cost: 12,
    sellPrice: 29.99,
    profit: 17.99,
    platform: "Shopify, TikTok"
  },
  {
    id: 2,
    title: "Smart Posture Corrector",
    description: "A trending health gadget helping users improve posture effortlessly.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    cost: 15,
    sellPrice: 39.99,
    profit: 24.99,
    platform: "TikTok, Facebook"
  },
  {
    id: 3,
    title: "LED Galaxy Projector",
    description: "Create stunning starry nights in any room. Perfect for relaxation and ambiance.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
    cost: 18,
    sellPrice: 49.99,
    profit: 31.99,
    platform: "Instagram, TikTok"
  }
];

export const WinningProducts = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const handleViewProduct = () => {
    navigate("/auth");
  };

  const handleAddToFavorites = (productId: number, productTitle: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
        toast({
          title: "Removed from favorites",
          description: `${productTitle} has been removed from your favorites.`,
        });
      } else {
        newFavorites.add(productId);
        toast({
          title: "Added to favorites",
          description: `${productTitle} has been added to your favorites.`,
        });
      }
      return newFavorites;
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-muted/40 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-5xl font-extrabold mb-3 tracking-tight gradient-text">
          🚀 Winning Products
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover the most profitable dropshipping products proven to sell. Updated daily for smart store owners.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {featuredProducts.map((product) => (
          <div 
            key={product.id}
            className="group bg-card border border-border rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300"
          >
            <div className="overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-left">
              <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
              <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
              <div className="space-y-1 text-sm mb-4">
                <p><strong>Cost:</strong> ${product.cost}</p>
                <p><strong>Sell Price:</strong> ${product.sellPrice}</p>
                <p><strong>Profit Margin:</strong> ${product.profit}</p>
                <p><strong>Platform:</strong> {product.platform}</p>
              </div>
              <div className="flex justify-between items-center gap-2">
                <Button 
                  onClick={handleViewProduct}
                  className="flex-1"
                >
                  View Product
                </Button>
                <Button 
                  variant={favorites.has(product.id) ? "default" : "outline"}
                  size="icon"
                  onClick={() => handleAddToFavorites(product.id, product.title)}
                  className="shrink-0"
                >
                  <Heart className={`h-4 w-4 ${favorites.has(product.id) ? 'fill-current' : ''}`} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-16 text-center">
        <p className="text-muted-foreground text-sm">
          ✨ New winning products are added daily. Keep exploring and scale your success!
        </p>
      </div>
    </section>
  );
};
