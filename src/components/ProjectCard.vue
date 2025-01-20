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
    <div class="border-2 border-black rounded-2xl lg:w-80 sm:w-full">
        <a href="" target="_blank">
            <img src="https://placehold.co/600x400?text=Hello+World" alt="placeholder" class="rounded-t-2xl"/>
            <div class="p-4">
                <h1 class="text-xl font-bold">{{ pTitle }}</h1>
                <h1>{{ description }}</h1>
                <h1>{{ repoName }}</h1>
            </div>
        </a>
    </div>
</template>