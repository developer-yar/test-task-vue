import { IUserData } from "@/models/IUserData";

export type validatedFields = Exclude<keyof IUserData, "country">;
