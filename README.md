


Una aplicación que hará que la busqueda de trabajadores para tareas del hogar sea mucho mas facíl; Electricistas, Gasistas, Plomeros, todo en un solo lugar. 

Entendemos que a la hora de hallar el trabajador indicado para ciertas tareas del hogar muchas veces requieren de una busqueda minusiosa y dificil pues no siempre se encuentra a la persona ideal para el trabajo, ContrataMe llega para brindar una solución eficaz para la búsqueda y realización del trabajo que requieras.

---

## <img width="40" height="40" src="https://img.icons8.com/cotton/40/movie-beginning--v1.png" alt="movie-beginning--v1"/> LINKS DE DEPLOY

--- Front end: https://c-16-62-n-node-react-vvlt.vercel.app



## <img width="40" height="40" src="https://img.icons8.com/ios-filled/40/rdp-connection.png" alt="rdp-connection"/>  TECNOLOGÍAS UTILIZADAS

### FRONT END

| FrontEnd |
| ------- |
| <img width="20" height="20" src="https://img.icons8.com/color/20/html-5--v1.png" alt="html-5"/> HTML5 |
| <img width="20" height="20" src="https://img.icons8.com/color/20/css3.png" alt="css3"/> CSS3 |
| <img width="20" height="20" src="https://img.icons8.com/office/20/react.png" alt="react"/> [React](https://react.dev/) |
| <img width="20" height="20" src="https://img.icons8.com/fluency/20/typescript--v1.png" alt="typescript--v1"/> [Typescript](https://www.typescriptlang.org/) |
| <img width="20" height="20" src="https://img.icons8.com/color/20/material-ui.png" alt="material-ui"/> [MUI](https://mui.com/), Material UI icons |


| Dependencias
| ------------- |
| [<img width="20" height="20" src="https://img.icons8.com/cute-clipart/20/react-native.png" alt="react"/> react-dom](https://www.npmjs.com/package/react-dom) |
| [<img width="20" height="20" src="https://img.icons8.com/cute-clipart/20/react-native.png" alt="react"/> react-router-dom](https://www.npmjs.com/package/react-router-dom) |
| [<img width="20" height="20" src="https://img.icons8.com/color/20/firebase.png" alt="firebase"/> firebase](https://firebase.google.com/) |
| [axios](https://axios-http.com/) |
| [react-hot-toast](https://react-hot-toast.com/) |
| [Tailwind CSS](https://tailwind.com) |
| [Flowbite](https://flowbite.com/) |


### BACK END

| BackEnd |
| -------- |
| [<img width="20" height="20" src="https://img.icons8.com/color/20/nodejs.png" alt="nodejs"/> NodeJS](https://nodejs.org/en) |
| [MongoDb](https://www.mongodb.com/es) |
| [Express](https://expressjs.com/es/) |

| Dependencias |
| ------------ |
| [<img width="20" height="20" src="https://img.icons8.com/fluency/20/typescript--v1.png" alt="typescript--v1"/> Typescript](https://www.typescriptlang.org/) |
| [NodeMailer](https://www.nodemailer.com/) |
| [Mongoose](https://www.mongoose.com/) |

### UX/UI

| UX / UI |
| -------- |
| <img width="20" height="20" src="https://img.icons8.com/color/20/figma--v1.png" alt="figma--v1"/> Figma |


---


## **Algunos ejemplos de pantallas**

- Inicio de sesión o registro:

![image](https://github.com/No-Country/C-16-62-n-node-react/blob/seba/front/src/assets/imgReadme/login.png)

- Registro: se agregan validaciones y se le avisa al usuario por medio e carteles antes errores y ante registro exitoso.

  ![image](https://github.com/No-Country/C-16-62-n-node-react/blob/seba/front/src/assets/imgReadme/registro.png)

- Pantalla de perfil:

![image](https://github.com/No-Country/C-16-62-n-node-react/blob/seba/front/src/assets/imgReadme/Perfil.png)

- Pantalla de Home/Oficios:

![image](https://github.com/No-Country/C-16-62-n-node-react/blob/seba/front/src/assets/imgReadme/Home.png)


---


## <img width="40" height="40" src="https://img.icons8.com/doodle/40/crowd.png" alt="crowd"/> ¿Cómo nos organizamos con el equipo?

Utilizamos la metodología **ágile** y **scrum**. 

Al ser pocos en el equipo (4 integrantes), teniamos reuniones en cortos lapsos de tiempo para debatir como ibamos en cuanto al front y el back, obviamos otras areas como las de UX y Test y las absorbimos en lo que era front y back, nos adaptamos sobre la marcha y al final terminamos programando las cosas de la siguiente manera.

Creamos un **MVP** y dividimos las tareas en **sprints** (con duración de una semana):


### Funcionalidades para el MVP:

- Registro y logueo

- Ver la pantalla de trabajadores y servicios que ofrecen.

- Ver perfil del trabajador y/o usuario.

- Permitir navegar a través de los diferentes oficios disponibles e indagar mejor en los perfiles seleccionados.

- Filtrar a los trabajadores por provincia y oficios

  
### **SPRINT 1** - Funcionalidades:

- Crear el Footer, Header y Navbar

- Pantalla de Login y Registro, la maquetación, sin la funcionalidad

- Creacion de base de datos para login y registro

###  **SPRINT 2** - Funcionalidades: 

- Se ajusta tanto el login como el registro para poder conectar back y front

- Se ajusta la pagina, teniendo ya los registros de usuarios conectados a la base de datos.

- Quedan definidos los controladores y las rutas por parte del back, asi como tambien la comprobación de datos a la hora de crear el usuario. 

- Se añade la extension de 'Trabajador' dentro del modelo de usuario para que cada usuario regisrado tenga la opción de publicar su perfil como trabajador.

### **SPRINT 3** - Funcionalidades:

- Se continua con el front, avanzando con el home principal donde se veran anunciados los trabajadores y sus oficios.

- Desde el back se aplica el nodemailer para permitir la verificacion de los correos de registro que lleguen a la base de datos.

### **SPRINT 4** - Funcionalidades:


- Se finaliza el Home y la pagina de cada usuario creado como 'Trabajador', donde se puede ver el oficio que realiza, la provincia dónde presta los servicios y otros detalles añadidos al perfil.

- Se ajustan los datos del suaurio para mostrarlos una vez logueado.
      
- Se añade un campo de reseñas donde cada usuario puede dejar la opinion del trabajador contratado luego de prestar sus servicios.

---

## ¿Cómo veo en local el Front y el Back ?

- 1ro: copiar el repositorio con: `git clone https://github.com/No-Country/s10-03-t-node-nest-react-binance.git`

- <img width="30" height="30" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/30/external-server-miscellaneous-kiranshastry-lineal-color-kiranshastry.png" alt="external-server-miscellaneous-kiranshastry-lineal-color-kiranshastry"/> 2do: Para el **Back** ir al repositorio **server** y ya dentro:

-> Instación de dependencias:  ```$ npm install```

-> Para correr la app:

En development: ```$ npm run start```

(watch mode)
```
$ npm run start:dev
```

En modo produccion: ```$ npm run start:prod```

-> Para los test:

(unit tests)
```
$ npm run test
```

(e2e tests)
```
$ npm run test:e2e
```

(test coverage)
```
$ npm run test:cov
```

- <img width="30" height="30" src="https://img.icons8.com/dusk/30/web.png" alt="web"/>  3ro.: para el **Front**, ir al repositorio en **client** y ya dentro:

-> Instación de dependencias:  ```$ npm install```

-> Para correr la app:

En development: ```$ npm run dev```

---


-> Para correr la app:

En development: ```$ npm run dev```

---
