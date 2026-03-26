<script setup>
// Definimos los Props con validación
defineProps({
  // Variantes de color: controlan el borde y fondo 'semántico'
  variant: {
    type: String,
    default: 'primary', // Color por defecto si no se pasa nada
    validator: (value) => {
      // Solo aceptamos estas opciones específicas
      return ['primary', 'secondary', 'danger', 'success'].includes(value)
    }
  },
  // Prop nativa para el tipo de botón
  type: {
    type: String,
    default: 'button' // 'button', 'submit', or 'reset'
  },
  // Prop nativa para deshabilitar
  disabled: {
    type: Boolean,
    default: false
  }
})

// Nota: No necesitamos definir defineEmits(['click']) explícitamente.
// Vue pasa automáticamente los eventos nativos (como @click) 
// del padre al elemento raíz (<button>) si no se capturan internamente.
</script>

<template>
  <button
    class="atom-button"
    :class="[`variant-${variant}`]"
    :type="type"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
/* --- Estilos Base (Comunes a todos) --- */
.atom-button {
  /* Mantenemos nuestro estilo de borde doble característico de la SPA */
  border-style: double;
  border-width: 4px;
  
  padding: 0.8rem 1.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  outline: none; /* Quitamos outline nativo feo */
  
  /* Transición suave para todos los cambios (color, transform) */
  transition: all 0.2s ease-in-out;
}

/* Efecto activo para todos los botones (clic hacia abajo) */
.atom-button:active:not(:disabled) {
  transform: translateY(1px);
}

/* --- Estilos para el estado Deshabilitado (Comunes) --- */
.atom-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important; /* Evita movimientos en hover/active */
  
  /* Sobreescribimos colores por defecto de deshabilitado */
  border-style: solid !important; /* Cambiamos double por solid */
  border-color: #7f8c8d !important;
  background-color: #34495e !important;
  color: #95a5a6 !important;
  box-shadow: none !important;
}

/* =========================================
   VARIANTES DE COLOR (Lógica de Props)
   ========================================= */

/* --- Varianta: Primary (Azul) --- */
.variant-primary {
  border-color: #2980b9;
  background-color: #3498db;
  color: white;
}
.variant-primary:hover:not(:disabled) {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.4);
}

/* --- Varianta: Danger (Rojo, el original) --- */
.variant-danger {
  border-color: #c0392b;
  background-color: #e74c3c;
  color: white;
}
.variant-danger:hover:not(:disabled) {
  background-color: #c0392b;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(192, 57, 43, 0.4);
}

/* --- Varianta: Success (Verde) --- */
.variant-success {
  border-color: #27ae60;
  background-color: #2ecc71;
  color: white;
}
.variant-success:hover:not(:disabled) {
  background-color: #27ae60;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(46, 204, 113, 0.4);
}

/* --- Varianta: Secondary (Gris) --- */
.variant-secondary {
  border-color: #7f8c8d;
  background-color: #bdc3c7;
  color: #2c3e50; /* Texto oscuro para contraste */
}
.variant-secondary:hover:not(:disabled) {
  background-color: #95a5a6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(189, 195, 199, 0.4);
}
</style>