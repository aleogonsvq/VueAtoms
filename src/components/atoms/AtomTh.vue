<template>
  <th class="atom-th">
    <slot></slot>
  </th>
</template>

<style scoped>
.atom-th {
  border: 3px solid #0984e3; /* Azul eléctrico */
  padding: 1rem;
  background-color: rgba(9, 132, 227, 0.1);
  text-align: left;
  border-radius: 4px;
  transition: all 0.3s ease;
}
.atom-th:hover {
  background-color: rgba(9, 132, 227, 0.2);
  transform: translateY(-2px);
}
</style>