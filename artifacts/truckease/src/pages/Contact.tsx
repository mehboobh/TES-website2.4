import { useState } from "react";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare, HelpCircle } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Valid email is required." }),
  message: z.string().min(10, { message: "Please provide more details." }),
});

export default function Contact() {
  useDocumentMeta(
    "Contact", 
    "Have a question about fleet compliance or how TruckEase works? Reach out and a real person responds within 1 business day."
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
          >
            A Real Person Will Get Back to You
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-primary-foreground/80"
          >
            Question, specific compliance issue, or just want to know how TruckEase works — reach out. No sales pitch. Just answers.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Column: Quick Answers */}
            <div>
              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-8 text-primary flex items-center gap-3">
                  <HelpCircle className="h-8 w-8 text-secondary" />
                  Quick Answers
                </h2>
                <div className="space-y-6">
                  <div className="bg-muted p-6 rounded-xl border border-border/50">
                    <h3 className="font-bold text-lg mb-2">Do you work with single-truck operators?</h3>
                    <p className="text-muted-foreground">Yes. Built specifically for owner-operators and small fleets.</p>
                  </div>
                  <div className="bg-muted p-6 rounded-xl border border-border/50">
                    <h3 className="font-bold text-lg mb-2">Do you cover Canada and the US?</h3>
                    <p className="text-muted-foreground">Yes. DOT, MC, NSC, CVOR, and cross-border operations.</p>
                  </div>
                  <div className="bg-muted p-6 rounded-xl border border-border/50">
                    <h3 className="font-bold text-lg mb-2">How fast do you respond?</h3>
                    <p className="text-muted-foreground">Within 1 business day, personally.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div>
              <Card className="shadow-lg border-primary/10">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                        <MessageSquare className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-primary">Message Received</h3>
                      <p className="text-muted-foreground text-lg">
                        Message received. A real person will respond within 1 business day.
                      </p>
                    </motion.div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-semibold">Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" className="h-12" {...field} data-testid="input-contact-fullname" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-semibold">Work Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" className="h-12" {...field} data-testid="input-contact-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-semibold">Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="How can we help?" 
                                  className="min-h-[150px] resize-none" 
                                  {...field} 
                                  data-testid="textarea-contact-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="pt-4">
                          <Button type="submit" className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground" data-testid="button-submit-contact">
                            Send Message
                          </Button>
                          <p className="text-center text-sm text-muted-foreground mt-4">
                            We respond to every message personally.
                          </p>
                        </div>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </div>
            
          </div>
        </div>
      </section>

      {/* Bottom CTA section */}
      <section className="py-20 bg-muted/50 border-t text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Not ready? Start with the free review instead.</h2>
          <Link href="/free-review" data-testid="contact-bottom-cta">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 h-auto font-bold rounded-md shadow-sm">
              Get My Free Fleet Review
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
