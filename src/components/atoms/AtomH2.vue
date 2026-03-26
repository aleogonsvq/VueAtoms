<template>
  <h2 class="atom-h2">
    <slot></slot>
  </h2>
</template>

<style scoped>
.atom-h2 {
  border-left: 6px solid #f39c12;
  padding-left: 10px;
  margin-top: 1.5rem;
  color: #2c3e50;
  transition: all 0.3s ease;
}
.atom-h2:hover {
  padding-left: 15px;
  color: #f39c12;
}
</style>