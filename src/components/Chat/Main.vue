<template>
    <div id="chat-box" class="chat-box overflow-hidden">
        <p :class="item.type" class="truncate" v-for="(item, index) in props.messages"
            :key="index">{{ item.content }}</p>
    </div>
</template>

<style scoped>
.newChatJoin{
    color: rgba(255, 62, 236, 1);
}
.newChat{
    font-size: 14px; color:#fefefe;
}
</style>

<script setup>
import { onMounted } from "@vue/runtime-core"

const props = defineProps(['messages'])
onMounted(() => {
    var height = document.querySelector('#chat-box').clientHeight
    document.querySelector('#chat-box').style.maxHeight = `${height}px`;
})
</script>