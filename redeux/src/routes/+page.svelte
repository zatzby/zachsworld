<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { Video } from 'flowbite-svelte';
</script>

<body>
    <div>
        <Header />
        <h1 class="text-5xl flex-wrap text-center">Working on Custom Cabinets and Nostr stuff.</h1>
        <p class="text-4xl flex-wrap mt-10 text-center">Freedom technology is important. Maybe not to you, yet, but it is crucial that people have access to free and secure communcation and monetary technology. Learn about that at some of the links here on my website.</p>
        <p class="text-4xl flex-wrap mt-10 text-center">You can also watch some of the random videos I have made here. Yes, I know, some of them utilize stock footage, I'm working with a limited budget and no real movie skills! Give me a break! </p>
        <div class="mt-20 w-full max-w-full h-auto">
        <Video src="https://v.nostr.build/nb3918.mp4" muted controls trackSrc="https://v.nostr.build/nb3918.mp4" />
        </div>  
        <h2 class="text-3xl">Nostr Rehab TV Spot #1 - 2023</h2>
        <div class="mt-20 w-full max-w-full h-auto">
            <Video src="https://v.nostr.build/Oyy5.mp4" controls muted trackSrc="https://v.nostr.build/Oyy5.mp4" />
        </div>
        <h2 class="text-3xl">Why Nostr TV Spot #1 - 2023</h2>
    </div>
    <div class="footer-wrapper">
        <Footer />
    </div>
</body>

<style>

    .footer-wrapper {
        padding-top:60px;
        text-align: center;
    }
</style>