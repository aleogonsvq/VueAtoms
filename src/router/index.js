import { createRouter, createWebHistory } from 'vue-router'
// Importaremos las vistas (las crearemos en el siguiente paso)
import FrontendView from '../views/FrontendView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'frontend',
      component: FrontendView
    },
    {
      path: '/backend',
      name: 'backend',
      component: () => import('../views/BackendView.vue') // Carga perezosa (Lazy Load)
    },
    {
      path: '/database',
      name: 'database',
      component: () => import('../views/DatabaseView.vue') // Carga perezosa
    },
    // ¡NUEVA RUTA AÑADIDA AQUÍ!
    {
      path: '/git',
      name: 'git',
      component: () => import('../views/GitView.vue')
    }
  ]
})

export default router
