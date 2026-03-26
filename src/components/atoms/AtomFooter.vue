<template>
  <footer class="atom-footer">
    <slot></slot>
  </footer>
</template>

<style scoped>
.atom-footer {
  border: 4px solid #34495e; /* Gris oscuro/Azulado */
  padding: 1rem;
  margin-top: 2rem;
  text-align: center;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.atom-footer:hover {
  background-color: rgba(52, 73, 94, 0.1);
  transform: translateY(5px); /* Se hunde un poquito */
}
</style>