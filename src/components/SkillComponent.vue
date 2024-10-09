<template>
    <div class="flex flex-col items-center">
        <i :class="props.icon" class="h-12 mb-2"/>
        <p class="font-mono"> {{ props.name }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    'icon': String,
    'name': String
})
</script>

<style scoped>
i {
    font-size: 3rem;
}
</style>


