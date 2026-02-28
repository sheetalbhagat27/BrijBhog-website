import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    event: "Wedding Reception",
    text: "Brij Bhog made our wedding reception absolutely magical. The food was divine and the décor was breathtaking. Our guests are still talking about it!",
  },
  {
    name: "Rajesh Gupta",
    event: "Corporate Gala",
    text: "Professional, punctual, and perfectly executed. Their corporate event catering exceeded all our expectations. Highly recommend for business events.",
  },
  {
    name: "Anita Mehra",
    event: "50th Birthday Party",
    text: "From planning to execution, everything was flawless. The personalized menu for my husband's milestone birthday was a hit with everyone.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-14">
          <span className="text-accent font-body text-sm font-semibold tracking-[0.2em] uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-lg p-8 border border-border hover-lift"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-accent">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
