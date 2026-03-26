<script setup>
import { RouterView } from 'vue-router'
import AtomHeader from './components/atoms/AtomHeader.vue'
import AtomH1 from './components/atoms/AtomH1.vue'
import AtomNav from './components/atoms/AtomNav.vue'
import AtomMain from './components/atoms/AtomMain.vue'
import AtomFooter from './components/atoms/AtomFooter.vue'

// Definimos el menú alimentando nuestro átomo inteligente
const menuNavegacion = [
  { text: 'Frontend (Vue 3)', href: '/' },
  { text: 'Arquitectura UI', href: '/patrones' },
  { text: 'Backend (Express)', href: '/backend' },
  { text: 'Bases de Datos', href: '/database' },
  { text: 'Seguridad', href: '/seguridad' },
  { text: 'Git & GitHub', href: '/git' },
  { text: 'Testing', href: '/testing' },
  { text: 'TDD', href: '/tdd' },
  { text: 'Flujo Full-Stack', href: '/flujo' }
]
</script>

<template>
  <div class="app-layout">
    <AtomHeader>
      <AtomH1>Enciclopedia Full-Stack</AtomH1>
    </AtomHeader>

    <AtomNav :links="menuNavegacion" layout="horizontal" />

    <AtomMain class="main-content">
      <RouterView /> 
    </AtomMain>

    <AtomFooter>
      <p>&copy; 2026 - Construido con mis propios Átomos Vue</p>
    </AtomFooter>
  </div>
</template>

<style>
/* Estilos globales básicos */
:root {
  background-color: #1e1e2f;
  color: #e0e0e0;
}
body {
  margin: 0;
  font-family: 'Segoe UI', system-ui, sans-serif;
}
.app-layout {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
}
.main-content {
  min-height: 50vh; /* Para que el footer no se suba si la página tiene poco texto */
}

/* Opcional: Para que RouterLink se vea bonito cuando está activo */
.router-link-active {
  background-color: #3498db;
  color: #1e1e2f !important;
  box-shadow: 0 4px 8px rgba(52, 152, 219, 0.4);
}
</style>