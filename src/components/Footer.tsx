import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-hero-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">MD</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-primary-foreground text-lg">Miroslav Danko</h3>
                <p className="text-xs text-primary-foreground/60">Instalatérské práce</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Spolehlivý instalatér s více než 30 lety zkušeností. Kvalita a spokojenost zákazníka na prvním místě.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Služby</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sluzby" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Instalatérské práce
                </a>
              </li>
              <li>
                <a href="#sluzby" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Topenářství
                </a>
              </li>
              <li>
                <a href="#sluzby" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Revize plynu
                </a>
              </li>
              <li>
                <a href="#sluzby" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Rekonstrukce
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:604852317" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  604 852 317
                </a>
              </li>
              <li>
                <a href="mailto:dankovtp@seznam.cz" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  dankovtp@seznam.cz
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                  <MapPin className="w-4 h-4" />
                  Lelekovice 811
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Miroslav Danko. Všechna práva vyhrazena.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              IČO: Kontaktujte pro více informací
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
