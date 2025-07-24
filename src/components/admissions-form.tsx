
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/contexts/language-context";
import { useToast } from "@/hooks/use-toast";
import { submitAdmissionForm } from "@/app/actions";
import { useState } from "react";
import Link from "next/link";
import { Separator } from "./ui/separator";

export function AdmissionsForm() {
    const { t } = useLanguage();
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB
    const ACCEPTED_FILE_TYPES = ["application/pdf"];

    const formSchema = z.object({
        firstName: z.string().min(2, "First name is required."),
        lastName: z.string().min(2, "Last name is required."),
        email: z.string().email("Invalid email address."),
        mobile: z.string().min(10, "A valid mobile number is required."),
        idNumber: z.string().min(5, "A valid ID or Passport number is required."),
        cv: z.any()
            .refine((files) => files?.length > 0, "CV is required.")
            .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 3MB.`)
            .refine(
                (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
                "Only .pdf formats are supported."
            ),
        idDoc: z.any()
             .refine((files) => files?.length > 0, "ID document is required.")
             .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 3MB.`)
             .refine(
                (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
                "Only .pdf formats are supported."
            ),
        qualifications: z.any()
            .refine((files) => files?.length > 0, "Qualifications document is required.")
            .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 3MB.`)
            .refine(
                (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
                "Only .pdf formats are supported."
            ),
        howHeard: z.string({ required_error: "Please let us know how you heard about us." }),
        agreeTerms: z.boolean().refine(val => val === true, {
            message: "You must agree to the terms and conditions.",
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            idNumber: "",
            agreeTerms: false,
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
            if (value instanceof FileList) {
                formData.append(key, value[0]);
            } else {
                formData.append(key, value as string);
            }
        });

        // In a real app, you'd send formData to your server
        // For now, we use a placeholder function
        const result = await submitAdmissionForm(Object.fromEntries(formData.entries()));

        if (result.success) {
            toast({
                title: "Application Submitted!",
                description: "Thank you for your application. We will be in touch shortly.",
            });
            form.reset();
        } else {
            toast({
                title: "Error",
                description: result.message || "There was an error submitting your application. Please try again.",
                variant: "destructive",
            });
        }
        setIsSubmitting(false);
    }
    
    const cvRef = form.register("cv");
    const idDocRef = form.register("idDoc");
    const qualificationsRef = form.register("qualifications");

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="firstName" render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl><Input placeholder="John" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="lastName" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl><Input placeholder="Doe" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                </div>
                 <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl><Input placeholder="john.doe@example.com" {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                 <FormField control={form.control} name="mobile" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl><Input placeholder="+1 234 567 890" {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                )} />
                 <FormField control={form.control} name="idNumber" render={({ field }) => (
                    <FormItem>
                        <FormLabel>ID / Passport Number</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <Separator />
                
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Document Uploads</h3>
                    <p className="text-sm text-muted-foreground">
                        Upload your documents in PDF format, size less than 3MB.
                    </p>
                     <FormField control={form.control} name="cv" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Upload Your CV</FormLabel>
                            <FormControl><Input type="file" accept=".pdf" {...cvRef} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>
                    <FormField control={form.control} name="idDoc" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Upload Your ID</FormLabel>
                            <FormControl><Input type="file" accept=".pdf" {...idDocRef} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>
                    <FormField control={form.control} name="qualifications" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Upload Your Qualifications Documents</FormLabel>
                            <FormControl><Input type="file" accept=".pdf" {...qualificationsRef} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>
                </div>

                <Separator />
                
                <FormField control={form.control} name="howHeard" render={({ field }) => (
                    <FormItem>
                        <FormLabel>How did you hear about us?</FormLabel>
                        <Select onValuechange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="google">Google</SelectItem>
                                <SelectItem value="facebook">Facebook</SelectItem>
                                <SelectItem value="instagram">Instagram</SelectItem>
                                <SelectItem value="tiktok">TikTok</SelectItem>
                                <SelectItem value="friend-family">Friend / Family</SelectItem>
                                <SelectItem value="school-visit">School Visit</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )} />

                <FormField control={form.control} name="agreeTerms" render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                         <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                            <FormLabel>
                                I agree to the <Link href="/terms" className="underline hover:text-primary">terms and conditions</Link>.
                            </FormLabel>
                            <FormDescription>
                                By submitting this form, you agree to our privacy policy.
                            </FormDescription>
                            <FormMessage />
                        </div>
                    </FormItem>
                )} />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
                </Button>
            </form>
        </Form>
    );
}
