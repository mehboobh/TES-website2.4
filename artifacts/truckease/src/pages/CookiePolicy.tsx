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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-white/60 font-medium leading-relaxed space-y-1">
            <p><strong className="text-white/80">Effective Date:</strong> April 21, 2024</p>
            <p><strong className="text-white/80">Last Updated:</strong> June 21, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-10 text-muted-foreground leading-relaxed text-base">

            <p>TruckEase Solutions Inc. ("TruckEase", "we", "our", or "us") uses cookies and similar technologies on truckeasesolutions.com and related services to improve website functionality, enhance user experience, analyze website performance, and support security features.</p>
            <p>This Cookie Policy explains what cookies are, how we use them, and the choices available to you regarding their use.</p>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies?</h2>
              <p className="mb-4">Cookies are small text files placed on your computer, tablet, smartphone, or other device when you visit a website.</p>
              <p className="mb-3">Cookies help websites:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Remember user preferences;</li>
                <li>Maintain login sessions;</li>
                <li>Improve website functionality;</li>
                <li>Analyze visitor behavior;</li>
                <li>Enhance security;</li>
                <li>Deliver relevant content and services.</li>
              </ul>
              <p>Cookies may be temporary (session cookies) or remain on your device for a longer period (persistent cookies).</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Cookies</h2>
              <p className="mb-3">TruckEase uses cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Enable essential website functions;</li>
                <li>Maintain secure user sessions;</li>
                <li>Improve website performance;</li>
                <li>Understand how visitors use our website;</li>
                <li>Remember user settings and preferences;</li>
                <li>Prevent fraud and unauthorized access;</li>
                <li>Measure the effectiveness of communications and website features;</li>
                <li>Support marketing activities where permitted by law and user consent.</li>
              </ul>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">A. Essential Cookies</h3>
              <p className="mb-3">These cookies are necessary for the operation of our website and platform.</p>
              <p className="mb-3">Examples include:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>User authentication;</li>
                <li>Account login sessions;</li>
                <li>Security and fraud prevention;</li>
                <li>Form submissions;</li>
                <li>Platform functionality.</li>
              </ul>
              <p className="mb-2">Without these cookies, certain parts of the website may not function properly.</p>
              <p>Because these cookies are required for core functionality, they generally cannot be disabled through our platform.</p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">B. Performance and Analytics Cookies</h3>
              <p className="mb-3">These cookies help us understand how visitors interact with our website.</p>
              <p className="mb-3">Examples include:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Page visits;</li>
                <li>Navigation patterns;</li>
                <li>Traffic sources;</li>
                <li>Time spent on pages;</li>
                <li>User interactions with website features.</li>
              </ul>
              <p className="mb-2">The information collected is generally aggregated and used to improve website performance and user experience.</p>
              <p>Analytics providers may include services such as Google Analytics or similar tools.</p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">C. Preference Cookies</h3>
              <p className="mb-3">Preference cookies allow the website to remember choices you make and provide a more personalized experience.</p>
              <p className="mb-3">Examples include:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Language preferences;</li>
                <li>Display settings;</li>
                <li>User interface preferences;</li>
                <li>Saved website selections.</li>
              </ul>
              <p>These cookies improve convenience and usability.</p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">D. Advertising and Marketing Cookies</h3>
              <p className="mb-3">Where permitted by applicable law and where consent has been provided, TruckEase may use advertising or marketing cookies.</p>
              <p className="mb-3">These cookies may be used to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Measure advertising effectiveness;</li>
                <li>Understand marketing campaign performance;</li>
                <li>Deliver more relevant advertisements;</li>
                <li>Limit repetitive advertisements.</li>
              </ul>
              <p>Advertising cookies are optional and may be disabled or declined where required by law.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Cookies</h2>
              <p className="mb-6">Some cookies may be placed by third-party service providers that assist us in operating our website and services.</p>
              <p className="mb-4">Examples may include:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">Service Type</th>
                      <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-border px-4 py-2">Analytics Providers</td><td className="border border-border px-4 py-2">Website performance and visitor analytics</td></tr>
                    <tr className="bg-muted/30"><td className="border border-border px-4 py-2">Payment Processors</td><td className="border border-border px-4 py-2">Secure payment processing</td></tr>
                    <tr><td className="border border-border px-4 py-2">Email Service Providers</td><td className="border border-border px-4 py-2">Support website communications and notifications</td></tr>
                    <tr className="bg-muted/30"><td className="border border-border px-4 py-2">Marketing Platforms</td><td className="border border-border px-4 py-2">Advertising and campaign measurement</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">These third parties maintain their own privacy and cookie practices. We encourage users to review their respective privacy policies.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookie Retention Periods</h2>
              <p className="mb-6">Cookies may remain on your device for different periods depending on their purpose.</p>
              <p className="mb-4">Typical retention periods include:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">Cookie Type</th>
                      <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">Typical Retention Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-border px-4 py-2">Session Cookies</td><td className="border border-border px-4 py-2">Until browser session ends</td></tr>
                    <tr className="bg-muted/30"><td className="border border-border px-4 py-2">Essential Authentication Cookies</td><td className="border border-border px-4 py-2">Up to 24 hours or logout</td></tr>
                    <tr><td className="border border-border px-4 py-2">Analytics Cookies</td><td className="border border-border px-4 py-2">Up to 26 months</td></tr>
                    <tr className="bg-muted/30"><td className="border border-border px-4 py-2">Preference Cookies</td><td className="border border-border px-4 py-2">Up to 12 months</td></tr>
                    <tr><td className="border border-border px-4 py-2">Advertising Cookies</td><td className="border border-border px-4 py-2">Up to 90 days</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">Actual retention periods may vary based on the service provider and browser settings.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookie Consent</h2>
              <p className="mb-3">Where required by applicable law, TruckEase will request consent before placing non-essential cookies on your device.</p>
              <p className="mb-3">This may include:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Analytics cookies;</li>
                <li>Preference cookies;</li>
                <li>Advertising cookies;</li>
                <li>Marketing-related tracking technologies.</li>
              </ul>
              <p>You may withdraw or modify your cookie preferences at any time, subject to browser limitations.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Managing Cookies</h2>
              <p className="mb-3">Most web browsers allow you to control cookies through browser settings.</p>
              <p className="mb-3">You can generally:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>View stored cookies;</li>
                <li>Delete existing cookies;</li>
                <li>Block specific cookies;</li>
                <li>Block all cookies;</li>
                <li>Receive notifications when cookies are placed.</li>
              </ul>
              <p className="mb-2">Browser controls are typically available within your browser's privacy or security settings.</p>
              <p>Please note that disabling certain cookies may affect website functionality and your ability to access certain features of the TruckEase platform.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Do Not Track Signals</h2>
              <p className="mb-2">Some browsers provide a "Do Not Track" (DNT) feature.</p>
              <p>Because there is no universally accepted standard for interpreting DNT signals, our website may not respond to all DNT browser settings. Users may control tracking preferences through cookie settings and browser controls where available.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Security and Cookies</h2>
              <p className="mb-3">TruckEase uses certain cookies and related technologies to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Authenticate users;</li>
                <li>Detect suspicious activity;</li>
                <li>Prevent unauthorized access;</li>
                <li>Enhance account security;</li>
                <li>Support fraud prevention measures.</li>
              </ul>
              <p>These cookies help maintain the security and integrity of our platform.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Cookie Policy</h2>
              <p className="mb-3">We may update this Cookie Policy periodically to reflect:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Changes in technology;</li>
                <li>Changes in legal requirements;</li>
                <li>Changes in our business practices;</li>
                <li>New website features and services.</li>
              </ul>
              <p className="mb-2">When updates are made, the "Last Updated" date at the top of this Cookie Policy will be revised.</p>
              <p>Continued use of our website after changes become effective constitutes acceptance of the updated Cookie Policy.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
              <p className="mb-4">If you have questions about this Cookie Policy or our use of cookies, please contact:</p>
              <div className="p-6 bg-muted rounded-lg space-y-2">
                <p>Privacy Inquiries: <a href="mailto:privacy@truckeasesolutions.com" className="text-secondary hover:underline">privacy@truckeasesolutions.com</a></p>
                <p>General Support: <a href="mailto:support@truckeasesolutions.com" className="text-secondary hover:underline">support@truckeasesolutions.com</a></p>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">This Cookie Policy is effective as of <strong>April 21, 2024</strong>, and was last updated on <strong>June 21, 2026</strong>.</p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
