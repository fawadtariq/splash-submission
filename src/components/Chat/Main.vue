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
.chat-box{
   @apply p-4 w-full h-full rounded-2xl relative;

background: #180C3C;


}

.chat-box:before{
    content: '';
    background: linear-gradient(181deg, #514D67 1.31%, rgba(209, 206, 232, 0) 100%);
    background-color: white;
    position: absolute;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    top: -4px; left: -4px; z-index: -1; border-radius: 16px;


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