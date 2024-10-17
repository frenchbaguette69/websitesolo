"use server";

import prisma from "@/lib/db";
import { actionClient } from "@/lib/safe.action";
import { z } from "zod";

const createUserSchema = z.object({
    email: z.string().email(),
    name: z.string()
})

export const registerUser = actionClient.schema(createUserSchema).action(async ({ parsedInput: { name, email } }) => {
    
    const user = await prisma.user.findUnique({
        where: { email },
      });
  
      if (!user) {  
        const createdUser = await prisma.user.create({
          data: {
            email,
            name
          },
        });
    
        return createdUser;
      }
  
      return user;
});

type CreateProductInput = z.infer<typeof createUserSchema>;