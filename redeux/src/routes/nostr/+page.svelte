<script lang="ts">
    import VidPlayer from "$lib/components/VidPlayer.svelte";
    import Join from "$lib/components/Join.svelte";
</script>

<div class="animate-pulse text-5xl text-orange-950 mb-30 mx-20">
    <h1 class="pb-10">What is Nostr?</h1>
</div>
<div class="text-4xl text-black mx-20 mt-20 leading-12">
    <p class="mb-20">Nostr is like the early days of the internet. Back when you could find niche sites for your interests, surf the web without constantly being bombarded by ads, and chat with like minded people who share your hobbies.</p>
</div>
<div>
    <p class="p-10h-40 grid grid-cols-2 gap-5 content-end font-thin mb-20 text-5xl mx-40  ">It's like a concert festival where you roam from tent to tent finding the music or crowd that best fits your vibe.</p>
</div>
<div>
    <p class="mx-20 mb-20 text-4xl">A place where artists and fans can directly interact with one another without any intermediaries.</p> <!-- adjust this line-->
    <p class="mb-20 text-5xl text-center underline p-10">Nostr is simply fresh.</p>
    <p class="mx-20 mb-20 text-4xl">A protocol upon which Developers can quickly build and launch apps that integrate with a growing ecosystem of interoperable applications allowing you to leverage global network effects.</p>
    <p class="mx-20 mb-30 pb-20 text-4xl">I want to tell you more, but time is running out!</p>
</div>
<div class="mt-10 mb-10 pb-10">
    <VidPlayer />
</div>    
<div class="text-4xl text-black mx-20 mt-20 leading-12">
    <p class="mx-20 mt-20 mb-40">Just Kidding! We have plenty of time, in fact Nostr is just getting started.</p>
    <p class="mx-20 mb-40 text-4xl animate-pulse text-center">Now, where were we?</p> <!--add typing effect here??-->
    <p class="mx-20 mt-20 mb-20 text-5xl">Nostr is an emerging protocol that can be used for almost anything including, but absolutely not limited to, social media, marketplaces, gaming, and media hosting.</p>
    <p class="mx-20 mt-20 mb-20 text-4xl pt-10">A place for writers and journalists to share their story. A protocol to help preserve the right to free speech, and benefit our communities from the ground up.</p>
</div>
<div class="grid grid-cols-2 content-end mx-20" >    
    <p class="font-thin mx-20 mt-20 mb-20 text-5xl">A place for builders, dreamers, creators, and anyone else you could think of.</p>
</div>
<div>
    <p class="mx-20 mt-20 mb-20 text-5xl">A place for the people, built by the people.</p>
    <p class="font-thin p-10 mx-20 mt-20 mb-20 text-5xl">It is the era of the average person taking back control of their social media, their content hosting, their data, and it is just getting started. Join us on Nostr today, and find your next favorite app!</p>
</div>
<div class="flex flex-col items-center mt-20 mb-20">
<Join />
</div>