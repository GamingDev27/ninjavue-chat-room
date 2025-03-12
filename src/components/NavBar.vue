<template>
  <nav v-if="user">
    <div >
      <p>Hey there {{user.displayName}}</p>
      <p class="email">Currently loggin as <span style="font-weight:bold">{{user.email}}</span></p>
    </div>
    <button @click="handleLogout">logout</button>
  </nav>
</template>

<script setup>
import useLogout from '@/composables/useLogout'
//import { useRouter } from 'vue-router'
import getUser from '@/composables/getUser'
import { onMounted } from 'vue'

const { error, logout } = useLogout()
const { user } = getUser()
//const router = useRouter()

const handleLogout = async () => {
  await logout()
  console.log('logout')
  if (!error.value) {
    //success.value = 'Sign Up Successful. You may now return to the login page.'
    //router.push({ name: 'welcome' })
  }
}

onMounted(() => {
  console.log(user.value)
})
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
