<template>
  <div class="atom-card">
    
    <header v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </header>
    
    <section class="card-body">
      <slot></slot>
    </section>
    
    <footer v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </footer v-if="$slots.footer"> 
    <footer v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </footer>
    
  </div>
</template>

<style scoped>
.atom-card {
  /* Nuestro borde semántico: Cian Neón */
  border: 4px solid #00bcd4; 
  background-color: #2c3e50;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 188, 212, 0.2);
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Mantiene el contenido dentro de los bordes redondeados */
  
  transition: all 0.3s ease-in-out;
}

.atom-card:hover {
  transform: translateY(-5px); /* Se levanta un poco */
  box-shadow: 0 8px 20px rgba(0, 188, 212, 0.5);
  background-color: rgba(0, 188, 212, 0.05); /* Brillo de fondo */
  cursor: pointer;
}

/* --- Estilos de las Secciones --- */
.card-header {
  padding: 1rem;
  background-color: rgba(0, 188, 212, 0.1);
  border-bottom: 2px dashed #00bcd4;
  text-align: center;
}

.card-body {
  padding: 1.5rem;
  flex-grow: 1; /* Ocupa el espacio disponible */
}

.card-footer {
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-top: 1px solid #444;
  text-align: right;
}
</style>