<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
</script>

<template>
    <div class="bg-slate-300 px-20 py-10 ">
        <h1 class="text-3xl font-bold text-center">Projects</h1>
        <section>
            <ProjectCard
                pTitle = "Project Title"
                description = "Project Desc"
                pLink = https://github.com/churuizramos/home-page
                repoName = "home-page"
            />
        </section>
    </div>
</template>
