import { Award, Clock, ThumbsUp, Shield } from "lucide-react";
import dankoLogo from "@/assets/danko-logo.png";
import miroslavDanko from "@/assets/miroslav-danko.png";

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
          {/* Left column - Photo */}
          <div className="relative">
            <div className="max-w-md mx-auto lg:mx-0 relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-hero-gradient rounded-3xl transform rotate-3 opacity-20" />
              <div className="absolute -inset-4 bg-accent rounded-3xl transform -rotate-3 opacity-10" />
              
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={miroslavDanko} 
                  alt="Miroslav Danko - Instalatér" 
                  className="w-full h-auto"
                />
                {/* Logo badge */}
                <div className="absolute bottom-4 right-4 bg-primary rounded-lg p-2 shadow-lg">
                  <img 
                    src={dankoLogo} 
                    alt="Danko VTP" 
                    className="h-8 w-auto"
                  />
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
