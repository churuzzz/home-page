<template>
    <section
        class="bg-slate-300 px-20 py-40 flex flex-col justify-between gap-4 content-center"
    >
        <h1 class="font-bold lg:text-8xl text-6xl text-center">CHURUZZZ</h1>
        <div class="m-8 p-3 rounded-full flex flex-row bg-white m-auto">
            <a href="https://github.com/churuizramos" target="_blank"
                ><img
                    class="link_hover"
                    src="../assets/icons8-github-48.png"
                    alt="github link"
            /></a>
            <a
                href="https://bsky.app/profile/churuizramos.bsky.social"
                target="_blank"
                ><img
                    class="link_hover"
                    src="../assets/icons8-bluesky-48.png"
                    alt="bluesky link"
            /></a>
            <a href="https://www.instagram.com/churuizramos/" target="_blank"
                ><img
                    class="link_hover"
                    src="../assets/icons8-instagram-48.png"
                    alt="instagram link"
            /></a>
        </div>
    </section>
</template>
<style scoped>
.link_hover {
    @apply transition-all hover:bg-stone-500 rounded-full;
}
</style>
