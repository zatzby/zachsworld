<script lang="ts">
    import NDK from "@nostr-dev-kit/ndk";
    import { browser } from "$app/environment";
    import { formatTimestamp } from '$lib/utils/helper'
    
    const ndk = new NDK({ explicitRelayUrls: ["wss://relay.nostr.band", "wss://purplepag.es", "wss://relayable.org"] });

    if (browser) {
        ndk.connect().then(() => {
            console.log('Connected');
        }); 
    }

    const user = ndk.getUser({npub: 'npub10fu0hlkx3s4n4dsgfu0cpqephga4afr4qtzpz9vsyqf7vj88v2yqdp8vp4'});
    
    const eventsPromise = ndk.fetchEvents({ kinds: [1], authors: [user.hexpubkey] });

    console.log(user);
</script>

<h1 class="text-center align-middle mb-5">Fetching data from the Nostr relays... please wait while events load.</h1>


{#await user.fetchProfile() then events}
<div class="mx-20 outline mb-20">    
<h2 class="text-3xl p-5">{user.profile?.name}</h2>
    <p class="p-5">
        <img src={user.profile?.image} style="width:200px; height:200px;" alt="asdf" />
    </p>
    <p class="textl-xl text-purple-950 p-5">Nostr Address: {user.profile?.nip05}</p>
    <p class="text-xl p-5">{user.profile?.about}</p>
</div>
    {/await}

{#await eventsPromise then events}
{#each Array.from(events).sort((a, b) => (b.created_at && a.created_at) ? b.created_at - a.created_at : 0).slice(0, 9) as event}
        <div class="outline">
            <p class="ml-20 p-10">{event.content}<span class="ml-5">{formatTimestamp(event.created_at)}</span></p>  
        </div>
    {/each} 
{/await}
