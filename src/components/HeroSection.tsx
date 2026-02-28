import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-catering.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 container-wide px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <span className="inline-block text-accent font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4 animate-fade-up">
            Premium Catering Service
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-up-delay-1">
            Crafting Culinary <br />
            <span className="text-gold-gradient">Masterpieces</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg animate-fade-up-delay-2">
            From intimate gatherings to grand celebrations, we bring flavor, elegance, and unforgettable experiences to every event.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Book Your Event
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
