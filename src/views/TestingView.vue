<script setup>
import AtomArticle from '../components/atoms/AtomArticle.vue'
import AtomH1 from '../components/atoms/AtomH1.vue'
import AtomH2 from '../components/atoms/AtomH2.vue'
import AtomSection from '../components/atoms/AtomSection.vue'
import AtomCard from '../components/atoms/AtomCard.vue'
import AtomTable from '../components/atoms/AtomTable.vue'
import AtomUl from '../components/atoms/AtomUl.vue'
import AtomCodeBlock from '../components/atoms/AtomCodeBlock.vue'
import AtomImage from '../components/atoms/AtomImage.vue'

const piramideHeaders = ['Nivel', 'Volumen', 'Velocidad', '¿Qué comprueba?']
const piramideRows = [
  ['1. Unitario (Unit Tests)', 'Muchísimos (Base)', 'Milisegundos', 'Funciones aisladas o componentes tontos (Dumb Components).'],
  ['2. Integración', 'Medio (Centro)', 'Segundos', 'Cómo interactúan varias piezas (ej. Endpoint + Base de Datos).'],
  ['3. E2E (End-to-End)', 'Pocos (Cúspide)', 'Minutos', 'Simula a un usuario real haciendo clics en un navegador automatizado.']
]

const conceptosTesting = [
  'Assertions (Afirmaciones): La base de cualquier test. Lanzar un error si el resultado no es el esperado.',
  'TDD (Test-Driven Development): Escribir la prueba ANTES de escribir el código de la aplicación.',
  'Vitest / Jest: Frameworks profesionales para ejecutar miles de tests unitarios en paralelo.',
  'Cypress / Playwright: Herramientas E2E que abren un Chrome fantasma y hacen clics por ti.',
  'CI/CD: Ejecutar todos los tests automáticamente en GitHub antes de permitir un "merge".'
]
</script>

<template>
  <AtomArticle>
    
    <div class="header-content">
      <AtomImage 
        src="https://upload.wikimedia.org/wikipedia/commons/6/64/Icon_of_check_mark_in_a_circle.svg" 
        alt="Símbolo de Testing y Aprobación" 
        width="100px" 
      />
      <AtomH1 style="margin-top: 1rem;">Curso Maestro de Testing Automatizado</AtomH1>
    </div>

    <p style="font-size: 1.2rem; color: #bdc3c7; text-align: center; line-height: 1.8;">
      El código sin tests es código heredado (legacy) desde el minuto uno. Aprende a 
      crear una red de seguridad que te permita refactorizar e innovar sin el miedo a 
      romper tu aplicación en producción.
    </p>

    <AtomH2>Módulo 1: Creando un framework de Testing desde Cero</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Muchos desarrolladores le tienen miedo al Testing porque creen que necesitan aprender un lenguaje nuevo o magia oscura. 
        En realidad, <strong>un test automatizado es simplemente una función que ejecuta tu código y lanza un Error (<code>throw new Error</code>) si el resultado no coincide con lo que esperabas</strong>.
      </p>
      
      <p class="extended-text">
        Vamos a crear nuestro propio framework de testing (como un mini-Jest) usando <strong>JavaScript Puro (Vanilla JS)</strong>, sin instalar absolutamente ninguna librería.
      </p>

      <AtomCodeBlock language="javascript" fileName="mi-propio-test.js">
// 1. EL CÓDIGO DE NUESTRA APLICACIÓN (Lo que queremos probar)
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;

// 2. NUESTRO "FRAMEWORK" DE TESTING (La magia expuesta)
// Creamos una función 'expect' que hace la afirmación (Assertion)
function expect(resultadoReal) {
  return {
    toBe: (resultadoEsperado) => {
      if (resultadoReal !== resultadoEsperado) {
        throw new Error(`❌ Test falló: Esperaba ${resultadoEsperado}, pero recibí ${resultadoReal}`);
      }
    }
  }
}

// Creamos una función 'test' para agrupar y mostrar los resultados en la consola
function test(descripcion, funcionDelTest) {
  try {
    funcionDelTest(); // Ejecutamos el test
    console.log(`✅ PASÓ: ${descripcion}`);
  } catch (error) {
    console.error(error.message);
  }
}

// 3. ¡ESCRIBIENDO LOS TESTS!
test('La función sumar debe sumar 2 + 2 y dar 4', () => {
  const resultado = sumar(2, 2);
  expect(resultado).toBe(4);
});

test('La función restar debe restar 5 - 2 y dar 3', () => {
  expect(restar(5, 2)).toBe(3);
});

// Si ahora vas y rompes la función sumar poniendo (a - b), 
// al ejecutar este archivo verás el Error Rojo en tu consola. ¡Acabas de crear un test!
      </AtomCodeBlock>
    </AtomSection>

    <AtomH2>Módulo 2: La Pirámide del Software Testing</AtomH2>
    <AtomSection>
      <p class="extended-text">
        En un proyecto real gigante no usamos nuestro mini-framework, instalamos herramientas como <strong>Vitest</strong> (en Vue) o <strong>Jest</strong> (en React/Node). 
        Pero, ¿qué probamos exactamente? No podemos probar cada clic del usuario porque sería lentísimo. Para eso existe la Pirámide del Testing.
      </p>

      

      <AtomTable :headers="piramideHeaders" :rows="piramideRows" />

      <div class="grid-cards" style="margin-top: 2rem;">
        <AtomCard>
          <template #header><h3 style="color: #3498db;">Test Unitario (Vitest)</h3></template>
          <p class="extended-text" style="font-size: 0.9rem;">
            Aíslas un pequeño bloque de código (como la función <code>sumar</code> o nuestro <code>AtomButton</code>) y compruebas que funciona. Se ejecutan en milisegundos sin abrir el navegador.
          </p>
        </AtomCard>
        
        <AtomCard>
          <template #header><h3 style="color: #e74c3c;">Test E2E (Cypress)</h3></template>
          <p class="extended-text" style="font-size: 0.9rem;">
            End-to-End. Escribes un script que abre literalmente Google Chrome de forma invisible, navega a tu web, rellena el formulario de login, hace clic en "Entrar" y verifica que sale el mensaje de "Bienvenido". Es lento, pero te asegura que todo el sistema funciona en conjunto.
          </p>
        </AtomCard>
      </div>
    </AtomSection>

    <AtomH2>Módulo 3: Testeando un Componente Vue (Profesional)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Cuando pasamos de Vanilla JS a Vue, necesitamos una herramienta que sea capaz de "montar" (renderizar) nuestro componente en una memoria virtual para poder interactuar con él. Usamos <strong>Vue Test Utils</strong> junto con <strong>Vitest</strong>.
      </p>
      
      <p class="extended-text">
        Fíjate cómo la sintaxis <code>test</code> y <code>expect</code> es exactamente igual a la que hemos programado nosotros mismos en el Módulo 1.
      </p>

      <AtomCodeBlock language="javascript" fileName="tests/AtomButton.test.js">
import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import AtomButton from '../src/components/atoms/AtomButton.vue'

test('AtomButton renderiza el texto del slot y emite un evento al hacer clic', async () => {
  // 1. ARRANGE (Preparar): Montamos el botón en la memoria virtual pasándole un texto
  const wrapper = mount(AtomButton, {
    slots: {
      default: 'Púlsame'
    }
  });

  // 2. ASSERT (Afirmar - Renderizado): Comprobamos que el texto sale en pantalla
  expect(wrapper.text()).toContain('Púlsame');

  // 3. ACT (Actuar): Simulamos que un usuario hace clic en el botón nativo
  await wrapper.find('button').trigger('click');

  // 4. ASSERT (Afirmar - Comportamiento): Comprobamos que el hijo avisó al padre
  expect(wrapper.emitted()).toHaveProperty('click');
});
      </AtomCodeBlock>
    </AtomSection>

    <AtomH2>Checkpoint: Calidad Total</AtomH2>
    <AtomSection>
      <p>Interioriza estos conceptos y tu código será indestructible:</p>
      <AtomUl>
        <li v-for="(concepto, index) in conceptosTesting" :key="index" style="margin-bottom: 0.5rem; line-height: 1.5;">
          {{ concepto }}
        </li>
      </AtomUl>
    </AtomSection>

  </AtomArticle>
</template>

<style scoped>
.header-content { display: flex; flex-direction: column; align-items: center; margin-bottom: 2rem; }
.extended-text { line-height: 1.8; margin-bottom: 1.2rem; color: #ecf0f1; text-align: justify; }
h3 { margin-top: 1.5rem; font-size: 1.3rem; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 0.5rem; }
.grid-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; margin: 2rem 0; }
</style>