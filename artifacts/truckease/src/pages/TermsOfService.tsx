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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-white/60 font-medium leading-relaxed space-y-1">
            <p><strong className="text-white/80">Effective Date:</strong> April 21, 2024</p>
            <p><strong className="text-white/80">Last Updated:</strong> June 21, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-10 text-muted-foreground leading-relaxed text-base">

            <p className="font-semibold text-foreground">PLEASE READ THESE TERMS OF SERVICE CAREFULLY BEFORE ACCESSING OR USING THE TRUCKEASE SOLUTIONS PLATFORM, WEBSITE, OR SERVICES.</p>
            <p>By accessing or using truckeasesolutions.com (the "Website"), dashboard, mobile application, or any services provided by TruckEase Solutions Inc. ("TruckEase," "Company," "we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms").</p>
            <p>If you do not agree with these Terms, you must not access or use our Services.</p>
            <p>If you are using the Services on behalf of a company, fleet, or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms.</p>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>By creating an account, accessing our platform, purchasing services, submitting information, or otherwise using our Services, you acknowledge that you have read, understood, and agree to be legally bound by these Terms, our Privacy Policy, Cookie Policy, and any additional policies we may publish from time to time.</p>
              <p className="mt-3">These Terms constitute a legally binding agreement between you and TruckEase Solutions Inc.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Eligibility</h2>
              <p className="mb-4">You must be at least eighteen (18) years of age to use our Services.</p>
              <p className="mb-3">By using the Services, you represent and warrant that:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>You are at least 18 years old;</li>
                <li>You have the legal capacity to enter into binding agreements;</li>
                <li>Any information you provide is true, accurate, and complete;</li>
                <li>You will comply with all applicable laws and regulations.</li>
              </ul>
              <p>If you are using the Services on behalf of a business entity, you represent that you are authorized to act on behalf of that entity.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Account Registration and Security</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">A. Account Creation</h3>
              <p className="mb-3">To access certain features, you may be required to create an account.</p>
              <p className="mb-3">You agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate and current information;</li>
                <li>Keep your account information updated;</li>
                <li>Maintain a valid email address;</li>
                <li>Comply with all account registration requirements.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">B. Account Security</h3>
              <p className="mb-3">You are responsible for maintaining the confidentiality of your account credentials.</p>
              <p className="mb-3">You agree to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Keep your login credentials secure;</li>
                <li>Not share your account with others;</li>
                <li>Notify us immediately of any unauthorized access;</li>
                <li>Accept responsibility for all activities occurring under your account.</li>
              </ul>
              <p>TruckEase is not responsible for losses resulting from unauthorized use of your account due to your failure to maintain account security.</p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">C. Account Termination by User</h3>
              <p className="mb-3">You may terminate your account at any time by:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Contacting support at <a href="mailto:support@truckeasesolutions.com" className="text-secondary hover:underline">support@truckeasesolutions.com</a>; or</li>
                <li>Using any account deletion tools made available through the platform.</li>
              </ul>
              <p>Termination does not automatically eliminate any obligations that arose before termination.</p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">D. Account Suspension or Termination by TruckEase</h3>
              <p className="mb-3">We may suspend, restrict, or terminate your account, with or without notice, if:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>You violate these Terms;</li>
                <li>You engage in fraudulent or illegal activity;</li>
                <li>You misuse our Services;</li>
                <li>You fail to pay applicable fees;</li>
                <li>We reasonably believe your actions create legal, regulatory, or security risks;</li>
                <li>We discontinue the Services.</li>
              </ul>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Acceptable Use</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use the Services for unlawful purposes;</li>
                <li>Submit false, misleading, or fraudulent information;</li>
                <li>Attempt to gain unauthorized access to systems or accounts;</li>
                <li>Introduce malware, viruses, worms, or malicious code;</li>
                <li>Interfere with platform functionality or security;</li>
                <li>Reverse engineer, decompile, or attempt to extract source code;</li>
                <li>Use automated tools to scrape or harvest platform data;</li>
                <li>Infringe intellectual property rights;</li>
                <li>Upload harmful, defamatory, abusive, or unlawful content;</li>
                <li>Impersonate another individual or organization.</li>
              </ul>
              <p className="mt-4">Any violation of this section may result in immediate account suspension or termination.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property Rights</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">A. TruckEase Intellectual Property</h3>
              <p className="mb-3">All rights, title, and interest in the Services, including software, content, graphics, trademarks, logos, functionality, and designs, are owned by TruckEase Solutions Inc. or its licensors.</p>
              <p className="mb-3">Nothing in these Terms transfers ownership of any intellectual property rights to you.</p>
              <p className="mb-3">You may not:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Copy;</li>
                <li>Modify;</li>
                <li>Reproduce;</li>
                <li>Distribute;</li>
                <li>Sell;</li>
                <li>License;</li>
                <li>Create derivative works from;</li>
              </ul>
              <p className="mt-3">any part of our Services without prior written consent.</p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">B. User Content</h3>
              <p className="mb-3">You retain ownership of information, documents, and compliance records you upload to the platform.</p>
              <p className="mb-3">By submitting content, you grant TruckEase a non-exclusive, worldwide, royalty-free license to use, store, display, process, and transmit such content solely for the purpose of providing the Services.</p>
              <p>This license terminates when your information is deleted, subject to legal retention obligations and backup procedures.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Fees, Billing, and Payments</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">A. Fees</h3>
              <p className="mb-2">Certain features or services may require payment.</p>
              <p className="mb-2">Pricing will be displayed on our website, platform, or purchasing interface.</p>
              <p>All fees are stated in the applicable currency and are subject to change.</p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">B. Payment Processing</h3>
              <p className="mb-2">Payments may be processed through third-party payment processors.</p>
              <p className="mb-2">TruckEase does not store complete credit card information.</p>
              <p>By submitting payment information, you authorize the processing of applicable charges.</p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">C. Taxes</h3>
              <p>You are responsible for all taxes, duties, assessments, and governmental charges associated with your use of the Services, except taxes imposed directly on TruckEase's income.</p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">D. Refunds</h3>
              <p>Unless otherwise required by law or explicitly stated in a separate written policy, fees paid are non-refundable.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Description of Services</h2>
              <p className="mb-4">TruckEase provides compliance tracking and fleet organization tools, including:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Compliance monitoring dashboards;</li>
                <li>Renewal and expiration reminders;</li>
                <li>Document management tools;</li>
                <li>Fleet management features;</li>
                <li>Compliance status tracking;</li>
                <li>Administrative workflow support;</li>
                <li>Other related technology services.</li>
              </ul>
              <p>TruckEase does not guarantee that use of the Services will result in compliance with any law, regulation, permit requirement, or government obligation.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Third-Party Services and Integrations</h2>
              <p className="mb-4">Our Services may include links, integrations, or references to third-party products, websites, databases, and services, including:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>FMCSA resources;</li>
                <li>Government agencies;</li>
                <li>Insurance providers;</li>
                <li>ELD providers;</li>
                <li>Payment processors;</li>
                <li>Analytics services.</li>
              </ul>
              <p className="mb-2">TruckEase does not control and is not responsible for third-party services or their content, security practices, or accuracy.</p>
              <p>Your use of third-party services is subject to their respective terms and privacy policies.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. No Professional Advice</h2>
              <p className="mb-4">TruckEase provides administrative tools and organizational software only.</p>
              <p className="mb-3">TruckEase does not provide:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Legal advice;</li>
                <li>Regulatory advice;</li>
                <li>Compliance consulting;</li>
                <li>Accounting advice;</li>
                <li>Tax advice;</li>
                <li>Professional advisory services.</li>
              </ul>
              <p>You are solely responsible for obtaining professional advice when required.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Warranties and Disclaimers</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">A. Services Provided "As Is"</h3>
              <p className="mb-4">The Services are provided on an <strong className="text-foreground">"AS IS"</strong> and <strong className="text-foreground">"AS AVAILABLE"</strong> basis.</p>
              <p className="mb-3">To the maximum extent permitted by law, TruckEase disclaims all warranties, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Merchantability;</li>
                <li>Fitness for a particular purpose;</li>
                <li>Non-infringement;</li>
                <li>Accuracy;</li>
                <li>Reliability;</li>
                <li>Availability.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">B. No Guarantee of Compliance</h3>
              <p className="mb-3">TruckEase does not guarantee:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Regulatory compliance;</li>
                <li>Successful audits;</li>
                <li>Filing approvals;</li>
                <li>Prevention of penalties;</li>
                <li>Prevention of missed deadlines;</li>
                <li>Continuous platform availability.</li>
              </ul>
              <p>Users remain solely responsible for complying with applicable laws and regulations.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Limitation of Liability</h2>
              <p className="mb-4">To the fullest extent permitted by applicable law, TruckEase Solutions Inc., its officers, directors, employees, affiliates, contractors, and agents shall not be liable for:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>Indirect damages;</li>
                <li>Incidental damages;</li>
                <li>Consequential damages;</li>
                <li>Special damages;</li>
                <li>Punitive damages;</li>
                <li>Loss of profits;</li>
                <li>Loss of business opportunities;</li>
                <li>Loss of revenue;</li>
                <li>Loss of data;</li>
                <li>Business interruption.</li>
              </ul>
              <p>This limitation applies regardless of the legal theory asserted.</p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Liability Cap</h3>
              <p className="mb-3">To the maximum extent permitted by law, TruckEase's total aggregate liability arising from or relating to the Services shall not exceed:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>The total fees paid by you during the six (6) months immediately preceding the claim; or</li>
                <li>One Hundred U.S. Dollars (USD $100), whichever amount is greater.</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Compliance-Related Liability</h3>
              <p className="mb-3">TruckEase shall not be liable for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Missed filings;</li>
                <li>Expired permits;</li>
                <li>Compliance violations;</li>
                <li>Regulatory penalties;</li>
                <li>Government investigations;</li>
                <li>Loss of operating authority;</li>
                <li>Insurance consequences;</li>
                <li>Audit findings;</li>
                <li>Roadside inspection violations.</li>
              </ul>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Indemnification</h2>
              <p className="mb-3">You agree to defend, indemnify, and hold harmless TruckEase Solutions Inc., its affiliates, employees, officers, directors, and agents from and against any claims, damages, liabilities, judgments, costs, penalties, expenses, or legal fees arising from:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your use of the Services;</li>
                <li>Your violation of these Terms;</li>
                <li>Your violation of applicable laws;</li>
                <li>Information you provide;</li>
                <li>Your negligence, misconduct, or regulatory non-compliance.</li>
              </ul>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Dispute Resolution</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">A. Informal Resolution</h3>
              <p className="mb-3">Before initiating formal legal proceedings, both parties agree to attempt to resolve disputes through good-faith discussions.</p>
              <p>Questions or disputes may be submitted to: <a href="mailto:legal@truckeasesolutions.com" className="text-secondary hover:underline font-medium">legal@truckeasesolutions.com</a></p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">B. Mediation and Arbitration</h3>
              <p>If a dispute cannot be resolved informally, the parties may agree to mediation before pursuing other legal remedies.</p>
              <p className="mt-2">Any mandatory arbitration provisions applicable under your jurisdiction shall be enforced to the fullest extent permitted by law.</p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">C. Governing Law</h3>
              <p>These Terms shall be governed by the laws of the jurisdiction in which TruckEase Solutions Inc. is legally registered, without regard to conflict-of-law principles.</p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">D. Class Action Waiver</h3>
              <p>To the fullest extent permitted by law, you agree that disputes shall be resolved on an individual basis and not as part of a class, collective, or representative action.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Termination</h2>
              <p className="mb-4">TruckEase may terminate or suspend access to the Services immediately if:</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>You violate these Terms;</li>
                <li>You engage in unlawful activity;</li>
                <li>Continued access presents legal or security risks;</li>
                <li>The Services are discontinued.</li>
              </ul>
              <p className="mb-3">Upon termination:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your access rights will cease;</li>
                <li>Certain information may be retained as described in our Privacy Policy;</li>
                <li>Any accrued obligations remain enforceable.</li>
              </ul>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Changes to These Terms</h2>
              <p className="mb-4">We may modify these Terms from time to time.</p>
              <p className="mb-3">When material changes are made, we may notify users via:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Website notice;</li>
                <li>Email notification; or</li>
                <li>Platform announcement.</li>
              </ul>
              <p>Continued use of the Services after changes become effective constitutes acceptance of the revised Terms.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">16. Survival</h2>
              <p className="mb-3">The following sections survive termination:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Intellectual Property Rights</li>
                <li>Warranties and Disclaimers</li>
                <li>Limitation of Liability</li>
                <li>Indemnification</li>
                <li>Dispute Resolution</li>
                <li>Payment Obligations</li>
                <li>Any provisions that by their nature should survive termination</li>
              </ul>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">17. General Provisions</h2>

              <h3 className="text-xl font-semibold text-foreground mb-2">Entire Agreement</h3>
              <p className="mb-5">These Terms, together with our Privacy Policy and related policies, constitute the entire agreement between you and TruckEase.</p>

              <h3 className="text-xl font-semibold text-foreground mb-2">Severability</h3>
              <p className="mb-5">If any provision is found unenforceable, the remaining provisions will remain in full force and effect.</p>

              <h3 className="text-xl font-semibold text-foreground mb-2">Waiver</h3>
              <p className="mb-5">Failure to enforce any provision shall not constitute a waiver of future enforcement.</p>

              <h3 className="text-xl font-semibold text-foreground mb-2">Force Majeure</h3>
              <p className="mb-5">TruckEase will not be liable for delays or failures caused by events beyond its reasonable control, including natural disasters, government actions, cyberattacks, labor disruptions, or internet failures.</p>

              <h3 className="text-xl font-semibold text-foreground mb-2">Assignment</h3>
              <p>You may not assign your rights under these Terms without our prior written consent. TruckEase may assign these Terms without restriction.</p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">18. Contact Information</h2>
              <div className="p-6 bg-muted rounded-lg space-y-2">
                <p className="font-bold text-foreground text-lg">TruckEase Solutions Inc.</p>
                <p>General Support: <a href="mailto:support@truckeasesolutions.com" className="text-secondary hover:underline">support@truckeasesolutions.com</a></p>
                <p>Legal Inquiries: <a href="mailto:legal@truckeasesolutions.com" className="text-secondary hover:underline">legal@truckeasesolutions.com</a></p>
                <p>Privacy Inquiries: <a href="mailto:privacy@truckeasesolutions.com" className="text-secondary hover:underline">privacy@truckeasesolutions.com</a></p>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">These Terms of Service are effective as of <strong>April 21, 2024</strong>, and were last updated on <strong>June 21, 2026</strong>.</p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
