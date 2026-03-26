<script setup>
import { ref } from 'vue'

const props = defineProps({
  language: {
    type: String,
    default: 'text'
  },
  fileName: {
    type: String,
    default: ''
  }
})

// Estado para el botón y referencia al elemento HTML
const copied = ref(false)
const codeContainer = ref(null) // ¡Nueva referencia al DOM!

// Función mejorada y a prueba de fallos para copiar el código
const copyCode = async () => {
  // Extraemos el texto real directamente del elemento <pre>
  if (codeContainer.value) {
    const codeText = codeContainer.value.innerText
    
    try {
      await navigator.clipboard.writeText(codeText)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    } catch (err) {
      console.error('Error al copiar: ', err)
    }
  }
}
</script>

<template>
  <div class="atom-code-block">
    <header class="code-header">
      <div class="header-info">
        <span class="language-tag">{{ language }}</span>
        <span v-if="fileName" class="file-name">// {{ fileName }}</span>
      </div>
      <button class="copy-btn" @click="copyCode">
        {{ copied ? '✔️ Copiado!' : '📋 Copiar' }}
      </button>
    </header>
    
    <pre ref="codeContainer" class="code-pre" :class="`language-${language}`"><code><slot></slot></code></pre>
  </div>
</template>

<style scoped>
.atom-code-block {
  border: 4px double #f1c40f;
  background-color: #1a1a2e;
  border-radius: 8px;
  overflow: hidden; 
  margin: 1.5rem 0;
  box-shadow: 0 4px 6px rgba(241, 196, 15, 0.2);
}

.code-header {
  padding: 0.5rem 1rem;
  background-color: rgba(241, 196, 15, 0.1);
  border-bottom: 2px dashed #f1c40f;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-info {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.language-tag {
  background-color: #f1c40f;
  color: #1a1a2e;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.8rem;
  text-transform: uppercase;
}

.file-name {
  color: #bdc3c7;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}

.copy-btn {
  background: none;
  border: 1px solid rgba(241, 196, 15, 0.5);
  color: #f1c40f;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s;
}
.copy-btn:hover {
  background-color: #f1c40f;
  color: #1a1a2e;
}

/* --- LA MAGIA DEL TEXT WRAP ESTÁ AQUÍ --- */
.code-pre {
  margin: 0;
  padding: 1rem;
  color: #ecf0f1;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.95rem;
  line-height: 1.5;
  
  /* Hace que el texto salte de línea automáticamente al llegar al borde */
  white-space: pre-wrap; 
  
  /* Si hay una palabra exageradamente larga (como un token JWT), la rompe para que no deforme la caja */
  word-wrap: break-word; 
  overflow-wrap: break-word;
}
</style>