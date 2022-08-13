# Aplicación Challengue backend

## Índice de contenido

- [Requisitos: Tecnologías / IDES / Sistemas Operativos](#requisitos-tecnologías-ides-sistemas-operativos)
- [Estructura de carpetas del proyecto](#estructura-de-carpetas-del-proyecto)
- [Despliegue de proyecto](#despliegue-de-proyecto)
- [End points de prueba](#end-point-de-pruebas)
- [Autores del proyecto](#autores-del-proyecto)


## Requisitos: Tecnologías / IDES / Sistemas Operativos

- Node JS (versión v14.15.4)
- npm (versión 6.14.10)
- java (versión 1.8.0_231) ó OpenJDK8 [LTS] OpenJ9
- Visual Studio Code (versión: 1.45.1)
- Sistema operativo en MacBook o Mac: macOS Big Sur 11.6.1

## Estructura de carpetas del proyecto

- challengue_backend
    -	**service** (Clases de llamadas y consultas de Servicios REST)
    -	**utilerias** (Constantes, valores, propiedades que serán utilizados en cualquier parte del código fuente)
    -	**request** (Archivos de pruebas de api (Para ejecutarlo es necesario tener visual studio code y REST Client  v0.25.0 instalado))
    -   **index** (archivo que contiene las estructura de las Apis)


## Despliegue de proyecto

- Es necesario tener instalado nodejs en la computadora donde se ejecutara el proyecto
- Se debe ejecutar el comando `npm run start` o `npm run dev` a nivel root del proyecto

## End points de prueba

### obtener todos los productos mediante texto
 - GET http://localhost:3001/api/items?q=text  HTTP/1.1

### Obtener producto mediante id
 - GET http://localhost:3001/api/items/:id HTTP/1.1


## Autores del proyecto

- Beatriz Herández Hernández - Desarrollador Front end
 