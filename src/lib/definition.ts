import { z } from "zod";
const formSchema = z.object({
  full_name: z
    .string()
    .min(3, { message: "At least 3 word you need to input" }),
  phone: z.string().min(11, { message: "Must have 11 digit" }),
  designation: z
    .string()
    .min(2, { message: "At least 2 word you need to input" }),
});

type formState =
  | {
      errors?: {
        full_name?: string[];
        phone?: string[];
        designation?: string[];
      };
      success?: string;
    }
  | undefined;

export async function validateForm(state: formState, formData: FormData) {
  const mainFormData = Object.fromEntries(formData);
  const validatedData = formSchema.safeParse(mainFormData);

  if (!validatedData.success) {
    const formFieldsErrors = validatedData.error.flatten().fieldErrors;
    return {
      errors: {
        full_name: formFieldsErrors.full_name,
        phone: formFieldsErrors.phone,
        designation: formFieldsErrors.designation,
      },
    };
  } else {
    return {
      success: "Information Submitted Successfully ! Thanks 😊",
    };
  }
}
