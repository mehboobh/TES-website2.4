import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[hsl(220,63%,13%)] text-white/80">
      <div className="container mx-auto px-6 max-w-7xl pt-20 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">

          {/* Left — Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center mb-5" data-testid="footer-link-logo">
              <img
                src="/truckease-logo.png"
                alt="TruckEase Solutions"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-sm font-semibold mb-2">
              Keeping compliance organized for real trucking operations.
            </p>
            <p className="text-white/45 text-sm leading-[1.8] font-medium max-w-sm mb-8">
              TruckEase helps owner-operators and small fleets stay organized, track renewals, and catch issues before they become problems.
            </p>
            <Link href="/free-review" data-testid="footer-cta-review">
              <button className="bg-secondary text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg hover:shadow-secondary/25 hover:-translate-y-0.5">
                Free Review
              </button>
            </Link>
          </div>

          {/* Middle — Platform links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.14em] uppercase text-white/40 mb-6">Platform</h4>
            <ul className="space-y-3.5 text-sm font-medium">
              <li><Link href="/platform" className="hover:text-secondary transition-colors duration-200" data-testid="footer-link-platform">Platform</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors duration-200" data-testid="footer-link-services">Services</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors duration-200" data-testid="footer-link-about">About</Link></li>
              <li><Link href="/free-review" className="hover:text-secondary transition-colors duration-200" data-testid="footer-link-free-review">Free Review</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors duration-200" data-testid="footer-link-contact">Contact</Link></li>
            </ul>
          </div>

          {/* Right — Coverage */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold tracking-[0.14em] uppercase text-white/40 mb-6">Coverage</h4>
            <p className="text-sm font-semibold text-white/70 mb-4">
              Serving Canada and the United States
            </p>
            <div className="space-y-2 text-sm font-medium text-white/45 mb-8">
              <a
                href="mailto:support@truckeasesolutions.com"
                className="block hover:text-secondary transition-colors duration-200"
                data-testid="footer-link-email"
              >
                support@truckeasesolutions.com
              </a>
              <p>Response hours: 8:00 AM to 6:00 PM EST</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-medium">
          <p>© 2026 TruckEase Solutions Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
            <span className="text-white/15">·</span>
            <Link href="/terms-of-service" className="hover:text-white/50 transition-colors">Terms of Service</Link>
            <span className="text-white/15">·</span>
            <Link href="/legal-disclaimer" className="hover:text-white/50 transition-colors">Legal Disclaimer</Link>
            <span className="text-white/15">·</span>
            <Link href="/cookie-policy" className="hover:text-white/50 transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
