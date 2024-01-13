<script>
    import { Button, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte';
    import { ChevronDownSolid, ChevronRightSolid } from 'flowbite-svelte-icons';
  </script>
  
  <Button>Choose your platform<ChevronDownSolid class="justify-center w-3 h-3 ms-2 text-white dark:text-white" /></Button>
  <Dropdown>
    <DropdownItem class="flex items-center justify-between">
      Android<ChevronRightSolid class="w-3 h-3 ms-2 text-primary-700 dark:text-white" />
    </DropdownItem>
    <Dropdown placement="right-start">
      <DropdownItem href="https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst&hl=en_US&gl=US">Amethyst</DropdownItem>
      <DropdownItem href='https://primal.net/downloads'>Primal</DropdownItem>
      <DropdownItem href="https://app.getcurrent.io/">Current</DropdownItem>
    </Dropdown>
    <DropdownItem class="flex items-center justify-between">
        iOS<ChevronRightSolid class="w-3 h-3 ms-2 text-primary-700 dark:text-white" />
      </DropdownItem>
      <Dropdown placement="right-start">
        <DropdownItem href="https://damus.io/">Damus</DropdownItem>
        <DropdownItem href='https://www.nos.social/'>Nos</DropdownItem>
        <DropdownItem href="https://nostur.com/">Nostur</DropdownItem>
        <DropdownItem href="https://plebstr.com/">Plebstr</DropdownItem>
      </Dropdown>
      <DropdownItem class="flex items-center justify-between">
        Web<ChevronRightSolid class="w-3 h-3 ms-2 text-primary-700 dark:text-white" />
      </DropdownItem>
      <Dropdown placement="right-start">
        <DropdownItem href="https://coracle.social/">Coracle</DropdownItem>
        <DropdownItem href='https://iris.to/'>Iris</DropdownItem>
        <DropdownItem href="https://nostrudel.ninja/">Nostrudel</DropdownItem>
        <DropdownItem href="https://satellite.earth/">Satellite</DropdownItem>
      </Dropdown>
      <DropdownItem class="flex items-center justify-between">
        Desktop<ChevronRightSolid class="w-3 h-3 ms-2 text-primary-700 dark:text-white" />
      </DropdownItem>
      <Dropdown placement="right-start">
        <DropdownItem href="https://github.com/mikedilger/gossip">Gossip</DropdownItem>
        <DropdownItem href='https://github.com/unclebob/more-speech'>More Speech</DropdownItem>
      </Dropdown>
  </Dropdown>