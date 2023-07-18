import { resolve } from 'pathe'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), dts()],
  build: {
    sourcemap: true,
    lib: {
      formats: ['cjs', 'es'],
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'vue-email',
      // the proper extensions will be added
      fileName: 'main',
    },
    rollupOptions: {
      external: [
        'vue',
        'vue/server-renderer',
        '@qingu/remark-vue',
      ],
    },
  },
})
