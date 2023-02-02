<script lang="ts">
    export let label: string = '';
    export let isToggled: boolean = false;
    export let style: string = '';
</script>

<label {style}>
    <input type="checkbox" bind:checked={isToggled}>
    <div class="toggle"></div>
    {label}
</label>

<style>
    label {
        --width: 40px;
        --height: calc(var(--width) / 2);
        --radius: calc(var(--height) / 2);

        display: flex;
        gap: 10px;
        align-items: center;
        width: fit-content;
    }

    .toggle {
        position: relative;
        width: var(--width);
        height: var(--height);
        border-radius: var(--radius);
        border: 1px solid black;
        background-color: var(--toggleBackgroundColor, gray);
        transition: background-color 0.15s ease;
    }

    .toggle::after {
        content: "";
        position: absolute;
        top: -0.6px;
        left: -0.6px;
        height: var(--height);
        width: var(--height);
        border-radius: var(--radius);
        background-color: var(--toggleButtonColor, white);
        box-shadow: 1px 1px 5px rgba(0,0,0,0.6);
        transition: transform 0.15s ease;
    }

    input:checked + .toggle {
        background-color: var(--toggleCheckedBackgroundColor, cornflowerblue);
    }

    input:checked + .toggle::after {
        transform: translate3d(100%, 0, 0);
    }

    input {
        display: none;
    }
</style>
