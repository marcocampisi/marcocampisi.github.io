<script setup>
const props = defineProps({
    'title': String,
    'githubLink': String,
    'description': String,
})
</script>

<template>
    <div class='shadow-md p-6 border-[1px] border-black dark:border-white flex flex-col justify-between h-full text-center rounded-md'>
        <div>
            <a :href="githubLink" class="group relative">
                <h2 class='text-2xl font-bold mb-2 hover:underline underline-offset-4'>{{ props.title }}</h2>
            </a>
            <p>{{ props.description }}</p>
        </div>
    </div>
</template>
<style scoped>

</style>