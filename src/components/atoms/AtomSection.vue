<template>
  <section class="atom-section">
    <slot></slot>
  </section>
</template>

<style scoped>
.atom-section {
  border: 2px dashed #9b59b6; /* Morado */
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
  transition: all 0.3s ease;
}
.atom-section:hover {
  background-color: rgba(155, 89, 182, 0.1);
  transform: translateX(5px); /* Pequeño empujón a la derecha */
}
</style>