import { z } from "zod"

export const loginSchema = z.object({
    email: z
    .string()
    .min(1, { message: "Esse campo deve ser preenchido." })
    .email("Não é um email válido"),
    password: z.string().min(4, { message: "Esse campo deve ser preenchido." })
})