<script setup>
import { ref } from 'vue'

// Importaciones de nuestro ecosistema atómico
import AtomArticle from '../components/atoms/AtomArticle.vue'
import AtomH1 from '../components/atoms/AtomH1.vue'
import AtomH2 from '../components/atoms/AtomH2.vue'
import AtomSection from '../components/atoms/AtomSection.vue'
import AtomCard from '../components/atoms/AtomCard.vue'
import AtomTable from '../components/atoms/AtomTable.vue'
import AtomUl from '../components/atoms/AtomUl.vue'
import AtomImage from '../components/atoms/AtomImage.vue'

const conceptosDB = [
  'Bases de Datos Relacionales (SQL): Datos estructurados en tablas estrictas, ideal para consistencia.',
  'Normalización: El arte de dividir datos para evitar la redundancia y mantener la integridad.',
  'Relaciones: Conexiones mediante Claves Primarias (PK) y Foráneas (FK) (ej. 1 a Muchos).',
  'ORMs (Object-Relational Mapping): Traductores de código JS/TS a sentencias SQL nativas.',
  'Migraciones: Control de versiones (Git) para el esquema de tu base de datos.',
  'Prisma: El ORM moderno que ofrece tipado estricto y una experiencia de desarrollo insuperable.'
]

const dbHeaders = ['Característica', 'SQL (Relacional)', 'NoSQL (No Relacional)']
const dbRows = [
  ['Estructura', 'Tablas, Filas y Columnas', 'Documentos (JSON), Colecciones'],
  ['Esquema', 'Rígido (Predefinido)', 'Flexible (Dinámico)'],
  ['Escalabilidad', 'Vertical (Mejor CPU/RAM)', 'Horizontal (Más servidores)'],
  ['Ejemplos', 'PostgreSQL, MySQL, SQLite', 'MongoDB, Redis, Cassandra'],
  ['Mejor para...', 'Sistemas financieros, ERPs', 'Big Data, prototipado rápido']
]
</script>

<template>
  <AtomArticle>
    
    <div class="header-content">
      <AtomImage 
        src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" 
        alt="Logo oficial de PostgreSQL" 
        width="110px" 
      />
      <AtomH1 style="margin-top: 1rem;">Curso Maestro de Bases de Datos</AtomH1>
    </div>

    <p style="font-size: 1.2rem; color: #bdc3c7; text-align: center; line-height: 1.8;">
      El corazón de tu aplicación. Aprende a estructurar la información, relacionar entidades 
      y comunicarte con el almacenamiento persistente de forma segura y tipada usando ORMs modernos.
    </p>

    <AtomH2>Módulo 1: El Gran Debate (SQL vs NoSQL)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Antes de escribir una sola línea de código, debes elegir dónde vivirán tus datos. 
        Históricamente, el debate se centra en dos grandes paradigmas: <strong>SQL (Relacionales)</strong> y <strong>NoSQL (No Relacionales)</strong>.
      </p>

      

      <p class="extended-text">
        Las bases de datos <strong>SQL</strong> son como hojas de cálculo súper vitaminadas. Tienen un esquema estricto: 
        si dices que la tabla <code>Usuarios</code> tiene una columna <code>edad</code> de tipo entero, no puedes guardar un texto ahí. 
        Garantizan la integridad referencial (ACID). Por otro lado, <strong>NoSQL</strong> guarda datos como documentos JSON flexibles. 
        Un documento puede tener 3 campos y el siguiente 20. Son geniales para escalar masivamente, pero peligrosas si tus datos están muy interconectados.
      </p>

      <AtomTable :headers="dbHeaders" :rows="dbRows" />
    </AtomSection>

    <AtomH2>Módulo 2: Los Titanes Relacionales</AtomH2>
    <AtomSection>
      <p class="extended-text">
        En el 90% de los proyectos web, una base de datos relacional es la elección correcta debido a la previsibilidad de los datos. 
        Pero, ¿qué motor elegir?
      </p>

      <div class="grid-cards">
        <AtomCard>
          <template #header><h3 style="color: #3498db;">PostgreSQL (El Rey Mago)</h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            Es el motor Open Source más avanzado y el estándar actual de la industria. Soporta tipos de datos complejos (incluso campos JSON nativos), 
            búsqueda de texto completo y tiene una comunidad inmensa. Si vas a empezar un proyecto serio hoy, <strong>esta debería ser tu opción por defecto</strong>.
          </p>
        </AtomCard>
        
        <AtomCard>
          <template #header><h3 style="color: #f39c12;">MySQL / MariaDB</h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            El viejo confiable. Impulsa la gran mayoría de la web tradicional (como WordPress). Es rapidísimo para lecturas simples y 
            muy fácil de configurar. Aunque Postgres le ha ganado terreno en características avanzadas, sigue siendo un titán imbatible en e-commerce y blogs.
          </p>
        </AtomCard>

        <AtomCard>
          <template #header><h3 style="color: #bdc3c7;">SQLite (El Ligero)</h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            No es un servidor que corre de fondo; es literalmente <strong>un archivo físico</strong> en tu proyecto. 
            Es increíblemente útil para desarrollo local, pruebas automatizadas, aplicaciones móviles y proyectos pequeños. 
            No lo uses si esperas miles de escrituras simultáneas por segundo.
          </p>
        </AtomCard>
      </div>
    </AtomSection>

    <AtomH2>Módulo 3: Normalización y Relaciones (ERD)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        El error más común de los novatos es meter toda la información en una sola tabla gigante. La <strong>Normalización</strong> es 
        el proceso de dividir esos datos en múltiples tablas para evitar la duplicación de información. Si un usuario cambia su email, 
        debería actualizarse en un solo lugar, no en 500 registros de compras.
      </p>

      

      <p class="extended-text">Para conectar estas tablas fragmentadas, usamos <strong>Claves (Keys)</strong>:</p>
      <AtomUl style="margin-bottom: 1.5rem;">
        <li><strong>Clave Primaria (PK - Primary Key):</strong> Un identificador único (ej. ID) para cada fila en una tabla. Nunca se repite.</li>
        <li><strong>Clave Foránea (FK - Foreign Key):</strong> Una columna en una tabla que hace referencia a la PK de otra tabla.</li>
      </AtomUl>

      <h3 style="color: #f1c40f;">Tipos de Relaciones</h3>
      <div class="grid-cards" style="margin-top: 1rem;">
        <AtomCard>
          <template #header><h4>1 a 1 (One-to-One)</h4></template>
          <p style="font-size: 0.9rem;">Un Usuario tiene un (y solo un) Perfil_Extendido. Raro, se usa para separar datos sensibles.</p>
        </AtomCard>
        <AtomCard>
          <template #header><h4>1 a Muchos (One-to-Many)</h4></template>
          <p style="font-size: 0.9rem;"><strong>La más común.</strong> Un Usuario puede publicar Muchos Artículos. El Artículo guarda el `usuario_id` (FK).</p>
        </AtomCard>
        <AtomCard>
          <template #header><h4>Muchos a Muchos (Many-to-Many)</h4></template>
          <p style="font-size: 0.9rem;">Un Estudiante tiene Muchas Clases, y una Clase tiene Muchos Estudiantes. Requiere una tabla intermedia ("pivot").</p>
        </AtomCard>
      </div>
    </AtomSection>

    <AtomH2>Módulo 4: ORMs y la Revolución de Prisma</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Históricamente, para hablar con la base de datos escribíamos SQL crudo (Raw SQL). Esto traía dos problemas enormes: 
        la vulnerabilidad a ataques de Inyección SQL y la falta de autocompletado en JavaScript.
      </p>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 300px;">
          <h4 style="color: #e74c3c;">❌ El Peligro del Raw SQL</h4>
          <pre><code>// Vulnerable y difícil de mantener
const id = req.body.id;
db.query(`SELECT * FROM users WHERE id = ${id}`);</code></pre>
        </div>
        <div style="flex: 1; min-width: 300px;">
          <h4 style="color: #2ecc71;">✅ La Magia del ORM (Prisma)</h4>
          <pre><code>// Seguro, limpio y autocompletado
const id = parseInt(req.body.id);
const user = await prisma.user.findUnique({
  where: { id: id }
});</code></pre>
        </div>
      </div>

      <p class="extended-text" style="margin-top: 1rem;">
        <strong>Prisma</strong> es el ORM (Mapeador Objeto-Relacional) de nueva generación para Node.js y TypeScript. 
        En lugar de crear las tablas a mano en la base de datos, tú escribes un archivo declarativo llamado <code>schema.prisma</code>.
      </p>

      <pre><code>// schema.prisma - Así defines tus tablas y relaciones
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // Cambias a "mysql" o "sqlite" y todo sigue funcionando
  url      = env("DATABASE_URL")
}

model Usuario {
  id        Int        @id @default(autoincrement()) // Primary Key
  email     String     @unique
  nombre    String?    // Opcional
  articulos Articulo[] // Relación 1 a Muchos
}

model Articulo {
  id        Int      @id @default(autoincrement())
  titulo    String
  autorId   Int      // Foreign Key
  autor     Usuario  @relation(fields: [autorId], references: [id])
}</code></pre>
    </AtomSection>

    <AtomH2>Módulo 5: Migraciones (El Git de tu DB)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        ¿Qué pasa si tienes tu app en producción y decides que la tabla <code>Usuarios</code> ahora necesita una columna <code>telefono</code>? 
        No puedes simplemente entrar al servidor y añadirla a mano. Para eso existen las <strong>Migraciones</strong>.
      </p>
      <p class="extended-text">
        Las migraciones son un historial de versiones (como los commits de Git) de la estructura de tu base de datos. 
        Con Prisma, cuando cambias tu archivo <code>schema.prisma</code>, ejecutas un comando:
      </p>
      <pre><code>npx prisma migrate dev --name añadir_columna_telefono</code></pre>
      <p class="extended-text">
        Esto genera un archivo SQL con las instrucciones exactas para aplicar el cambio. Cuando subes tu código al servidor, 
        el servidor ejecuta ese archivo, actualizando la base de datos de producción de forma segura y replicable.
      </p>
    </AtomSection>

    <AtomH2>Checkpoint: Maestría en Datos</AtomH2>
    <AtomSection>
      <p>Asegúrate de llevarte estos conceptos grabados a fuego:</p>
      <AtomUl>
        <li v-for="(concepto, index) in conceptosDB" :key="index" style="margin-bottom: 0.5rem; line-height: 1.5;">
          {{ concepto }}
        </li>
      </AtomUl>
    </AtomSection>

  </AtomArticle>
</template>

<style scoped>
.header-content { display: flex; flex-direction: column; align-items: center; margin-bottom: 2rem; }
.extended-text { line-height: 1.8; margin-bottom: 1.2rem; color: #ecf0f1; text-align: justify; }

pre { background-color: #2c3e50; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #3498db; color: #ecf0f1; font-family: 'Courier New', monospace; overflow-x: auto; margin: 1rem 0; box-shadow: 0 4px 6px rgba(0,0,0,0.2); }
code { white-space: pre-line; }

h3, h4 { color: #f1c40f; margin-top: 1.5rem; border-bottom: 1px solid rgba(241, 196, 15, 0.3); padding-bottom: 0.5rem; }
h4 { font-size: 1.1rem; color: #ecf0f1; border-bottom: none; }

.grid-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 2rem 0; }
</style>