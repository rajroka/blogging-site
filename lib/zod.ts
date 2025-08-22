import { email, object, string } from "zod"

export const signInSchema = object({
  email: 
   email({ message: "Invalid email" })
    .min(1, { message: "Email is required" })
   ,
  password: string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be more than 8 characters" })
    .max(32, { message: "Password must be less than 32 characters" }),
})