<template>
  <tr class="atom-tr">
    <slot></slot>
  </tr>
</template>

<style scoped>
.atom-tr {
  transition: all 0.2s ease;
  /* En las tablas, los <tr> no siempre aceptan bordes fácilmente si no colapsamos,
     pero usaremos un outline o background en el hover para destacarlo */
}
.atom-tr:hover {
  background-color: rgba(253, 203, 110, 0.3); /* Amarillo suave */
}
</style>