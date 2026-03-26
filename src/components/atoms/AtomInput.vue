<script setup>
const model = defineModel()
</script>

<template>
  <input class="atom-input" v-model="model" />
</template>

<style scoped>
.atom-input {
  border: 3px solid #16a085; /* Verde mar */
  padding: 0.8rem;
  width: 100%;
  box-sizing: border-box; /* Para que el padding no rompa el ancho */
  margin-bottom: 1rem;
  border-radius: 4px;
  background-color: #2c3e50;
  color: #ecf0f1;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
}
.atom-input:focus {
  border-color: #1abc9c;
  box-shadow: 0 0 10px rgba(26, 188, 156, 0.5);
}
</style>