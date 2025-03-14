<template>
  <div class="chat-window">
    <div v-if="error">{{error}}</div>
    <div v-if="documents" class="messages" ref="messages">
        <div v-for="doc in formattedDocuments" :key="doc.id" class="single-message">
            <span class="created-at">{{ doc.createdAt }}</span>
            <span class="name">{{doc.sender}}</span>
            <span class="message">{{doc.message}}</span>
            
        </div>
        {{document}}
    </div>
  </div>
</template>

<script setup>
import { formatDistanceToNow } from "date-fns";
import getCollection from '@/composables/getCollection'
import { computed, onUpdated, ref } from "vue";

const { error,documents } = getCollection('chats')
const messages = ref(null)

const formattedDocuments = computed(() => {
    if(documents.value){
        return documents.value.map(doc => {
            let time = formatDistanceToNow(doc.createdAt.toDate(), { includeSeconds: true })
            return {...doc, createdAt: time }
        })
    }
})

onUpdated(() => {
    messages.value.scrollTop = messages.value.scrollHeight
})
</script>

<style>
    .chat-window {
        background: #fafafa;
        padding: 30px 20px;
    }
    .single-message {
        margin: 18px 0;
    }
    .created-at {
        display: block;
        color: #999;
        font-style: 12px;
        margin-bottom: 4px; 
    }
    .name {
        font-weight: bold;
        margin-right: 6px;
    }
    .messages {
        max-height: 400px;
        overflow: auto;
    }
</style>