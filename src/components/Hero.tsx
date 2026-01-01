import { Phone, MapPin, CheckCircle, Clock, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/50 py-16 md:py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-up">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Spolehlivý instalatér v Brně a okolí</span>
          </div>

          {/* Main headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Profesionální{" "}
            <span className="text-gradient">instalatérské</span>{" "}
            služby
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Jsem pečlivý a spolehlivý. Pracuji rychle a efektivně. Jsem ohleduplný, aby byl chod vaší domácnosti nebo firmy co nejméně narušen.{" "}
            <span className="text-foreground font-medium">Za kvalitou oprav a instalací si stojím.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="tel:604852317"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-hero-gradient text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-hero hover:opacity-90 transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Zavolejte: 604 852 317
            </a>
            <a
              href="#sluzby"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-card border-2 border-primary/20 text-foreground px-8 py-4 rounded-full font-semibold hover:border-primary/40 transition-colors"
            >
              Zobrazit služby
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="font-medium">Kvalitní práce</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-accent" />
              <span className="font-medium">Rychlé jednání</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="font-medium">Brno a okolí</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
