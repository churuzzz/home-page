<template>
    <section class="flex flex-col p-20 gap-8">
        <div class="flex flex-row gap-3">
            <h1 class="text-red-400 text-2xl font-bold">University of Louisville | Computer Science and Engineering</h1>
            <a 
                class="link__email"
                href="mailto:ruizramos04@outlook.com"
                >personal email</a> 
            <a 
                class="link__email"
                href="mailto:jesus.ruizramos@louisville.edu"
                >school email</a>
        </div>
        <h1 class="text-white text-2xl">Nice to meet you. I'm Jesus. Computer Engineering student at the University of Louisville. I love all things computers from making things with them as well as learning all the things that can be done with them. You can also find my photography on Instagram!</h1>
    </section>
</template>

<style scoped>
.link__email {
    @apply bg-white align-middle rounded-full px-4 py-2 transition-all hover:bg-steel_blue-500 hover:text-white;
}
</style>