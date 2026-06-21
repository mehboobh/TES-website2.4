import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, FolderSearch, Clock, Truck } from "lucide-react";

export default function Home() {
  useDocumentMeta(
    "TruckEase", 
    "TruckEase helps owner-operators and small fleets manage trucking compliance, renewals, and records in one place. Get your free fleet compliance review today."
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Run Your Fleet — We'll Handle the Rest
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-2xl"
          >
            Compliance, documents, renewals, and records. Organized. Tracked. Under control.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <Link href="/free-review" data-testid="hero-cta">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 h-auto font-bold rounded-md shadow-lg transition-transform hover:-translate-y-1">
                Get My Free Fleet Review
              </Button>
            </Link>
            <p className="mt-3 text-sm text-primary-foreground/60 font-medium">Free. No commitment. Active operations only.</p>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Shield className="h-16 w-16 text-secondary mx-auto mb-6" />
          <p className="text-2xl md:text-3xl font-medium leading-relaxed text-foreground">
            "Most carriers don't lose their authority because of bad driving. They lose it because of a missed filing. An expired permit. A document that wasn't where it needed to be. <strong className="text-primary font-bold">TruckEase fixes that.</strong>"
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-muted/50 border-y">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              One system that tracks your compliance status, organizes your documents, and keeps your renewals current — across Canada and the United States.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl border shadow-sm flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Compliance status across all trucks and drivers</h3>
                <p className="text-muted-foreground">Real-time visibility into the regulatory standing of your entire operation.</p>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-xl border shadow-sm flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                <FolderSearch className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Documents organized and audit-ready</h3>
                <p className="text-muted-foreground">No more digging through emails or physical folders when an audit happens.</p>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-xl border shadow-sm flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Renewals tracked before they become emergencies</h3>
                <p className="text-muted-foreground">Proactive alerts for permits, licenses, and filings before they expire.</p>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-xl border shadow-sm flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Maintenance and inspection records in one place</h3>
                <p className="text-muted-foreground">A clean, accessible history for every piece of equipment in your fleet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For & Trust Signal */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Built for the Real Operator</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Owner-operators and small fleet managers who are running the business and driving the truck at the same time. TruckEase is built for operators who can't afford to miss anything — and don't have a compliance team to catch it.
          </p>
          
          <div className="inline-flex items-center gap-3 bg-secondary/10 text-secondary-foreground/90 font-medium px-6 py-3 rounded-full border border-secondary/20">
            <CheckCircle2 className="h-5 w-5 text-secondary" />
            <span className="text-foreground">Currently working with pilot carriers across Canada and the US.</span>
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Ready to get your compliance under control?</h2>
          <Link href="/free-review" data-testid="bottom-cta">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 h-auto font-bold rounded-md shadow-lg transition-transform hover:-translate-y-1">
              Get My Free Fleet Review
            </Button>
          </Link>
          <p className="mt-4 text-sm text-primary-foreground/60 font-medium">Free. No commitment. Active operations only.</p>
        </div>
      </section>
    </Layout>
  );
}
