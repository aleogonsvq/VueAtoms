<template>
  <main class="atom-main">
    <slot></slot>
  </main>
</template>

<style scoped>
.atom-main {
  border: 5px double #2ecc71; /* Verde esmeralda */
  padding: 1.5rem;
  flex: 3;
  border-radius: 8px;
  transition: all 0.4s ease;
}
.atom-main:hover {
  background-color: rgba(46, 204, 113, 0.05);
  border-color: #27ae60;
}
</style>