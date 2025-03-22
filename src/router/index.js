import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import ChatRoomView from '../views/ChatRoomView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth()

//auth guards
const requireAuth = (to, from, next) => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      next({ name: 'welcome' })
    } else {
      next()
    }
  })
}

const requireNoAuth = (to, from, next) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      next({ name: 'chatroom' })
    } else {
      next()
    }
  })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView,
      beforeEnter: requireNoAuth,
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: ChatRoomView,
      beforeEnter: requireAuth,
    },
    /* {
      path: '/signin',
      name: 'signin',
      component: SignInView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
    }, */
  ],
})

export default router
