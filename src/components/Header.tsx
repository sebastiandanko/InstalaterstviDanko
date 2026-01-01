import { Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-hero-gradient flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-serif font-bold text-lg md:text-xl">MD</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif font-bold text-foreground text-lg md:text-xl">Miroslav Danko</h1>
              <p className="text-xs text-muted-foreground">Instalatérské práce</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sluzby" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Služby
            </a>
            <a href="#o-mne" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              O mně
            </a>
            <a href="#kontakt" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Kontakt
            </a>
          </nav>

          {/* Phone CTA */}
          <a
            href="tel:604852317"
            className="flex items-center gap-2 bg-hero-gradient text-primary-foreground px-4 py-2.5 md:px-6 md:py-3 rounded-full font-semibold shadow-hero hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base">604 852 317</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
