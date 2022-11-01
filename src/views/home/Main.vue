<script setup>

import GameView from '@/components/AppView.vue'
import RankCard from '@/components/Rank/RankCard.vue'
import ChatBox from '@/components/Chat/Main.vue'
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { io } from "socket.io-client";

const state = reactive({ messages: [] });

const socket = io("wss://wrongway-racer-api.spls.ae/", {
    reconnectionDelayMax: 10000,

});


onMounted(() => {
    socket.onAny((event, ...args) => {
        if(event == 'newChatJoin'){
            logNewJoin(args[0]);
        }
        if(event == 'newChat'){
            logNewChat(args[0]);
        }
        else{
            console.log(`got ${event}`, ...args);
        }
    });
})

const logNewJoin = (data) => {
    if (data) {
            state.messages.push({type: 'newChatJoin', content: `${data.name} has joined the game`});
        }
}
const logNewChat = (data) => {
    if (data) {
            state.messages.push({type: 'newChat', content: `${data}`});
        }
}
</script>

<template>
    <div class="app-container">
        <div class="row-span-3 h-full">
            <GameView />
        </div>
        <div class="z-10 row-span-2 p-5 h-full w-full gap-3 grid grid-cols-3 justify-items-center">
            <RankCard />
            <ChatBox :messages="state.messages" />
            <div>Card 3</div>
        </div>
    </div>
</template>

