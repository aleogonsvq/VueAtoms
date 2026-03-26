<template>
  <td class="atom-td">
    <slot></slot>
  </td>
</template>

<style scoped>
.atom-td {
  border: 2px solid #00b894; /* Verde menta */
  padding: 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}
.atom-td:hover {
  background-color: rgba(0, 184, 148, 0.1);
  border-color: #00cec9;
}
</style>