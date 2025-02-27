# ParcialFinal
## Integrantes:
Dilan Ferney Galeano Hoyos, 
Marco Antonio Vargas Garcia, 
Andres Felipe Amaya Suarez, 
Ingrith Yiseth Rodriguez Lopez.

## 1.	Documentación de la API:

### Introducción a la API de Bandas y Miembros

La API de Bandas y Miembros está diseñada para gestionar información relacionada con bandas musicales y sus respectivos miembros. Esta API permite a los usuarios realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) tanto en las bandas como en los miembros asociados a ellas.

Para acceder al API: https://taller-api.vercel.app 

La estructura de la API se organiza en diferentes componentes y carpetas, cada uno con su función específica:

•	Controladores (controllers): Los controladores son responsables de manejar las solicitudes HTTP entrantes y de ejecutar la lógica de negocio correspondiente. En este caso, contamos con controladores separados para las operaciones relacionadas con las bandas y con los miembros. Estos controladores gestionan las consultas a la base de datos y devuelven las respuestas adecuadas.

•	Modelos (models): Los modelos definen la estructura de los datos almacenados en la base de datos. En nuestra API, tenemos dos modelos principales: Band (para representar información sobre las bandas) y Member (para representar información sobre los miembros de las bandas). Cada modelo define los campos y las relaciones entre los datos.

•	Rutas (routes): Las rutas definen los puntos finales de la API y especifican cómo se deben manejar las solicitudes entrantes. En este caso, tenemos rutas separadas para las operaciones relacionadas con las bandas y con los miembros. Cada ruta está asociada a su respectivo controlador y define los métodos HTTP permitidos y los parámetros necesarios.

•	Controlador de base de datos (driver): El controlador de la base de datos es responsable de establecer la conexión con la base de datos MongoDB. En este caso, utilizamos Mongoose como biblioteca de modelado de datos para interactuar con MongoDB. La configuración de la conexión se realiza en este componente.

## Rutas para ver el API:
## Bands:
Para acceder a la información sobre las bandas, los usuarios pueden enviar solicitudes HTTP a la siguiente URL: https://taller-api.vercel.app/band/ 
Esta solicitud recuperará todos los datos sobre las bandas disponibles en la API.
___________________________________________________________________________________________________________________________________________________________________________________________
Para acceder a la información sobre los miembros de una banda en particular, los usuarios pueden enviar solicitudes HTTP a la siguiente URL, reemplazando: id con el ID de la banda específica:<br>
•	Ruta: https://taller-api.vercel.app/band/id/:id <br>
Por ejemplo, si el ID de la banda es "abc123", la URL sería: <br>
•	Ruta: https://taller-api.vercel.app/band/id/abc123 <br>
Esta solicitud recuperará información sobre la banda con el ID "abc123", incluidos los detalles de sus miembros.
___________________________________________________________________________________________________________________________________________________________________________________________
### Member:
Para acceder a la información sobre los miembros en general, los usuarios pueden enviar solicitudes HTTP a la siguiente URL:<br>
•	Ruta: https://taller-api.vercel.app/member/ <br>
Esta solicitud recuperará todos los datos sobre los miembros disponibles en la API.<br>
___________________________________________________________________________________________________________________________________________________________________________________________
Para acceder a la información sobre un miembro en particular, los usuarios pueden enviar solicitudes HTTP a la siguiente URL, reemplazando: id con el ID del miembro específico:<br>
•	Ruta: https://taller-api.vercel.app/member/id/:id <br>
Por ejemplo, si el ID del miembro es "xyz789", la URL sería:<br>
•	Ruta: https://taller-api.vercel.app/member/id/xyz789<br> 
Esta solicitud recuperará información sobre el miembro con el ID "xyz789".<br>

## 2.  Consumo de la API:
Para consumir la API de Bandas y Miembros utilizando GraphQL, primero necesitaremos definir un esquema GraphQL que describa los tipos de datos disponibles en la API y las consultas y mutaciones que se pueden realizar. Luego, utilizaremos Apollo Client para enviar consultas y mutaciones GraphQL desde nuestro cliente.
___________________________________________________________________________________________________________________________________________________________________________________________
### Instrucciones para Apollo Studio Sandbox Explorer:
• Inicia tu servidor GraphQL local: Asegúrate de que tu servidor GraphQL esté en funcionamiento y esté escuchando en http://localhost:4000/graphql.

• Abre Apollo Studio Sandbox Explorer: Abre tu navegador web y ve a la siguiente URL: https://studio.apollographql.com/sandbox/explorer.

• Configura la URL del servidor GraphQL local: En el campo de texto en la parte superior izquierda del Sandbox Explorer, escribe la URL de tu servidor GraphQL local: http://localhost:4000/graphql.

• Explora y prueba tu API GraphQL: Una vez que hayas configurado la URL del servidor GraphQL local, podrás explorar y probar consultas y mutaciones GraphQL en tu API local directamente desde Apollo Studio Sandbox Explorer. Puedes enviar consultas y mutaciones, y ver las respuestas en tiempo real.

• Asegúrate de que tu programa esté en ejecución: Es importante que tu programa, en este caso tu servidor GraphQL, esté en ejecución para que Apollo Studio Sandbox Explorer pueda interactuar con él de manera efectiva.
___________________________________________________________________________________________________________________________________________________________________________________________
### • Configurar Apollo Client:
Utilizaremos Apollo Client para realizar solicitudes GraphQL desde nuestro cliente.
Configuraremos Apollo Client con la URL de la API de Bandas y Miembros.
___________________________________________________________________________________________________________________________________________________________________________________________
### • Definir Queries y Mutations:

### Queries
Acontinuacion se presentara una descripción breve de las queries definidas en el esquema GraphQL:

getAllBands:
Descripción: Retorna una lista de todas las bandas disponibles con sus respectivos detalles, incluyendo los miembros asociados a cada banda, si los hay.

getBandByID:
Descripción: Retorna los detalles de una banda específica identificada por su ID. Incluye información sobre la banda y los miembros asociados, si los hay.

getAllMembers:
Descripción: Retorna una lista de todos los miembros registrados en la API, incluyendo detalles como nombre, apellido, edad, y número de teléfono.

getMemberByID:
Descripción: Retorna los detalles de un miembro específico identificado por su ID, incluyendo información sobre la banda a la que pertenece, si es aplicable.
Estas queries permiten a los clientes obtener información sobre las bandas y los miembros disponibles en la API de acuerdo a diferentes criterios de búsqueda.

### Mutations:
Acontinuacion se presentara una descripción breve de las mutations definidas en el esquema GraphQL:

createBand:<br>
Descripción: Crea una nueva banda con los detalles proporcionados, incluyendo ID, nombre, género y país.
Argumentos:<br>
id: ID único de la banda.<br>
name: Nombre de la banda.<br>
genre: Género musical de la banda.<br>
country: País de origen de la banda.<br>
Retorna: Los detalles de la banda creada.<br>

updateBand:<br>
Descripción: Actualiza los detalles de una banda existente identificada por su ID, con la opción de modificar el nombre, género y país de la banda.
Argumentos:<br>
id: ID único de la banda que se desea actualizar.<br>
name: (Opcional) Nuevo nombre de la banda. Si no se proporciona, se mantendrá el nombre existente.<br>
genre: (Opcional) Nuevo género musical de la banda. Si no se proporciona, se mantendrá el género existente.<br>
country: (Opcional) Nuevo país de origen de la banda. Si no se proporciona, se mantendrá el país existente.<br>
Retorna: Los detalles de la banda actualizada.<br>

deleteBand:<br>
Descripción: Elimina una banda existente identificada por su ID, junto con todos sus datos asociados.
Argumentos:<br>
id: ID único de la banda que se desea eliminar.<br>
Retorna: Los detalles de la banda eliminada.<br>
___________________________________________________________________________________________________________________________________________________________________________________________




 
