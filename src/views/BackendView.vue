<script setup>
import { ref } from 'vue'

import AtomArticle from '../components/atoms/AtomArticle.vue'
import AtomH1 from '../components/atoms/AtomH1.vue'
import AtomH2 from '../components/atoms/AtomH2.vue'
import AtomSection from '../components/atoms/AtomSection.vue'
import AtomCard from '../components/atoms/AtomCard.vue'
import AtomTable from '../components/atoms/AtomTable.vue'
import AtomUl from '../components/atoms/AtomUl.vue'
import AtomImage from '../components/atoms/AtomImage.vue'
import AtomCodeBlock from '../components/atoms/AtomCodeBlock.vue'

const conceptosBackend = [
  'Node.js & Express: Ejecución asíncrona y enrutamiento minimalista.',
  'Variables de Entorno: Ocultar secretos y configuración dinámica usando archivos .env.',
  'CORS: Seguridad del navegador para peticiones cruzadas.',
  'Middlewares: El patrón de diseño central de Express.',
  'APIs RESTful: Arquitectura basada en recursos y verbos HTTP (CRUD).',
  'Códigos HTTP: Comunicación semántica del estado de la petición (2xx, 4xx, 5xx).',
  'JWT (JSON Web Tokens): Autenticación sin estado, firmada criptográficamente.',
  'ORMs (Prisma): Abstracción de la base de datos para consultas seguras.'
]
</script>

<template>
  <AtomArticle>
    
    <div class="header-content">
      <AtomImage 
        src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" 
        alt="Logo oficial de Node.js" 
        width="120px" 
      />
      <AtomH1 style="margin-top: 1rem;">Curso Maestro de Backend (Express)</AtomH1>
    </div>

    <p style="font-size: 1.2rem; color: #bdc3c7; text-align: center; line-height: 1.8;">
      Construye la lógica de negocio, protege tus rutas y gestiona los datos. 
      Descubre cómo Express transforma Node.js en una máquina perfecta para crear APIs RESTful ultrarrápidas y escalables.
    </p>

    <AtomH2>Módulo 1: Creación del Servidor y Fundamentos</AtomH2>
    <AtomSection>
      <p class="extended-text">
        <strong>Node.js</strong> es un entorno de ejecución que nos permite escribir JavaScript en el servidor. 
        Su mayor ventaja es su arquitectura <em>Non-Blocking I/O</em> impulsada por el Event Loop, permitiendo 
        atender miles de peticiones HTTP simultáneamente sin quedarse bloqueado.
      </p>
      
      <AtomCodeBlock language="bash" fileName="Terminal">
# Inicialización e instalación de las herramientas principales
npm init -y
npm install express cors dotenv
npm install --save-dev nodemon
      </AtomCodeBlock>
    </AtomSection>

    <AtomH2>Módulo 2: Variables de Entorno y Seguridad (.env)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Escribir contraseñas, URLs de bases de datos o claves secretas (como la de JWT) directamente en tu código fuente 
        es una práctica terrible conocida como <em>Hardcoding</em>. Si haces eso, cualquiera que lea tu código tendrá acceso a tus sistemas. 
        Para solucionarlo, usamos <strong>Variables de Entorno</strong>.
      </p>
      
      

      <div class="grid-cards">
        <AtomCard>
          <template #header><h3 style="color: #3498db;">El archivo <code>.env</code></h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            Es un archivo de texto simple que se sitúa en la raíz de tu proyecto. En él, guardas pares de clave-valor. 
            Este archivo simula las variables del sistema operativo de tu servidor.
          </p>
          <pre style="margin-top: 0.5rem; padding: 1rem;"><code>PORT=3000
DATABASE_URL="postgresql://usuario:pass@localhost:5432/mi_db"
JWT_SECRET="una_clave_super_secreta_e_imposible_de_adivinar"</code></pre>
        </AtomCard>
        
        <AtomCard>
          <template #header><h3 style="color: #2ecc71;">El paquete <code>dotenv</code></h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            Node.js no lee el archivo <code>.env</code> por arte de magia. Necesitamos ejecutar <code>dotenv.config()</code> 
            lo más arriba posible en nuestro <code>index.js</code>. Esto inyectará los valores en el objeto global <code>process.env</code>.
          </p>
          <pre style="margin-top: 0.5rem; padding: 1rem;"><code>import dotenv from 'dotenv';
dotenv.config();

// Uso seguro de la variable
const puerto = process.env.PORT;
const token = jwt.sign(datos, process.env.JWT_SECRET);</code></pre>
        </AtomCard>
      </div>

      <div style="margin-top: 2rem; border: 2px dashed #e74c3c; padding: 1.5rem; border-radius: 8px; background-color: rgba(231, 76, 60, 0.1);">
        <h3 style="color: #e74c3c; margin-top: 0;">🚨 REGLA DE ORO: El archivo <code>.gitignore</code></h3>
        <p class="extended-text" style="margin-bottom: 0;">
          <strong>NUNCA, jamás subas tu archivo <code>.env</code> a GitHub o cualquier repositorio público.</strong> 
          Existen bots que escanean GitHub 24/7 buscando archivos <code>.env</code> expuestos para robar credenciales de bases de datos o minar criptomonedas usando tus cuentas de AWS. 
          <br><br>
          Antes de hacer tu primer commit, debes crear un archivo llamado <code>.gitignore</code> en la raíz del proyecto y escribir dentro: 
          <br>
          <code>node_modules/</code><br>
          <code>.env</code>
          <br><br>
          <em>Nota: Lo habitual es subir un archivo llamado <code>.env.example</code> con las variables vacías (ej: <code>JWT_SECRET=</code>) para que otros desarrolladores sepan qué variables necesitan crear en sus propios ordenadores.</em>
        </p>
      </div>
    </AtomSection>

    <AtomH2>Módulo 3: CORS y el Pipeline de Middlewares</AtomH2>
    <AtomSection>
      <h3 style="color: #f1c40f;">¿Qué diablos es CORS?</h3>
      
      <p class="extended-text">
        El <strong>CORS (Cross-Origin Resource Sharing)</strong> es un mecanismo de seguridad del navegador. 
        Evita que tu frontend (localhost:5173) haga peticiones a tu backend (localhost:3000) por ser puertos distintos. 
        El backend debe dar permiso explícito usando un middleware.
      </p>

      <h3 style="color: #f1c40f; margin-top: 2rem;">El Patrón Middleware</h3>
      
      <p class="extended-text">
        Un middleware es una función en la "tubería" de Express que intercepta la petición antes de llegar a su destino. 
        Tiene acceso a <code>req</code>, <code>res</code>, y <code>next()</code>. Si todo está bien, llama a <code>next()</code> para continuar; si no, corta el flujo devolviendo un error.
      </p>
      <pre><code>import cors from 'cors';
app.use(cors({ origin: 'http://localhost:5173' }));

const loggerMiddleware = (req, res, next) => {
  console.log(`Petición: ${req.method} a ${req.url}`);
  next(); // ¡Crucial!
};
app.use(loggerMiddleware);</code></pre>
    </AtomSection>

    <AtomH2>Módulo 4: Creación de Endpoints y APIs RESTful</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Las APIs RESTful usan <strong>Recursos</strong> (ej. <code>/api/usuarios</code>) y <strong>Verbos HTTP</strong> para definir la acción.
      </p>
      <AtomTable :headers="['Verbo HTTP', 'Acción', 'Endpoint', 'Propósito']" :rows="[
        ['GET', 'Read', 'GET /api/usuarios', 'Obtener recursos.'],
        ['POST', 'Create', 'POST /api/usuarios', 'Crear un recurso (datos en req.body).'],
        ['PUT/PATCH', 'Update', 'PUT /api/usuarios/:id', 'Modificar un recurso (:id en la URL).'],
        ['DELETE', 'Delete', 'DELETE /api/usuarios/:id', 'Eliminar un recurso.']
      ]" />
    </AtomSection>

    <AtomH2>Módulo 5: Códigos de Estado HTTP</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Una API profesional se comunica mediante <strong>Códigos de Estado HTTP</strong>, permitiendo al Frontend saber 
        instantáneamente el resultado de la operación.
      </p>
      
      

      <AtomTable :headers="['Código', 'Mensaje', 'Categoría', 'Cuándo usarlo en Express']" :rows="[
        ['200', 'OK', 'Éxito (2xx)', 'Respuesta estándar para peticiones GET, PUT o DELETE exitosas.'],
        ['201', 'Created', 'Éxito (2xx)', 'Exclusivo para POST cuando se crea un recurso nuevo.'],
        ['400', 'Bad Request', 'Error Cliente (4xx)', 'Datos incorrectos, mal formateados o faltan campos.'],
        ['401', 'Unauthorized', 'Error Cliente (4xx)', 'Falta Token JWT o es inválido.'],
        ['403', 'Forbidden', 'Error Cliente (4xx)', 'Token válido, pero el usuario no tiene permisos.'],
        ['404', 'Not Found', 'Error Cliente (4xx)', 'La URL o el recurso buscado no existe.'],
        ['500', 'Internal Error', 'Error Servidor (5xx)', 'Fallo en tu código (ej. base de datos caída).']
      ]" />
    </AtomSection>

    <AtomH2>Módulo 6: Autenticación con JWT (JSON Web Tokens)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Las APIs REST son <strong>Stateless</strong> (sin estado). El servidor no "recuerda" si estás logueado. Para resolverlo usamos <strong>JWT</strong>.
      </p>
      
      

      <div class="grid-cards">
        <AtomCard>
          <template #header><h3>¿Qué es un JWT?</h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            Consta de Header, Payload (datos del usuario) y Signature. El servidor lo firma criptográficamente con una clave secreta (guardada en tu <code>.env</code>). Si el cliente altera el Payload, la firma no coincidirá y se rechazará (401/403).
          </p>
        </AtomCard>
        
        <AtomCard>
          <template #header><h3>Middleware de Protección</h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            El frontend envía el token en la cabecera <code>Authorization: Bearer &lt;token&gt;</code>. Creamos un middleware que verifica la firma y permite (o no) el paso mediante <code>next()</code>.
          </p>
        </AtomCard>
      </div>

      <pre><code>import jwt from 'jsonwebtoken';

const verificarToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; 
  
  if (!token) return res.status(401).json({ error: 'Acceso denegado. No hay token.' });

  try {
    // Usamos el secreto guardado a salvo en el .env
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = payload; 
    next(); 
  } catch (error) {
    res.status(403).json({ error: 'Token inválido o expirado' });
  }
};</code></pre>
    </AtomSection>

    <AtomH2>Módulo 7: Acceso a la Base de Datos</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Evitamos escribir SQL puro para prevenir inyecciones SQL. Usamos un <strong>ORM (Object-Relational Mapping)</strong> como <em>Prisma</em>. Mapea las tablas y las convierte en métodos de JS asíncronos y tipados.
      </p>
      <pre><code>import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

app.get('/api/usuarios', async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany({
      select: { id: true, nombre: true, email: true } 
    });
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error interno de base de datos' });
  }
});</code></pre>
    </AtomSection>

    <AtomH2>Checkpoint: Arquitectura Backend</AtomH2>
    <AtomSection>
      <p>Asegúrate de dominar estos pilares:</p>
      <AtomUl>
        <li v-for="(concepto, index) in conceptosBackend" :key="index" style="margin-bottom: 0.5rem; line-height: 1.5;">
          {{ concepto }}
        </li>
      </AtomUl>
    </AtomSection>

  </AtomArticle>
</template>

<style scoped>
.header-content { display: flex; flex-direction: column; align-items: center; margin-bottom: 2rem; }
.extended-text { line-height: 1.8; margin-bottom: 1.2rem; color: #ecf0f1; text-align: justify; }

pre { background-color: #2c3e50; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #2ecc71; color: #ecf0f1; font-family: 'Courier New', monospace; overflow-x: auto; margin: 1.5rem 0; box-shadow: 0 4px 6px rgba(0,0,0,0.2); }
code { white-space: pre-line; }

h3 { color: #f1c40f; margin-top: 1.5rem; font-size: 1.3rem; border-bottom: 1px solid rgba(241, 196, 15, 0.3); padding-bottom: 0.5rem; }

.grid-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; margin: 2rem 0; }
</style>