<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
  </script>
  
  <Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img
        src="https://i.nostr.build/ZJyQ.png"
        class="mr-2 h-40 sm:h-60"
        alt="Zach's world logo"
      />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/nostr">Nostr</NavLi>
      <NavLi href="https://bitcoin.org/">Bitcoin</NavLi>
      <NavLi href="/books">Books</NavLi>
      <NavLi href="/media">Media</NavLi>
    </NavUl>
  </Navbar>