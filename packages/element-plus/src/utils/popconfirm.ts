import {
  h,
  ref,
  defineComponent,
  onMounted,
  createApp
} from 'vue'
import { ElPopconfirm } from 'element-plus'

export type PopoverProps = {
  title: string
  confirmButtonText?: string
  cancelButtonText?: string
  placement?: string;
}

export function popconfirm(ev: MouseEvent, props: PopoverProps) {
  return new Promise<void>((resolve, reject) => {
    const target = ev.target as HTMLElement
    const container = document.createElement('div')
    const { top, left, width, height } = target.getBoundingClientRect()

    const Popover = defineComponent({
      setup() {
        const referenceRef = ref<HTMLElement>()
        onMounted(() => {
          referenceRef.value?.click()
        })

        return () =>
          h(
            ElPopconfirm,
            {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              placement:  'top',
              ...props,
              onConfirm() {
                resolve()
                destroyApp()
              },
              onHide() {
                reject('cancel')
                destroyApp()
              }
            },
            {
              reference: () =>
                h('div', {
                  ref: referenceRef,
                  style: {
                    left: left + 'px',
                    top: top + 'px',
                    width: width + 'px',
                    height: height + 'px',
                    position: 'fixed',
                    visibility: 'hidden'
                  }
                })
            }
          )
      }
    })

    const app = createApp(Popover)

    app.mount(container)
    document.body.appendChild(container)

    function destroyApp() {
      app.unmount()
      document.body.removeChild(container)
    }
  })
}
