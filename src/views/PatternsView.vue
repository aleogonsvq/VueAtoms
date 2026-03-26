<script setup>
import AtomArticle from '../components/atoms/AtomArticle.vue'
import AtomH1 from '../components/atoms/AtomH1.vue'
import AtomH2 from '../components/atoms/AtomH2.vue'
import AtomSection from '../components/atoms/AtomSection.vue'
import AtomCard from '../components/atoms/AtomCard.vue'
import AtomTable from '../components/atoms/AtomTable.vue'
import AtomUl from '../components/atoms/AtomUl.vue'
import AtomCodeBlock from '../components/atoms/AtomCodeBlock.vue'

const patronesHeaders = ['Acrónimo', 'Nombre Completo', 'Descripción y Uso']
const patronesRows = [
  ['MVC', 'Model-View-Controller', 'El clásico del backend. El Controlador recibe la petición, pide datos al Modelo y se los inyecta a la Vista (HTML).'],
  ['MVP', 'Model-View-Presenter', 'Usado en apps móviles nativas. El Presentador asume toda la lógica y actualiza la Vista manualmente.'],
  ['MVVM', 'Model-View-ViewModel', 'El estándar moderno (Vue, React, Angular). El ViewModel sincroniza automáticamente el Modelo y la Vista usando Reactividad.']
]
</script>

<template>
  <AtomArticle>
    
    <div class="header-content">
      <AtomH1 style="margin-top: 1rem;">Patrones y Arquitectura de Vistas</AtomH1>
    </div>

    <p style="font-size: 1.2rem; color: #bdc3c7; text-align: center; line-height: 1.8;">
      Construir interfaces no es solo escupir etiquetas HTML. Descubre los patrones de diseño 
      arquitectónico que permiten a aplicaciones como Netflix o Spotify escalar sin colapsar.
    </p>

    <AtomH2>Módulo 1: Aclarando el misterio (MVC vs MVVM)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        A menudo se habla de "MCP", pero suele ser una confusión con <strong>MVC</strong> o <strong>MVP</strong>. 
        Históricamente, el desarrollo web separaba la lógica de la interfaz usando estos patrones. 
        Sin embargo, Vue.js fue construido inspirándose profundamente en el patrón <strong>MVVM</strong>.
      </p>

      

      <AtomTable :headers="patronesHeaders" :rows="patronesRows" />

      <p class="extended-text" style="margin-top: 1.5rem;">
        <strong>¿Cómo aplica esto a Vue?</strong><br>
        En Vue, tu <code>&lt;template&gt;</code> es la <strong>Vista</strong>. Tus variables reactivas (ej. <code>ref()</code>) o datos en base de datos son el <strong>Modelo</strong>. 
        Y el bloque <code>&lt;script setup&gt;</code> actúa como el <strong>ViewModel</strong>: un intermediario mágico que escucha los cambios del Modelo y repinta la Vista al instante gracias al <em>Two-Way Data Binding</em>.
      </p>
    </AtomSection>

    <AtomH2>Módulo 2: El Patrón "Contenedor vs Presentacional"</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Incluso usando MVVM, si metes toda la lógica y todo el diseño visual en un solo archivo de Vue, 
        acabarás con un monstruo inmanejable de 2000 líneas. Para evitarlo, la industria utiliza el patrón 
        <strong>Smart vs Dumb Components</strong> (también llamado <em>Container vs Presentational</em>).
      </p>

      <div class="grid-cards">
        <AtomCard>
          <template #header><h3 style="color: #e74c3c;">Vistas / Contenedores (Smart)</h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            Son los "cerebros" de la operación (ej. nuestro <code>BackendView.vue</code>). 
            <strong>No tienen estilos CSS apenas</strong>. Su único trabajo es hablar con la base de datos, 
            manejar el estado (variables) y pasar esa información hacia abajo.
          </p>
        </AtomCard>
        
        <AtomCard>
          <template #header><h3 style="color: #2ecc71;">Componentes (Dumb / Presentacionales)</h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            Son nuestros <code>AtomButton</code> o <code>AtomCard</code>. <strong>Son tontos a propósito.</strong> 
            No saben de dónde vienen los datos. Solo reciben <code>Props</code>, aplican CSS para verse bonitos, 
            y si el usuario hace clic, lanzan un <code>Emit</code> avisando al componente padre.
          </p>
        </AtomCard>
      </div>
    </AtomSection>

    <AtomH2>Módulo 3: La Metodología del Diseño Atómico</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Ahora que sabemos separar la lógica del diseño, necesitamos una forma de organizar los componentes "Dumb" visuales. 
        Brad Frost inventó el <strong>Diseño Atómico</strong>, inspirado en la química, y es exactamente lo que hemos estado aplicando en este proyecto.
      </p>

      

      <AtomUl style="margin-bottom: 1.5rem;">
        <li><strong>Átomos:</strong> Elementos HTML básicos que no se pueden dividir más (<code>AtomButton</code>, <code>AtomInput</code>).</li>
        <li><strong>Moléculas:</strong> Un grupo de átomos funcionando juntos (ej. Label + Input + Button = Campo de búsqueda).</li>
        <li><strong>Organismos:</strong> Secciones complejas e independientes (ej. El <code>AtomHeader</code> completo).</li>
        <li><strong>Plantillas (Layouts):</strong> El esqueleto de la página sin datos reales.</li>
        <li><strong>Páginas (Views):</strong> El producto final. Una Plantilla inyectada con datos reales del backend.</li>
      </AtomUl>
    </AtomSection>

    <AtomH2>Módulo 4: Flujo Práctico de Creación de Vistas</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Cuando tu jefe te pide crear la "Página de Perfil de Usuario", este es el patrón de pasos exacto que debes seguir como desarrollador Frontend estructurado:
      </p>

      <AtomCodeBlock v-pre language="markdown" fileName="Flujo_de_Trabajo.md">
        
1. ANÁLISIS VISUAL (De grande a pequeño):
   Miras el diseño en Figma. Identificas qué Átomos necesitas (¿Me falta un Avatar?).

2. CREACIÓN DE ÁTOMOS/MOLÉCULAS:
   Programas los componentes tontos primero en `src/components/`. 
   Les configuras las Props (color, tamaño, texto) pero SIN lógica real.

3. CREACIÓN DE LA VISTA (Smart Component):
   Creas `src/views/ProfileView.vue`. Importas todos los átomos necesarios.

4. EL ESTADO REACTIVO:
   En el &lt;script setup&gt; de la Vista, creas tus variables ref() o llamas a tu API/Backend 
   para obtener los datos del usuario.

5. ENSAMBLAJE (Data Binding):
   En el &lt;template&gt; de la Vista, usas los átomos y les pasas las variables 
   reactivas a través de sus Props. (Ej: &lt;AtomAvatar :src="usuario.foto" /&gt;).
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