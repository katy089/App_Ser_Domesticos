import User, { IUser, IWorker, IReview } from "../models/users";
import bcryptjs from "bcryptjs";
import { Request, Response } from "express";
import randomstring from "randomstring"
import { sendEmail } from "../mailer/mailer";


export const registerUser = async (req: Request, res: Response): Promise<void> => {

    const { name, email, phone, password }: IUser = req.body;

    const user = new User ({ name, email, password, phone });

     const saltRounds = 10;
     const salt = bcryptjs.genSaltSync(saltRounds);

     user.password = bcryptjs.hashSync(password, salt);

     const newCode = randomstring.generate(6);

        user.code = newCode

     await user.save();
     await sendEmail(email, newCode)
    
    res.status(201).json({
        user,
    });
};

export const verifyUser =async (req:Request, res:Response):Promise<void> => {
    const { email, code } = req.body
    
    try{
        const user = await User.findOne({email})

        if(!user){
            res.status(400).json({
                msg: "No se encontró el email en la base de datos"
            })
            return
        }

        if(user.verified){
            res.status(400).json({
                msg: "El usuario está correctamente verificado"
            })
            return
        }

        if(user.code !== code){
            res.status(401).json({
                msg: "El código ingresado es incorrecto"
            })
            return
        }

        const userUpdated = await User.findOneAndUpdate({email},{verified: true})

        res.status(200).json({
            msg: "Usuario verificado con éxito"
        })

    }catch(error){
        console.log(error)
        res.status(500).json({
            msg: "Error en el servidor"
        })
    }
}

export const logIn = async (req: Request, res: Response ) : Promise <void> =>{

    const { email, password } :IUser = req.body

    try {
        const user = await User.findOne({ email })
        if(!user){
            res.status(400).json({
                msg: "no se encontró el usuario en la base de datos"
            });
            return
        }

        const validatePassword = bcryptjs.compareSync(password, user.password)

        if(!validatePassword){
            res.status(400).json({
                msg: "la contraseña es incorrecta"
            });
            
        }
        

        res.json ({
            user

        })


    } catch (error) {
        console.log("error")
        res.status(500).json({
            msg: "error en el servidor"
        })
        
    }

}


export const addWorkerData = async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.userId; // Suponiendo que pasas el ID del usuario en la URL
    const { category, desc, provinceId, provinceName, cityId, cityName, address, fileAvatar }: IWorker = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return;
        }

        user.worker = { category, desc, provinceId, provinceName, cityId, cityName, fileAvatar, address };

        await user.save();

        res.status(200).json({ message: 'Datos de trabajador agregados exitosamente', user });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar los datos de trabajador', error });
    }
};
export const updateWorkerData = async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.userId;
    const { desc, address, cityName, provinceName, fileAvatar, phone }: Partial<IWorker & IUser> = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return;
        }

        if (user.worker !== undefined) {
            if (desc !== undefined) {
                user.worker.desc = desc;
            }
        
            if (address !== undefined) {
                user.worker.address = address;
            }
            if (fileAvatar !== undefined){
                user.worker.fileAvatar = fileAvatar
            }
        
            if (cityName !== undefined) {
                user.worker.cityName = cityName;
            }
            if (provinceName !== undefined) {
                user.worker.provinceName = provinceName;
            }
        }
        
        if (phone !== undefined) {
            user.phone = phone;
        }

        await user.save();

        res.status(200).json({ message: 'Datos actualizados exitosamente', user });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar los datos', error });
    }
};

  export const getUsers = async (req: Request, res: Response): Promise<void> => {

    const userId = req.params.userId;
    try {
        const user = await User.findById(userId);

        if (!user) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return;
        }

        res.status(200).json({
            name: user.name,
            email: user.email,
            phone: user.phone,
            worker: user.worker
            
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los datos del usuario', error });
    }


}
export const getWorkerUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const workerUsers = await User.find({ worker: { $exists: true } });

        res.status(200).json(workerUsers.map(user => ({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            worker: user.worker
        })));
    } catch (error) {
        console.error('Error al obtener los usuarios trabajadores:', error);
        res.status(500).json({ message: 'Error interno del servidor', error });
    }
};



