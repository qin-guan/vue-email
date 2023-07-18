<script setup lang="ts">
import type { TableHTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ TableHTMLAttributes {}

defineProps<Props>()
</script>

<template>
  <table
    v-bind="$attrs"
    align="center"
    width="100%"
    data-id="__vue-email-container"
    role="presentation"
    :cellspacing="0"
    :cellpadding="0"
    :border="0"
    style="max-width;: 37.5em;"
  >
    <tbody>
      <tr style="width: 100%;">
        <td>
          <slot />
        </td>
      </tr>
    </tbody>
  </table>
</template>
