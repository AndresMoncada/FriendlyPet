# FriendlyPet
(Crud simple de mascotas)
Usando React Js y consumiendo la API de crudcrud.com

## Para ejecución local

Dependencias requeridas: axios, socketio. 
Usando Visual Studio Code 

1.Iniciar React App

### `npx create-react-app .`

2.Instalar Axios

### `npm i axios`

3.Instalar socketio

### `npm i socketio`

Reemplazar las carpetas public, src, e incluir el archivo .env. 
Tener en cuenta que la API crud, maneja un máximo de 100 request o 24 horas máximo para uso, de ser necesario, generar un nuevo END_POINT y reemplazar el valor de la variable de entorno REACT_APP_CRUD_API_ENDPOINT.
Abrir [http://localhost:3000](http://localhost:3000) para ver de manera local.

## Aplicación desplegada en Vercel

Aquí puede encontra un despliegue rápido de la aplicación front end haciendo uso de Vercel:

### [https://friendly-pet.vercel.app/]
