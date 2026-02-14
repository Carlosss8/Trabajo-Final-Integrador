## TRABAJO - INTEGRADOR

## DESCRIPCION 
Aplicación web desarrollada con React + Vite que simula el panel de administración de una tienda de ropa ![alt text](image.png).
El sistema permite gestionar productos alta, editar y eliminar (C.R.U.D) y controlar el acceso mediante autenticación de usuarios utilizando Firebase Authentication y Firestore ![alt text](image-1.png), ![alt text](image-2.png).

El proyecto implementa un AuthContext global para manejar el estado de sesión del usuario y proteger rutas privadas mediante React Router, permitiendo que ciertas funcionalidades solo estén disponibles cuando el usuario ha iniciado sesión.

## Lenguajes utilizados 
- ReactJS
- Vite
- JavaScript
- CSS

## --Bibliotecas
- React Router Dom
- Context Api
- React Hook Form

## Backend
- Firebase Authentication
- Firebase Firestore

## Funcionalidades

-Registro de usuarios con Firebase Authentication
-Inicio y cierre de sesión
-Protección de rutas privadas mediante AuthContext
-Visualización de productos en tiempo real desde Firestore
-Alta de productos (solo usuarios autenticados)
-Edición de productos ![alt text](image-4.png)
-Eliminación de productos ![alt text](image-5.png)
-Interfaz responsiva basada en componentes reutilizables

## Clonar el repositorio

### 1. Clonar el repositorio

git clone https://github.com/Carlosss8/Trabajo-Final-Integrador/tree/main/trabajo-integrador

## 2. Ingresar a la carpeta del proyecto

cd trabajo-integrador

## 3. Instalar dependencias

npm install
npm install react-router-doom
npm install firebase
npm install react-hook-form

## 4. Ejecutar la aplicación

npm run dev

## Estructura del proyecto 
src/
|
├── components/ Componentes reutilizables (Login, Register, Navbar, etc.) 
├── context/ AuthContext para manejo global de sesión ├── layouts/ # Layout principal de la aplicación 
├── router/ ProtectedRoute y configuración de rutas 
├── services/ Funciones de conexión con Firebase (productos) 
├── views/ Vistas principales (Home, Contacto, Carrito, etc.) 
├── config/ Configuración de Firebase 
└── styles/ Archivos CSS

## AUTOR

NOMBRE: Carlos Rodriguez
Linkedin: https://www.linkedin.com/in/carlosrodriguez8/
## Fuentes

-React Hook Form Tutorial (https://fazt.dev/contenido/react-hook-form)
-React-hook-form (https://react-hook-form.com/)
-Plantillas de form (https://plantillashtmlgratis.com/)
-Firebase Auth https://firebase.google.com/docs/auth/web/manage-users?hl=es-419

## Demo (vercel)
https://trabajo-final-integrador-cyan.vercel.app/

## Ejercicios y PostData
Trabajo Final Integrador.pdf
