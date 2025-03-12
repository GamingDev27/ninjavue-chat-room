<template>
  <form @submit.prevent="submitForm">
    <input
      type="text"
      name="displayName"
      id="display-name"
      required
      placeholder="Display Name"
      v-model="displayName"
    />
    <input type="email" name="email" id="email" required placeholder="Email" v-model="email" />
    <input
      type="password"
      name="password"
      id="password"
      required
      placeholder="Password"
      v-model="password"
    />
    <div class="error">{{ error }}</div>
    <div class="success">{{ success }}</div>
    <button type="submit">Sign Up</button>
  </form>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import useSignup from '@/composables/useSignup'

const displayName = ref('')
const email = ref('')
const password = ref('')
const { error, signUp } = useSignup()
const success = ref('')



const submitForm = async () => {
  console.log(displayName.value, email.value, password.value)
  await signUp(email.value, password.value, displayName.value)
  if (!error.value) {
    success.value = 'Sign Up Successful. You may now return to the login page.'
  }
}
</script>

<style></style>
