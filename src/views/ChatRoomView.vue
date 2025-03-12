<template>
  <div class="container">
    <NavBar />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import getUser from '@/composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

const { user } = getUser()
const router = useRouter()

watch(user, () => {
  if(!user.value){
    console.log('no user')
    router.push({ name: 'welcome' })
  }
})
</script>

<style></style>
