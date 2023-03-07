<script lang="ts">
    import Accordion from "$lib/Accordion.svelte";
    import Toggle from "$lib/Toggle.svelte";

    let isToggled: boolean = false;
    let label: string = 'My Toggle'
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Accordion isOpen={true} buttonText='Should you really use BetterAccordions?'>
    <div>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores culpa omnis in natus impedit eaque, nam obcaecati, aliquam quia saepe provident pariatur eveniet dolore voluptas, praesentium labore. At, doloremque neque.
            Suscipit natus aliquid, possimus omnis facere labore voluptatem nostrum delectus assumenda incidunt ipsam provident eaque magni, soluta deleniti. Voluptas quisquam porro culpa libero voluptatum nihil veniam illum laborum ipsam et.
        </p>
    </div>
</Accordion>
<Toggle {label} bind:isToggled></Toggle>
