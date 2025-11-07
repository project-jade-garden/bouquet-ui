<script setup lang="ts">
  import { sliderStyles } from "@bouquet-ui/design";
  import { Slider } from "../../../../src";

  const styles = sliderStyles();
</script>

<template>
  <Slider.Root :class="styles.root()" :min="-10" :max="10">
    <Slider.Label :class="styles.label()">Label</Slider.Label>
    <Slider.ValueText :class="styles.valueText()" />
    <Slider.Control :class="styles.control()">
      <Slider.Track :class="styles.track()">
        <Slider.Range :class="styles.range()" />
      </Slider.Track>
      <Slider.Thumb :class="styles.thumb()" :index="0">
        <Slider.HiddenInput />
      </Slider.Thumb>
    </Slider.Control>
  </Slider.Root>
</template>
