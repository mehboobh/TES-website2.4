import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, FolderSearch, Clock, Truck, ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  useDocumentMeta(
    "TruckEase — Fleet Compliance Platform",
    "TruckEase helps owner-operators and small fleets manage trucking compliance, renewals, and records in one place. Get your free fleet compliance review today."
  );

  return (
    <Layout>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen bg-[hsl(220,63%,13%)] flex items-center overflow-hidden">
        {/* Abstract geometric background */}
        <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none select-none" aria-hidden>
          <svg viewBox="0 0 600 800" fill="none" className="absolute right-[-100px] top-[10%] w-[580px] opacity-[0.045]">
            <rect x="0" y="0" width="520" height="40" rx="20" fill="white"/>
            <rect x="80" y="100" width="440" height="40" rx="20" fill="white"/>
            <rect x="0" y="200" width="520" height="40" rx="20" fill="white"/>
            <rect x="160" y="300" width="360" height="40" rx="20" fill="white"/>
            <rect x="0" y="400" width="520" height="40" rx="20" fill="white"/>
            <rect x="80" y="500" width="440" height="40" rx="20" fill="white"/>
            <rect x="0" y="600" width="520" height="40" rx="20" fill="white"/>
          </svg>
          {/* Orange accent circle */}
          <div className="absolute right-[15%] top-[25%] w-[320px] h-[320px] rounded-full bg-secondary/8 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 py-32">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/80 text-xs font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
              Compliance Platform
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.04] max-w-3xl mb-8"
          >
            Run Your Fleet —<br />
            <span className="text-secondary">We'll Handle</span><br />
            the Rest
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg md:text-xl text-white/60 font-medium max-w-lg mb-12 leading-relaxed"
          >
            Compliance, documents, renewals, and records. Organized. Tracked. Under control.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row items-start gap-5"
          >
            <Link href="/free-review" data-testid="hero-cta">
              <button className="bg-secondary text-white font-bold text-base px-8 py-4 rounded-full hover:bg-secondary/90 transition-all duration-200 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5">
                Get My Free Fleet Review
              </button>
            </Link>
            <div className="flex items-center gap-2.5 bg-white/8 border border-white/15 text-white/70 text-sm font-semibold px-5 py-4 rounded-full">
              <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
              Pilot carriers across Canada & US
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-6 text-sm text-white/35 font-medium"
          >
            Free. No commitment. Active operations only.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ THE PROBLEM ═══ */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-8">The Compliance Gap</p>
            <p className="text-2xl md:text-[2rem] font-medium leading-[1.6] text-foreground">
              Most carriers don't lose their authority because of bad driving. They lose it because of a missed filing. An expired permit. A document that wasn't where it needed to be.{" "}
              <span className="text-secondary font-bold">TruckEase fixes that.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ WHAT WE DO ═══ */}
      <section className="py-24 md:py-32 bg-[hsl(220,20%,96%)]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-4">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1] max-w-2xl">
              One system. Full visibility. Nothing missed.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: <CheckCircle2 className="h-5 w-5 text-white" />,
                title: "Compliance status across all trucks and drivers",
                body: "Real-time visibility into the regulatory standing of your entire operation. No digging. No guessing.",
              },
              {
                icon: <FolderSearch className="h-5 w-5 text-white" />,
                title: "Documents organized and audit-ready",
                body: "No more digging through emails or physical folders when an audit happens.",
              },
              {
                icon: <Clock className="h-5 w-5 text-white" />,
                title: "Renewals tracked before they become emergencies",
                body: "Proactive alerts for permits, licenses, and filings before they expire.",
              },
              {
                icon: <Truck className="h-5 w-5 text-white" />,
                title: "Maintenance and inspection records in one place",
                body: "A clean, accessible history for every piece of equipment in your fleet.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHO IT'S FOR ═══ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55 }}
            >
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-6">Built For Real Operators</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-8">
                For the operator running the business and driving the truck.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-medium">
                Owner-operators and small fleet managers who are running the business and driving the truck at the same time. TruckEase is built for operators who can't afford to miss anything — and don't have a compliance team to catch it.
              </p>
              <div className="inline-flex items-center gap-3 bg-secondary/10 border border-secondary/20 text-foreground text-sm font-semibold px-5 py-3 rounded-full">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                Currently working with pilot carriers across Canada and the US.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55 }}
              className="grid grid-cols-2 gap-5"
            >
              {[
                { num: "1–10", label: "Trucks", sub: "Owner-operators to small fleets" },
                { num: "2", label: "Countries", sub: "Canada and United States" },
                { num: "1", label: "Platform", sub: "Everything in one place" },
                { num: "1 Day", label: "Response", sub: "Free review turnaround" },
              ].map((stat, i) => (
                <div key={i} className="bg-[hsl(220,20%,96%)] rounded-2xl p-7">
                  <div className="text-3xl font-extrabold text-foreground mb-1">{stat.num}</div>
                  <div className="text-secondary font-bold text-sm mb-2">{stat.label}</div>
                  <div className="text-muted-foreground text-xs font-medium leading-relaxed">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="py-24 md:py-32 bg-[hsl(220,63%,13%)] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Ready to get your compliance under control?
            </h2>
            <p className="text-white/55 text-lg font-medium mb-10">
              We review your compliance profile and tell you what's current, what's missing, and what needs attention.
            </p>
            <Link href="/free-review" data-testid="bottom-cta">
              <button className="bg-secondary text-white font-bold text-base px-8 py-4 rounded-full hover:bg-secondary/90 transition-all duration-200 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5">
                Get My Free Fleet Review
              </button>
            </Link>
            <p className="mt-5 text-sm text-white/30 font-medium">Free. No commitment. Active operations only.</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}