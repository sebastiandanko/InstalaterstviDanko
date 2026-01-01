import { Phone } from "lucide-react";
import dankoLogo from "@/assets/danko-logo.jpg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src={dankoLogo} 
              alt="Danko VTP - Instalatérské práce" 
              className="h-10 md:h-14 w-auto"
            />
          </a>

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
