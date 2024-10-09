<script setup>
import {onMounted, ref} from "vue";
import myPhoto from "../assets/me.png";

const isScrolled = ref(false);

const handleScroll = () => {
    isScrolled.value = !!window.scroll;
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});
</script>

<template>
    <div
        class="sticky top-0 w-full bg-transparent z-50"
        :class="isScrolled ? 'bg-opacity-80 backdrop-blur' : ''"
    >
    <header class='flex items-center justify-between p-4 relative'>
        <div class='flex items-center'>
            <img
                :src="myPhoto"
                alt='Logo'
                class='h-8 w-8 mr-2 rounded-full'
            />
            <h1 class='text-lg font-semibold'>Marco Campisi</h1>
        </div>
        <div class='flex items-center'>
            <a
                href='https://github.com/marcocampisi'
                class='flex items-center'
            >
                <span class='mr-4'>Il mio GitHub</span>
                <i class="devicon-github-original"/>
            </a>
        </div>
    </header>
    </div>
</template>

<style scoped>
i {
    font-size: 2rem;
}
</style>