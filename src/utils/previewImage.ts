import { ElImageViewer } from 'element-plus'
import { createApp, defineComponent } from 'vue'

export function preview(url: string, imgList: string[] = []) {
  return new Promise<void>((resolve) => {
    const urlList = [...imgList]
    let initialIndex = urlList.indexOf(url)
    if (initialIndex === -1) {
      urlList.unshift(url)
      initialIndex = 0
    }

    const container = document.createElement('div')

    const app = createApp(defineComponent({
      setup() {
        return () => [
          h('style', 'body { overflow: hidden !important;  }'), // 解决弹窗时，页面有滚动条的问题
          h(ElImageViewer, {
            initialIndex,
            urlList,
            onClose() {
              destroyViewer()
              resolve()
            },
          })]
      },
    }))
    app.mount(container)
    document.body.appendChild(container)

    function destroyViewer() {
      app.unmount()
      document.body.removeChild(container)
    }
  })
}
