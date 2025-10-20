import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ExternalLink, TrendingUp, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

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
  roposoLink?: string;
  cost?: string;
  adTrendInfo?: string;
  imageLinks?: string[];
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
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);

  const handleSupplierClick = (supplier: string, link: string) => {
    toast({
      title: `Opening ${supplier}`,
      description: `Redirecting to ${supplier} product page...`,
    });
    window.open(link, "_blank");
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

      <CardFooter className="p-4 pt-0 gap-2 flex-col">
        <div className="grid grid-cols-2 gap-2 w-full">
          <Button
            className="gradient-bg"
            onClick={() => handleSupplierClick("AliExpress", product.supplierLink)}
          >
            AliExpress
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          {product.roposoLink && (
            <Button
              variant="secondary"
              onClick={() => handleSupplierClick("Roposo", product.roposoLink!)}
            >
              Roposo
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
        <Dialog open={isInsightsOpen} onOpenChange={setIsInsightsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              <Info className="mr-2 h-4 w-4" />
              View Insights
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{product.title}</DialogTitle>
              <DialogDescription>
                Detailed product insights and analytics
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 mt-4">
              {/* Product Image Gallery */}
              {product.imageLinks && product.imageLinks.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Product Images</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {product.imageLinks.map((link, index) => (
                      <img
                        key={index}
                        src={link}
                        alt={`${product.title} - ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border"
                        onError={(e) => {
                          e.currentTarget.src = product.image;
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Pricing Information */}
              <div>
                <h3 className="font-semibold mb-3 text-lg">Pricing Breakdown</h3>
                <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                  {product.cost && (
                    <div>
                      <p className="text-sm text-muted-foreground">Supplier Cost</p>
                      <p className="text-xl font-bold">{product.cost}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-muted-foreground">Suggested Selling Price</p>
                    <p className="text-xl font-bold gradient-text">{product.price}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Profit Margin</p>
                    <p className="text-xl font-bold text-green-600">{product.profit}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Weekly Sales</p>
                    <p className="text-xl font-bold">{product.sales}</p>
                  </div>
                </div>
              </div>

              {/* Trend & Ad Information */}
              {product.adTrendInfo && (
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Market Insights</h3>
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium mb-1">Trend Analysis</p>
                        <p className="text-sm text-muted-foreground">{product.adTrendInfo}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Supplier Information */}
              <div>
                <h3 className="font-semibold mb-3 text-lg">Supplier Links</h3>
                <div className="space-y-2">
                  <Button
                    className="w-full justify-start"
                    onClick={() => window.open(product.supplierLink, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on Supplier Platform
                  </Button>
                  {product.roposoLink && (
                    <Button
                      variant="secondary"
                      className="w-full justify-start"
                      onClick={() => window.open(product.roposoLink, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on Roposo
                    </Button>
                  )}
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center justify-center gap-2 p-4 bg-background border rounded-lg">
                <Badge className="text-base px-4 py-2">{product.trend}</Badge>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};
