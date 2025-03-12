<template>
    <form @submit.prevent="submitForm">
        <input type="email" name="email" id="email" required placeholder="Email" v-model="email">
        <input type="password" name="password" id="password" required placeholder="Password" v-model="password">
        <div class="error">{{error}}</div>
        <div class="success">{{success}}</div>
        <button type="submit">Sign In</button>
    </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import useLogin from "@/composables/useLogin";

 const email = ref('');
 const password = ref('');
 const {error, login} = useLogin();
 const success = ref('');   
 const emit = defineEmits(['login'])


 const submitForm = async () => {
    await login(email.value, password.value);
    if(!error.value){
        success.value = 'Login Successful. Redirecting...'; 
        emit('login')
    }
 }
</script>

<style>

</style>