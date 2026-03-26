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
    },
    // ¡NUEVA RUTA AÑADIDA AQUÍ!
    {
      path: '/patrones',
      name: 'patrones',
      component: () => import('../views/PatternsView.vue')
    },
    // ¡NUEVA RUTA AÑADIDA AQUÍ!
    {
      path: '/flujo',
      name: 'flujo',
      component: () => import('../views/FlowView.vue')
    },
    // ¡NUEVA RUTA DE SEGURIDAD!
    {
      path: '/seguridad',
      name: 'seguridad',
      component: () => import('../views/SecurityView.vue')
    },
    // ¡NUEVA RUTA DE TESTING!
    {
      path: '/testing',
      name: 'testing',
      component: () => import('../views/TestingView.vue')
    },
    // ¡NUEVA RUTA DE TDD!
    {
      path: '/tdd',
      name: 'tdd',
      component: () => import('../views/TddView.vue')
    },
  ]
})

export default router
