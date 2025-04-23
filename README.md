# Grupo 14(Rojo)

- FAI-2258 Cifuentes Flores Andrés Emanuel
- FAI-3236 Villegas Reibold Martin Esteban
- FAI-4971 Farroni Carrera Juan Manuel

# Descripcion del proyecto

Gestor de Peliculas y Series por Ver y Vistas

La aplicación permite al usuario agregar nuevas películas o series, marcarlas como vistas, editarlas
y eliminarlas. Cada ítem tiene título, director, año, género (select), rating y tipo (película o serie).
Se muestran dos listas: una con contenido por ver y otra con contenido visto.

### Vercel:

https://tpreactgrupo14.vercel.app/

## Instalación / visualización

### Requisitos

- Tener instalado [Node.js](https://nodejs.org/)

### Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Martin-VillegasReibold/PWA--TP-REACT.git
```

2. Abrir la terminal en el directorio _/PWA--TP-REACT_ e ingresar:

```bash
npm install
```

### Visualización

1. Abrir la terminal en el directorio del proyecto e ingresar:

```bash
npm run dev
```

Copiar la URL, en este caso:

```bash
http://localhost:5173/
```

2. Ingresar en un navegador web la URL.

## Archivos iniciales:

### index.js

Este archivo es el punto de entrada principal de la aplicación React. Desde este archivo se renderiza
el componente "App" dentro del DOM de la pagina HTML ("index.html"). Utiliza "ReactDOM.createRoot()" para
inicializar la aplicacion y vincularla al elemento con id "root".

### App.js

Contiene el componente principal de la aplicación. Desde acá se definen las rutas, el layout general y
se importan los distintos componentes y páginas qeu conformas la estructura principal de la app.

### index.css

Este el archivo de estilos globales. Se aplica a toda la aplicacion y permite definir estilos comunes que
afecten a todos los componentes.

### package.json

Este archivo contiene toda la informacion del proyecto y sus dependecias. Incluye el nombre y version del
proyecto, scripts, dependencias necesarias para que el proyecto funcione y dependencias de desarrollo.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
