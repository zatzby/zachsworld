<script lang="ts">
    import { bookLinks } from "$lib/data/books";
</script>

<h1>Read books.</h1>

{#each bookLinks as linkList}
    <h2>{linkList.title}</h2>
    <ul>
        {#each linkList.links as link}
        <li>
            <a href={link.url} target="_blank">{link.title}</a> &ndash; {link.description}
        </li>
        {/each}
    </ul>
{/each}