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

{#await user.fetchProfile() then events}
    <h2>{user.profile?.name}</h2>
    <p>
        <img src={user.profile?.image} style="width:100px; height:100px;" alt="asdf" />
    </p>
    <p>{user.profile?.about}</p>
    {/await}

{#await eventsPromise then events}
{#each Array.from(events).sort((a, b) => (b.created_at && a.created_at) ? b.created_at - a.created_at : 0).slice(0, 5) as event}
        <div>
            <p class="m-10 p-10">{event.content}<span class="ml-5">{formatTimestamp(event.created_at)}</span></p>  
        </div>
    {/each} 
{/await}
