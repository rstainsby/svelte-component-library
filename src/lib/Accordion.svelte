<script lang="ts">
    import { accordianSlide } from '$lib/animations/accordianSlide';
    export let buttonText: string = '';
    export let isOpen: boolean = true;
</script>

<button on:click={() => isOpen = !isOpen}>
    <i class="{isOpen ? 'isOpen' : ''} dropdown-icon">▲</i>
    {buttonText}
</button>

<div class="accordian-content" use:accordianSlide={{isOpen}}>
    <div class="wrapper">
        <slot/>
    </div>
</div>

<style>
    button {
        display: flex;
        align-items: center;
        border: 0;
        width: 100%;
        text-align: left;
        border: solid 1px #333;
        margin: 0;
        padding: 10px;
    }

    .dropdown-icon {
        margin-right: 10px;
        display: inline-block;
        transform: rotate(90deg);
        transition: transform 0.2s ease;
        color: rgb(105, 105, 105);       
    }

    .isOpen {
        transform: rotate(180deg);
    }

    .accordian-content {
        border: solid 1px #333;
        border-top: 0;
    }

    .wrapper {
        padding: 20px;
    }
</style>