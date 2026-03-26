<template>
  <aside class="atom-aside">
    <slot></slot>
  </aside>
</template>

<style scoped>
.atom-aside {
  border: 4px dotted #00bcd4; /* Cian */
  padding: 1rem;
  flex: 1;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.atom-aside:hover {
  background-color: rgba(0, 188, 212, 0.1);
  border-radius: 20px; /* Cambia la forma al hacer hover */
}
</style>