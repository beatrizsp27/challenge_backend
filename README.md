# Aplicación Challenge backend

## Índice de contenido

- [Requisitos: Tecnologías / IDES / Sistemas Operativos](#requisitos-tecnologías-ides-sistemas-operativos)
- [Estructura de carpetas del proyecto](#estructura-de-carpetas-del-proyecto)
- [Despliegue de proyecto](#despliegue-de-proyecto)
- [End points de prueba](#end-point-de-pruebas)
- [Autores del proyecto](#autores-del-proyecto)


## Requisitos: Tecnologías / IDES / Sistemas Operativos

- Node JS (versión 14.15.4)
- npm (versión 6.14.10)
- Visual Studio Code (versión: 1.45.1)
- Sistema operativo en MacBook o Mac: macOS Big Sur 11.6.1

## Estructura de carpetas del proyecto

- challengue_backend
    -	**model** (Clases donde se consulta los servicios)
    -	**service** (Clases de llamadas y consultas de Servicios REST)
    -	**test** (Contiene pruebas unitarias)
    -	**utilerias** (Constantes, valores, propiedades que serán utilizados en cualquier parte del código fuente)
    -	**request** (Archivos de pruebas de API (Para ejecutarlo es necesario tener visual studio code y REST Client v0.25.0 instalado)
    -   **index** (archivo que contiene las estructura de las APIS)


## Despliegue de proyecto

- Es necesario tener instalado nodejs en la computadora donde se ejecutara el proyecto
- Se debe ejecutar el comando `npm run start` o `npm run dev` a nivel root del proyecto

## End points de prueba

- Obtener todos los productos mediante texto
   - GET http://localhost:3001/api/items?q=text  HTTP/1.1

- Obtener producto mediante id
   - GET http://localhost:3001/api/items/:id HTTP/1.1

## Ejecución de pruebas unitarias

- Para ejecutar las pruebas se debera ejecutar el siguiente comando.
  - `npm run test` para obtener el menu de opciones de pruebas.



## Autores del proyecto

- Beatriz Herández Hernández - Desarrollador FrontEnd
 