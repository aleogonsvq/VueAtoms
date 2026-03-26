<script setup>
import { onMounted, onUnmounted } from 'vue'

// Props para controlar el estado y el título
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Aviso Importante'
  }
})

// Emits para cerrar el modal
const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}

// Cerrar con la tecla Escape (Accesibilidad)
const handleEsc = (e) => {
  if (props.show && e.key === 'Escape') {
    handleClose()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEsc)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEsc)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="show" class="atom-dialog-overlay" @click.self="handleClose">
        
        <div class="atom-dialog">
          
          <header class="dialog-header">
            <h3>{{ title }}</h3>
            <button class="close-btn" @click="handleClose" aria-label="Cerrar modal">&times;</button>
          </header>
          
          <section class="dialog-body">
            <slot></slot>
          </section>
          
          <footer v-if="$slots.footer" class="dialog-footer">
            <slot name="footer"></slot>
          </footer>
          
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* --- Estilos del Overlay (Fondo oscuro) --- */
.atom-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Fondo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Asegura que esté por encima de todo */
  backdrop-filter: blur(5px); /* Efecto de desenfoque de fondo */
}

/* --- Estilos del Modal (Caja) --- */
.atom-dialog {
  /* Nuestro borde semántico: Magenta Profundo */
  border: 4px solid #8e44ad; 
  background-color: #2c3e50;
  color: #ecf0f1;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  box-shadow: 0 10px 30px rgba(142, 68, 173, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  /* Animación inicial */
  animation: modal-slide-in 0.3s ease-out;
}

/* --- Estilos de las Secciones --- */
.dialog-header {
  padding: 1rem 1.5rem;
  background-color: rgba(142, 68, 173, 0.1);
  border-bottom: 2px dashed #8e44ad;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dialog-header h3 {
  margin: 0;
  font-size: 1.3rem;
  color: #ecf0f1;
}

.close-btn {
  background: none;
  border: none;
  color: #ecf0f1;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  opacity: 0.7;
}
.close-btn:hover {
  opacity: 1;
  color: #e74c3c;
}

.dialog-body {
  padding: 1.5rem;
  overflow-y: auto; /* Scroll si el contenido es largo */
}

.dialog-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid #444;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

/* =========================================
   ANIMACIONES
   ========================================= */

/* Transición del Overlay (Fade) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animación de Entrada del Modal (Slide in) */
@keyframes modal-slide-in {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>