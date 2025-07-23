
"use server";

import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(formData: unknown) {
  const parsedData = contactFormSchema.safeParse(formData);

  if (!parsedData.success) {
    return { success: false, message: "Invalid data provided." };
  }
  
  // In a real application, you would save this data to a database.
  console.log("New contact form submission:", parsedData.data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true };
}

const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB
const ACCEPTED_FILE_TYPES = ["application/pdf"];

const admissionFormSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    mobile: z.string(),
    idNumber: z.string(),
    cv: z.any()
        .refine((files) => files?.length == 1, "CV is required.")
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 3MB.`)
        .refine(
        (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
        "Only .pdf formats are supported."
        ),
    idDoc: z.any()
        .refine((files) => files?.length == 1, "ID Document is required.")
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 3MB.`)
        .refine(
        (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
        "Only .pdf formats are supported."
        ),
    qualifications: z.any()
        .refine((files) => files?.length == 1, "Qualifications document is required.")
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 3MB.`)
        .refine(
        (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
        "Only .pdf formats are supported."
        ),
    howHeard: z.string(),
    agreeTerms: z.boolean(),
});

export async function submitAdmissionForm(formData: unknown) {
    // This is a placeholder. In a real app, you'd handle file uploads
    // to a storage service like Firebase Storage.
    console.log("New admission form submission:", formData);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
}
