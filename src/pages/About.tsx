import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import aboutImg from "@/assets/about-us.jpg";
import Testimonials from "@/components/Testimonials";
import EventGallery from "@/components/EventGallary";

const values = [
  "Premium quality ingredients sourced locally",
  "Customized menus for every dietary need",
  "Sustainable and eco-friendly practices",
  "Dedicated event coordinator for each client",
  "Hygienic food preparation standards",
  "On-time delivery, every time",
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="maroon-gradient pt-32 pb-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            About Brij Bhog
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Our story is built on passion for food, love for celebration, and commitment to excellence.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src={aboutImg}
              alt="Our chefs at work"
              className="rounded-lg w-full object-cover aspect-[4/3]"
            />
            <div>
              <span className="text-accent font-body text-sm font-semibold tracking-[0.2em] uppercase">
                Our Journey
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                15+ Years of Culinary Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded with a simple vision — to make every celebration memorable through extraordinary food — Brij Bhog has grown into one of the most trusted catering services in the region.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We started as a small family kitchen and evolved into a full-service catering and event decoration company, serving thousands of happy clients along the way.
              </p>

              <ul className="space-y-3 mb-8">
                {values.map((v) => (
                  <li key={v} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle size={18} className="text-accent shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>

              <Button asChild>
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <EventGallery/>
      

      <Testimonials />
    </>
  );
};

export default About;
