<script setup>
import { ref } from 'vue'

// Importaciones de nuestro sistema de diseño atómico
import AtomArticle from '../components/atoms/AtomArticle.vue'
import AtomH1 from '../components/atoms/AtomH1.vue'
import AtomH2 from '../components/atoms/AtomH2.vue'
import AtomSection from '../components/atoms/AtomSection.vue'
import AtomCard from '../components/atoms/AtomCard.vue'
import AtomTable from '../components/atoms/AtomTable.vue'
import AtomUl from '../components/atoms/AtomUl.vue'
import AtomImage from '../components/atoms/AtomImage.vue'
import AtomButton from '../components/atoms/AtomButton.vue'
import AtomInput from '../components/atoms/AtomInput.vue'
import AtomLabel from '../components/atoms/AtomLabel.vue'

// Estado reactivo para la demostración interactiva
const nombreAprendiz = ref('')
const nivelDificultad = ref('Fácil')

const conceptosClave = [
  'Composición API: El estándar moderno para organizar lógica por funcionalidades.',
  'Reactividad profunda: Uso avanzado de ref() mediante Proxies de JavaScript.',
  'Flujo de datos unidireccional: Comunicación predecible con Props y Emits.',
  'defineModel: La revolución del Two-Way Binding introducida en Vue 3.4.',
  'Ciclo de Vida: Control total sobre el montaje y destrucción de componentes en el DOM.'
]

// Estado para la simulación de componentes
const contadorHijo = ref(0)
const mensajeHijo = ref('Esperando comunicación desde el componente hijo...')

const recibirMensajeDelHijo = (datos) => {
  contadorHijo.value = datos.nuevoValor
  mensajeHijo.value = `¡Evento capturado! El hijo ha emitido un nuevo valor: ${datos.nuevoValor}`
}
</script>

<template>
  <AtomArticle>
    
    <div class="header-content">
      <AtomImage 
        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" 
        alt="Logo oficial de Vue.js" 
        width="100px" 
      />
      <AtomH1 style="margin-top: 1rem;">Curso Maestro de Vue 3</AtomH1>
    </div>

    <p style="font-size: 1.2rem; color: #bdc3c7; text-align: center; line-height: 1.8;">
      Tu viaje definitivo desde novato hasta desarrollador intermedio de Vue 3. 
      Exploraremos las entrañas de la Composition API, entenderemos cómo funciona la 
      reactividad moderna y dominaremos la arquitectura de componentes.
    </p>

    <AtomH2>Módulo 1: Instalación y la Revolución de Vite</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Durante muchos años, los desarrolladores de Vue utilizaron Vue CLI, una herramienta 
        construida sobre Webpack. Sin embargo, a medida que los proyectos web crecían masivamente, 
        el tiempo de arranque del servidor local y la recarga en caliente (HMR) se volvían 
        insoportablemente lentos. Aquí es donde entra <strong>Vite</strong> (que significa "rápido" en francés), 
        la herramienta de construcción por defecto para Vue 3.
      </p>
      <p class="extended-text">
        Vite revolucionó el ecosistema utilizando los módulos ES nativos del navegador (ESM) 
        para servir el código fuente instantáneamente sin necesidad de empaquetarlo primero. Además, 
        pre-procesa tus dependencias usando <em>esbuild</em>, una herramienta escrita en Go que es de 10 a 100 veces 
        más rápida que los empaquetadores tradicionales basados en JavaScript. Al inicializar un proyecto con Vite, 
        estás garantizando un entorno donde los cambios se reflejan en el navegador en milisegundos, sin importar el tamaño de tu aplicación.
      </p>
      
      <pre><code># Creación de un proyecto moderno y ultrarrápido:
npm create vue@latest

# Instalación de dependencias y ejecución:
cd mi-proyecto
npm install
npm run dev</code></pre>
    </AtomSection>

    <AtomH2>Módulo 2: El Núcleo de la Reactividad (Proxies)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        La reactividad es el "superpoder" principal de Vue: cuando los datos de tu aplicación cambian, 
        la vista (el HTML) se actualiza de forma automática y quirúrgica. Bajo el capó, Vue 3 abandonó 
        el antiguo sistema basado en <code>Object.defineProperty</code> de Vue 2 en favor de los 
        <strong>Proxies nativos de JavaScript (ES6)</strong>.
      </p>
      
      
      
      <p class="extended-text">
        Un Proxy permite a Vue interceptar silenciosamente cualquier lectura o escritura en tus variables. 
        Cuando utilizas la función <code>ref()</code>, Vue envuelve tu valor en un objeto reactivo especial. 
        Cuando lees el valor en tu bloque de código usando <code>.value</code>, Vue registra internamente 
        qué parte específica de tu interfaz de usuario está "observando" ese dato (esto se llama recolección de dependencias). 
        Cuando modificas el valor posteriormente, el Proxy intercepta el cambio y avisa inmediatamente al motor de renderizado 
        para que repinte únicamente la parte exacta del DOM que dependía de ese valor, logrando un rendimiento espectacular.
      </p>

      <div class="grid-cards">
        <AtomCard>
          <template #header><h3><code>ref()</code> vs <code>reactive()</code></h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            Mientras que <code>ref()</code> es la herramienta universal ideal para datos primitivos 
            (números, strings, booleanos) y requiere el sufijo <code>.value</code> en el script, Vue también ofrece 
            <code>reactive()</code>. Esta última función se utiliza exclusivamente para objetos complejos y arrays. 
            A diferencia de ref, no necesita <code>.value</code>, lo que resulta en un código más limpio al manipular estructuras anidadas.
          </p>
        </AtomCard>
        
        <AtomCard>
          <template #header><h3>Directivas (El Puente al HTML)</h3></template>
          <AtomUl style="font-size: 0.95rem;">
            <li><code>v-model</code>: Sincronización bidireccional automática en formularios.</li>
            <li><code>v-bind</code> (o <code>:</code>): Enlaza un atributo HTML a una variable JS.</li>
            <li><code>v-if / v-show</code>: El primero destruye el nodo del DOM; el segundo solo oculta con CSS (display: none).</li>
            <li><code>v-for</code>: Iteración de listas. (¡Siempre requiere un <code>:key</code> único para mantener el rendimiento!).</li>
          </AtomUl>
        </AtomCard>
      </div>
    </AtomSection>

    <AtomH2>Demo Interactiva: Reactividad Inmediata</AtomH2>
    <AtomSection class="demo-section">
      <div style="margin-bottom: 1rem;">
        <AtomLabel for="nombreCurso">Nombre del Estudiante:</AtomLabel>
        <AtomInput id="nombreCurso" type="text" placeholder="Escribe tu nombre..." v-model="nombreAprendiz" />
      </div>

      <div style="margin-bottom: 1.5rem;">
        <AtomLabel for="nivelCurso">Nivel de Conocimiento:</AtomLabel>
        <select id="nivelCurso" v-model="nivelDificultad" class="atom-select">
          <option>Fácil</option>
          <option>Medio</option>
          <option>Intermedio Avanzado</option>
        </select>
      </div>

      <div class="reactive-result">
        <p>Estudiante registrado: <strong>{{ nombreAprendiz || 'Esperando datos...' }}</strong>.</p>
        <p>Progreso actual: <span class="difficulty-tag">{{ nivelDificultad }}</span></p>
      </div>
    </AtomSection>

    <AtomH2>Módulo 3: Flujo de Datos y defineModel (Novedad Vue 3.4)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Para mantener aplicaciones robustas, Vue impone un patrón arquitectónico conocido como 
        <strong>Flujo de Datos Unidireccional (One-Way Data Flow)</strong>. Esto significa que la 
        información fluye estrictamente de arriba hacia abajo. Un componente Padre pasa información 
        a sus Hijos a través de <strong>Props</strong>. El Hijo utiliza esta información para pintarse, 
        pero tiene totalmente prohibido alterarla. Si el Hijo necesita que ese dato cambie (por ejemplo, 
        el usuario pulsó un botón), debe disparar un evento hacia arriba usando <strong>Emits</strong>, 
        pidiéndole educadamente al Padre que sea él quien realice el cambio en el estado original.
      </p>

      <AtomTable :headers="['Concepto', 'Dirección', 'Función Principal']" :rows="[
        ['Props', 'Padre ➡️ Hijo', 'Inyectar datos estáticos o reactivos en componentes anidados.'],
        ['Emits', 'Hijo ➡️ Padre', 'Notificar al padre que ha ocurrido una interacción del usuario.']
      ]" />

      <p class="extended-text" style="margin-top: 1.5rem;">
        <strong>La Revolución del <code>defineModel()</code>:</strong> Históricamente, crear un componente 
        personalizado que funcionara con <code>v-model</code> requería un código tedioso (declarar una prop 
        llamada <code>modelValue</code> y un emit llamado <code>update:modelValue</code>). A partir de la versión 
        <strong>Vue 3.4</strong>, la nueva macro <code>defineModel()</code> cambió las reglas del juego. Ahora, 
        con una simple línea de código en el hijo, Vue genera y sincroniza automáticamente las Props y los Emits 
        en tiempo de compilación. Elimina todo el código repetitivo y hace que la creación de sistemas de diseño 
        sea más rápida que nunca.
      </p>

      <div class="communication-demo" style="margin-top: 2rem;">
        <h3 style="color: #ecf0f1; margin-top: 0; margin-bottom: 1rem;">Simulación Visual de Props y Emits</h3>
        <div class="com-box padre-box">
          <h4>DOM Padre (Estado Global)</h4>
          <p>Variable interna: <code>contadorHijo</code> = <strong>{{ contadorHijo }}</strong></p>
          <div class="message-display">{{ mensajeHijo }}</div>
        </div>
        
        <div class="com-box hijo-box">
          <h4>DOM Hijo (Componente Aislado)</h4>
          <p>Recibo por Prop el número: <strong>{{ contadorHijo }}</strong></p>
          <p>Para modificarlo, emito un evento de cambio hacia el Padre:</p>
          <div class="button-row">
            <AtomButton variant="danger" @click="recibirMensajeDelHijo({ nuevoValor: contadorHijo - 1 })">Emitir Resta (-1)</AtomButton>
            <AtomButton variant="success" @click="recibirMensajeDelHijo({ nuevoValor: contadorHijo + 1 })">Emitir Suma (+1)</AtomButton>
          </div>
        </div>
      </div>
    </AtomSection>

    <AtomH2>Módulo 4: Propiedades Computadas y Ciclo de Vida</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Para pasar de escribir simple HTML interactivo a crear auténtica lógica de negocio de nivel intermedio, 
        debes dominar cómo Vue procesa los cálculos derivados y cómo maneja la vida de los componentes en la memoria.
      </p>

      <div class="grid-cards">
        <AtomCard>
          <template #header><h3>El Poder de <code>computed()</code></h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            A primera vista, las propiedades computadas parecen simples funciones que devuelven un valor. 
            La inmensa diferencia técnica es que <strong>se cachean (memorizan) en base a sus dependencias reactivas</strong>. 
            Si tienes un cálculo matemático pesado basado en una variable <code>A</code>, solo se reevaluará cuando <code>A</code> cambie. 
            Si tu página se repinta constantemente por culpa de una variable <code>B</code> independiente, Vue devolverá 
            inmediatamente el resultado guardado en caché de la propiedad computada, protegiendo ferozmente el rendimiento de tu CPU.
          </p>
        </AtomCard>
        
        <AtomCard>
          <template #header><h3>Efectos con <code>watch()</code></h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            Mientras que <code>computed</code> se usa para generar datos nuevos, <code>watch()</code> se utiliza 
            para ejecutar <em>"efectos secundarios"</em>. Es decir, código que debe reaccionar de forma imperativa 
            al cambio de una variable. Es la herramienta ideal para disparar una petición a una API externa cuando 
            un ID cambia en la URL, para guardar información automáticamente en el <code>localStorage</code> del navegador, 
            o para manipular manualmente el DOM utilizando bibliotecas de terceros que no entienden la reactividad de Vue.
          </p>
        </AtomCard>
      </div>

      <h3 style="color: #f1c40f; margin-top: 2rem;">El Ciclo de Vida del Componente</h3>
      
      
      <p class="extended-text" style="margin-top: 1rem;">
        Todo componente en Vue tiene un ciclo de vida que abarca desde su creación en memoria hasta su destrucción. 
        A través de la Composition API, utilizamos <em>Lifecycle Hooks</em> (ganchos) para ejecutar código en momentos 
        críticos. Por ejemplo, la función <code>onMounted()</code> se dispara en el milisegundo exacto en el que tu componente 
        termina de insertarse físicamente en el DOM del navegador; es el lugar estándar y más seguro para hacer peticiones Fetch a tu Backend. 
        Por el contrario, <code>onUnmounted()</code> es tu línea de defensa crítica: se ejecuta justo antes de que el componente sea destruido, 
        y es tu obligación usarlo para detener temporizadores (<code>setInterval</code>) o limpiar <em>Event Listeners</em> globales 
        para prevenir desastrosas fugas de memoria (memory leaks) en tu SPA.
      </p>
    </AtomSection>

    <AtomH2>Checkpoint de Conocimiento</AtomH2>
    <AtomSection>
      <p>Has interiorizado la teoría fundamental. Asegúrate de comprender a fondo:</p>
      <AtomUl>
        <li v-for="(concepto, index) in conceptosClave" :key="index" style="margin-bottom: 0.5rem; line-height: 1.5;">
          {{ concepto }}
        </li>
      </AtomUl>
    </AtomSection>

  </AtomArticle>
</template>

<style scoped>
.header-content { display: flex; flex-direction: column; align-items: center; margin-bottom: 2rem; }
.extended-text { line-height: 1.8; margin-bottom: 1.2rem; color: #ecf0f1; text-align: justify; }

pre { background-color: #2c3e50; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #f1c40f; color: #ecf0f1; font-family: 'Courier New', monospace; overflow-x: auto; margin: 1.5rem 0; box-shadow: 0 4px 6px rgba(0,0,0,0.2); }
code { white-space: pre-line; }

h3 { color: #f1c40f; margin-top: 1.5rem; font-size: 1.3rem; border-bottom: 1px solid rgba(241, 196, 15, 0.3); padding-bottom: 0.5rem; }

.grid-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; margin: 2rem 0; }

.demo-section { border: 4px solid #34495e; border-radius: 8px; background-color: rgba(52, 73, 94, 0.1); padding: 2rem; margin-top: 1rem; }
.reactive-result { margin-top: 1.5rem; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #f1c40f; color: #ecf0f1; background-color: rgba(0,0,0,0.2); }
.difficulty-tag { background-color: #f39c12; color: #2c3e50; padding: 0.3rem 0.6rem; border-radius: 4px; font-weight: bold; text-transform: uppercase; font-size: 0.9rem; }
.atom-select { width: 100%; padding: 1rem; border: 3px solid #16a085; border-radius: 6px; background-color: #2c3e50; color: #ecf0f1; font-size: 1.1rem; outline: none; transition: border-color 0.3s; }
.atom-select:focus { border-color: #1abc9c; }

.communication-demo { border: 4px solid #34495e; border-radius: 8px; background-color: rgba(52, 73, 94, 0.1); padding: 2rem; }
.com-box { padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; }
.com-box h4 { margin: 0 0 1rem 0; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 1px; }
.padre-box { border: 2px dashed #e74c3c; background-color: rgba(231, 76, 60, 0.05); }
.hijo-box { border: 2px dashed #2ecc71; background-color: rgba(46, 204, 113, 0.05); }
.message-display { background-color: #1a1a2e; padding: 1rem; border-radius: 6px; color: #ecf0f1; font-weight: normal; font-family: monospace; border-left: 3px solid #e74c3c; margin-top: 1rem; }
.button-row { display: flex; gap: 1.5rem; margin-top: 1.5rem; }
</style>