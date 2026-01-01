import { Droplets, Flame, FileCheck, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Instalatérské práce",
      description:
        "Nabízím domovní instalatérské práce, zajišťuji topenářské a plynoinstalatérské práce. Provádím rozvody vody, topení a plynu včetně poradenské činnosti.",
      features: ["Rozvody vody", "Montáž spotřebičů", "Opravy a servis"],
    },
    {
      icon: Flame,
      title: "Topenářství",
      description:
        "Provádím kompletní montáže ústředního topení. Montuji kotle na tuhá paliva i na zemní plyn. Dodávám včetně projektu, osazení kotle a radiátorů.",
      features: ["Montáž kotlů", "Podlahové topení", "Termostatické hlavice"],
    },
    {
      icon: FileCheck,
      title: "Revize plynu",
      description:
        "Provádím montáže rozvodů plynu v bytech i větších objektech – průmyslové rozvody. Veškeré montáže včetně projektové dokumentace a revizní zprávy.",
      features: ["Revizní zprávy", "Porevizní opravy", "Průmyslové rozvody"],
    },
    {
      icon: Wrench,
      title: "Rekonstrukce",
      description:
        "Provádím rekonstrukce bytových jader – koupelny, kuchyně, toalety a jiná sociální zařízení. Kompletní výměny rozvodů vody, topení a plynu.",
      features: ["Bytová jádra", "Koupelny", "Kompletní rekonstrukce"],
    },
  ];

  return (
    <section id="sluzby" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Nabídka služeb
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Co pro vás mohu udělat
          </h2>
          <p className="text-muted-foreground text-lg">
            Nabízím komplexní instalatérské služby s důrazem na kvalitu a spolehlivost
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-hero-gradient group-hover:shadow-hero transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
