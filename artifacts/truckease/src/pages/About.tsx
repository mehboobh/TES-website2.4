import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function About() {
  useDocumentMeta(
    "About — TruckEase",
    "TruckEase was built because small carriers deserve the same operational control as large fleets. Learn why we exist and how we work."
  );

  return (
    <Layout>
      {/* HERO */}
      <section className="relative bg-[hsl(220,63%,13%)] py-32 overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none" aria-hidden>
          <svg viewBox="0 0 600 600" fill="none" className="absolute right-[-80px] top-[15%] w-[520px] opacity-[0.05]">
            <rect x="0" y="0" width="520" height="36" rx="18" fill="white"/>
            <rect x="60" y="90" width="440" height="36" rx="18" fill="white"/>
            <rect x="0" y="180" width="520" height="36" rx="18" fill="white"/>
            <rect x="120" y="270" width="360" height="36" rx="18" fill="white"/>
            <rect x="0" y="360" width="520" height="36" rx="18" fill="white"/>
          </svg>
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-6">About</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] max-w-3xl mb-6">
            Built From Seeing How Things Actually Break
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-white/60 font-medium max-w-lg leading-relaxed">
            TruckEase exists because small carriers carry the same compliance burden as large fleets — without the staff or systems to manage it.
          </motion.p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55 }}
            >
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-8">The Problem We Solve</p>
              <p className="text-3xl md:text-4xl font-bold text-foreground leading-[1.2] tracking-tight">
                "The person driving the truck is also the compliance officer, the dispatcher, and the owner."
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55 }}
              className="space-y-6 text-muted-foreground text-lg leading-relaxed font-medium"
            >
              <p>Owner-operators running 1 to 10 trucks face the same regulatory requirements as enterprise fleets. But without a compliance team, that burden falls entirely on the person also driving the truck.</p>
              <p>The result is predictable. Documents fall through the cracks. Renewals get missed. Compliance gaps build quietly until they become expensive problems.</p>
              <p className="text-foreground font-semibold">TruckEase was built to change that — giving small carriers structured visibility and control over the parts of their operation that are most likely to break.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 md:py-32 bg-[hsl(220,20%,96%)]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-8">Our Approach</p>
            <p className="text-2xl md:text-3xl font-medium text-foreground leading-[1.65] mb-10">
              We're currently working with pilot carriers across Canada and the United States. This is a real-world build. The platform is being developed around real operations, real compliance requirements, and real problems — not hypothetical ones.
            </p>
            <p className="text-xl font-medium text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              The goal is straightforward: give owner-operators and small fleets a system that actually fits how they work. One that reduces the admin burden, surfaces issues before they become problems, and keeps their operation running clean.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[hsl(220,63%,13%)] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 max-w-2xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-8">See where your fleet stands — for free.</h2>
          <Link href="/free-review" data-testid="about-bottom-cta">
            <button className="bg-secondary text-white font-bold text-base px-8 py-4 rounded-full hover:bg-secondary/90 transition-all duration-200 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5">
              Get My Free Fleet Review
            </button>
          </Link>
          <p className="mt-5 text-sm text-white/30 font-medium">For active Canadian and US trucking operations.</p>
        </div>
      </section>
    </Layout>
  );
}