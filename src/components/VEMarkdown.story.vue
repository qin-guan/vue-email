<script setup lang="ts">
import VEMarkdown from './VEMarkdown.vue'

const content = `
# Hello!
## Hello!

| hello | hello |
|-------|-------|
| hello | hello |
`
</script>

<template>
  <Story>
    <VEMarkdown :content="content" />
  </Story>
</template>
