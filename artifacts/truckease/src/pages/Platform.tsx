import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield, FolderSearch, Clock, Truck, X, Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const features = [
  { num: "01", icon: <Shield className="h-5 w-5 text-white" />, title: "Compliance & Regulatory Status", body: "Know exactly where every vehicle and driver stands. No digging. No guessing." },
  { num: "02", icon: <FolderSearch className="h-5 w-5 text-white" />, title: "Document Organization", body: "Every permit, filing, and inspection record — stored, organized, and audit-ready." },
  { num: "03", icon: <Clock className="h-5 w-5 text-white" />, title: "Renewal Tracking", body: "IRP, IFTA, insurance, licenses. Tracked before they become urgent." },
  { num: "04", icon: <Truck className="h-5 w-5 text-white" />, title: "Maintenance & Inspection Records", body: "Complete history per vehicle. Nothing lost between repair shops." },
];

const beforeAfter = [
  { before: "Renewals tracked by memory", after: "Clear timeline, nothing missed" },
  { before: "Documents scattered", after: "Every record organized" },
  { before: "Issues found too late", after: "Problems visible early" },
  { before: "Compliance status unknown", after: "Full visibility across fleet" },
];

export default function Platform() {
  useDocumentMeta(
    "Platform — TruckEase",
    "See how TruckEase centralizes fleet compliance records, renewals, and documents into one clear dashboard for Canadian and US trucking operations."
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
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-6">The Platform</motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] max-w-3xl mb-6">
            One System.<br />Full Visibility.<br />Nothing Missed.
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2} className="text-lg text-white/60 font-medium max-w-lg leading-relaxed">
            TruckEase replaces scattered spreadsheets and missed reminders with a single compliance platform built for real trucking operations.
          </motion.p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 md:py-32 bg-[hsl(220,20%,96%)]">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-4">What TruckEase Tracks</p>
          <h2 className="text-4xl font-extrabold text-foreground tracking-tight mb-16 max-w-xl">Everything that keeps your fleet legal and running.</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-8 relative overflow-hidden"
              >
                <span className="absolute right-6 top-4 text-8xl font-extrabold text-muted/20 leading-none select-none">{f.num}</span>
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-4 text-center">The Impact</p>
          <h2 className="text-4xl font-extrabold text-foreground tracking-tight text-center mb-16">What changes when you use TruckEase.</h2>
          
          <div className="grid grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border shadow-sm">
            {/* Headers */}
            <div className="bg-[hsl(0,65%,97%)] px-8 py-5 border-b border-border">
              <span className="text-xs font-bold tracking-[0.12em] uppercase text-red-400">Before TruckEase</span>
            </div>
            <div className="bg-[hsl(142,65%,97%)] px-8 py-5 border-b border-border border-l">
              <span className="text-xs font-bold tracking-[0.12em] uppercase text-emerald-600">After TruckEase</span>
            </div>
            {/* Rows */}
            {beforeAfter.map((row, i) => (
              <>
                <div key={`before-${i}`} className={`px-8 py-5 flex items-center gap-3 ${i < beforeAfter.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <X className="h-3 w-3 text-red-400" />
                  </div>
                  <span className="text-muted-foreground text-sm font-medium line-through decoration-red-300">{row.before}</span>
                </div>
                <div key={`after-${i}`} className={`px-8 py-5 flex items-center gap-3 border-l border-border ${i < beforeAfter.length - 1 ? "border-b" : ""}`}>
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-foreground text-sm font-bold">{row.after}</span>
                </div>
              </>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 bg-[hsl(220,20%,96%)] rounded-2xl p-8 text-center"
          >
            <p className="text-foreground text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              The longer you use TruckEase, the more useful your data becomes. Patterns across maintenance records, compliance gaps, and operational history begin to surface — giving you a clearer picture of your fleet over time.
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
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-8">Stop managing compliance by memory.</h2>
          <Link href="/free-review" data-testid="platform-bottom-cta">
            <button className="bg-secondary text-white font-bold text-base px-8 py-4 rounded-full hover:bg-secondary/90 transition-all duration-200 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5">
              Get My Free Fleet Review
            </button>
          </Link>
          <p className="mt-5 text-sm text-white/30 font-medium">No credit card. No commitment.</p>
        </div>
      </section>
    </Layout>
  );
}