<script setup>
import AtomArticle from '../components/atoms/AtomArticle.vue'
import AtomH1 from '../components/atoms/AtomH1.vue'
import AtomH2 from '../components/atoms/AtomH2.vue'
import AtomSection from '../components/atoms/AtomSection.vue'
import AtomCard from '../components/atoms/AtomCard.vue'
import AtomUl from '../components/atoms/AtomUl.vue'
import AtomCodeBlock from '../components/atoms/AtomCodeBlock.vue'
import AtomImage from '../components/atoms/AtomImage.vue'
</script>

<template>
  <AtomArticle>
    
    <div class="header-content">
      <AtomImage 
        src="https://upload.wikimedia.org/wikipedia/commons/2/24/Target_icon.svg" 
        alt="Símbolo de Objetivo / TDD" 
        width="100px" 
        style="filter: invert(100%);"
      />
      <AtomH1 style="margin-top: 1rem;">TDD: Desarrollo Guiado por Pruebas</AtomH1>
    </div>

    <p style="font-size: 1.2rem; color: #bdc3c7; text-align: center; line-height: 1.8;">
      Cambia tu forma de pensar. En lugar de escribir código y luego rezar para que funcione, 
      escribe primero cómo debería funcionar, míralo fallar, y luego escribe el código exacto para que pase.
    </p>

    <AtomH2>Módulo 1: El Ciclo "Red - Green - Refactor"</AtomH2>
    <AtomSection>
      <p class="extended-text">
        El TDD fue popularizado por Kent Beck (el creador de Extreme Programming). Se basa en un ciclo de trabajo estricto de tres pasos muy cortos. Nunca debes saltarte el orden.
      </p>

      

      <div class="grid-cards">
        <AtomCard>
          <template #header><h3 style="color: #e74c3c;">🔴 1. RED (Fallo)</h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            Escribes un test para una función que <strong>aún no existe</strong>. Ejecutas el test y confirmas que falla (se pone en rojo). Esto demuestra que el test realmente está evaluando algo y no da un falso positivo.
          </p>
        </AtomCard>
        
        <AtomCard>
          <template #header><h3 style="color: #2ecc71;">🟢 2. GREEN (Paso)</h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            Escribes el código de producción <strong>mínimo necesario</strong> para que el test pase. No pienses en algoritmos complejos, si el test espera un "4", puedes hacer que la función simplemente devuelva "return 4". El objetivo es ver el verde rápido.
          </p>
        </AtomCard>

        <AtomCard>
          <template #header><h3 style="color: #3498db;">🔵 3. REFACTOR (Mejora)</h3></template>
          <p class="extended-text" style="font-size: 0.95rem;">
            Ahora que estás a salvo (el test está en verde), mejoras el código. Quitas redundancias, aplicas patrones de diseño, limpias variables. Si rompes algo, el test se pondrá rojo inmediatamente y te avisará.
          </p>
        </AtomCard>
      </div>
    </AtomSection>

    <AtomH2>Módulo 2: TDD en Acción (Calculadora de Descuentos)</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Nuestro jefe nos pide: <em>"Crea una función que reciba un precio y un porcentaje de descuento, y devuelva el precio final"</em>. 
        Si no usáramos TDD, nos pondríamos a escribir la función matemática. <strong>Con TDD, empezamos por el Test.</strong>
      </p>

      <h3 style="color: #e74c3c; margin-top: 2rem;">Fase 1: RED</h3>
      <p class="extended-text">Escribimos el test imaginando cómo queremos que se use nuestra función (diseñamos la API pública antes de crearla).</p>
      
      <AtomCodeBlock language="javascript" fileName="tests/calculadora.test.js">
import { expect, test } from 'vitest'
import { aplicarDescuento } from '../src/calculadora.js'

test('Debe aplicar un 20% de descuento a un precio de 100', () => {
  // Ejecutamos la función asumiendo que ya existe
  const precioFinal = aplicarDescuento(100, 20)
  
  // Afirmamos que el resultado debería ser 80
  expect(precioFinal).toBe(80)
})

// RESULTADO AL EJECUTAR: 🔴 ERROR! 'aplicarDescuento is not defined'
      </AtomCodeBlock>

      <h3 style="color: #2ecc71; margin-top: 2rem;">Fase 2: GREEN</h3>
      <p class="extended-text">Escribimos el código más absurdo y rápido posible solo para satisfacer al test y quitar el error.</p>
      
      <AtomCodeBlock language="javascript" fileName="src/calculadora.js">
export function aplicarDescuento(precio, descuento) {
  // Truco sucio del TDD: Escribimos lo mínimo para que pase
  return 80; 
}

// RESULTADO AL EJECUTAR EL TEST: 🟢 PASSED!
      </AtomCodeBlock>

      <h3 style="color: #3498db; margin-top: 2rem;">Fase 3: REFACTOR</h3>
      <p class="extended-text">El jefe dice: <em>"Oye, ¿y si el precio es 200?"</em>. Escribimos otro test rápido para 200, se pondrá en Rojo (porque nuestra función devuelve siempre 80). Ahora refactorizamos para hacer la lógica matemática real.</p>
      
      <AtomCodeBlock language="javascript" fileName="src/calculadora.js">
export function aplicarDescuento(precio, descuento) {
  // Ahora implementamos la lógica matemática real
  const cantidadDescontada = (precio * descuento) / 100;
  return precio - cantidadDescontada;
}

// RESULTADO DE TODOS LOS TESTS: 🟢 PASSED!
      </AtomCodeBlock>
    </AtomSection>

    <AtomH2>Módulo 3: Las Ventajas Reales del TDD</AtomH2>
    <AtomSection>
      <p class="extended-text">
        Al principio, el TDD parece lento y desesperante. ¿Por qué escribir <code>return 80</code> si ya sabes la fórmula matemática?
      </p>

      <AtomUl style="margin-bottom: 1.5rem;">
        <li><strong>Diseño de API superior:</strong> Al escribir el test primero, te obligas a pensar en cómo "otra persona" va a consumir tu función (qué parámetros le resultan más cómodos enviar).</li>
        <li><strong>Confianza absoluta:</strong> Tienes la certeza matemática de que cada línea de tu código de producción está respaldada por una prueba.</li>
        <li><strong>Documentación viva:</strong> Los tests se convierten en el manual de instrucciones exacto de lo que hace el código. Si otro desarrollador no entiende tu función, solo tiene que leer tus tests.</li>
        <li><strong>Prevención de sobre-ingeniería:</strong> Como solo escribes el código necesario para pasar el test (fase Green), evitas programar funcionalidades complejas "por si acaso se necesitan en el futuro" (patrón YAGNI: <em>You Aren't Gonna Need It</em>).</li>
      </AtomUl>
    </AtomSection>

  </AtomArticle>
</template>

<style scoped>
.header-content { display: flex; flex-direction: column; align-items: center; margin-bottom: 2rem; }
.extended-text { line-height: 1.8; margin-bottom: 1.2rem; color: #ecf0f1; text-align: justify; }
h3 { margin-top: 1.5rem; font-size: 1.3rem; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 0.5rem; }
.grid-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 2rem 0; }
</style>