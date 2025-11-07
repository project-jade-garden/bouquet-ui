<script lang="ts">
  import { type SpinnerStyles, spinnerStyles } from "@bouquet-ui/design";

  let props: SpinnerStyles.Variants = $props();
</script>

<span class={spinnerStyles({ ...props, class: "border-primary" })}>
  <span class="sr-only">Spinner</span>
</span>
