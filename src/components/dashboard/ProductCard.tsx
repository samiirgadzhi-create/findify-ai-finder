import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ExternalLink, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  title: string;
  image: string;
  price: string;
  originalPrice: string;
  profit: string;
  trend: string;
  sales: string;
  supplierLink: string;
}

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const ProductCard = ({
  product,
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) => {
  const { toast } = useToast();

  const handleSupplierClick = () => {
    toast({
      title: "Opening Supplier Link",
      description: "Redirecting to product supplier page...",
    });
    window.open(product.supplierLink, "_blank");
  };

  return (
    <Card className="overflow-hidden hover-scale border border-border shadow-elegant group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-56 object-cover"
        />
        <Button
          size="icon"
          variant="secondary"
          className={`absolute top-3 right-3 rounded-full ${
            isFavorite ? "text-red-500" : ""
          }`}
          onClick={onToggleFavorite}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
        </Button>
        <Badge className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm">
          {product.trend}
        </Badge>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {product.title}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl font-bold gradient-text">
            {product.price}
          </span>
          <span className="text-sm text-muted-foreground line-through">
            {product.originalPrice}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Profit Margin:</span>
            <span className="font-semibold text-green-600">{product.profit}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Weekly Sales:</span>
            <span className="font-semibold flex items-center gap-1">
              <TrendingUp className="h-4 w-4 text-primary" />
              {product.sales}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 gap-2">
        <Button
          className="flex-1 gradient-bg"
          onClick={handleSupplierClick}
        >
          View Supplier
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" className="flex-1">
          View Insights
        </Button>
      </CardFooter>
    </Card>
  );
};
