import { Router } from "express";
import { registerUser, logIn, addWorkerData, verifyUser, updateWorkerData, getUsers, getWorkerUsers } from '../controllers/auth'; 
import { check } from "express-validator"; 
import { collectErrors } from "../middlewares/collectErrors"; 
import { createCheckSchema } from "express-validator/src/middlewares/schema";
import { register } from "module";
import { emailNotExist } from "../helpers/validations";



const router = Router ()

router.post("/register", [
    check ("name", "te falto el nombre").not().isEmpty(),
    check ("email", "faltó el email").isEmail(),
    check ("phone", "te faltó el teléfono").isNumeric(),
    check ("password", "la contraseña debe contener al menos 6 caracteres").isLength({min: 6}),
//    check ("email").custom(emailExist),
    collectErrors
], registerUser)

router.get("/workers", getWorkerUsers) // ruta para obtener solo los usuarios trabajadores
 router.get("/:userId", getUsers) 

router.post("/login", [
    check ("email", "faltó el email").isEmail(),
    check ("password", "la contraseña debe contener al menos 6 carácteres").isLength({ min: 6 }),
    check("email").custom(emailNotExist),
    collectErrors
], logIn)

router.patch("/verify", [
      check("email", "El email es requerido").isEmail(),
      check("code", "El código de verificación es requerido").not().isEmpty(),
      collectErrors,
    ],
    verifyUser
  );
  router.patch("/edit/:userId", updateWorkerData)
    
  router.post("/worker/:userId", [
    check("category", "Te faltó la categoría").not().isEmpty(),
    check("fileAvatar", "Faltó cargar una imagen").not().isEmpty(),
    check("desc", "Necesitas añadir una descripción").not().isEmpty(),
    check("provinceId", "Falta agregar la provincia").not().isEmpty(),
    check("provinceName", "Falta agregar la provincia").not().isEmpty(),
    check("cityId", "Faltó la ciudad").not().isEmpty(),
    check("cityName", "Faltó la ciudad").not().isEmpty(),
    check("address", "Faltó la dirección").not().isEmpty(),
    collectErrors
], addWorkerData);


export default router 
    

