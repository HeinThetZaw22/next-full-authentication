"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
import { getVerificationTokenByToken } from "@/data/verification-token";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);
 
    if(!validatedFields.success) {
        return { error: "Invalid fields"}
    }

    const { name, email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if(existingUser) {
        return { error: "Email already in use!"};
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    //todo: send verification token email
    const verificationToken = await generateVerificationToken(email);
    console.log("Generated token:", verificationToken.token);

    const storedToken = await getVerificationTokenByToken(verificationToken.token);
    console.log("stored token:", storedToken);
    
    await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token
    );

    return { success: "Confimation email sent!"};
}