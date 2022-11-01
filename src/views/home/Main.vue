<script setup>

import GameView from '@/components/AppView.vue'
import RankCard from '@/components/Rank/RankCard.vue'
import ChatBox from '@/components/Chat/Main.vue'
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { io } from "socket.io-client";



const state = reactive({ messages: [], players: [] });

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
        if(event == 'players'){
            logPlayers(args[0]);
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
const logPlayers= (data) => {
    if (data) {
            state.players = data;
            console.log(data)
        }
}
</script>

<template>
    <div class="app-container">
        <div class="row-span-3 h-full">
            <GameView />
        </div>
        <div class="z-10 row-span-2 p-5 h-full w-full gap-3 grid grid-cols-3 justify-items-center">
            <RankCard :ranks="state.players" />
            <ChatBox :messages="state.messages" />
            <div class="players-card">
                <div class="players-title">
                    <p>Players</p>
                    <p>8/12</p>
                </div>
                <div class="w-full px-4">
                    <a class="primary-btn w-full block">Setting</a>
                </div>
                <div class="w-full px-2">
                    <div v-for="(player, index) in state.players" :key="index" class="w-full p-2 flex gap-2">
                        <img :src="player.avatar" class="h-6 w-6 rounded-full"/>
                        <p class="text-white text-sm font-normal">{{player.name}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.players-card{
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 11px;


background: rgba(16, 12, 74, 0.2);
box-shadow: inset 3px 4px 63px rgba(255, 255, 255, 0.25);
border-radius: 12px;
@apply w-full h-full;
}
.players-title{
    @apply w-full flex justify-between px-3 py-2 text-white font-bold text-base;
}
</style>