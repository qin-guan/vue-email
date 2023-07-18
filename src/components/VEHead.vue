<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ HTMLAttributes { }

defineProps<Props>()
</script>

<template>
  <head v-bind="$attrs" data-id="__vue-email-head">
    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8">
    <slot />
  </head>
</template>
