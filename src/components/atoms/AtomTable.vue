<script setup>
// Importamos los submódulos de la tabla para usarlos internamente
import AtomTr from './AtomTr.vue'
import AtomTh from './AtomTh.vue'
import AtomTd from './AtomTd.vue'

defineProps({
  // Array de textos para la cabecera: ['Columna 1', 'Columna 2']
  headers: {
    type: Array,
    default: () => []
  },
  // Array de arrays para las filas: [ ['Dato 1', 'Dato 2'], ['Dato 3', 'Dato 4'] ]
  rows: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <table class="atom-table">
    
    <template v-if="headers.length > 0 || rows.length > 0">
      
      <thead v-if="headers.length > 0">
        <AtomTr>
          <AtomTh v-for="(header, index) in headers" :key="`th-${index}`">
            {{ header }}
          </AtomTh>
        </AtomTr>
      </thead>
      
      <tbody v-if="rows.length > 0">
        <AtomTr v-for="(row, rowIndex) in rows" :key="`tr-${rowIndex}`">
          <AtomTd v-for="(cell, cellIndex) in row" :key="`td-${rowIndex}-${cellIndex}`">
            {{ cell }}
          </AtomTd>
        </AtomTr>
      </tbody>

    </template>

    <slot v-else></slot>
    
  </table>
</template>

<style scoped>
.atom-table {
  border: 4px solid #e84393; /* Rosa fuerte */
  width: 100%;
  border-collapse: separate;
  border-spacing: 8px;
  margin: 1.5rem 0;
  border-radius: 8px;
  background-color: rgba(232, 67, 147, 0.05);
  transition: all 0.3s ease;
}
.atom-table:hover {
  box-shadow: 0 0 15px rgba(232, 67, 147, 0.3);
  transform: scale(1.02);
}
</style>