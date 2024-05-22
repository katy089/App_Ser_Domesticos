import nodemailer from "nodemailer"

const pass = process.env.MAIL

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "contrameapp@gmail.com",
        pass: "qvagzymjahmmalhf",
    },
    tls: {
        rejectUnauthorized: false
    },
    from: "contrameapp@gmail.com"
})

export const sendEmail =async (to:string, code: string ):Promise<void> => {
    try{
        const mailOptions={
            from: "contrameapp@gmail.com",
            to,
            subject: "Verifica tu cuenta",
            html: `
                <h1> ¡Gracias por registrarte en ContrataMe! </h1>
                Por favor, ingresa el siguiente código en la web para verificar tu cuenta: <b> ${code} </b>.
                <br>
            Si no te registraste en nuestra web, por favor ignora este correo.
            `
        }
        await transporter.sendMail(mailOptions)
        console.log("Correo electrónico enviado")
    }catch(error){
        console.error("Error al enviar el correo electrónico", error)
    }
}