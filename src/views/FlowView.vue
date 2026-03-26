<script setup>
import AtomArticle from '../components/atoms/AtomArticle.vue'
import AtomH1 from '../components/atoms/AtomH1.vue'
import AtomH2 from '../components/atoms/AtomH2.vue'
import AtomSection from '../components/atoms/AtomSection.vue'
import AtomCard from '../components/atoms/AtomCard.vue'
import AtomCodeBlock from '../components/atoms/AtomCodeBlock.vue'
import AtomImage from '../components/atoms/AtomImage.vue'
</script>

<template>
  <AtomArticle>
    
    <div class="header-content">
      <AtomImage 
        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" 
        alt="Símbolo de conexión" 
        width="100px" 
        style="filter: grayscale(100%) brightness(200%);"
      />
      <AtomH1 style="margin-top: 1rem;">El Viaje de una Petición (Full-Stack)</AtomH1>
    </div>

    <p style="font-size: 1.2rem; color: #bdc3c7; text-align: center; line-height: 1.8;">
      Ha llegado el momento de unir todas las piezas. ¿Qué ocurre exactamente cuando un usuario 
      entra a la página de "Lista de Usuarios"? Acompáñame en este viaje de ida y vuelta en milisegundos.
    </p>

    

    <AtomH2>Módulo 1: Los Actores Implicados</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Para que una tabla con datos aparezca en la pantalla, necesitamos que 3 archivos distintos colaboren a la perfección en dos entornos diferentes (el navegador del cliente y el servidor):
      </p>

      <div class="grid-cards">
        <AtomCard>
          <template #header><h3 style="color: #42b883;">1. El Frontend (Vue)</h3></template>
          <p><strong>Archivo:</strong> <code>src/views/UsuariosView.vue</code></p>
          <p style="font-size: 0.9rem;">El cliente. Su trabajo es mostrar un "Cargando...", hacer la llamada (petición HTTP) a través de Internet, esperar la respuesta y pintar los datos.</p>
        </AtomCard>
        
        <AtomCard>
          <template #header><h3 style="color: #f1c40f;">2. El Backend (Express)</h3></template>
          <p><strong>Archivo:</strong> <code>server/index.js</code></p>
          <p style="font-size: 0.9rem;">El recepcionista. Escucha peticiones en un puerto (ej. 3000), verifica si tienes permisos (CORS/JWT) y le pide los datos al ORM.</p>
        </AtomCard>

        <AtomCard>
          <template #header><h3 style="color: #3498db;">3. La Base de Datos (Prisma)</h3></template>
          <p><strong>Archivo:</strong> <code>prisma/schema.prisma</code></p>
          <p style="font-size: 0.9rem;">El almacén profundo. Traduce la petición de Express a lenguaje SQL nativo, extrae los datos del disco duro y los devuelve.</p>
        </AtomCard>
      </div>
    </AtomSection>

    <AtomH2>Paso 1: El Frontend dispara la petición</AtomH2>
    <AtomSection>
      <p class="extended-text">
        El usuario hace clic en el enlace "Ver Usuarios". El componente de Vue se monta en el DOM e inmediatamente ejecuta una función usando <code>onMounted</code>. 
        Utilizamos la API nativa <code>fetch</code> (o la librería <code>axios</code>) para lanzar un "grito" a través de Internet hacia la URL de nuestro Backend.
      </p>

      <AtomCodeBlock language="javascript" fileName="src/views/UsuariosView.vue (Script)">
import { ref, onMounted } from 'vue'

// 1. Preparamos el estado (vacío inicialmente)
const usuarios = ref([])
const cargando = ref(true)
const error = ref(null)

// 2. Esta función se ejecuta sola al abrir la página
onMounted(async () => {
  try {
    // 3. Disparamos la petición GET al Backend
    const respuesta = await fetch('http://localhost:3000/api/usuarios')
    
    // 4. Si el backend devuelve un código de error (ej. 500), lanzamos excepción
    if (!respuesta.ok) throw new Error('Error al conectar con el servidor')
    
    // 5. Transformamos la respuesta de texto a formato JSON (JavaScript)
    const datos = await respuesta.json()
    
    // 6. Guardamos los datos en nuestra variable reactiva
    usuarios.value = datos
  } catch (err) {
    error.value = err.message
  } finally {
    // 7. Pase lo que pase, quitamos el estado de carga
    cargando.value = false
  }
})
      </AtomCodeBlock>
    </AtomSection>

    <AtomH2>Paso 2: El Backend procesa y consulta la DB</AtomH2>
    <AtomSection>
      <p class="extended-text">
        La petición viaja por la red y golpea la puerta del puerto 3000 de nuestro servidor. 
        Express busca en su lista de rutas si alguien está escuchando un <code>GET</code> en <code>/api/usuarios</code>. ¡Bingo! Encuentra el controlador.
      </p>

      <AtomCodeBlock language="javascript" fileName="server/index.js">
import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(cors()) // Permitimos que el Frontend de Vue nos hable

// 1. Definimos el Endpoint que el Frontend está llamando
app.get('/api/usuarios', async (req, res) => {
  try {
    // 2. ORM AL RESCATE: Prisma consulta la base de datos SQL por nosotros
    // Equivalente a: SELECT id, nombre, email, rol FROM usuarios;
    const listaUsuarios = await prisma.usuario.findMany({
      select: {
        id: true,
        nombre: true,
        email: true,
        rol: true // Excluimos la contraseña intencionadamente por seguridad
      }
    })

    // 3. Empaquetamos la respuesta en JSON y le ponemos un lazo (Status 200 OK)
    res.status(200).json(listaUsuarios)

  } catch (error) {
    console.error(error)
    // 4. Si la base de datos explota, avisamos al Frontend educadamente (Status 500)
    res.status(500).json({ error: 'Fallo interno del servidor' })
  }
})

app.listen(3000)
      </AtomCodeBlock>
    </AtomSection>

    <AtomH2>Paso 3: El Frontend renderiza (La Magia)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        El JSON viaja de vuelta al navegador. En el <em>Paso 1</em>, vimos cómo el Frontend lo guardaba en la variable reactiva <code>usuarios.value = datos</code>. 
        Al ser una variable <code>ref()</code>, Vue se da cuenta del cambio al instante y repinta el <code>&lt;template&gt;</code> (HTML) usando las directivas <code>v-if</code> y <code>v-for</code>.
      </p>

      <AtomCodeBlock v-pre language="html" fileName="src/views/UsuariosView.vue (Template)">
<template>
  <div class="usuarios-container">
    <h2>Directorio de Usuarios</h2>

    <div v-if="cargando" class="spinner">
      Cargando base de datos... ⏳
    </div>

    <div v-else-if="error" class="alerta-roja">
      {{ error }} ❌
    </div>

    <ul v-else class="lista-usuarios">
      <li v-for="user in usuarios" :key="user.id">
        <strong>{{ user.nombre }}</strong> 
        <span class="email-tag">({{ user.email }})</span>
        <span class="rol-badge">{{ user.rol }}</span>
      </li>
    </ul>
    
  </div>
</template>
      </AtomCodeBlock>

      <div style="margin-top: 2rem; border-left: 4px solid #f1c40f; padding-left: 1rem;">
        <h3 style="color: #f1c40f; margin-top: 0;">El Ciclo Completo</h3>
        <p class="extended-text" style="margin-bottom: 0;">
          ¡Y así es como funciona Internet! Un clic genera un <strong>Fetch</strong>, que golpea un <strong>Endpoint de Express</strong>, 
          que ejecuta una función de <strong>Prisma</strong>, que lee el disco duro de <strong>Postgres</strong>, 
          que devuelve un array a Express, que lo envía como <strong>JSON</strong> por la red, que Vue guarda en un <strong>ref()</strong>, 
          lo cual dispara el <strong>v-for</strong> para pintar listas HTML (Li) en la pantalla de tu usuario. ¡Todo en unos 50 milisegundos!
        </p>
      </div>
    </AtomSection>

  </AtomArticle>
</template>

<style scoped>
.header-content { display: flex; flex-direction: column; align-items: center; margin-bottom: 2rem; }
.extended-text { line-height: 1.8; margin-bottom: 1.2rem; color: #ecf0f1; text-align: justify; }
h3 { margin-top: 1.5rem; font-size: 1.3rem; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 0.5rem; }
.grid-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 2rem 0; }
</style>