<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  content?: string | string[]
}

const props = defineProps<Props>()

const PREVIEW_MAX_LENGTH = 150

const text = computed(() => {
  if (!props.content)
    return ''

  const _text = Array.isArray(props.content) ? props.content.join('') : props.content
  return _text.slice(undefined, PREVIEW_MAX_LENGTH)
})

const whiteSpaces = computed(() => {
  return text.value.length >= PREVIEW_MAX_LENGTH
    ? null
    : '\xA0\u200C\u200B\u200D\u200E\u200F\uFEFF'.repeat(PREVIEW_MAX_LENGTH - text.value.length)
})
</script>

<template>
  <div
    v-bind="$attrs"
    id="__vue-email-preview"
    style="display: none; overflow: hidden; line-height: 1px; opacity: 0; max-height: 0; max-width: 0;"
  >
    {{ text }}
    <template v-if="whiteSpaces">
      {{ whiteSpaces }}
    </template>
  </div>
</template>
