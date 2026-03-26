<template>
  <article class="atom-article">
    <slot></slot>
  </article>
</template>

<style scoped>
.atom-article {
  border: 3px solid #f39c12; /* Naranja */
  padding: 1rem;
  border-radius: 4px;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.atom-article:hover {
  background-color: rgba(243, 156, 18, 0.08);
  transform: scale(1.01);
}
</style>