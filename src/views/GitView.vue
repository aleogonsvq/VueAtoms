<script setup>
// Importaciones de nuestro sistema atómico
import AtomArticle from '../components/atoms/AtomArticle.vue'
import AtomH1 from '../components/atoms/AtomH1.vue'
import AtomH2 from '../components/atoms/AtomH2.vue'
import AtomSection from '../components/atoms/AtomSection.vue'
import AtomCard from '../components/atoms/AtomCard.vue'
import AtomTable from '../components/atoms/AtomTable.vue'
import AtomUl from '../components/atoms/AtomUl.vue'
import AtomImage from '../components/atoms/AtomImage.vue'

const conceptosGit = [
  'Git vs GitHub: Git es el motor local, GitHub es el servidor en la nube.',
  'Los 3 Estados: Working Directory (modificado), Staging (preparado) y Repository (confirmado).',
  'Commits: Fotografías inmutables del estado de tu proyecto en el tiempo.',
  'Branches (Ramas): Líneas temporales alternativas para desarrollar sin romper el código principal.',
  'Merge y Conflictos: La fusión de ramas y la resolución manual de líneas superpuestas.',
  'Pull Requests (PR): Peticiones formales para integrar tu código en repositorios colaborativos.'
]

const comandosGit = [
  ['git init', 'Inicializa un repositorio nuevo y vacío en la carpeta actual.'],
  ['git clone <url>', 'Descarga un repositorio completo desde GitHub a tu ordenador.'],
  ['git status', 'Muestra el estado actual (archivos modificados, preparados, etc.). ¡Úsalo siempre!'],
  ['git add .', 'Mueve TODOS los archivos modificados al Staging Area.'],
  ['git commit -m "msj"', 'Crea una "fotografía" permanente en el historial con un mensaje descriptivo.'],
  ['git push', 'Sube tus commits locales al repositorio remoto (GitHub).'],
  ['git pull', 'Descarga y fusiona los cambios del remoto a tu rama local actual.']
]
</script>

<template>
  <AtomArticle>
    
    <div class="header-content">
      <AtomImage 
        src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" 
        alt="Logo oficial de Git" 
        width="120px" 
      />
      <AtomH1 style="margin-top: 1rem;">Curso Maestro de Git y GitHub</AtomH1>
    </div>

    <p style="font-size: 1.2rem; color: #bdc3c7; text-align: center; line-height: 1.8;">
      El salvavidas de todo desarrollador. Domina el control de versiones, viaja en el tiempo 
      a través de tu código y colabora en proyectos Open Source sin miedo a romper nada.
    </p>

    <AtomH2>Módulo 1: Despejando la Confusión Inicial</AtomH2>
    <AtomSection>
      <p class="extended-text">
        El error más común de los principiantes es pensar que Git y GitHub son lo mismo. <strong>No lo son.</strong>
      </p>

      <div class="grid-cards">
        <AtomCard>
          <template #header><h3 style="color: #f1c40f;">Git (La Herramienta)</h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            Es un software de control de versiones distribuido creado por Linus Torvalds (creador de Linux). 
            Se instala en tu ordenador y funciona 100% offline. Su trabajo es rastrear cada letra que añades 
            o borras en tus archivos, creando un historial a prueba de balas.
          </p>
        </AtomCard>
        
        <AtomCard>
          <template #header><h3 style="color: #3498db;">GitHub (El Servicio)</h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            Es una plataforma web (comprada por Microsoft) que aloja repositorios de Git en la nube. 
            Es como el "Google Drive" o la red social para tu código. Te permite tener una copia de seguridad 
            remota y colaborar con programadores de todo el mundo. Existen alternativas como GitLab o Bitbucket.
          </p>
        </AtomCard>
      </div>
    </AtomSection>

    <AtomH2>Módulo 2: Los 3 Árboles (El concepto más importante)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Para dominar Git, debes entender que tus archivos pasan por tres zonas distintas antes de guardarse en el historial. 
        Si entiendes esto, entenderás por qué tienes que ejecutar <code>git add</code> antes de <code>git commit</code>.
      </p>

      

      <AtomUl style="margin-bottom: 1.5rem;">
        <li>
          <strong style="color: #e74c3c;">1. Working Directory (Directorio de Trabajo):</strong> 
          Es tu carpeta actual en el ordenador. Aquí es donde modificas el código. Si borras una línea en tu editor, 
          Git lo nota, pero aún no lo ha guardado en el historial. El archivo está "Modificado".
        </li>
        <li>
          <strong style="color: #f39c12;">2. Staging Area (Área de Preparación):</strong> 
          Es como un "estudio fotográfico". Con el comando <code>git add</code>, subes los archivos modificados a esta tarima. 
          Aquí preparas exactamente qué cambios van a salir en la siguiente foto.
        </li>
        <li>
          <strong style="color: #2ecc71;">3. Local Repository (El Historial):</strong> 
          Al hacer <code>git commit</code>, tomas la fotografía. Todo lo que estaba en el Staging Area se empaqueta 
          y se guarda permanentemente en la base de datos interna de Git (la carpeta oculta <code>.git</code>).
        </li>
      </AtomUl>
    </AtomSection>

    <AtomH2>Módulo 3: Tu Día a Día (Comandos Esenciales)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Abre tu terminal. Este es el ciclo de vida repetitivo que harás cientos de veces como desarrollador:
      </p>

      <pre><code># 1. Empiezas a trabajar y cambias archivos en tu código.

# 2. Revisas qué archivos has modificado:
git status

# 3. Añades los archivos al área de preparación (Staging):
git add index.html style.css
# (O usa "git add ." para meterlo todo de golpe)

# 4. Tomas la "fotografía" y la guardas en el historial:
git commit -m "Añadidos estilos neón al botón principal"

# 5. Envías esa fotografía a tu servidor en la nube (GitHub):
git push origin main</code></pre>

      <h3 style="color: #f1c40f; margin-top: 2rem;">Glosario de Comandos Atómicos</h3>
      <AtomTable :headers="['Comando', 'Acción y Explicación']" :rows="comandosGit" />
    </AtomSection>

    <AtomH2>Módulo 4: Multiverso de Código (Branches & Merges)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Imagina que tienes una aplicación en producción funcionando perfectamente (rama <code>main</code>). 
        Tu jefe te pide que añadas un nuevo sistema de pagos. Si programas directamente en <code>main</code> 
        y dejas el código a medias, la app podría romperse. Aquí es donde brillan las <strong>Ramas (Branches)</strong>.
      </p>

      

      <p class="extended-text">
        Una rama es una línea temporal paralela. Creas una rama llamada <code>feature-pagos</code>, haces 
        tus experimentos ahí, y si todo explota, la rama <code>main</code> sigue intacta.
      </p>

      <pre><code># Crear una nueva rama y movernos a ella instantáneamente
git checkout -b feature-pagos
# (Nota: En versiones modernas de Git se prefiere usar "git switch -c feature-pagos")

# ... haces commits en esta nueva línea temporal ...

# Cuando terminas y funciona, vuelves a la rama principal:
git checkout main

# Y "fusionas" (traes) los cambios de la rama de pagos hacia la principal:
git merge feature-pagos</code></pre>

      <h3 style="color: #e74c3c;">El Temido "Merge Conflict"</h3>
      <p class="extended-text">
        Si tú modificaste la línea 10 de <code>App.vue</code> en tu rama, y un compañero modificó esa misma línea 10 
        en la rama principal, Git no sabrá con qué versión quedarse al hacer el <em>merge</em>. Pausará la fusión 
        y te marcará el archivo en rojo. Tu trabajo es abrir ese archivo, ver ambas versiones (Git te las rodea 
        con símbolos <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>) y borrar la que sobra a mano. Luego haces 
        <code>git add</code> y <code>git commit</code> para resolverlo. ¡No es magia negra, solo es edición de texto!
      </p>
    </AtomSection>

    <AtomH2>Módulo 5: Colaboración en GitHub (Pull Requests)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        En una empresa real, casi nunca harás <code>git merge</code> tú mismo directamente en la rama <code>main</code>. 
        En su lugar, usarás un proceso formal de GitHub llamado <strong>Pull Request (PR)</strong>.
      </p>

      <div class="grid-cards">
        <AtomCard>
          <template #header><h3>¿Qué es un PR?</h3></template>
          <p class="extended-text" style="font-size: 0.9rem;">
            Cuando subes tu rama (<code>git push origin feature-pagos</code>), entras a GitHub y haces clic en "New Pull Request". 
            Básicamente le estás diciendo a tu equipo: <em>"He terminado esto. Por favor, revisad mi código, dejad comentarios, 
            y si está todo bien, aprobadlo para fusionarlo con la rama principal"</em>.
          </p>
        </AtomCard>
        
        <AtomCard>
          <template #header><h3>Forking (Open Source)</h3></template>
          <p class="extended-text" style="font-size: 0.9rem;">
            Si quieres colaborar en un proyecto público de otra persona en el que no tienes permisos de escritura (como el código de Vue 3), 
            le haces un <strong>Fork</strong>. Esto crea una copia exacta de su repositorio en tu propia cuenta de GitHub. Haces los cambios 
            en tu copia y luego le envías un PR al autor original.
          </p>
        </AtomCard>
      </div>
    </AtomSection>

    <AtomH2>Checkpoint: Control de Versiones</AtomH2>
    <AtomSection>
      <p>Asegúrate de dominar estos conceptos; te salvarán la vida a diario:</p>
      <AtomUl>
        <li v-for="(concepto, index) in conceptosGit" :key="index" style="margin-bottom: 0.5rem; line-height: 1.5;">
          {{ concepto }}
        </li>
      </AtomUl>
    </AtomSection>

  </AtomArticle>
</template>

<style scoped>
.header-content { display: flex; flex-direction: column; align-items: center; margin-bottom: 2rem; }
.extended-text { line-height: 1.8; margin-bottom: 1.2rem; color: #ecf0f1; text-align: justify; }

pre { background-color: #2c3e50; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #e74c3c; color: #ecf0f1; font-family: 'Courier New', monospace; overflow-x: auto; margin: 1.5rem 0; box-shadow: 0 4px 6px rgba(0,0,0,0.2); }
code { white-space: pre-line; }

h3 { color: #f1c40f; margin-top: 1.5rem; border-bottom: 1px solid rgba(241, 196, 15, 0.3); padding-bottom: 0.5rem; }

.grid-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; margin: 2rem 0; }
</style>