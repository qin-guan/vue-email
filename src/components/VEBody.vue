<script setup lang="ts">
</script>

<template>
  <body v-bind="$attrs" data-id="vue-email-body" :style="['word-spacing: normal', $attrs?.style]">
    <slot />
  </body>
</template>
