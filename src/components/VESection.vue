<script setup lang="ts">
import type { TableHTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ TableHTMLAttributes {
}

defineProps<Props>()
</script>

<template>
  <table
    align="center"
    width="100%"
    data-id="vue-email-section"
    border="0"
    cellPadding="0"
    cellSpacing="0"
    role="presentation"
  >
    <tbody>
      <tr>
        <td>
          <slot />
        </td>
      </tr>
    </tbody>
  </table>
</template>
