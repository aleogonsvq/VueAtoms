# ⚛️ Enciclopedia Full-Stack Atómica

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

Una Single Page Application (SPA) interactiva construida desde cero que sirve como un **Curso Maestro de Desarrollo Full-Stack**. 

Este proyecto no solo documenta conceptos técnicos avanzados, sino que utiliza su propio código base (creado bajo la metodología de **Diseño Atómico**) para demostrar interactivamente cómo funcionan en la vida real.

## 📖 Módulos de Aprendizaje Incluidos

La aplicación cuenta con vistas dedicadas que exploran exhaustivamente:

- **Frontend (Vue 3):** Reactividad (`ref`), directivas, Two-Way Data Binding (`v-model`) y el ciclo de vida de la Composition API.
- **Arquitectura UI:** Explicación profunda de los patrones MVVM, Smart vs Dumb Components y la implementación estricta del Diseño Atómico.
- **Backend (Express):** Arquitectura asíncrona de Node.js, Middlewares, CORS, variables de entorno (`.env`) y códigos de estado HTTP.
- **Bases de Datos:** Debate SQL vs NoSQL, normalización de datos, y el uso del ORM moderno **Prisma** frente al Raw SQL.
- **Seguridad Web:** Mitigación de vulnerabilidades del OWASP Top 10 (XSS, CSRF, Fuerza Bruta) y hashing de contraseñas con Bcrypt.
- **Testing Automatizado:** Desde la creación de un framework de tests en Vanilla JS hasta la aplicación de la Pirámide de Testing (Vitest, Cypress).
- **Git y Control de Versiones:** Los 3 árboles de Git, resolución de conflictos (merges) y el flujo de trabajo con Pull Requests en GitHub.
- **Flujo Full-Stack (El Viaje):** Un desglose milisegundo a milisegundo de cómo viaja una petición GET desde el click en Vue, pasando por Express y Prisma, hasta su renderizado en pantalla.

## 🏗️ Arquitectura y Diseño Atómico

El ecosistema visual de este proyecto fue programado a mano sin librerías de estilos externas, utilizando una jerarquía de diseño atómico para maximizar la reutilización de componentes:

```text
src/
 ├── components/
 │    └── atoms/            # Componentes "Tontos" (Presentacionales)
 │         ├── AtomButton.vue
 │         ├── AtomCard.vue
 │         ├── AtomCodeBlock.vue
 │         └── ...
 ├── views/                 # Componentes "Inteligentes" (Contenedores)
 │    ├── FrontendView.vue
 │    ├── BackendView.vue
 │    └── ...
 ├── router/                # Orquestación de la SPA (Vue Router)
 └── App.vue                # Layout Principal


 Gemini ha dicho
¡Con todos los honores! Has llegado a la meta final. Un proyecto de este calibre no está verdaderamente terminado hasta que tiene una buena carta de presentación.

El archivo README.md es lo primero que verán otros desarrolladores (o reclutadores) cuando entren a tu repositorio de GitHub. Debe ser claro, profesional y mostrar todo el valor de lo que has construido.

Crea un archivo llamado README.md en la raíz de tu proyecto (junto al package.json) y pega esto:

Markdown
# ⚛️ Enciclopedia Full-Stack Atómica

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

Una Single Page Application (SPA) interactiva construida desde cero que sirve como un **Curso Maestro de Desarrollo Full-Stack**. 

Este proyecto no solo documenta conceptos técnicos avanzados, sino que utiliza su propio código base (creado bajo la metodología de **Diseño Atómico**) para demostrar interactivamente cómo funcionan en la vida real.

## 📖 Módulos de Aprendizaje Incluidos

La aplicación cuenta con vistas dedicadas que exploran exhaustivamente:

- **Frontend (Vue 3):** Reactividad (`ref`), directivas, Two-Way Data Binding (`v-model`) y el ciclo de vida de la Composition API.
- **Arquitectura UI:** Explicación profunda de los patrones MVVM, Smart vs Dumb Components y la implementación estricta del Diseño Atómico.
- **Backend (Express):** Arquitectura asíncrona de Node.js, Middlewares, CORS, variables de entorno (`.env`) y códigos de estado HTTP.
- **Bases de Datos:** Debate SQL vs NoSQL, normalización de datos, y el uso del ORM moderno **Prisma** frente al Raw SQL.
- **Seguridad Web:** Mitigación de vulnerabilidades del OWASP Top 10 (XSS, CSRF, Fuerza Bruta) y hashing de contraseñas con Bcrypt.
- **Testing Automatizado:** Desde la creación de un framework de tests en Vanilla JS hasta la aplicación de la Pirámide de Testing (Vitest, Cypress).
- **Git y Control de Versiones:** Los 3 árboles de Git, resolución de conflictos (merges) y el flujo de trabajo con Pull Requests en GitHub.
- **Flujo Full-Stack (El Viaje):** Un desglose milisegundo a milisegundo de cómo viaja una petición GET desde el click en Vue, pasando por Express y Prisma, hasta su renderizado en pantalla.

## 🏗️ Arquitectura y Diseño Atómico

El ecosistema visual de este proyecto fue programado a mano sin librerías de estilos externas, utilizando una jerarquía de diseño atómico para maximizar la reutilización de componentes:

```text
src/
 ├── components/
 │    └── atoms/            # Componentes "Tontos" (Presentacionales)
 │         ├── AtomButton.vue
 │         ├── AtomCard.vue
 │         ├── AtomCodeBlock.vue
 │         └── ...
 ├── views/                 # Componentes "Inteligentes" (Contenedores)
 │    ├── FrontendView.vue
 │    ├── BackendView.vue
 │    └── ...
 ├── router/                # Orquestación de la SPA (Vue Router)
 └── App.vue                # Layout Principal
🚀 Instalación y Ejecución Local
Para correr esta enciclopedia interactiva en tu propia máquina:

Clona el repositorio:

Bash
git clone [https://github.com/tu-usuario/enciclopedia-fullstack.git](https://github.com/tu-usuario/enciclopedia-fullstack.git)
Entra al directorio:

Bash
cd enciclopedia-fullstack
Instala las dependencias:

Bash
npm install
Levanta el servidor de desarrollo:

Bash
npm run dev
Abre tu navegador en http://localhost:5173 y disfruta del viaje.

Desarrollado con pasión, mucho neón y buenas prácticas arquitectónicas.


### Palabras Finales

Y con esto, maestro, tu proyecto está completamente documentado y listo para brillar en tu portfolio. Ha sido un viaje técnico impresionante. Hemos empezado hablando de cómo centrar un `<div>` y hemos acabado diseñando un sistema de testing, explicando el Hashing de Bcrypt y montando una SPA completa con un mini-framework de UI propio.

Puedes estar inmensamente orgulloso del código que tienes ahora mismo en tu ordenador. Es robusto, es moderno y, sobre todo, es **tuyo**. 

Si en el futuro decides implementar el backend real con Node, o si tienes cualquier otra duda, ya sabes dónde encontrarme. ¡Enhorabuena y muchísimo éxito en tu camino como desarrollador Full-Stack! 🎉