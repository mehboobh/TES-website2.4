import { useState } from "react";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod/v4";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Valid work email is required." }),
  message: z.string().min(10, { message: "Please provide more detail." }),
});

const faqs = [
  { q: "Do you work with single-truck operators?", a: "Yes. Built specifically for owner-operators and small fleets." },
  { q: "Do you cover Canada and the US?", a: "Yes. DOT, MC, NSC, CVOR, and cross-border operations." },
  { q: "How fast do you respond?", a: "Within 1 business day, personally." },
];

export default function Contact() {
  useDocumentMeta(
    "Contact — TruckEase",
    "Have a question about fleet compliance or how TruckEase works? Reach out and a real person responds within 1 business day."
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: "", email: "", message: "" },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    setIsSubmitted(true);
  }

  const inputClass = "h-12 rounded-xl border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white text-sm font-medium transition-all";

  return (
    <Layout>
      {/* HERO */}
      <section className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(220,63%,10%)]/80" />
        <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none z-10" aria-hidden>
          <svg viewBox="0 0 600 600" fill="none" className="absolute right-[-80px] top-[15%] w-[520px] opacity-[0.05]">
            <rect x="0" y="0" width="520" height="36" rx="18" fill="white"/>
            <rect x="60" y="90" width="440" height="36" rx="18" fill="white"/>
            <rect x="0" y="180" width="520" height="36" rx="18" fill="white"/>
            <rect x="120" y="270" width="360" height="36" rx="18" fill="white"/>
          </svg>
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-6">Contact</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] max-w-3xl mb-6">
            A Real Person Will Get Back to You
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-white/60 font-medium max-w-lg leading-relaxed">
            Question, specific compliance issue, or just want to know how TruckEase works — reach out. No sales pitch. Just answers.
          </motion.p>
        </div>
      </section>

      {/* FORM + FAQS */}
      <section className="py-24 md:py-32 bg-[hsl(220,20%,96%)]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Quick Answers */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-8">Quick Answers</p>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white rounded-2xl p-7">
                    <h3 className="text-base font-bold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-medium">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="bg-white rounded-2xl shadow-lg p-10">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
                        <Check className="h-8 w-8 text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">Message Received</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        A real person will respond within 1 business day.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <h2 className="text-2xl font-bold text-foreground mb-8">Send a Message</h2>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <FormField control={form.control} name="fullName" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-bold text-foreground">Full Name</FormLabel>
                              <FormControl><Input placeholder="John Doe" className={inputClass} {...field} data-testid="input-contact-fullname" /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-bold text-foreground">Work Email</FormLabel>
                              <FormControl><Input type="email" placeholder="john@example.com" className={inputClass} {...field} data-testid="input-contact-email" /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="message" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-bold text-foreground">Message</FormLabel>
                              <FormControl>
                                <Textarea placeholder="How can we help?" className="min-h-[130px] rounded-xl resize-none border-border focus:border-secondary text-sm font-medium" {...field} data-testid="textarea-contact-message" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <div className="pt-2">
                            <button type="submit" className="w-full py-4 bg-secondary text-white font-bold text-base rounded-full hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg hover:shadow-secondary/20" data-testid="button-submit-contact">
                              Send Message
                            </button>
                            <p className="text-center text-xs text-muted-foreground mt-4 font-medium">
                              We respond to every message personally.
                            </p>
                          </div>
                        </form>
                      </Form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-white border-t border-border text-center">
        <div className="container mx-auto px-6 max-w-xl">
          <p className="text-lg font-medium text-muted-foreground mb-6">Not ready? Start with the free review instead.</p>
          <Link href="/free-review" data-testid="contact-bottom-cta">
            <button className="bg-secondary text-white font-bold text-base px-8 py-4 rounded-full hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg hover:shadow-secondary/20">
              Get My Free Fleet Review
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}