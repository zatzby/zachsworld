<script>
  import { Footer, FooterLinkGroup, FooterLink, FooterIcon } from 'flowbite-svelte';
  import { GithubSolid, DiscordSolid} from 'flowbite-svelte-icons';
</script>

<Footer footerType="sitemap">
  <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-3">
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">My Websites</h2>
      <FooterLinkGroup ulClass="text-gray-300">
        <FooterLink liClass="mb-4" href="https://whynostr.com/">whynostr.com</FooterLink>
        <FooterLink liClass="mb-4" href="https://clownworld.exposed/">clownworld.exposed</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Social</h2>
      <FooterLinkGroup ulClass="text-gray-300">
        <FooterLink liClass="mb-4" href="/z_nostr">Find me on Nostr</FooterLink>
        <FooterLink liClass="mb-4" href="/pgp">PGP/GPG</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Helpful Links</h2>
      <FooterLinkGroup ulClass="text-gray-300">
        <FooterLink liClass="mb-4" href="/readbitcoin">Read the Bitcoin White Paper</FooterLink>
        <FooterLink liClass="mb-4" href="/">Custom Designs - soon™️</FooterLink>
      </FooterLinkGroup>
    </div>
  </div>
  <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
    <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center md:mt-0">
      
      <FooterIcon href="/">
        <DiscordSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
      </FooterIcon>
      
      <FooterIcon href="/">
        <GithubSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
      </FooterIcon>
    </div>
  </div>
</Footer>