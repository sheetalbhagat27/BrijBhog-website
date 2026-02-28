import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import birthdayImg from "@/assets/birthday-party.jpg";
import weddingImg from "@/assets/wedding-decor.jpg";
import kittyImg from "@/assets/kitty-party.jpg";
import retirementImg from "@/assets/retirement-party.jpg";
import corporateImg from "@/assets/corporate-event.jpg";
import WhyChooseUs from "@/components/WhyChooseUs";

const events = [
  {
    title: "Birthday Decoration & Catering",
    image: birthdayImg,
    desc: "Make every birthday unforgettable with our vibrant decorations, themed setups, and delicious food packages tailored for all ages.",
    features: ["Themed decorations", "Custom cakes", "Kids-friendly menus", "Entertainment coordination"],
  },
  {
    title: "Wedding Decoration & Catering",
    image: weddingImg,
    desc: "From intimate ceremonies to grand celebrations, we create magical wedding experiences with stunning décor and exquisite multi-cuisine menus.",
    features: ["Mandap decoration", "Multi-cuisine menus", "Floral arrangements", "Full event coordination"],
  },
  {
    title: "Kitty Party",
    image: kittyImg,
    desc: "Host the perfect get-together with elegant table settings, delightful snacks, and a warm, inviting atmosphere for you and your friends.",
    features: ["Elegant table setup", "Finger food platters", "Beverage station", "Theme-based décor"],
  },
  {
    title: "Retirement Party",
    image: retirementImg,
    desc: "Celebrate a well-deserved milestone with sophistication. Our retirement party packages honor achievements with style and warmth.",
    features: ["Elegant décor", "Customized menu", "Personalized touches", "Cake & desserts"],
  },
  {
    title: "Corporate Events",
    image: corporateImg,
    desc: "Impress clients, reward teams, and host successful corporate gatherings with our professional catering and seamless event management.",
    features: ["Conference catering", "Gala dinners", "Team celebrations", "Presentation setups"],
  },
];

const Services = () => {
  return (
    <>
      <section className="maroon-gradient pt-32 pb-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Our Services
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Explore our range of catering and event services designed to make your celebrations extraordinary.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide space-y-20">
          {events.map((event, i) => (
            <div
              key={event.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                i % 2 !== 0 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="rounded-lg w-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {event.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {event.desc}
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {event.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link to="/contact">
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />
    </>
  );
};

export default Services;
