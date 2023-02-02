<script lang="ts">
    import Toggle from "$lib/Toggle.svelte";

    let isToggled: boolean = false;
    let label: string = 'My Toggle'
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Toggle {label} bind:isToggled></Toggle>
