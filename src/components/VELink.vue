<script setup lang="ts">
import type { AnchorHTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ AnchorHTMLAttributes {
}

const props = withDefaults(defineProps<Props>(), {
  target: '_blank',
})
</script>

<template>
  <a v-bind="props" data-id="vue-email-link" style="color: #067df7; text-decoration: none;" :style="props?.style">
    <slot />
  </a>
</template>
