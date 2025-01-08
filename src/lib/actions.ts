import { formSchema } from "./definition";
import { formState } from "./types";

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
