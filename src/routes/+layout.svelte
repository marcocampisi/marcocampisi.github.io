<script lang="ts">
    import Header from "$lib/components/Header.svelte";

</script>

<svelte:head>
	<title>Marco Campisi | Portfolio</title>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		overflow-x: hidden;
	}
</style>