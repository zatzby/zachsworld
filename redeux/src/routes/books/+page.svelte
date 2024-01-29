<script lang="ts">
    import { bookLinks } from "$lib/data/books";
</script>

<h1 class="mt-20 mb-20 pb-10 text-4xl text-center text-orange-600">Read books. Learn stuff. Move forward.</h1>

{#each bookLinks as linkList}
    <h2 class="text-center text-3xl mx-20 pb-5">{linkList.title}</h2>
    <ul class="text-2xl mt-10">
        {#each linkList.links as link}
        <li class="mb-10 mx-20 ">
            <a href={link.url} target="_blank">{link.title}</a>
        </li>
        {/each}
    </ul>
{/each}
<br />
