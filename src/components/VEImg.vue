<script setup lang="ts">
import { type ImgHTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ ImgHTMLAttributes {
}

const props = defineProps<Props>()
</script>

<template>
  <img
    v-bind="{ ...$attrs, ...props }"
    data-id="vue-email-img"
    style="display: block; outline: none; border: none; text-decoration: none;"
    :style="props?.style"
  >
</template>
