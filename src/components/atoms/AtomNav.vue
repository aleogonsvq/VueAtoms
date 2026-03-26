<script setup>
import AtomUl from './AtomUl.vue' // Importamos el átomo Ul para usarlo dentro

defineProps({
  // Recibimos un array de objetos con la estructura: { text: '...', href: '...' }
  links: {
    type: Array,
    default: () => [] // Por defecto es un array vacío
  },
  // Nos permite elegir si el menú va de lado a lado o en columna
  layout: {
    type: String,
    default: 'horizontal',
    validator: (value) => ['horizontal', 'vertical'].includes(value)
  }
})
</script>

<template>
  <nav class="atom-nav" :class="`layout-${layout}`">
    
    <AtomUl v-if="links.length > 0" class="nav-list">
      <li v-for="(link, index) in links" :key="index" class="nav-item">
        <RouterLink :to="link.href">{{ link.text }}</RouterLink>
      </li>
    </AtomUl>
    
    <slot v-else></slot>
    
  </nav>
</template>

<style scoped>
.atom-nav {
  border: 4px solid #3498db; /* Azul brillante */
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background-color: rgba(52, 152, 219, 0.05);
}

.atom-nav:hover {
  box-shadow: 0 0 15px rgba(52, 152, 219, 0.4);
}

/* Sobreescribimos ligeramente el AtomUl interno para que parezca un menú */
.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none; /* Quitamos los cuadrados de la lista */
  padding: 0 !important;
  margin: 0;
  border-left: none !important; /* Quitamos el borde azul oscuro del AtomUl estándar */
}

/* Modificadores de Layout */
.layout-horizontal .nav-list {
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap; /* Para que no se rompa en móviles */
}

.layout-vertical .nav-list {
  flex-direction: column;
  gap: 1rem;
}

.nav-item a {
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s;
}

.nav-item a:hover {
  background-color: #3498db;
  color: #1a1a1a; /* Texto oscuro al hacer hover */
}
</style>