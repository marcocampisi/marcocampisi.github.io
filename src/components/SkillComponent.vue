<template>
    <div class="flex flex-col items-center">
        <i :class="props.icon" class="h-12 mb-2"/>
        <p class="skill-text"> {{ props.name }}</p>
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

.skill-text {
    font-family: "Geist Mono", monospace;
    font-weight: normal;
}
</style>


