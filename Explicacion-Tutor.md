# Explicación del Proceso - Primera Entrega Backend III

¡Hola! Como tu tutor, he preparado este resumen detallado de los pasos seguidos para completar esta primera entrega. El objetivo principal fue crear un sistema de generación de datos falsos (mocking) e integrarlo en nuestra arquitectura de servidor Express con persistencia en MongoDB.

## 1. Estructura del Proyecto
Hemos organizado el código siguiendo el patrón de diseño **MVC (Modelo-Controlador-Ruta)** para mantener el proyecto escalable y limpio.
- **`src/models/`**: Definimos los esquemas de Mongoose para `User` y `Pet`.
- **`src/controllers/`**: Aquí reside la lógica de negocio que maneja las peticiones HTTP.
- **`src/routes/`**: Definimos los endpoints y los conectamos con sus controladores.
- **`src/services/`**: Creamos un servicio de Mocking para centralizar la generación de datos aleatorios.
- **`src/utils/`**: Herramientas reutilizables, como la encriptación de contraseñas.

## 2. Implementación del Mocking
Utilizamos la librería `@faker-js/faker` para generar datos realistas.
- **Usuarios**: Se generan con nombres, apellidos y correos aleatorios. Cumpliendo con el requerimiento, todos comparten la contraseña `coder123` (encriptada con `bcrypt`), tienen roles aleatorios (`user` o `admin`) y comienzan sin mascotas.
- **Mascotas**: Se generan con nombres de animales y especies aleatorias.

## 3. Endpoints Creados
Se desarrolló el `mocks.router.js` bajo la ruta base `/api/mocks`:

- **`GET /api/mocks/mockingusers`**: Genera 50 usuarios ficticios al vuelo sin guardarlos en la base de datos (ideal para pruebas rápidas).
- **`GET /api/mocks/mockingpets`**: Endpoint migrado que permite generar una cantidad variable de mascotas (pasando el parámetro `?q=N`).
- **`POST /api/mocks/generateData`**: Este es el endpoint principal. Recibe en el cuerpo de la petición cuántos usuarios (`users`) y cuántas mascotas (`pets`) queremos crear. Los genera y los **inserta masivamente** en la base de datos.

## 4. Verificación de Datos
Para cumplir con el criterio de aceptación de comprobar los registros, se habilitaron rutas básicas:
- **`GET /api/users`**: Muestra todos los usuarios en la base de datos.
- **`GET /api/pets`**: Muestra todas las mascotas en la base de datos.

## 5. Cómo ejecutar el proyecto
1. Asegúrate de tener **MongoDB** corriendo localmente.
2. Instala las dependencias: `npm install`.
3. Crea un archivo `.env` basado en `.env.example`.
4. Inicia el servidor: `npm start`.

### Ejemplo de prueba para `generateData`:
**POST** `http://localhost:8080/api/mocks/generateData`
**Body (JSON):**
```json
{
  "users": 10,
  "pets": 5
}
```

¡Espero que esta explicación te sea de gran utilidad para entender la arquitectura y el funcionamiento del sistema!
