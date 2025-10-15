import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-accent via-background to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready to Find Your Next{" "}
            <span className="gradient-text">Winning Product?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join 50,000+ dropshippers who've already found their winning products with Findify. 
            Start your free trial today—no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-bg hover:opacity-90 transition-opacity text-lg px-8 py-6"
              onClick={() => navigate("/auth")}
            >
              Start Finding Winners <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6"
            >
              Book a Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            ✓ No credit card required &nbsp;&nbsp;•&nbsp;&nbsp; ✓ 10 free searches &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};
