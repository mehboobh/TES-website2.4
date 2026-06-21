import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function CookiePolicy() {
  useDocumentMeta(
    "Cookie Policy — TruckEase",
    "How TruckEase uses cookies and similar technologies on our website."
  );

  return (
    <Layout>
      <section className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(220,63%,10%)]/80" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-6">Legal</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] max-w-3xl mb-6">
            Cookie Policy
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
              <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They allow the website to remember your preferences and interactions over time. TruckEase Solutions Inc. uses cookies and similar technologies to operate and improve our website.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Essential Cookies</h3>
              <p>These cookies are required for the website to function properly. They enable core features such as page navigation, form submissions, and access to secure areas. The site cannot function correctly without these cookies, and they cannot be disabled.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Analytics Cookies</h3>
              <p>We use analytics cookies to understand how visitors interact with our website — which pages are visited, how long users stay, and how they navigate. This data is aggregated and anonymous. It helps us improve the experience for all users. We do not use this data to identify individual visitors.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Preference Cookies</h3>
              <p>These cookies allow the website to remember choices you have made, such as language or display preferences. They improve your experience by avoiding the need to re-enter your preferences on each visit.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Cookies</h2>
              <p>Some cookies on our site may be set by third-party services we use, such as analytics providers. These third parties have their own privacy policies governing their use of cookies. We do not control these cookies directly.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Managing Cookies</h2>
              <p>You can control and manage cookies through your browser settings. Most browsers allow you to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>View cookies stored on your device</li>
                <li>Delete cookies at any time</li>
                <li>Block cookies from specific websites</li>
                <li>Block all cookies from being set</li>
              </ul>
              <p className="mt-3">Please note that disabling certain cookies may affect the functionality of the TruckEase website. Refer to your browser's help documentation for instructions on managing cookies.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
              <p>We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will update the effective date at the top of this page when changes are made. We encourage you to review this policy periodically.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p>If you have questions about our use of cookies, please contact us at <a href="mailto:support@truckeasesolutions.com" className="text-secondary hover:underline">support@truckeasesolutions.com</a>. Response hours are 8:00 AM to 6:00 PM EST, Monday through Friday.</p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
