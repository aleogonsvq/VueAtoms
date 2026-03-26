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

const conceptosBackend = [
  'Node.js & Express: Ejecución asíncrona y enrutamiento minimalista.',
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
        atender miles de peticiones HTTP simultáneamente sin quedarse bloqueado esperando a la base de datos.
      </p>
      
      <pre><code># Inicialización e instalación de las herramientas principales
npm init -y
npm install express cors dotenv
npm install --save-dev nodemon</code></pre>

      <pre><code>import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json()); // Entender JSON en el body

app.listen(3000, () => {
  console.log('🚀 Servidor backend operando en el puerto 3000');
});</code></pre>
    </AtomSection>

    <AtomH2>Módulo 2: CORS y el Pipeline de Middlewares</AtomH2>
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

    <AtomH2>Módulo 3: Creación de Endpoints y APIs RESTful</AtomH2>
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

    <AtomH2>Módulo 4: Códigos de Estado HTTP</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Una API profesional no solo devuelve datos, sino que se comunica mediante <strong>Códigos de Estado HTTP</strong>. 
        Esto le permite al Frontend (Vue, React, Angular) saber instantáneamente si la operación fue un éxito, si el usuario cometió un error, o si el servidor explotó, sin tener que analizar el texto de la respuesta.
      </p>
      
      

      <p class="extended-text">
        Se dividen en tres categorías principales que debes dominar:
      </p>

      <AtomTable :headers="['Código', 'Mensaje', 'Categoría', 'Cuándo usarlo en Express']" :rows="[
        ['200', 'OK', 'Éxito (2xx)', 'Respuesta estándar para peticiones GET, PUT o DELETE exitosas.'],
        ['201', 'Created', 'Éxito (2xx)', 'Exclusivo para POST cuando se crea un recurso nuevo con éxito.'],
        ['400', 'Bad Request', 'Error Cliente (4xx)', 'El frontend envió datos incorrectos, mal formateados o faltan campos.'],
        ['401', 'Unauthorized', 'Error Cliente (4xx)', 'El usuario no ha enviado un Token JWT, o el Token no es válido.'],
        ['403', 'Forbidden', 'Error Cliente (4xx)', 'El token es válido, pero el usuario no tiene permisos (ej. no es Admin).'],
        ['404', 'Not Found', 'Error Cliente (4xx)', 'La URL no existe o el recurso buscado (ej. usuario ID 5) no se encontró.'],
        ['500', 'Internal Error', 'Error Servidor (5xx)', 'Tu código falló (ej. la base de datos se cayó). Nunca es culpa del cliente.']
      ]" />

      <h3 style="color: #f1c40f; margin-top: 2rem;">Implementación en Express</h3>
      <p class="extended-text">Para enviar estos códigos, encadenamos el método <code>.status()</code> antes de enviar el JSON.</p>
      <pre><code>app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    // 400: El cliente hizo una mala petición (faltan datos)
    return res.status(400).json({ error: 'Faltan credenciales' });
  }
  
  const usuario = buscarUsuarioDB(email);
  if (!usuario) {
    // 404: El recurso no existe
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  // 200: Todo correcto (express usa 200 por defecto si omites .status)
  res.status(200).json({ mensaje: 'Login exitoso', token: '...' });
});</code></pre>
    </AtomSection>

    <AtomH2>Módulo 5: Autenticación con JWT (JSON Web Tokens)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Las APIs REST son <strong>Stateless</strong> (sin estado). El servidor no "recuerda" si estás logueado. Para resolverlo usamos <strong>JWT</strong>.
      </p>
      
      

      <div class="grid-cards">
        <AtomCard>
          <template #header><h3>¿Qué es un JWT?</h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            Consta de Header, Payload (datos del usuario) y Signature. El servidor lo firma criptográficamente con una clave secreta. Si el cliente altera el Payload, la firma no coincidirá y se rechazará (Código HTTP 401/403).
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
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = payload; 
    next(); 
  } catch (error) {
    res.status(403).json({ error: 'Token inválido o expirado' });
  }
};</code></pre>
    </AtomSection>

    <AtomH2>Módulo 6: Acceso a la Base de Datos</AtomH2>
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
    // 500: Error interno del servidor
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