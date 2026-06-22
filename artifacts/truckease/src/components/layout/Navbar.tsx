import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Pages that have a dark hero (navbar starts transparent/white-text)
const DARK_HERO_PAGES = ["/", "/platform", "/services", "/about", "/free-review", "/contact"];

export function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location]);

  const hasDarkHero = DARK_HERO_PAGES.includes(location);
  const isLight = scrolled || !hasDarkHero;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/60"
          : "bg-[hsl(220,63%,13%)]"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center" data-testid="link-home-logo">
          <img
            src="/truckease-logo.png"
            alt="TruckEase Solutions"
            className={`h-10 w-auto transition-all duration-300 ${isLight ? "" : "brightness-0 invert"}`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold tracking-wide transition-colors py-1 group ${
                  isLight
                    ? active ? "text-secondary" : "text-foreground hover:text-secondary"
                    : active ? "text-secondary" : "text-white/90 hover:text-white"
                }`}
                data-testid={`link-desktop-${link.label.toLowerCase()}`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                  active ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/free-review" data-testid="link-desktop-free-review">
            <button className="bg-secondary text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg hover:shadow-secondary/25 hover:-translate-y-0.5">
              Free Review
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isLight ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          data-testid="button-mobile-menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-b border-border shadow-lg"
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-semibold transition-colors ${
                    location === link.href ? "text-secondary" : "text-foreground hover:text-secondary"
                  }`}
                  onClick={() => setMobileOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/free-review" onClick={() => setMobileOpen(false)} data-testid="link-mobile-free-review">
                <button className="w-full bg-secondary text-white text-base font-bold px-5 py-3 rounded-full hover:bg-secondary/90 transition-colors mt-2">
                  Get My Free Fleet Review
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}