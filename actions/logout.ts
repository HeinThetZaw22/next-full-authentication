"use server";

import { signOut } from "@/auth";

export const logout = async () => {
    // some server stuff like removing user data before client side logout
    await signOut();
}