import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import dashboardPreview from "@/assets/dashboard-preview.png";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-background pt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-primary">#2 Trusted Powerful Winning Product Tool</span>
              <div className="flex items-center gap-0.5">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <Star className="w-4 h-4 fill-primary text-primary" />
                <Star className="w-4 h-4 fill-primary text-primary" />
                <Star className="w-4 h-4 fill-primary text-primary" />
                <Star className="w-4 h-4 fill-primary text-primary" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Find Winning Dropshipping Products in Seconds{" "}
              <span className="inline-block">🚀</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Our AI analyzes millions of TikTok ads, Facebook campaigns, and successful stores 
              to find products that actually sell. Stop wasting time on losers—let our AI do the research 
              while you focus on scaling your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-bg hover:opacity-90 transition-opacity"
                onClick={() => navigate("/auth")}
              >
                Start Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
            <img 
              src={dashboardPreview}
              alt="Findify Dashboard Preview"
              className="relative rounded-lg shadow-elegant hover-scale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
