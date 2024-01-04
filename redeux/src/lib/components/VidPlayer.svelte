<script lang="ts">
    import { onMount } from 'svelte';

    let src = 'https://v.nostr.build/GZyV.mp4'; 
    let autoplay = true; 
    let videoElement: HTMLVideoElement | undefined; // Define the type of videoElement

    onMount(() => {
        if (autoplay && videoElement) {
            videoElement.play();
        }
    });
</script>

<div class="relative w-full h-auto">
    <video bind:this={videoElement} class="w-full h-auto rounded-lg shadow-md" controls src={src}>
       Your browser does not support the video tag.
       <!-- Correct usage of track element -->
       <track kind="captions" label="English" srclang="en" src="/path/to/your/captions.vtt" />
    </video>
</div>