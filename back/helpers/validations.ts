import { sendEmail } from "../mailer/mailer";
import User, { IUser } from "../models/users";

export const emailExist =async (email: string) : Promise <void> => {
    const emailInDB : IUser | null = await User.findOne({email })

    if (emailInDB && emailInDB.verified){
        throw new Error (`el mail ${email} ya fue registrado`)
    }

    if (emailInDB && !emailInDB.verified){
        await sendEmail( email, emailInDB.code as string)
        throw new Error(`El usuario ya está registrado. Se envió nuevamente código de verificación a ${email}`)
    }

}

export const emailNotExist =async (email: string) : Promise <void> => {
    const emailInDB : IUser | null = await User.findOne({email })

    if (!emailInDB){
        throw new Error (`el mail ${email} no está registrado`)
    }
}
