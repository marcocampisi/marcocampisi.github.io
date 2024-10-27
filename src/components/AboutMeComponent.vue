<script setup>
import myPhoto from "../assets/me.png";
</script>

<template>
    <h2 class='text-3xl font-semibold mb-4'>Chi sono</h2>
    <div class='flex flex-col md:flex-row items-center'>
        <img
            :src="myPhoto"
            alt=''
            class='rounded-full h-52 mx-auto my-10'
        />
        <p class='text-lg px-6 text-justify'>
            Ciao! Sono uno sviluppatore appassionato di tecnologia e sempre alla ricerca di nuovi modi per dar vita alle mie idee.
            Tra una riga di codice e l’altra, trovo ispirazione nella musica e nel cinema, che mi aiutano a vedere ogni progetto da una prospettiva creativa.
            Se ti va di connetterti o di fare due chiacchiere su LinkedIn, trovi il link qui sotto!
        </p>
    </div>
    <div class='w-full flex justify-center mb-10'>
        <a
            href='https://www.linkedin.com/in/marcocampisi02/'
            class='px-5 py-2.5 relative rounded group overflow-hidden font-medium dark:bg-white text-white dark:text-black bg-black mx-2 block mt-10'
        >
            <span class='absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform bg-white dark:bg-black group-hover:h-full opacity-90'></span>
            <span class='relative dark:group-hover:text-white group-hover:text-black'>
                <i class="devicon-linkedin-plain"></i> Il mio Linkedin
            </span>
        </a>
    </div>
</template>

<style scoped>

</style>