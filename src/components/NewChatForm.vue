<template>
  <form>
    <textarea
      name="chat"
      id="chat"
      cols="30"
      rows="2"
      placeholder="Type a message and hit enter..."
      v-model="message"
      @keypress.enter.prevent="handleChat"
    ></textarea>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'
import useCollection from '@/composables/useCollection'

const message = ref('')
const { user } = getUser()
const { addDoc, error } = useCollection('chats')

const handleChat = async () => {
  const chat = {
    message: message.value,
    sender: user.value.displayName,
    createdAt: timestamp(),
  }

  await addDoc(chat)

  if (!error.value) {
    message.value = ''
  }
}
</script>

<style>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
