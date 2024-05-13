<script>
	import '../app.pcss';
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<Header />
<div>
	<slot />
</div>
<Footer />