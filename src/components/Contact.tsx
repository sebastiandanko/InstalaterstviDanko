import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefon",
      value: "604 852 317",
      href: "tel:604852317",
      highlight: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: "dankovtp@seznam.cz",
      href: "mailto:dankovtp@seznam.cz",
    },
    {
      icon: MapPin,
      label: "Adresa",
      value: "Lelekovice 811",
      href: "https://maps.google.com/?q=Lelekovice+811",
    },
    {
      icon: Clock,
      label: "Pracovní doba",
      value: "Po–Pá: 7:00–18:00",
    },
  ];

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Kontakt
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Potřebujete pomoc?
            </h2>
            <p className="text-muted-foreground text-lg">
              Neváhejte mě kontaktovat, rád vám pomohu s vaším projektem
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 border transition-all duration-300 ${
                  item.highlight
                    ? "bg-hero-gradient text-primary-foreground border-transparent shadow-hero"
                    : "bg-card border-border hover:border-primary/30 hover:shadow-lg"
                }`}
              >
                {item.href ? (
                  <a href={item.href} className="flex items-start gap-4 group">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        item.highlight ? "bg-primary-foreground/20" : "bg-primary/10"
                      }`}
                    >
                      <item.icon
                        className={`w-6 h-6 ${
                          item.highlight ? "text-primary-foreground" : "text-primary"
                        }`}
                      />
                    </div>
                    <div>
                      <span
                        className={`text-sm font-medium block mb-1 ${
                          item.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className={`text-xl font-bold group-hover:underline ${
                          item.highlight ? "text-primary-foreground" : "text-foreground"
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground block mb-1">
                        {item.label}
                      </span>
                      <span className="text-xl font-bold text-foreground">{item.value}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Big CTA */}
          <div className="text-center bg-muted/50 rounded-3xl p-8 md:p-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Zavolejte hned
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Jsem připraven vám pomoci s jakýmkoli instalatérským problémem. Stačí zvednout telefon.
            </p>
            <a
              href="tel:604852317"
              className="inline-flex items-center gap-3 bg-hero-gradient text-primary-foreground px-10 py-5 rounded-full font-bold text-xl shadow-hero hover:opacity-90 transition-all hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              604 852 317
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
