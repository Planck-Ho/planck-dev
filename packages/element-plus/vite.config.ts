import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        directives:  resolve(__dirname, 'src/directives/index.ts'),
        utils:  resolve(__dirname, 'src/utils/index.ts')
      },
      name: 'PlanckElementPlus',
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`
    },
    rollupOptions: {
      // input: {
      //   directives:  resolve(__dirname, 'src/directives/index.ts'),
      //   utils:  resolve(__dirname, 'src/utils/index.ts')
      //   // 可以继续添加更多入口点
      // },
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'element-plus', 'vue-router']
    },
  },
  plugins: [dts({
    tsconfigPath: resolve(__dirname, 'tsconfig.json'),
  })],
})
