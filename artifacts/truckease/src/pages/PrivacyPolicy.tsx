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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-white/60 font-medium leading-relaxed space-y-1">
            <p><strong className="text-white/80">Effective Date:</strong> April 21, 2024</p>
            <p><strong className="text-white/80">Last Updated:</strong> June 21, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-10 text-muted-foreground leading-relaxed text-base">

            <p>TruckEase Solutions Inc. ("TruckEase", "we", "our", or "us") operates the TruckEase platform, website, and related compliance tracking services for owner-operators and trucking fleets operating in Canada and the United States.</p>
            <p>We are committed to protecting your privacy and handling your personal information in a transparent, secure, and responsible manner. This Privacy Policy explains what information we collect, how we use it, how we protect it, and the rights available to you under applicable privacy laws, including Canada's Personal Information Protection and Electronic Documents Act (PIPEDA), the California Consumer Privacy Act (CCPA/CPRA), and other applicable laws.</p>
            <p>By accessing or using our website, platform, or services, you consent to the practices described in this Privacy Policy.</p>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Privacy Officer</h2>
              <p>TruckEase Solutions Inc. has designated a Privacy Officer responsible for overseeing our privacy compliance program.</p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="font-semibold text-foreground">Privacy Officer</p>
                <p>Email: <a href="mailto:privacy@truckeasesolutions.com" className="text-secondary hover:underline">privacy@truckeasesolutions.com</a></p>
              </div>
              <p className="mt-4">For any privacy-related request, concern, complaint, or inquiry, please contact our Privacy Officer. We aim to respond to all privacy requests within applicable legal timeframes.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p>We collect information you provide directly to us, information generated through your use of our services, and information received from authorized third-party sources.</p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">A. Information You Provide</h3>
              <p className="mb-4">This may include:</p>

              <h4 className="text-base font-bold text-foreground mt-5 mb-2">Contact Information</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
              </ul>

              <h4 className="text-base font-bold text-foreground mt-5 mb-2">Account Information</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Username</li>
                <li>Password</li>
                <li>Authentication credentials</li>
                <li>Security questions and answers</li>
              </ul>

              <h4 className="text-base font-bold text-foreground mt-5 mb-2">Business Information</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Company name</li>
                <li>USDOT Number</li>
                <li>MC Number</li>
                <li>NSC or CVOR Number (where applicable)</li>
                <li>Fleet size</li>
                <li>Operating jurisdictions</li>
              </ul>

              <h4 className="text-base font-bold text-foreground mt-5 mb-2">Payment Information</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Billing information</li>
                <li>Subscription details</li>
                <li>Payment confirmations</li>
              </ul>
              <p className="mt-3 text-sm italic">TruckEase does not store full credit card numbers. Payments are processed by authorized third-party payment processors.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">B. Fleet and Compliance Information</h3>
              <p className="mb-4">To provide compliance tracking services, we may collect:</p>

              <h4 className="text-base font-bold text-foreground mt-5 mb-2">Vehicle Information</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Vehicle Identification Numbers (VINs)</li>
                <li>License plate information</li>
                <li>Vehicle make, model, and year</li>
              </ul>

              <h4 className="text-base font-bold text-foreground mt-5 mb-2">Driver Information</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Driver names</li>
                <li>Driver licensing information</li>
                <li>CDL details</li>
                <li>Compliance-related dates and records</li>
              </ul>

              <h4 className="text-base font-bold text-foreground mt-5 mb-2">Compliance Documentation</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Insurance documentation</li>
                <li>Maintenance records</li>
                <li>Registration information</li>
                <li>Permit and renewal dates</li>
                <li>Safety and regulatory records</li>
                <li>Hours-of-service records</li>
                <li>Drug and alcohol program documentation</li>
                <li>Other compliance-related records voluntarily submitted by users</li>
              </ul>
            </div>

            <hr className="border-border" />

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">C. Automatically Collected Information</h3>
              <p className="mb-4">When you visit our website or use our platform, we may automatically collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device identifiers</li>
                <li>Operating system</li>
                <li>Pages viewed</li>
                <li>Time spent on pages</li>
                <li>Referral URLs</li>
                <li>Usage patterns and interactions</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </div>

            <hr className="border-border" />

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">D. Information from Third Parties</h3>
              <p className="mb-4">We may receive information from:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>FMCSA public databases</li>
                <li>Government compliance databases</li>
                <li>Integration partners</li>
                <li>Payment processors</li>
                <li>Third-party verification providers</li>
              </ul>
              <p className="mt-3">Information obtained from these sources is used only to provide or improve our services.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Information</h2>
              <p className="mb-4">We use collected information for the following purposes:</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Service Delivery</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Providing compliance tracking tools</li>
                <li>Managing customer accounts</li>
                <li>Delivering platform functionality</li>
                <li>Organizing compliance documents</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Communications</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Sending service-related notifications</li>
                <li>Delivering renewal reminders</li>
                <li>Responding to support requests</li>
                <li>Providing account updates</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Billing and Payments</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Processing subscriptions</li>
                <li>Managing invoices</li>
                <li>Verifying transactions</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Platform Improvement</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Improving website performance</li>
                <li>Analyzing usage trends</li>
                <li>Enhancing user experience</li>
                <li>Developing new features</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Security and Fraud Prevention</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Protecting accounts</li>
                <li>Detecting unauthorized access</li>
                <li>Investigating misuse</li>
                <li>Preventing fraud</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Legal Compliance</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Meeting regulatory obligations</li>
                <li>Responding to lawful requests</li>
                <li>Enforcing agreements</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Marketing Communications</h3>
              <p>Where legally permitted or where consent has been obtained, we may send newsletters, updates, and promotional communications.</p>
              <p className="mt-2">You may unsubscribe from marketing emails at any time.</p>
              <p className="mt-4 font-semibold text-foreground">We do not sell your personal information and do not use your fleet compliance data for third-party marketing purposes.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Legal Bases for Processing</h2>
              <p className="mb-4">Depending on your jurisdiction, we process information based on:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Performance of a contract</li>
                <li>Consent</li>
                <li>Legitimate business interests</li>
                <li>Compliance with legal obligations</li>
                <li>Protection against fraud and security threats</li>
              </ul>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. How We Collect Information</h2>
              <p className="mb-4">We collect information through:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Account registration</li>
                <li>Contact forms</li>
                <li>Service requests</li>
                <li>Document uploads</li>
                <li>Customer communications</li>
                <li>Website interactions</li>
                <li>Cookies and analytics technologies</li>
                <li>Integration partners</li>
                <li>Public regulatory databases</li>
              </ul>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
              <p className="mb-6">We retain information only as long as necessary to fulfill the purposes outlined in this Policy and to satisfy legal, regulatory, tax, accounting, or reporting requirements.</p>
              <p className="mb-4">Typical retention periods may include:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">Data Category</th>
                      <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-border px-4 py-2">Active Account Information</td><td className="border border-border px-4 py-2">Duration of account plus 2 years</td></tr>
                    <tr className="bg-muted/30"><td className="border border-border px-4 py-2">Billing and Transaction Records</td><td className="border border-border px-4 py-2">Up to 7 years</td></tr>
                    <tr><td className="border border-border px-4 py-2">Compliance Records</td><td className="border border-border px-4 py-2">Duration of service plus up to 5 years</td></tr>
                    <tr className="bg-muted/30"><td className="border border-border px-4 py-2">Support Records</td><td className="border border-border px-4 py-2">Up to 2 years after last interaction</td></tr>
                    <tr><td className="border border-border px-4 py-2">Marketing Consent Records</td><td className="border border-border px-4 py-2">Up to 2 years after withdrawal of consent</td></tr>
                    <tr className="bg-muted/30"><td className="border border-border px-4 py-2">Analytics Data</td><td className="border border-border px-4 py-2">Up to 26 months</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">When information is no longer required, it is securely deleted or anonymized.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. How We Share Information</h2>
              <p className="mb-4">We may share information with trusted third parties that help us operate our business.</p>
              <p className="mb-4">These may include:</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Cloud Hosting Providers</h3>
              <p>For platform hosting, storage, backup, and infrastructure.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Payment Processors</h3>
              <p>For payment processing and billing.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Email and Communication Providers</h3>
              <p>For notifications, reminders, and customer support communications.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Analytics Providers</h3>
              <p>To understand website performance and usage trends.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Customer Support Platforms</h3>
              <p>To manage support requests and customer communications.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Government or Regulatory Sources</h3>
              <p>When required for compliance verification or legal obligations.</p>

              <p className="mt-6">All service providers are expected to protect personal information and use it only for authorized purposes.</p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-2">Legal Requirements</h3>
              <p className="mb-3">We may disclose information when required by:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Applicable laws</li>
                <li>Court orders</li>
                <li>Subpoenas</li>
                <li>Regulatory investigations</li>
                <li>Government requests</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-2">Business Transfers</h3>
              <p>If TruckEase undergoes a merger, acquisition, restructuring, financing transaction, or sale of assets, information may be transferred as part of that transaction.</p>
              <p className="mt-2">Users will be notified where required by law.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. International Data Transfers</h2>
              <p className="mb-4">TruckEase may store or process information in countries outside your province, state, or country of residence, including the United States.</p>
              <p className="mb-4">As a result, information may become subject to the laws and lawful access requirements of those jurisdictions.</p>
              <p className="mb-4">To protect personal information, we implement appropriate safeguards including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Contractual confidentiality obligations</li>
                <li>Secure hosting environments</li>
                <li>Encryption technologies</li>
                <li>Access controls</li>
                <li>Vendor due diligence procedures</li>
              </ul>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Data Security</h2>
              <p className="mb-4">TruckEase uses commercially reasonable administrative, technical, and physical safeguards to protect information.</p>
              <p className="mb-6">Security measures include:</p>

              <h3 className="text-xl font-semibold text-foreground mb-2">Technical Safeguards</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>TLS/SSL encryption during transmission</li>
                <li>Encryption at rest</li>
                <li>Firewalls</li>
                <li>Access restrictions</li>
                <li>Multi-factor authentication where applicable</li>
                <li>Monitoring and logging systems</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Administrative Safeguards</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Employee confidentiality obligations</li>
                <li>Security awareness training</li>
                <li>Access management procedures</li>
                <li>Incident response planning</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Physical Safeguards</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Secure hosting facilities</li>
                <li>Vendor security controls</li>
                <li>Restricted access procedures</li>
              </ul>

              <p className="mt-4">While we strive to protect your information, no system can guarantee absolute security.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Data Breach Response</h2>
              <p>If a security incident involving personal information occurs, TruckEase will take appropriate measures to investigate, mitigate risks, and provide notifications where required by applicable law.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Your Privacy Rights</h2>
              <p className="mb-6">Depending on your location, you may have rights including:</p>

              <h3 className="text-xl font-semibold text-foreground mb-1">Right of Access</h3>
              <p>Request access to personal information we maintain about you.</p>

              <h3 className="text-xl font-semibold text-foreground mt-5 mb-1">Right to Correction</h3>
              <p>Request correction of inaccurate information.</p>

              <h3 className="text-xl font-semibold text-foreground mt-5 mb-1">Right to Deletion</h3>
              <p>Request deletion of personal information, subject to legal and regulatory requirements.</p>

              <h3 className="text-xl font-semibold text-foreground mt-5 mb-1">Right to Withdraw Consent</h3>
              <p>Withdraw consent for certain processing activities.</p>

              <h3 className="text-xl font-semibold text-foreground mt-5 mb-1">Right to Data Portability</h3>
              <p>Request a copy of personal information in a portable format where applicable.</p>

              <h3 className="text-xl font-semibold text-foreground mt-5 mb-1">Right to Object or Restrict Processing</h3>
              <p>Object to certain forms of data processing where permitted by law.</p>

              <h3 className="text-xl font-semibold text-foreground mt-5 mb-1">Right to Non-Discrimination</h3>
              <p>You will not be discriminated against for exercising your privacy rights.</p>

              <p className="mt-6">To exercise these rights, contact: <a href="mailto:privacy@truckeasesolutions.com" className="text-secondary hover:underline font-medium">privacy@truckeasesolutions.com</a></p>
              <p className="mt-2">We may require verification of your identity before responding.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Children's Privacy</h2>
              <p>TruckEase services are intended exclusively for individuals who are at least 18 years of age.</p>
              <p className="mt-3">We do not knowingly collect personal information from anyone under 18 years of age.</p>
              <p className="mt-3">If we learn that information from a child has been collected, we will take appropriate steps to delete it.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Cookies and Tracking Technologies</h2>
              <p className="mb-4">Our website uses cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>Maintain user sessions</li>
                <li>Improve website functionality</li>
                <li>Analyze traffic and engagement</li>
                <li>Remember user preferences</li>
                <li>Support security features</li>
              </ul>
              <p className="mb-4">Types of cookies may include:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Essential Cookies</li>
                <li>Analytics Cookies</li>
                <li>Preference Cookies</li>
                <li>Advertising Cookies (where consent is obtained)</li>
              </ul>
              <p>For more information, please refer to our Cookie Policy.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Automated Decision-Making</h2>
              <p className="mb-4">TruckEase uses automated systems to provide:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Compliance reminders</li>
                <li>Renewal notifications</li>
                <li>Dashboard alerts</li>
                <li>Tracking updates</li>
              </ul>
              <p>These systems are designed solely to assist users with compliance organization and do not replace the user's responsibility to satisfy regulatory requirements.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy periodically to reflect legal, technical, or business changes.</p>
              <p className="mt-3">When material changes occur, we will provide notice through our website, email, or other appropriate methods.</p>
              <p className="mt-3">The updated version will be identified by the revised "Last Updated" date at the top of this Privacy Policy.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">16. Contact Us</h2>
              <div className="p-6 bg-muted rounded-lg space-y-2">
                <p className="font-bold text-foreground text-lg">TruckEase Solutions Inc.</p>
                <p>Privacy Inquiries: <a href="mailto:privacy@truckeasesolutions.com" className="text-secondary hover:underline">privacy@truckeasesolutions.com</a></p>
                <p>General Support: <a href="mailto:support@truckeasesolutions.com" className="text-secondary hover:underline">support@truckeasesolutions.com</a></p>
                <p>Legal Inquiries: <a href="mailto:legal@truckeasesolutions.com" className="text-secondary hover:underline">legal@truckeasesolutions.com</a></p>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">This Privacy Policy is effective as of <strong>April 21, 2024</strong> and was last updated on <strong>June 21, 2026</strong>.</p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
