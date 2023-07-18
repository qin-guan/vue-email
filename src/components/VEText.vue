<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ HTMLAttributes {}

defineProps<Props>()
</script>

<template>
  <p
    v-bind="$attrs"
    data-id="vue-email-text"
    style="font-size: 14px; line-height: 24px; margin: 16px 0;"
  >
    <slot />
  </p>
</template>
