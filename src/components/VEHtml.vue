<script setup lang="ts">
import { type HtmlHTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ HtmlHTMLAttributes {
  lang: HtmlHTMLAttributes['lang']
  dir: HtmlHTMLAttributes['dir']
}

const props = withDefaults(defineProps<Props>(), {
  lang: 'en',
  dir: 'ltr',
})
</script>

<template>
  <html
    v-bind="$attrs"
    id="__vue-email"
    :lang="props.lang"
    :dir="props.dir"
  >
    <slot />
  </html>
</template>
