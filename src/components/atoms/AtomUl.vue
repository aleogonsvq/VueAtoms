<template>
  <ul class="atom-ul">
    <slot></slot>
  </ul>
</template>

<style scoped>
.atom-ul {
  border-left: 4px solid #2980b9; /* Azul oscuro */
  padding-left: 2rem;
  margin: 0;
  list-style-type: square;
  transition: all 0.3s ease;
}
.atom-ul:hover {
  background-color: rgba(41, 128, 185, 0.05);
  padding-left: 2.5rem; /* Efecto de deslizamiento */
}
</style>