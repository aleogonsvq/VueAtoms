<template>
  <label class="atom-label">
    <slot></slot>
  </label>
</template>

<style scoped>
.atom-label {
  border: 2px solid #8e44ad; /* Púrpura */
  padding: 0.2rem 0.5rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  font-weight: bold;
  transition: all 0.3s ease;
}
.atom-label:hover {
  background-color: rgba(142, 68, 173, 0.2);
  transform: translateX(3px);
}
</style>