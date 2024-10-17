"use server";

import { actionClient, adminActionClient } from "@/lib/safe.action";
import { ProductCategory } from "@prisma/client";
import { z } from "zod";

export const createProductSchema = z.object({
    name: z.string(),
    price: z.number(),
    description: z.string(),
    image: z.string(),
    category: z.nativeEnum(ProductCategory),
    stock: z.number(),
});

export const createProduct = actionClient.schema(createProductSchema).action(async ({ parsedInput }) => {
    //TODO: PRISMA CLIENT QUERY
});

export type CreateProductInput = z.infer<typeof createProductSchema>;