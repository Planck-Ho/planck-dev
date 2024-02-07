import { defineConfig } from 'vite'
import { resolve, join } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: {
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
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [dts()],
})
