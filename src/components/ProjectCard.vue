<script setup>
defineProps({
    pTitle: String,
    description: String,
    pLink: String,
    repoName: String,
    cover: String
})
</script>

<template>
    <div class="border-2 border-black rounded-2xl p-4 lg:w-80 sm:w-full">
        <a href="" target="_blank">
            <h1 class="text-xl font-bold">{{ pTitle }}</h1>
            <h1>{{ description }}</h1>
            <h1>{{ repoName }}</h1>
        </a>
    </div>
</template>