import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import birthdayImg from "@/assets/birthday-party.jpg";
import weddingImg from "@/assets/wedding-decor.jpg";
import kittyImg from "@/assets/kitty-party.jpg";
import retirementImg from "@/assets/retirement-party.jpg";
import corporateImg from "@/assets/corporate-event.jpg";

const services = [
  { title: "Birthday Decoration", image: birthdayImg, desc: "Vibrant celebrations tailored for all ages" },
  { title: "Wedding Decoration", image: weddingImg, desc: "Elegant setups for your dream wedding" },
  { title: "Kitty Party", image: kittyImg, desc: "Fun-filled gatherings with gourmet menus" },
  { title: "Retirement Party", image: retirementImg, desc: "Honoring milestones with grace and style" },
  { title: "Corporate Events", image: corporateImg, desc: "Professional catering for business occasions" },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-14">
          <span className="text-accent font-body text-sm font-semibold tracking-[0.2em] uppercase">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            We Offer Top Notch!
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            From decor to dining, every detail is handled with passion and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link
              key={service.title}
              to="/services"
              className={`group relative overflow-hidden rounded-lg hover-lift ${
                i === 0 ? "sm:col-span-2 lg:col-span-2 aspect-[2/1]" : "aspect-square"
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-maroon-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm mt-1">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
