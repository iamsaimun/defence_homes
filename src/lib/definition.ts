import { z } from "zod";
export const formSchema = z.object({
  full_name: z
    .string()
    .min(3, { message: "At least 3 word you need to input" }),
  phone: z.string().min(11, { message: "Must have 11 digit" }),
  designation: z
    .string()
    .min(2, { message: "At least 2 word you need to input" }),
});
