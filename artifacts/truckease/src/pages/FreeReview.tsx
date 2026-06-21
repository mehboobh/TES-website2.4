import { useState } from "react";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Layout } from "@/components/layout/Layout";
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
  dotNumber: z.string().min(1, { message: "DOT / MC / NSC / CVOR Number is required." }),
  operations: z.string().min(10, { message: "Please describe what you haul and where." }),
});

export default function FreeReview() {
  useDocumentMeta(
    "Free Fleet Review — TruckEase",
    "Get a free review of your fleet's compliance standing — DOT, authority status, filings, and more. Built for owner-operators and small carriers in Canada and the US."
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: "", email: "", dotNumber: "", operations: "" },
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
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-6">Free Review</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] max-w-3xl mb-6">
            Find Out Exactly Where Your Fleet Stands — Free
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-white/60 font-medium max-w-lg leading-relaxed">
            We review your compliance profile and tell you what's current, what's missing, and what needs attention.
          </motion.p>
        </div>
      </section>

      {/* FORM + WHAT WE CHECK */}
      <section className="py-24 md:py-32 bg-[hsl(220,20%,96%)]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* What We Check */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-secondary mb-8">What We Check</p>
              <div className="space-y-6">
                {[
                  "Safety and roadside profile",
                  "Operating authority status",
                  "Filing and regulatory standing",
                  "Canadian compliance indicators where applicable",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-8 h-8 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">{item}</p>
                    </div>
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
                      <h3 className="text-2xl font-bold text-foreground mb-3">Request Received</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Your review request has been received. We'll get back to you within 1 business day.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <h2 className="text-2xl font-bold text-foreground mb-8">Request Your Free Review</h2>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <FormField control={form.control} name="fullName" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-bold text-foreground">Full Name</FormLabel>
                              <FormControl><Input placeholder="John Doe" className={inputClass} {...field} data-testid="input-fullname" /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-bold text-foreground">Work Email</FormLabel>
                              <FormControl><Input type="email" placeholder="john@example.com" className={inputClass} {...field} data-testid="input-email" /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="dotNumber" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-bold text-foreground">DOT / MC / NSC / CVOR Number</FormLabel>
                              <FormControl><Input placeholder="Enter your number" className={inputClass} {...field} data-testid="input-dot" /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="operations" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-bold text-foreground">What do you haul and where do you run?</FormLabel>
                              <FormControl>
                                <Textarea placeholder="E.g., Flatbed hauling machinery across the midwest and Ontario..." className="min-h-[110px] rounded-xl resize-none border-border focus:border-secondary text-sm font-medium" {...field} data-testid="textarea-operations" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <div className="pt-2">
                            <button type="submit" className="w-full h-13 py-4 bg-secondary text-white font-bold text-base rounded-full hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg hover:shadow-secondary/20" data-testid="button-submit-review">
                              Send My Review Request
                            </button>
                            <p className="text-center text-xs text-muted-foreground mt-4 font-medium">
                              Active operations only. Results within 1 business day.
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
    </Layout>
  );
}