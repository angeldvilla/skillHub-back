# SkillHub Backend

[![Node.js](https://img.shields.io/badge/Node.js-14.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-orange.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.x-green.svg)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-6.x-blue.svg)](https://mongoosejs.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-2.x-blue.svg)](https://cloudinary.com/)
[![MercadoPago](https://img.shields.io/badge/Mercado%20Pago-latest-green.svg)](https://www.mercadopago.com/)
[![JSON Web Tokens](https://img.shields.io/badge/JSON%20Web%20Tokens-latest-blue.svg)](https://jwt.io/)

Este es el backend de SkillHub, una aplicación que conecta a personas con habilidades y servicios para facilitar la colaboración y el intercambio de conocimientos. Aquí encontrarás la lógica y la API que respaldan la funcionalidad de SkillHub.

## Tecnologías Utilizadas

- **Node.js**: Plataforma de JavaScript del lado del servidor.
- **Express**: Framework de aplicaciones web para Node.js.
- **MongoDB**: Base de datos NoSQL para almacenar datos.
- **Mongoose**: Librería de modelado de objetos MongoDB para Node.js.
- **Cloudinary**: Servicio de almacenamiento y administración de imágenes en la nube.
- **MercadoPago**: Plataforma de pagos y cobros en línea.
- **JSON Web Tokens (JWT)**: Para la autenticación y autorización de usuarios.

## Configuración del Proyecto

1. Clona este repositorio: `git clone https://github.com/TuUsuario/SkillHub-Backend.git`
2. Instala las dependencias: `npm install`
3. Configura las variables de entorno en un archivo `.env`.

   ```env
   PORT=3001
   DB_URL = your-mongodb-uri
   DB_CLUSTER = your-cluster-mongodbAtlas
   DB_PASWWORD = **your-password-mongodbAtlas**
   DB_USER = your-user-mongodbAtlas
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   MERCADOPAGO_ACCESS_TOKEN=your-mercadopago-access-token
   JWT_SECRET=your-jwt-secret
   
Inicia el servidor: npm start
Endpoints
A continuación se enumeran algunos de los puntos finales (endpoints) que se trabajan de forma local de acuerdo al puerto donde se levante el servidor:

http://localhost:port/empleador: Gestión de los servicios (Ver todos los servicios, publicar un servicio, editar un servicio, desactivar un servicio, 
buscar por nombre y coincidencias).
http://localhost:port/empleador/allType: Gestión de las categorias en las que clasifica un servicio.
----------
http://localhost:port/user: Gestión de usuarios (Ver los usuarios registrados en la página, buscar un usuario en especifico, y su respectiva desactivación)
http://localhost:port/user/register: Gestión de registro de usuario (Registro del usuario, desde login o register)
----------
http://localhost:port/payment: Procesamiento de pagos a través de MercadoPago.
----------
http://localhost:port/reviews: Gestión de calificaciones(Recibir las calificaciones de los usuarios hacia la pagina)
----------
http://localhost:port/administrador: Gestión de un usuario super administrador(Dashboard para ver las acciones de la pagina)

...
Contribución
Si deseas contribuir a este proyecto, ¡estamos encantados de recibir tus aportaciones! Puedes hacerlo a través de pull requests.

Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.

Este README proporciona una descripción detallada de las tecnologías utilizadas, cómo configurar el proyecto y una visión general de los endpoints de la API. También incluye secciones para contribuciones y la licencia del proyecto. 
Puedes personalizarlo aún más según las necesidades de tu proyecto. ¡Espero que te sea útil!
