<template>
  <h1 class="atom-h1">
    <slot></slot>
  </h1>
</template>

<style scoped>
.atom-h1 {
  border-bottom: 4px dashed #e74c3c;
  padding-bottom: 0.5rem;
  margin: 0;
  font-size: 2.5rem;
  transition: all 0.3s ease;
}
.atom-h1:hover {
  color: #c0392b;
  letter-spacing: 1px;
}
</style>