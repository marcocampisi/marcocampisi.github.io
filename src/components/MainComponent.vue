<script setup>
import SkillComponent from "@/components/SkillComponent.vue";
import ProjectContainer from "@/components/ProjectContainer.vue";
import AboutMeComponent from "@/components/AboutMeComponent.vue";

const skills = [
    { icon: "devicon-javascript-plain", name: "JavaScript" },
    { icon: "devicon-typescript-plain", name: "TypeScript" },
    { icon: "devicon-vuejs-plain", name: "Vue.js" },
    { icon: "devicon-csharp-plain", name: "C#" },
    { icon: "devicon-dot-net-plain", name: ".NET" },
    { icon: "devicon-react-original", name: "React" },
    { icon: "devicon-laravel-original", name: "Laravel" },
    { icon: "devicon-php-plain", name: "PHP" },
    { icon: "devicon-tailwindcss-original", name:"Tailwind"},
    { icon: "devicon-git-plain", name: "Git" },
    { icon: "devicon-python-plain", name: "Python" },
    { icon: "devicon-mysql-original", name: "MySQL" },
];

const projectsList = [
    {
        title: "BMusicTeachers - Backend",
        githubLink: "https://github.com/marcocampisi/Team-1-BMusicTeachers-backend",
        description: "Backend del progetto finale Boolean, in cui ho usato Laravel, Blade e MySQL.",
    },
    {
        title: "BMusicTeachers - Frontend",
        githubLink: "https://github.com/marcocampisi/Team-1-BMusicTeachers-frontend",
        description: "Frontend del progetto finale Boolean, realizzato in Vue.",
    },
    {
        title: "Boolflix",
        githubLink: "https://github.com/marcocampisi/vite-boolflix",
        description: "Progetto frontend in Vue che replica il funzionamento della web-app di Netflix.",
    },
    {
        title: "Laravel Boolfolio",
        githubLink: "https://github.com/marcocampisi/laravel-api",
        description: "Webapp che permette di gestire un portfolio di progetti tramite una dashboard.",
    },
    {
        title: "Progetto midterm",
        githubLink: "https://github.com/marcocampisi/proj-html-vuejs",
        description: "Progetto realizzato alla fine della prima metà del corso, frontend interamente in Vue.",
    },
    {
        title: "Yu-Gi-Oh",
        githubLink: "https://github.com/marcocampisi/vite-yu-gi-oh",
        description: "Progetto frontend in Vue che visualizza un database di carte Yu-Gi-Oh.",
    },
    {
        title: "DC Comics",
        githubLink: "https://github.com/marcocampisi/laravel-dc-comics",
        description: "Progetto Laravel con frontend in Blade che permette di effettuare operazioni CRUD su un DB di fumetti.",
    },
    {
        title: "Campo Minato",
        githubLink: "https://github.com/marcocampisi/js-campominato-dom",
        description: "Un classico gioco Campo Minato realizzato con JavaScript.",
    },
];
</script>

<template>
    <main>
        <div class='mt-10 mx-auto max-w-7xl px-5'>
            <h1 class='text-5xl font-semibold'>
                Ciao! Sono <span class='font-bold'>Marco</span>, un <span class='font-bold'>Full-Stack Web Developer</span>
            </h1>
            <p class='font-medium mt-5'>
                Esplora il mio portfolio per scoprire più informazioni
                su di me: cosa realizzo, le tecnologie che uso e la
                passione che metto nel mio lavoro.
            </p>
        </div>
        <div class="mt-10 mx-auto max-w-7xl px-5">
            <AboutMeComponent />
        </div>
        <div class='flex flex-col w-full mt-10 px-5'>
            <h2 class='text-4xl font-semibold mx-auto my-4'>
                Le tecnologie che uso
            </h2>
            <div class='w-full flex justify-center mt-8'>
                <div class='grid grid-cols-3 md:grid-cols-6 gap-8'>
                    <SkillComponent v-for="skill in skills" :icon="skill.icon" :name="skill.name"></SkillComponent>
                </div>
            </div>
        </div>

        <div class="flex flex-col w-full my-10 px-5">
            <h2 class="text-4xl font-semibold mx-auto my-4">
                I miei progetti
            </h2>
            <ProjectContainer :projects="projectsList" />
        </div>
    </main>
</template>

<style scoped>

</style>