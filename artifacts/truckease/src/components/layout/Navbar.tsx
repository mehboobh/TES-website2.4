import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Truck } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/platform", label: "Platform" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary shadow-sm text-primary-foreground">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
          <Truck className="h-6 w-6 text-secondary" />
          <span className="font-bold text-xl tracking-tight">TruckEase</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-secondary ${
                location === link.href ? "text-secondary" : "text-primary-foreground/90"
              }`}
              data-testid={`link-desktop-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/free-review" data-testid="link-desktop-free-review">
            <Button variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
              Free Review
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-primary-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-primary p-4 space-y-4">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-secondary block ${
                  location === link.href ? "text-secondary" : "text-primary-foreground/90"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/free-review" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-free-review">
              <Button variant="secondary" className="w-full justify-center bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
                Free Review
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
