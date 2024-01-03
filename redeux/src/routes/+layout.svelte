<script>
	import '../app.pcss';
	import Header from "$lib/components/Header.svelte";
	import { goto } from '$app/navigation';
	import Footer from "$lib/components/Footer.svelte";
</script>

<Header />
<div>
	<slot />
</div>
<Footer />