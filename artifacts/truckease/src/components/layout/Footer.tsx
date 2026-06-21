import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[hsl(220,63%,13%)] text-white/80">
      <div className="container mx-auto px-6 max-w-7xl py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-5 lg:col-span-6">
            <Link href="/" className="flex items-center mb-6" data-testid="footer-link-logo">
              <img
                src="/truckease-logo.png"
                alt="TruckEase Solutions"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/55 text-base leading-relaxed font-semibold tracking-wide">
              Stay compliant - Stay moving
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-7 lg:col-span-6 grid grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-bold tracking-[0.12em] uppercase text-white/40 mb-5">Product</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><Link href="/platform" className="hover:text-secondary transition-colors" data-testid="footer-link-platform">Platform</Link></li>
                <li><Link href="/services" className="hover:text-secondary transition-colors" data-testid="footer-link-services">Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[0.12em] uppercase text-white/40 mb-5">Company</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><Link href="/about" className="hover:text-secondary transition-colors" data-testid="footer-link-about">About</Link></li>
                <li><Link href="/contact" className="hover:text-secondary transition-colors" data-testid="footer-link-contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[0.12em] uppercase text-white/40 mb-5">Get Started</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><Link href="/free-review" className="hover:text-secondary transition-colors" data-testid="footer-link-free-review">Free Review</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/35 font-medium">
          <p>© 2025 TruckEase. All rights reserved.</p>
          <p>Canada · United States · Cross-border</p>
        </div>
      </div>
    </footer>
  );
}