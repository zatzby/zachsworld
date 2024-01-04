<script lang="ts">
    import { bookLinks } from "$lib/data/books";
</script>

<h1 class="mt-20 mb-20 text-4xl text-center">Read books. Learn stuff. Move forward.</h1>

{#each bookLinks as linkList}
    <h2 class="text-3xl ml-20">{linkList.title}</h2>
    <ul class="text-2xl mt-10">
        {#each linkList.links as link}
        <li class="mb-10 ml-20">
            <a href={link.url} target="_blank">{link.title}</a> &ndash; {link.description}
        </li>
        {/each}
    </ul>
{/each}
