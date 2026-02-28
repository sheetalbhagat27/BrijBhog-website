import { Heart, Award, Eye, Utensils, Users, Clock } from "lucide-react";

const reasons = [
  { icon: Heart, title: "Personalized Approach", desc: "Every event is unique — we customize menus, décor, and service to match your vision." },
  { icon: Award, title: "Professional Expertise", desc: "Our seasoned team brings decades of catering and event management experience." },
  { icon: Eye, title: "Attention to Detail", desc: "From table settings to garnishes, nothing escapes our meticulous planning." },
  { icon: Utensils, title: "Exquisite Cuisine", desc: "Authentic flavors crafted from the finest ingredients by our master chefs." },
  { icon: Users, title: "Dedicated Team", desc: "A passionate crew ensuring smooth execution from setup to cleanup." },
  { icon: Clock, title: "Timely Delivery", desc: "Punctual service you can always rely on, no matter the scale." },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding maroon-gradient">
      <div className="container-wide">
        <div className="text-center mb-14">
          <span className="text-accent font-body text-sm font-semibold tracking-[0.2em] uppercase">
            Why Brij Bhog
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-3">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mb-5">
                <r.icon className="text-accent-foreground" size={22} />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                {r.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
