<script setup lang="ts">
import { type HTMLAttributes, defineComponent, h } from 'vue'
import { parseSync } from '@qingu/remark-vue'

interface Props extends /* @vue-ignore */ HTMLAttributes {
  content: string
}

const props = defineProps<Props>()

const Remark = parseSync(props.content, {
  rehypeVueOptions: {
    components: {
      h1: defineComponent({
        setup(props, others) {
          return () => h('h1', { ...props, style: 'color: red;' }, others.slots)
        },
      }),
    },
  },
})
</script>

<template>
  <div
    v-bind="props"
    data-id="vue-email-markdown"
  >
    <Remark />
  </div>
</template>
