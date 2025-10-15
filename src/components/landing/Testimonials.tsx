import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aman Sharma",
    location: "India",
    text: "I found my 3 winning products with Findify in the first week! The AI insights are incredibly accurate. Already scaled to $10k/month.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aman",
  },
  {
    name: "Sara Thompson",
    location: "UK",
    text: "Better than Minea for half the price. The real-time ad tracking feature alone is worth it. Highly recommend for serious dropshippers.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
  },
  {
    name: "Raj Patel",
    location: "USA",
    text: "Game changer for my dropshipping business. The competitor tracking helps me stay ahead of the curve. Support team is excellent too!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raj",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Winning Dropshippers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of entrepreneurs finding their next winning product
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-2xl shadow-elegant border border-border hover-scale"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
