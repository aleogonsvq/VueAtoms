<template>
  <header class="atom-header">
    <slot></slot>
  </header>
</template>

<style scoped>
.atom-header {
  border: 4px solid #e74c3c; /* Rojo intenso */
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.atom-header:hover {
  background-color: rgba(231, 76, 60, 0.1);
  box-shadow: 0 8px 15px rgba(231, 76, 60, 0.2);
  transform: translateY(-2px);
}
</style>