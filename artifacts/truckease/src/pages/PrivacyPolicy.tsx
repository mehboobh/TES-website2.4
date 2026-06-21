import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  useDocumentMeta(
    "Privacy Policy — TruckEase",
    "How TruckEase collects, uses, and protects your personal information."
  );

  return (
    <Layout>
      <section className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(220,63%,10%)]/80" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-6">Legal</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] max-w-3xl mb-6">
            Privacy Policy
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
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Who We Are</h2>
              <p>TruckEase Solutions Inc. ("TruckEase", "we", "us", or "our") operates the TruckEase platform, which provides compliance tracking and fleet management tools for owner-operators and small trucking fleets across Canada and the United States. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website or services.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="mb-3">We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name and work email address when you submit a Free Review request or contact form</li>
                <li>DOT, MC, NSC, or CVOR numbers you voluntarily provide</li>
                <li>Descriptions of your operations that you share with us</li>
                <li>Communications you send to our support address</li>
              </ul>
              <p className="mt-3">We also collect limited technical data automatically, such as browser type, pages visited, and approximate location, via standard web analytics tools. We do not sell this data.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and deliver compliance reviews</li>
                <li>Communicate with you about your account or services</li>
                <li>Improve the TruckEase platform and user experience</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
              <p className="mt-3">We do not use your information for unsolicited marketing without your consent.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
              <p>We do not sell, rent, or share your personal information with third parties for their own marketing purposes. We may share your information with trusted service providers who assist us in operating our platform, subject to confidentiality obligations. We may also disclose information when required by law or to protect our legal rights.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Retention</h2>
              <p>We retain personal information for as long as necessary to provide our services and comply with our legal obligations. You may request deletion of your information at any time by contacting us at <a href="mailto:support@truckeasesolutions.com" className="text-secondary hover:underline">support@truckeasesolutions.com</a>.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have rights to access, correct, or delete your personal data. To exercise any of these rights, please contact us directly. We will respond within a reasonable time frame.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Security</h2>
              <p>We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, or loss. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
              <p>If you have questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@truckeasesolutions.com" className="text-secondary hover:underline">support@truckeasesolutions.com</a>. Response hours are 8:00 AM to 6:00 PM EST, Monday through Friday.</p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
