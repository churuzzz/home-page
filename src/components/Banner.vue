<template>
    <section class="bg-steel_blue-300 p-20 flex flex-row justify-between">
        <div class="text-3xl leading-loose">
            <h1 class="font-bold text-6xl">JESUS RUIZ RAMOS</h1>
            <div>
                <a 
                    class="link__email"
                    href="mailto:ruizramos04@outlook.com"
                    >personal email</a> 
                <p class="inline m-2 align-middle">&#124;</p> 
                <a 
                    class="link__email"
                    href="mailto:jesus.ruizramos@louisville.edu"
                    >school email</a>
            </div>
        </div>
        <div class="m-8 p-3 rounded-full flex flex-row bg-white">
            <a href="https://github.com/churuizramos" target="_blank"><img src="../assets/icons8-github-48.png" alt="github link"/></a>
            <a href="https://www.linkedin.com/in/jesus-ruiz-ramos-9591a5238/" target="_blank"><img src="../assets/icons8-linkedin-48.png" alt="linkedin link"/></a>
            <a href="https://bsky.app/profile/churuizramos.bsky.social" target="_blank"><img src="../assets/icons8-bluesky-48.png" alt="bluesky link"/></a>
            <a href="https://www.instagram.com/churuizramos/" target="_blank"><img src="../assets/icons8-instagram-48.png" alt="instagram link"/></a>
        </div>
    </section>
</template>

<style scoped>
.link__email {
    @apply bg-white align-middle rounded-full px-4 py-2 transition-all hover:bg-steel_blue-500 hover:text-white;
}
</style>