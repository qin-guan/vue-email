<script setup lang="ts">
import type { AnchorHTMLAttributes } from 'vue'

const props = withDefaults(defineProps<{
  target?: AnchorHTMLAttributes['target']
  pX?: number
  pY?: number
}>(), {
  target: '_blank',
  pY: 0,
  pX: 0,
})

const y = (props.pY || 0) * 2
const textRaise = pxToPt(y.toString())

const innerHTML1 = `<!--[if mso]><i style="letter-spacing: ${props.pX}px;mso-font-width:-100%;mso-text-raise:${textRaise}" hidden>&nbsp;</i><![endif]-->`
const innerHTML2 = `<!--[if mso]><i style="letter-spacing: ${props.pX}px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]-->`

function pxToPt(px: string): number | null {
  return Number.isNaN(Number(px)) ? null : (Number.parseInt(px, 10) * 3) / 4
}
</script>

<template>
  <a
    v-bind="$attrs"
    data-id="vue-email-button"
    :target="props.target"
    style="line-height: 100%; text-decoration: none; display: inline-block; max-width: 100%;"
    :style="[`padding: ${props.pX}px ${props.pY}px`, $attrs?.style]"
  >
    <span v-html="innerHTML1" />
    <span style="max-width: 100%; display: inline-block; line-height: 120%; mso-padding-alt: 0px;" :style="`mso-text-raise: ${pxToPt(props.pX.toString())}`">
      <slot />
    </span>
    <span v-html="innerHTML2" />
  </a>
</template>
