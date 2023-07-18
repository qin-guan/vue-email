<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

interface Margin {
  m?: string
  mx?: string
  my?: string
  mt?: string
  mr?: string
  mb?: string
  ml?: string
}

interface Props extends /* @vue-ignore */ HTMLAttributes {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  m?: string
  mx?: string
  my?: string
  mt?: string
  mr?: string
  mb?: string
  ml?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'h1',
})

const Tag = props.as

function withMargin(props: Margin) {
  return [
    withSpace(props.m, ['margin']),
    withSpace(props.mx, ['marginLeft', 'marginRight']),
    withSpace(props.my, ['marginTop', 'marginBottom']),
    withSpace(props.mt, ['marginTop']),
    withSpace(props.mr, ['marginRight']),
    withSpace(props.mb, ['marginBottom']),
    withSpace(props.ml, ['marginLeft']),
  ].filter(s => Object.keys(s).length)[0]
}

function withSpace(value: string | undefined, properties: string[]) {
  return properties.reduce((styles, property) => {
    if (value)
      return { ...styles, [property]: `${value}px` }

    return styles
  }, {})
}
</script>

<template>
  <Tag v-bind="$attrs" data-id="vue-email-heading" :style="[{ ...withMargin({ m, mx, my, mt, mr, mb, ml }) }, $attrs?.style]">
    <slot />
  </Tag>
</template>
