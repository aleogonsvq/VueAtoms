import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    // Activamos el Modo Librería
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'AleonsvqAtoms',
      fileName: 'index' // <-- SÚPER SIMPLE Y PREDECIBLE
    },
    rollupOptions: {
      // ¡MUY IMPORTANTE! Asegurarnos de externalizar Vue.
      // No queremos empaquetar todo el código de Vue dentro de nuestra librería,
      // porque el proyecto de destino ya tendrá su propio Vue instalado.
      external: ['vue'],
      output: {
        // Proporcionamos variables globales para las dependencias externalizadas
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})