import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

export default function About() {
  useDocumentMeta(
    "About", 
    "TruckEase was built because small carriers deserve the same operational control as large fleets. Learn why we exist and how we work."
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
            Built From Seeing How Things Actually Break
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-primary-foreground/80"
          >
            TruckEase exists because small carriers carry the same compliance burden as large fleets — without the staff or systems to manage it.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg prose-blue max-w-none">
            <p className="text-xl leading-relaxed text-foreground mb-8">
              Owner-operators running 1 to 10 trucks face the same regulatory requirements as enterprise fleets. But without a compliance team, that burden falls entirely on the person also driving the truck.
            </p>
            <p className="text-xl leading-relaxed text-foreground mb-8">
              The result is predictable. Documents fall through the cracks. Renewals get missed. Compliance gaps build quietly until they become expensive problems.
            </p>
            <p className="text-xl leading-relaxed text-foreground mb-12 border-l-4 border-secondary pl-6 font-medium">
              TruckEase was built to change that — giving small carriers structured visibility and control over the parts of their operation that are most likely to break.
            </p>

            <div className="bg-muted p-8 rounded-xl border mt-16 relative">
              <div className="absolute -top-6 left-8 bg-secondary text-secondary-foreground p-3 rounded-full shadow-md">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're currently working with pilot carriers across Canada and the United States. This is a real-world build. The platform is being developed around real operations, real compliance requirements, and real problems — not hypothetical ones.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The goal is straightforward: give owner-operators and small fleets a system that actually fits how they work. One that reduces the admin burden, surfaces issues before they become problems, and keeps their operation running clean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Take control of your operation.</h2>
          <Link href="/free-review" data-testid="about-bottom-cta">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 h-auto font-bold rounded-md shadow-lg transition-transform hover:-translate-y-1">
              Get My Free Fleet Review
            </Button>
          </Link>
          <p className="mt-4 text-sm text-primary-foreground/60 font-medium">For active Canadian and US trucking operations.</p>
        </div>
      </section>
    </Layout>
  );
}
