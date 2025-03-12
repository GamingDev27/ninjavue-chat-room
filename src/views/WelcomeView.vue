<template>
  <div class="welcome container">
    Welcome
    <div v-if="showLogin">
        <h2>Login</h2>
        <SignInView @login="handleLogin" />
        <p>No account yet? <span @click="showLogin = false"  class="btn-secondary">Sign Up</span> here</p>

    </div>
    <div v-else>
        <h2>Sign Up</h2>
        <SignUpView />
        <p>Already Signup? <span @click="showLogin = true"  class="btn-secondary">LogIn</span> here</p>

    </div>
  </div>
</template>

<script setup>
import SignUpView from "@/components/SignUpView.vue";
import SignInView from "@/components/SignInView.vue";
import {useRouter} from "vue-router";
//import {RouterLink} from "vue-router";

import { ref } from "vue";

const showLogin = ref(true);
const router = useRouter();

const handleLogin = () => {
    console.log('Login successful');
    router.push({name: 'chatroom'});
}

</script>

<style scope>
    .welcome {
        text-align: center;
        padding: 20px 0;
    }
     /* form styles */
    .welcome form {
        width: 300px;
        margin: 20px auto;
    }
    .welcome label {
        display: block;
        margin: 20px 0 10px;
    }
    .welcome input {
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        border: 1px solid #eee;
        outline: none;
        color: #999;
        margin: 10px auto;
    }
    span.btn-secondary {
        font-weight: bold;
        cursor: pointer;
        text-decoration: underline;
    }
    button {
        cursor: pointer
    }
</style>