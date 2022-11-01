<template>
    <div class="w-full rank-card">
        <RankHeader />

        <Item v-for="(item, index) in names" :key="index" />
    </div>
</template>
<script setup>
import RankHeader from './RankHeader.vue'
import Item from './Item.vue'

const names = ['John Doe','John Doe','John Doe','John Doe','John Doe'];

</script>
