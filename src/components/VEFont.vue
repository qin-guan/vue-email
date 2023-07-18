<script setup lang="ts">
type FallbackFont =
  | 'Arial'
  | 'Helvetica'
  | 'Verdana'
  | 'Georgia'
  | 'Times New Roman'

type FontFormat =
  | 'woff'
  | 'woff2'
  | 'truetype'
  | 'opentype'
  | 'embedded-opentype'
  | 'svg'

const props = withDefaults(defineProps<{
  fontFamily: string
  fallbackFontFamily: FallbackFont | FallbackFont[]
  webFont?: {
    url: string
    format: FontFormat
  }
  fontStyle?: string
  fontWeight?: number
}>(), {
  fontStyle: 'normal',
  fontWeight: 400,
})

const src = props.webFont
  ? `src: url(${props.webFont.url}) format('${props.webFont.format}');`
  : ''

const InlineStyle = 'style'

const content = `
@font-face {
  font-family: '${props.fontFamily}';
  font-style: ${props.fontStyle};
  font-weight: ${props.fontWeight};
  mso-font-alt: '${
    Array.isArray(props.fallbackFontFamily)
      ? props.fallbackFontFamily[0]
      : props.fallbackFontFamily
  }';
  ${src}
}

* {
  font-family: '${props.fontFamily}', ${
    Array.isArray(props.fallbackFontFamily)
      ? props.fallbackFontFamily.join(', ')
      : props.fallbackFontFamily
  };
}
`
</script>

<template>
  <InlineStyle v-html="content" />
</template>
