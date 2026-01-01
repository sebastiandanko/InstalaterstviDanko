import { Award, Clock, ThumbsUp, Shield } from "lucide-react";

const About = () => {
  const qualities = [
    {
      icon: Award,
      title: "30+ let zkušeností",
      description: "Dlouholetá praxe v oboru mi umožňuje řešit i ty nejsložitější zakázky.",
    },
    {
      icon: Clock,
      title: "Rychlé jednání",
      description: "Pracuji efektivně, aby byl chod vaší domácnosti co nejméně narušen.",
    },
    {
      icon: ThumbsUp,
      title: "Kvalitní práce",
      description: "Za kvalitou oprav a instalací si stojím. Spokojenost zákazníka je priorita.",
    },
    {
      icon: Shield,
      title: "Certifikace",
      description: "Vlastním oprávnění na svařování plamenem dle Evropské normy.",
    },
  ];

  return (
    <section id="o-mne" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Image placeholder with decorative elements */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-hero-gradient rounded-3xl transform rotate-3 opacity-20" />
              <div className="absolute inset-0 bg-accent rounded-3xl transform -rotate-3 opacity-10" />
              
              {/* Main content area */}
              <div className="relative bg-card rounded-3xl p-8 shadow-xl border border-border h-full flex flex-col justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-hero-gradient flex items-center justify-center mb-6 shadow-hero">
                    <span className="text-primary-foreground font-serif font-bold text-5xl">MD</span>
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-foreground mb-2">
                    Miroslav Danko
                  </h3>
                  <p className="text-accent font-semibold mb-4">Instalatér</p>
                  <p className="text-muted-foreground">
                    Jeden z nejkvalitnějších a nejspolehlivějších instalatérů v Brně
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              O mně
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Proč si vybrat právě mě?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              S více než třicetiletou praxí v oboru jsem pomohl tisícům zákazníků s jejich instalatérskými potřebami. Moje práce je založena na pečlivosti, spolehlivosti a profesionálním přístupu.
            </p>

            {/* Qualities grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <quality.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{quality.title}</h4>
                    <p className="text-muted-foreground text-sm">{quality.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
