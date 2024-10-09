<script setup>
import Projects from '../components/Projects.vue'

const props = defineProps({
    'projects': Array
})
</script>

<template>
    <div class='container sm:w-2/3 mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Projects
            v-for="project in projects"
            :key="project.title"
            :title="project.title"
            :githubLink="project.githubLink"
            :description="project.description"
        />
    </div>
</template>

<style scoped>

</style>