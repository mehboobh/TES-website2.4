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
            Legal Disclaimer &amp; Service Limitation
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

            <p className="font-semibold text-foreground">PLEASE READ THIS DISCLAIMER CAREFULLY BEFORE USING TRUCKEASE SOLUTIONS INC.'S WEBSITE, PLATFORM, SOFTWARE, OR SERVICES.</p>
            <p>By accessing or using the TruckEase platform, website, software, or services, you acknowledge that you have read, understood, and agree to the terms and limitations described in this Legal Disclaimer.</p>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Independent Service Provider</h2>
              <p className="mb-4">TruckEase Solutions Inc. ("TruckEase", "we", "our", or "us") is a private software and compliance management support provider.</p>
              <p className="mb-3">TruckEase is:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Not affiliated with the Federal Motor Carrier Safety Administration (FMCSA);</li>
                <li>Not affiliated with the United States Department of Transportation (DOT);</li>
                <li>Not affiliated with Transport Canada;</li>
                <li>Not affiliated with any provincial, state, federal, or local government agency;</li>
                <li>Not endorsed by any government authority;</li>
                <li>Not a government contractor or representative;</li>
                <li>Not a law firm;</li>
                <li>Not legal counsel;</li>
                <li>Not a licensed regulatory consulting firm.</li>
              </ul>
              <p>Our platform and services are offered independently and are not official government services.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Client Responsibility for Regulatory Compliance</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">A. Sole Responsibility</h3>
              <p className="mb-3">You, as the carrier, owner-operator, fleet owner, business operator, or authorized representative, retain full responsibility for your regulatory, licensing, safety, and compliance obligations.</p>
              <p className="mb-3">You are solely responsible for:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Understanding applicable regulations;</li>
                <li>Monitoring regulatory changes;</li>
                <li>Maintaining required licenses and permits;</li>
                <li>Verifying renewal dates and filing deadlines;</li>
                <li>Submitting required forms and documentation;</li>
                <li>Maintaining accurate records;</li>
                <li>Complying with all applicable federal, state, provincial, and local requirements;</li>
                <li>Responding to inspections, audits, reviews, and investigations;</li>
                <li>Paying all fees, taxes, fines, penalties, and assessments associated with your operations.</li>
              </ul>
              <p>Your use of TruckEase does not transfer any legal or regulatory responsibility to TruckEase.</p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">B. Purpose of Our Services</h3>
              <p className="mb-3">TruckEase provides:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>Compliance tracking tools;</li>
                <li>Fleet organization software;</li>
                <li>Document management features;</li>
                <li>Reminder and notification systems;</li>
                <li>Administrative workflow assistance;</li>
                <li>Compliance status monitoring tools.</li>
              </ul>
              <p className="mb-3">TruckEase does not:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Guarantee compliance;</li>
                <li>Replace regulatory obligations;</li>
                <li>Serve as a legal representative;</li>
                <li>Act as a compliance consultant;</li>
                <li>Provide legal advice;</li>
                <li>File documents on your behalf unless expressly agreed in writing;</li>
                <li>Represent clients before any government agency.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">C. No Duty to Monitor Regulatory Changes</h3>
              <p className="mb-2">Although TruckEase may provide compliance-related tools and information, we do not undertake any legal duty to monitor regulatory changes for you.</p>
              <p className="mb-2">Regulations may change without notice.</p>
              <p>You are responsible for independently confirming all regulatory requirements directly with the appropriate government agencies and authorities.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. No Legal, Regulatory, or Professional Advice</h2>
              <p className="mb-4">All information provided through the TruckEase website, software, communications, reports, reminders, alerts, and support channels is provided for general informational and organizational purposes only.</p>
              <p className="mb-3">Nothing provided by TruckEase constitutes:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Legal advice;</li>
                <li>Regulatory advice;</li>
                <li>Financial advice;</li>
                <li>Tax advice;</li>
                <li>Accounting advice;</li>
                <li>Professional consulting services;</li>
                <li>Government guidance.</li>
              </ul>
              <p>You should consult qualified legal counsel, licensed compliance professionals, accountants, or other advisors regarding your specific circumstances.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Accuracy of Information</h2>
              <p className="mb-4">TruckEase strives to provide useful and accurate information; however, we make no guarantee regarding the accuracy, completeness, reliability, timeliness, or suitability of any information provided through our Services.</p>
              <p className="mb-3">Regulatory requirements frequently change and may vary by:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Jurisdiction;</li>
                <li>Province;</li>
                <li>State;</li>
                <li>Operating authority;</li>
                <li>Vehicle type;</li>
                <li>Fleet size;</li>
                <li>Business structure.</li>
              </ul>
              <p>Users are responsible for independently verifying all deadlines, filing requirements, permits, registrations, and compliance obligations.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Services Provided "As Is"</h2>
              <p className="mb-4">TruckEase services are provided on an <strong className="text-foreground">"AS IS"</strong> and <strong className="text-foreground">"AS AVAILABLE"</strong> basis.</p>
              <p className="mb-3">To the fullest extent permitted by law, TruckEase disclaims all express and implied warranties, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>Accuracy;</li>
                <li>Reliability;</li>
                <li>Availability;</li>
                <li>Merchantability;</li>
                <li>Fitness for a particular purpose;</li>
                <li>Non-infringement;</li>
                <li>Continuous operation;</li>
                <li>Error-free performance.</li>
              </ul>
              <p className="mb-3">We do not guarantee that:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>The platform will always be available;</li>
                <li>Errors will be corrected;</li>
                <li>Notifications will always be delivered;</li>
                <li>Reminder systems will prevent missed deadlines;</li>
                <li>Information will always be current.</li>
              </ul>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Errors and Omissions</h2>
              <p className="mb-3">Compliance requirements, filing deadlines, and regulatory information may be affected by:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Government updates;</li>
                <li>Data-entry errors;</li>
                <li>User errors;</li>
                <li>Software issues;</li>
                <li>Third-party system changes;</li>
                <li>Delayed information feeds.</li>
              </ul>
              <p>TruckEase expressly disclaims liability for any errors, omissions, inaccuracies, delays, or interruptions related to information provided through the platform or services.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">A. No Liability for Compliance Outcomes</h3>
              <p className="mb-3">To the fullest extent permitted by applicable law, TruckEase Solutions Inc., its officers, directors, employees, affiliates, contractors, and agents shall not be liable for any losses, damages, costs, penalties, or consequences arising from:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Missed deadlines;</li>
                <li>Expired permits;</li>
                <li>Regulatory violations;</li>
                <li>Safety violations;</li>
                <li>Audit findings;</li>
                <li>Roadside inspection outcomes;</li>
                <li>Government enforcement actions;</li>
                <li>Suspension of operating authority;</li>
                <li>Revocation of operating authority;</li>
                <li>Out-of-service orders;</li>
                <li>Insurance cancellations;</li>
                <li>Loss of contracts;</li>
                <li>Business interruption.</li>
              </ul>
              <p>All compliance-related outcomes remain solely your responsibility.</p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">B. Exclusion of Certain Damages</h3>
              <p className="mb-3">To the maximum extent permitted by law, TruckEase shall not be liable for any:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Indirect damages;</li>
                <li>Incidental damages;</li>
                <li>Consequential damages;</li>
                <li>Special damages;</li>
                <li>Punitive damages;</li>
                <li>Exemplary damages;</li>
                <li>Loss of profits;</li>
                <li>Loss of revenue;</li>
                <li>Loss of business opportunities;</li>
                <li>Loss of data;</li>
                <li>Loss of goodwill;</li>
                <li>Business interruption losses.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">C. Maximum Liability</h3>
              <p className="mb-3">If TruckEase is found liable for any claim despite the limitations contained in this Disclaimer, our total aggregate liability shall not exceed:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>The total amount paid by you to TruckEase during the six (6) months immediately preceding the event giving rise to the claim; or</li>
                <li>One Hundred U.S. Dollars (USD $100),</li>
              </ul>
              <p className="mt-2">whichever amount is greater.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Client Cooperation and Responsibilities</h2>
              <p className="mb-3">Effective compliance management requires cooperation between TruckEase and its users.</p>
              <p className="mb-3">You agree to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Provide complete and accurate information;</li>
                <li>Promptly update information when changes occur;</li>
                <li>Review reminders and notifications;</li>
                <li>Independently verify compliance requirements;</li>
                <li>Respond promptly to requests for information;</li>
                <li>Maintain copies of important records and documents.</li>
              </ul>
              <p>TruckEase shall not be responsible for consequences resulting from inaccurate, incomplete, outdated, or misleading information supplied by users.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Third-Party Services and Links</h2>
              <p className="mb-4">The TruckEase platform may contain links, references, or integrations with third-party services, including:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>FMCSA resources;</li>
                <li>DOT resources;</li>
                <li>Transport Canada resources;</li>
                <li>Government websites;</li>
                <li>Insurance providers;</li>
                <li>ELD providers;</li>
                <li>Payment processors;</li>
                <li>Other third-party vendors.</li>
              </ul>
              <p className="mb-3">These services are provided for convenience only.</p>
              <p className="mb-3">TruckEase does not control and is not responsible for:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Third-party content;</li>
                <li>Third-party availability;</li>
                <li>Third-party security practices;</li>
                <li>Third-party policies;</li>
                <li>Third-party accuracy.</li>
              </ul>
              <p>Users should review the terms and policies of all third-party services independently.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Indemnification</h2>
              <p className="mb-3">You agree to defend, indemnify, and hold harmless TruckEase Solutions Inc., its affiliates, officers, directors, employees, contractors, and agents from and against any and all claims, demands, liabilities, losses, damages, judgments, penalties, costs, expenses, and legal fees arising from:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Your use of the Services;</li>
                <li>Your violation of applicable laws;</li>
                <li>Your violation of the Terms of Service;</li>
                <li>Your regulatory non-compliance;</li>
                <li>Information you submit;</li>
                <li>Your negligence, misconduct, or omissions.</li>
              </ul>
              <p>This obligation survives termination of your relationship with TruckEase.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Jurisdiction and Governing Law</h2>
              <p className="mb-2">This Legal Disclaimer shall be governed by and interpreted under the laws of the jurisdiction in which TruckEase Solutions Inc. is legally registered, without regard to conflict-of-law principles.</p>
              <p>Nothing in this Disclaimer limits rights that cannot be waived under applicable law.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to This Disclaimer</h2>
              <p className="mb-3">TruckEase reserves the right to update or modify this Legal Disclaimer at any time.</p>
              <p className="mb-3">Material changes may be communicated through:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Website notices;</li>
                <li>Platform announcements;</li>
                <li>Email notifications.</li>
              </ul>
              <p>Continued use of the Services after changes become effective constitutes acceptance of the updated Disclaimer.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Acknowledgment</h2>
              <p className="mb-4">By accessing or using TruckEase Solutions Inc.'s platform, website, or services, you acknowledge and agree that:</p>
              <ul className="list-none pl-0 space-y-2">
                <li>✓ You have read and understood this Disclaimer;</li>
                <li>✓ You understand that TruckEase is not a government agency;</li>
                <li>✓ You understand that TruckEase does not provide legal advice;</li>
                <li>✓ You understand that TruckEase does not guarantee compliance;</li>
                <li>✓ You remain solely responsible for all regulatory obligations;</li>
                <li>✓ You agree to the limitation of liability provisions contained herein;</li>
                <li>✓ You agree to indemnify TruckEase as described above.</li>
              </ul>
              <p className="mt-4">If you do not agree with this Disclaimer, you must discontinue use of the Services immediately.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <div className="p-6 bg-muted rounded-lg space-y-2">
                <p className="font-bold text-foreground text-lg">TruckEase Solutions Inc.</p>
                <p>Legal Inquiries: <a href="mailto:legal@truckeasesolutions.com" className="text-secondary hover:underline">legal@truckeasesolutions.com</a></p>
                <p>Support: <a href="mailto:support@truckeasesolutions.com" className="text-secondary hover:underline">support@truckeasesolutions.com</a></p>
                <p>Privacy Inquiries: <a href="mailto:privacy@truckeasesolutions.com" className="text-secondary hover:underline">privacy@truckeasesolutions.com</a></p>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">This Legal Disclaimer &amp; Service Limitation is effective as of <strong>April 21, 2024</strong>, and was last updated on <strong>June 21, 2026</strong>.</p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
