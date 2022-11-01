<template>
    <div class="ranking">
        <div class="title">{{ props.rank.name }}</div>
        <div class="flex">
            <div class="record">
                {{ props.rank.record }}:00
            </div>
            <div class="rank">
                {{ props.rank.rank}}st
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['rank'])

</script>
