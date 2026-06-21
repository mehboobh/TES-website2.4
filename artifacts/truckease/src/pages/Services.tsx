import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { FileCheck, MapPin, Fuel, Users, FolderOpen } from "lucide-react";

const services = [
  { num: "01", icon: <FileCheck className="h-5 w-5 text-white" />, title: "Compliance & Filings", body: "A missed filing can suspend your authority. We keep your regulatory obligations current so you're never caught off guard." },
  { num: "02", icon: <MapPin className="h-5 w-5 text-white" />, title: "Permits & Licensing", body: "IRP, vehicle registration, specialty permits, and renewals — handled so your trucks stay legal wherever they operate." },
  { num: "03", icon: <Fuel className="h-5 w-5 text-white" />, title: "Fuel & Highway Tax Filings", body: "IFTA, fuel tax, and highway use filings handled accurately and on time, every quarter." },
  { num: "04", icon: <Users className="h-5 w-5 text-white" />, title: "Driver Records", body: "Driver qualification files organized, current, and audit-ready at all times." },
  { num: "05", icon: <FolderOpen className="h-5 w-5 text-white" />, title: "Operational Administration", body: "Document organization, renewal tracking, and filing coordination — so your operation runs on a system, not memory." },
];

export default function Services() {
  useDocumentMeta(
    "Services — TruckEase",
    "TruckEase handles DOT filings, IFTA, IRP, permits, and driver records for owner-operators and small fleets across Canada and the US."
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
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-6">Our Services</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] max-w-3xl mb-6">
            The Compliance Work You Don't Have Time For — Handled
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-white/60 font-medium max-w-lg leading-relaxed">
            Filings, permits, driver records, and renewals taken off your plate entirely.
          </motion.p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 md:py-32 bg-[hsl(220,20%,96%)]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`bg-white rounded-2xl p-8 relative overflow-hidden hover:-translate-y-1 transition-all duration-300 ${i === 4 ? "lg:col-span-1 md:col-span-2 lg:col-auto" : ""}`}
              >
                <span className="absolute right-6 top-4 text-7xl font-extrabold text-muted/15 leading-none select-none">{s.num}</span>
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SIGNAL */}
      <section className="py-20 bg-white border-y border-border">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xl font-medium text-foreground leading-relaxed">
              Pilot clients across Canada and the United States are using TruckEase to{" "}
              <span className="text-secondary font-bold">reduce admin time</span> and{" "}
              <span className="text-secondary font-bold">close compliance gaps.</span>
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
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-8">Ready to take compliance off your plate?</h2>
          <Link href="/free-review" data-testid="services-bottom-cta">
            <button className="bg-secondary text-white font-bold text-base px-8 py-4 rounded-full hover:bg-secondary/90 transition-all duration-200 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5">
              Get My Free Fleet Review
            </button>
          </Link>
          <p className="mt-5 text-sm text-white/30 font-medium">Active operations only. Response within 1 business day.</p>
        </div>
      </section>
    </Layout>
  );
}