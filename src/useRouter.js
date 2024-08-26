import { createMemoryHistory, createRouter } from 'vue-router'

import MyMenuPage from './pages/MyMenuPage.vue'
import MenuDetail from './pages/MenuDetail.vue'
import black from './pages/black.vue'
import NitroVanillaCream from './pages/NitroVanillaCream.vue'
import NitroColdBrew from './pages/NitroColdBrew.vue'
import DolceColdBrew from './pages/DolceColdBrew.vue'
import ReserveNitro from './pages/ReserveNitro.vue'
import ReserveColdBrew from './pages/ReserveColdBrew.vue'
import RiceCreamColdBrew from './pages/RiceCreamColdBrew.vue'
import MintColdBrew from './pages/MintColdBrew.vue'
import VanillaCreamColdBrew from './pages/VanillaCreamColdBrew.vue'

const routes = [
  { path: '/', component: MyMenuPage },
  { path: '/detail', component: MenuDetail },
  { path: '/black', component: black },
  { path: '/NitroVanillaCream', component: NitroVanillaCream},
  { path: '/NitroColdBrew', component: NitroColdBrew},
  { path: '/DolceColdBrew', component: DolceColdBrew},
  { path: '/ReserveNitro', component: ReserveNitro},
  { path: '/ReserveColdBrew', component: ReserveColdBrew},
  { path: '/MintColdBrew', component: MintColdBrew},
  { path: '/VanillaCreamColdBrew', component: VanillaCreamColdBrew},
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;