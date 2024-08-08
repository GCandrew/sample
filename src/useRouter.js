import { createMemoryHistory, createRouter } from 'vue-router'

import MyMenuPage from './pages/MyMenuPage.vue'
import MenuDetail from './pages/MenuDetail.vue'
import black from './pages/black.vue'

const routes = [
  { path: '/', component: MyMenuPage },
  { path: '/detail', component: MenuDetail },
  { path: '/black', component: black },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})