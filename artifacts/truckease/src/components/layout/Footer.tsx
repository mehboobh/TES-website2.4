import { Link } from "wouter";
import { Truck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="col-span-1 md:col-span-4 lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <Truck className="h-6 w-6 text-secondary" />
              <span className="font-bold text-xl tracking-tight">TruckEase</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-md">
              Small carriers face the same compliance pressure as enterprise fleets — just without the team, tools, or time to manage it all. That's where things break: missed renewals, scattered records, and gaps that stay hidden until they become expensive. TruckEase gives owner-operators and small fleets a clearer way to stay on top of it — simple, structured, and built around real trucks running real routes across Canada and the United States.
            </p>
          </div>
          <div className="col-span-1 md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-secondary">Product</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><Link href="/platform" className="hover:text-secondary transition-colors" data-testid="footer-link-platform">Platform</Link></li>
                <li><Link href="/services" className="hover:text-secondary transition-colors" data-testid="footer-link-services">Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-secondary">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><Link href="/about" className="hover:text-secondary transition-colors" data-testid="footer-link-about">About</Link></li>
                <li><Link href="/contact" className="hover:text-secondary transition-colors" data-testid="footer-link-contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-secondary">Get Started</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><Link href="/free-review" className="hover:text-secondary transition-colors" data-testid="footer-link-free-review">Free Fleet Review</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>© 2025 TruckEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
