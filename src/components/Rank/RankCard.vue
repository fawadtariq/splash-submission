<template>
    <div class="w-full rank-card">
        <RankHeader />

        <Item v-for="(item, index) in props.ranks" :key="index" :rank="item" />
    </div>
</template>
<script setup>
import RankHeader from './RankHeader.vue'
import Item from './Item.vue'
const props = defineProps(['ranks'])


</script>
