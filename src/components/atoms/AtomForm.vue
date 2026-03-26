<script setup>
defineEmits(['submit'])
</script>

<template>
  <form class="atom-form" @submit.prevent="$emit('submit')">
    <slot></slot>
  </form>
</template>

<style scoped>
.atom-form {
  border: 4px dashed #e67e22; /* Naranja zanahoria */
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 8px;
  background-color: rgba(230, 126, 34, 0.05);
  transition: all 0.3s ease;
}
.atom-form:hover {
  box-shadow: 0 0 15px rgba(230, 126, 34, 0.3);
  transform: scale(1.01);
}
</style>