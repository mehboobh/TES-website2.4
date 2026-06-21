import { useState } from "react";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Valid email is required." }),
  dotNumber: z.string().min(1, { message: "DOT / MC / NSC / CVOR Number is required." }),
  operations: z.string().min(10, { message: "Please tell us what you haul and where." }),
});

export default function FreeReview() {
  useDocumentMeta(
    "Free Review", 
    "Get a free review of your fleet's compliance standing — DOT, authority status, filings, and more. Built for owner-operators and small carriers in Canada and the US."
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      dotNumber: "",
      operations: "",
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
            Find Out Exactly Where Your Fleet Stands — Free
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-primary-foreground/80"
          >
            We review your compliance profile and tell you what's current, what's missing, and what needs attention.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Column: What We Check */}
            <div>
              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
                  <ShieldCheck className="h-8 w-8 text-secondary" />
                  What We Check
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Safety and roadside profile</h3>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Operating authority status</h3>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Filing and regulatory standing</h3>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Canadian compliance indicators where applicable</h3>
                    </div>
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
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-primary">Review Request Received</h3>
                      <p className="text-muted-foreground text-lg">
                        Your review request has been received. We'll get back to you within 1 business day.
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
                                <Input placeholder="John Doe" className="h-12" {...field} data-testid="input-fullname" />
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
                                <Input type="email" placeholder="john@example.com" className="h-12" {...field} data-testid="input-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="dotNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-semibold">DOT / MC / NSC / CVOR Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your numbers" className="h-12" {...field} data-testid="input-dot" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="operations"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-semibold">What do you haul and where do you run?</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="E.g., Flatbed hauling machinery across the midwest and Ontario..." 
                                  className="min-h-[120px] resize-none" 
                                  {...field} 
                                  data-testid="textarea-operations"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="pt-4">
                          <Button type="submit" className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground" data-testid="button-submit-review">
                            Send My Review Request
                          </Button>
                          <p className="text-center text-sm text-muted-foreground mt-4">
                            Active operations only. Results within 1 business day.
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
    </Layout>
  );
}
