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
import { Check, Mail, ShieldCheck, Lock } from "lucide-react";

type Step = "email" | "otp" | "form" | "success";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required." }),
  phone: z.string().min(7, { message: "Phone number is required." }),
  dotNumber: z.string().min(1, { message: "DOT / MC / NSC / CVOR Number is required." }),
  operations: z.string().min(10, { message: "Please describe what you haul and where." }),
});

export default function FreeReview() {
  useDocumentMeta(
    "Free Fleet Review — TruckEase",
    "Get a free review of your fleet's compliance standing — DOT, authority status, filings, and more. Built for owner-operators and small carriers in Canada and the US."
  );

  const [step, setStep] = useState<Step>("email");
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpInput, setOtpInput] = useState("");
  const [otpError, setOtpError] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: "", phone: "", dotNumber: "", operations: "" },
  });

  function handleSendOtp() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput || !emailRegex.test(emailInput)) {
      setEmailError("Please enter a valid work email.");
      return;
    }
    setEmailError("");
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(code);
    setStep("otp");
  }

  function handleVerifyOtp() {
    if (otpInput === generatedOtp) {
      setOtpError("");
      setStep("form");
    } else {
      setOtpError("Incorrect code. Please check and try again.");
    }
  }

  function handleResend() {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(code);
    setOtpInput("");
    setOtpError("");
  }

  function onSubmit(_values: z.infer<typeof formSchema>) {
    setStep("success");
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
                    <p className="text-lg font-bold text-foreground pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form Card */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="bg-white rounded-2xl shadow-lg p-10">
                <AnimatePresence mode="wait">

                  {/* STEP 1 — Email */}
                  {step === "email" && (
                    <motion.div key="email" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center">
                          <Mail className="h-4 w-4 text-secondary" />
                        </div>
                        <h2 className="text-xl font-bold text-foreground">Verify your email</h2>
                      </div>
                      <p className="text-sm text-muted-foreground mb-8 font-medium">Enter your work email to receive a verification code before filling out the form.</p>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-bold text-foreground block mb-2">Work Email <span className="text-secondary">*</span></label>
                          <input
                            type="email"
                            value={emailInput}
                            onChange={(e) => { setEmailInput(e.target.value); setEmailError(""); }}
                            onKeyDown={(e) => e.key === "Enter" && handleSendOtp()}
                            placeholder="you@company.com"
                            className={`w-full ${inputClass} px-4`}
                            data-testid="input-verify-email"
                          />
                          {emailError && <p className="text-xs text-red-500 mt-1.5 font-medium">{emailError}</p>}
                        </div>
                        <button
                          onClick={handleSendOtp}
                          className="w-full py-4 bg-secondary text-white font-bold text-base rounded-full hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg hover:shadow-secondary/20"
                          data-testid="button-send-otp-review"
                        >
                          Send Verification Code
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2 — OTP */}
                  {step === "otp" && (
                    <motion.div key="otp" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center">
                          <ShieldCheck className="h-4 w-4 text-secondary" />
                        </div>
                        <h2 className="text-xl font-bold text-foreground">Enter verification code</h2>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1 font-medium">
                        A 6-digit code was sent to <span className="text-foreground font-bold">{emailInput}</span>
                      </p>
                      {/* Demo helper */}
                      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6">
                        <p className="text-xs font-bold text-amber-700">Demo mode — your code is: <span className="font-mono tracking-widest text-sm">{generatedOtp}</span></p>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-bold text-foreground block mb-2">6-Digit Code <span className="text-secondary">*</span></label>
                          <input
                            type="text"
                            inputMode="numeric"
                            maxLength={6}
                            value={otpInput}
                            onChange={(e) => { setOtpInput(e.target.value.replace(/\D/g, "")); setOtpError(""); }}
                            onKeyDown={(e) => e.key === "Enter" && handleVerifyOtp()}
                            placeholder="000000"
                            className={`w-full ${inputClass} px-4 font-mono tracking-[0.4em] text-center text-xl`}
                            data-testid="input-otp-review"
                          />
                          {otpError && <p className="text-xs text-red-500 mt-1.5 font-medium">{otpError}</p>}
                        </div>
                        <button
                          onClick={handleVerifyOtp}
                          className="w-full py-4 bg-secondary text-white font-bold text-base rounded-full hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg hover:shadow-secondary/20"
                          data-testid="button-verify-otp-review"
                        >
                          Verify Code
                        </button>
                        <div className="flex items-center justify-between text-sm">
                          <button onClick={() => setStep("email")} className="text-muted-foreground hover:text-foreground transition-colors font-medium">← Change email</button>
                          <button onClick={handleResend} className="text-secondary hover:text-secondary/80 transition-colors font-semibold">Resend code</button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3 — Full Form */}
                  {step === "form" && (
                    <motion.div key="form" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center">
                          <Check className="h-4 w-4 text-emerald-600" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-foreground">Request Your Free Review</h2>
                          <p className="text-xs text-emerald-600 font-semibold">Email verified</p>
                        </div>
                      </div>

                      {/* Verified email (read-only) */}
                      <div className="mb-6">
                        <label className="text-sm font-bold text-foreground block mb-2">Work Email</label>
                        <div className="flex items-center gap-2 h-12 px-4 rounded-xl border border-border bg-muted/40">
                          <Lock className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                          <span className="text-sm font-medium text-muted-foreground">{emailInput}</span>
                        </div>
                      </div>

                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                          <FormField control={form.control} name="fullName" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-bold text-foreground">Full Name <span className="text-secondary">*</span></FormLabel>
                              <FormControl><Input placeholder="John Doe" className={inputClass} {...field} data-testid="input-fullname" /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="phone" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-bold text-foreground">Phone Number <span className="text-secondary">*</span></FormLabel>
                              <FormControl><Input type="tel" placeholder="+1 (555) 000-0000" className={inputClass} {...field} data-testid="input-phone-review" /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="dotNumber" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-bold text-foreground">DOT / MC / NSC / CVOR Number <span className="text-secondary">*</span></FormLabel>
                              <FormControl><Input placeholder="Enter your number" className={inputClass} {...field} data-testid="input-dot" /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="operations" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-bold text-foreground">What do you haul and where do you run? <span className="text-secondary">*</span></FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="E.g., Flatbed hauling machinery across the midwest and Ontario..."
                                  className="min-h-[110px] rounded-xl resize-none border-border focus:border-secondary text-sm font-medium"
                                  {...field}
                                  data-testid="textarea-operations"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <div className="pt-2">
                            <button type="submit" className="w-full py-4 bg-secondary text-white font-bold text-base rounded-full hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg hover:shadow-secondary/20" data-testid="button-submit-review">
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

                  {/* STEP 4 — Success */}
                  {step === "success" && (
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
