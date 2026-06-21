import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function LegalDisclaimer() {
  useDocumentMeta(
    "Legal Disclaimer — TruckEase",
    "Important disclaimers regarding the nature of TruckEase services and the limits of our compliance tools."
  );

  return (
    <Layout>
      <section className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(220,63%,10%)]/80" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-6">Legal</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] max-w-3xl mb-6">
            Legal Disclaimer
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-white/60 font-medium max-w-lg leading-relaxed">
            Effective date: January 1, 2026
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-10 text-muted-foreground leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">No Legal or Regulatory Advice</h2>
              <p>TruckEase Solutions Inc. is a compliance tracking and fleet organization platform. The information, tools, and services we provide are intended to help owner-operators and small fleets organize their records, track renewal timelines, and maintain awareness of their compliance obligations. Nothing on this website or within our platform constitutes legal advice, regulatory advice, or professional consulting services of any kind.</p>
              <p className="mt-3">You should consult a qualified attorney or licensed regulatory consultant for advice specific to your situation, jurisdiction, or regulatory requirements.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Accuracy of Information</h2>
              <p>TruckEase makes reasonable efforts to ensure that the information on our platform is accurate and up to date. However, transportation regulations, filing deadlines, and compliance requirements vary by jurisdiction and change over time. We do not warrant the completeness, timeliness, or accuracy of any information provided through our Services.</p>
              <p className="mt-3">Users are solely responsible for verifying all regulatory requirements with the applicable government agencies, including FMCSA, Transport Canada, provincial bodies, and state agencies, before making compliance decisions.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p>To the fullest extent permitted by applicable law, TruckEase Solutions Inc. shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our platform or reliance on information we provide. This includes, without limitation, any missed filings, expired permits, regulatory penalties, or loss of operating authority.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Links and References</h2>
              <p>Our platform may reference or link to third-party websites, government portals, or regulatory resources. We do not control these external sites and are not responsible for their content, accuracy, or availability. Links are provided for reference only.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Jurisdiction</h2>
              <p>TruckEase serves carriers operating in both Canada and the United States. Regulatory requirements differ significantly between jurisdictions, provinces, and states. Users are responsible for understanding and complying with the rules applicable to their specific operations and routes.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
              <p>If you have questions about this disclaimer or the nature of our services, please contact us at <a href="mailto:support@truckeasesolutions.com" className="text-secondary hover:underline">support@truckeasesolutions.com</a>. Response hours are 8:00 AM to 6:00 PM EST, Monday through Friday.</p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
