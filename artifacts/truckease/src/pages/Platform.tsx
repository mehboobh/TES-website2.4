import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, FolderSearch, Clock, Truck, ArrowRight } from "lucide-react";

export default function Platform() {
  useDocumentMeta(
    "Platform", 
    "See how TruckEase centralizes fleet compliance records, renewals, and documents into one clear dashboard for Canadian and US trucking operations."
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
          >
            One System. Full Visibility. Nothing Missed.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-primary-foreground/80"
          >
            TruckEase replaces scattered spreadsheets and missed reminders with a single compliance platform built for real trucking operations.
          </motion.p>
        </div>
      </section>

      {/* What TruckEase Tracks */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-primary">What TruckEase Tracks</h2>
              
              <div className="flex gap-4">
                <div className="mt-1"><Shield className="h-6 w-6 text-secondary" /></div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Compliance & Regulatory Status</h3>
                  <p className="text-muted-foreground">Know exactly where every vehicle and driver stands. No digging. No guessing.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1"><FolderSearch className="h-6 w-6 text-secondary" /></div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Document Organization</h3>
                  <p className="text-muted-foreground">Every permit, filing, and inspection record — stored, organized, and audit-ready.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1"><Clock className="h-6 w-6 text-secondary" /></div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Renewal Tracking</h3>
                  <p className="text-muted-foreground">IRP, IFTA, insurance, licenses. Tracked before they become urgent.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1"><Truck className="h-6 w-6 text-secondary" /></div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Maintenance & Inspection Records</h3>
                  <p className="text-muted-foreground">Complete history per vehicle. Nothing lost between repair shops.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-primary border-b pb-4">The Impact</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 pb-2 text-sm font-semibold text-muted-foreground border-b border-border/50">
                  <div>Before</div>
                  <div>After</div>
                </div>
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div className="text-muted-foreground line-through decoration-destructive/50">Renewals tracked by memory</div>
                  <div className="font-medium text-foreground flex items-center gap-2"><ArrowRight className="h-4 w-4 text-secondary" /> Clear timeline, nothing missed</div>
                </div>
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div className="text-muted-foreground line-through decoration-destructive/50">Documents scattered</div>
                  <div className="font-medium text-foreground flex items-center gap-2"><ArrowRight className="h-4 w-4 text-secondary" /> Every record organized</div>
                </div>
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div className="text-muted-foreground line-through decoration-destructive/50">Issues found too late</div>
                  <div className="font-medium text-foreground flex items-center gap-2"><ArrowRight className="h-4 w-4 text-secondary" /> Problems visible early</div>
                </div>
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div className="text-muted-foreground line-through decoration-destructive/50">Compliance status unknown</div>
                  <div className="font-medium text-foreground flex items-center gap-2"><ArrowRight className="h-4 w-4 text-secondary" /> Full visibility across fleet</div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border/50 text-muted-foreground leading-relaxed">
                The longer you use TruckEase, the more useful your data becomes. Patterns across maintenance records, compliance gaps, and operational history begin to surface — giving you a clearer picture of your fleet over time.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Stop managing compliance by memory.</h2>
          <Link href="/free-review" data-testid="platform-bottom-cta">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 h-auto font-bold rounded-md shadow-lg transition-transform hover:-translate-y-1">
              Get My Free Fleet Review
            </Button>
          </Link>
          <p className="mt-4 text-sm text-primary-foreground/60 font-medium">No credit card. No commitment.</p>
        </div>
      </section>
    </Layout>
  );
}
