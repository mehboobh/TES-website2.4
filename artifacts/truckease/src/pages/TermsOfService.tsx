import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function TermsOfService() {
  useDocumentMeta(
    "Terms of Service — TruckEase",
    "The terms and conditions governing your use of the TruckEase platform and services."
  );

  return (
    <Layout>
      <section className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(220,63%,10%)]/80" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-6">Legal</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] max-w-3xl mb-6">
            Terms of Service
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
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using the TruckEase Solutions Inc. website or services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services. These Terms apply to all visitors, users, and others who access or use the Services.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Services</h2>
              <p>TruckEase provides a compliance tracking and fleet management platform designed for owner-operators and small trucking fleets operating in Canada and the United States. Our Services include compliance status tracking, document organization tools, renewal tracking, and related professional services. Services are provided on a pilot basis and are subject to change.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Eligibility</h2>
              <p>You must be at least 18 years of age and operate an active trucking business in Canada or the United States to use our Services. By using the Services, you represent and warrant that you meet these requirements.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. User Responsibilities</h2>
              <p className="mb-3">You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing accurate and complete information when submitting forms or requests</li>
                <li>Maintaining the confidentiality of any account credentials</li>
                <li>Ensuring that any information you provide does not violate applicable laws or third-party rights</li>
                <li>Complying with all applicable federal, provincial, and state regulations governing your trucking operations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
              <p>All content on the TruckEase platform, including text, graphics, logos, and software, is the property of TruckEase Solutions Inc. and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
              <p>TruckEase Solutions Inc. provides compliance information and organizational tools as a support resource. We are not a licensed legal or regulatory advisory firm. Nothing in our Services constitutes legal advice. To the fullest extent permitted by law, TruckEase shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Services.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Modifications</h2>
              <p>We reserve the right to modify these Terms at any time. We will notify users of material changes by updating the effective date at the top of this page. Continued use of the Services after changes constitutes acceptance of the revised Terms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Termination</h2>
              <p>We reserve the right to suspend or terminate access to our Services at any time, with or without cause, and without prior notice. You may discontinue use of the Services at any time by contacting us.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
              <p>These Terms are governed by the laws of the applicable jurisdiction in which TruckEase Solutions Inc. is registered. Any disputes shall be resolved through good-faith negotiation before any formal proceedings are initiated.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact</h2>
              <p>For questions about these Terms, please contact us at <a href="mailto:support@truckeasesolutions.com" className="text-secondary hover:underline">support@truckeasesolutions.com</a>. Response hours are 8:00 AM to 6:00 PM EST, Monday through Friday.</p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
