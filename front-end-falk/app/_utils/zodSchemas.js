import { z } from "zod"

export const loginSchema = z.object({
    email: z
    .string()
    .min(1, { message: "Esse campo deve ser preenchido." })
    .email("Não é um email válido"),
    password: z.string().min(4, { message: "Esse campo deve ser preenchido." })
})


export const signUpSchema = z.object({
    username: z
    .string()
    .min(4, {message: "Esse campo deve conter ao menos 4 caracteres."}),
    email: z
    .string()
    .min(1, { message: "Esse campo deve ser preenchido." })
    .email("Não é um email válido"),
    name: z.string().min(4, {message: "Esse campo deve conter ao menos 4 caracteres."}),
    telefone: z.string().min(9, {message: "Esse campo deve conter ao menos 9 caracteres."}),
    password: z.string().min(4, { message: "Esse campo deve ser preenchido." })
})

export const createCommunitySchema = z.object({
    name: z
    .string()
    .min(4, {message: "Esse campo deve conter ao menos 4 caracteres."}),
    description: z
    .string()
    .min(10, {message: "Esse campo deve conter ao menos 10 caracteres."}),
})