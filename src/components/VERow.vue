<script setup lang="ts">
import type { TableHTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ TableHTMLAttributes {
}

defineProps<Props>()
</script>

<template>
  <table
    v-bind="$attrs"
    align="center"
    width="100%"
    data-id="vue-email-row"
    role="presentation"
    cellSpacing="0"
    cellPadding="0"
    border="0"
  >
    <tbody style="width: 100%;">
      <tr style="width: 100%;">
        <slot />
      </tr>
    </tbody>
  </table>
</template>
