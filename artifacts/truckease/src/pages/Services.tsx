import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { FileCheck, ShieldAlert, Truck, Users, Settings, CheckCircle2 } from "lucide-react";

export default function Services() {
  useDocumentMeta(
    "Services", 
    "TruckEase handles DOT filings, IFTA, IRP, permits, and driver records for owner-operators and small fleets across Canada and the US."
  );

  const services = [
    {
      icon: <ShieldAlert className="h-8 w-8 text-secondary" />,
      title: "Compliance & Filings",
      description: "A missed filing can suspend your authority. We keep your regulatory obligations current so you're never caught off guard."
    },
    {
      icon: <FileCheck className="h-8 w-8 text-secondary" />,
      title: "Permits & Licensing",
      description: "IRP, vehicle registration, specialty permits, and renewals — handled so your trucks stay legal wherever they operate."
    },
    {
      icon: <Truck className="h-8 w-8 text-secondary" />,
      title: "Fuel & Highway Tax Filings",
      description: "IFTA, fuel tax, and highway use filings handled accurately and on time, every quarter."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Driver Records",
      description: "Driver qualification files organized, current, and audit-ready at all times."
    },
    {
      icon: <Settings className="h-8 w-8 text-secondary" />,
      title: "Operational Administration",
      description: "Document organization, renewal tracking, and filing coordination — so your operation runs on a system, not memory."
    }
  ];

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
            The Compliance Work You Don't Have Time For — Handled
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-primary-foreground/80"
          >
            Filings, permits, driver records, and renewals taken off your plate entirely.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6 bg-primary/5 inline-block p-4 rounded-full border border-primary/10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signal */}
      <section className="py-16 bg-muted/30 border-y">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-background p-6 rounded-2xl border shadow-sm">
            <CheckCircle2 className="h-8 w-8 text-secondary shrink-0" />
            <span className="text-lg font-medium text-foreground">
              Pilot clients across Canada and the United States are using TruckEase to reduce admin time and close compliance gaps.
            </span>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Let us handle the paperwork.</h2>
          <Link href="/free-review" data-testid="services-bottom-cta">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 h-auto font-bold rounded-md shadow-lg transition-transform hover:-translate-y-1">
              Get My Free Fleet Review
            </Button>
          </Link>
          <p className="mt-4 text-sm text-primary-foreground/60 font-medium">Active operations only. Response within 1 business day.</p>
        </div>
      </section>
    </Layout>
  );
}
