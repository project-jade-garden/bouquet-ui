<script lang="ts">
  import { type SkeletonStyles, skeletonStyles } from "@bouquet-ui/design";

  let props: SkeletonStyles.Variants = $props();
</script>

<div class="flex justify-center p-4">
  <div class="flex items-center gap-4">
    <div
      aria-busy="true"
      aria-label="loading"
      aria-live="polite"
      role="alert"
      class={skeletonStyles({ ...props, class: "size-12 rounded-full" })}
    ></div>
    <div class="grid gap-2">
      <div
        aria-busy="true"
        aria-label="loading"
        aria-live="polite"
        role="alert"
        class={skeletonStyles({ ...props, class: "rounded-md h-4 w-[250px]" })}
      ></div>
      <div
        aria-busy="true"
        aria-label="loading"
        aria-live="polite"
        role="alert"
        class={skeletonStyles({ ...props, class: "rounded-md h-4 w-[200px]" })}
      ></div>
    </div>
  </div>
</div>
