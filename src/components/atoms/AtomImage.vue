<script setup>
// Definimos props para hacer el componente reutilizable
defineProps({
  src: {
    type: String,
    required: true,
    description: 'La URL de la imagen'
  },
  alt: {
    type: String,
    required: true,
    description: 'Texto alternativo para accesibilidad'
  },
  width: {
    type: String,
    default: 'auto',
    description: 'Ancho opcional de la imagen (ej: "100px")'
  }
})
</script>

<template>
  <img 
    :src="src" 
    :alt="alt" 
    class="atom-image"
    :style="{ width: width }"
    loading="lazy" 
  />
</template>

<style scoped>
.atom-image {
  /* Nuestro borde semántico: Amarillo Neón */
  border: 4px solid #f1c40f; 
  padding: 5px;
  border-radius: 8px; /* Ligeramente redondeado */
  display: block; /* Evita espacios extraños debajo */
  max-width: 100%; /* Responsividad básica */
  height: auto;
  
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(241, 196, 15, 0.2);
}

.atom-image:hover {
  transform: scale(1.05) rotate(2deg); /* Se agranda y gira un poco */
  box-shadow: 0 0 20px rgba(241, 196, 15, 0.6);
  background-color: rgba(241, 196, 15, 0.1); /* Brillo de fondo */
  cursor: pointer;
}
</style>