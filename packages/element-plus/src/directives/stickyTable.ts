import type { Directive } from 'vue'

const addStyleStr = (prefix: string, top: string) => {
  const style = document.createElement('style');
  style.innerHTML = `
      [data-sticky-elTable],
      [data-sticky-elTable] > .${prefix}-table__inner-wrapper,
      [data-sticky-elTable] > .${prefix}-table__inner-wrapper > .${prefix}-table__body-wrapper,
      [data-sticky-elTable] > .${prefix}-table__inner-wrapper > .${prefix}-table__body-wrapper >.${prefix}-scrollbar
      {
        overflow: visible !important;
        contain: paint;
      }
      [data-sticky-elTable] >.${prefix}-table__inner-wrapper > .${prefix}-table__body-wrapper >.${prefix}-scrollbar >.${prefix}-scrollbar__bar.is-horizontal
      {
        height: 100%;
        pointer-events: none;
      }
      [data-sticky-elTable] >.${prefix}-table__inner-wrapper > .${prefix}-table__body-wrapper >.${prefix}-scrollbar >.${prefix}-scrollbar__bar.is-horizontal >.el-scrollbar__thumb
      {
        position: sticky;
        pointer-events: auto;
        top: calc(100% - 6px);
        height: 6px;
      }
      [data-sticky-elTable] >.${prefix}-table__inner-wrapper > .${prefix}-table__header-wrapper {
        position: sticky;
        top: ${top};
        z-index: calc(var(--el-table-index) + 2);
      }
    `
  document.head.appendChild(style)
  return style
}

const weakMap = new WeakMap()

export interface StickyTableOptions {
  /**
   * 是否启用
   * 
   * 默认为true，启用
   */
  enable?: boolean;
  /**
   * 粘性定位顶部距离
   * 默认为0px，可设置为其他值，例如：20px、20vh
   */
  top?: string
}

export const StickyTable: Directive<HTMLElement, StickyTableOptions> = {
  beforeUpdate(el, { value = {} }) {
    const config = {
      enable: true,
      top: '0',
      ...value
    }
    const res = weakMap.get(el)
    if (res && JSON.stringify(config) === res.config) {
      return
    }

    if (res) {
      document.head.removeChild(res.style)
      weakMap.delete(el)
    }

    if (config.enable) {
      const prefix = el.getAttribute('data-prefix') || ''
      el.setAttribute('data-sticky-elTable', '')
      weakMap.set(el, {
        style: addStyleStr(prefix, config.top),
        config: JSON.stringify(config)
      })
    } else {
      el.removeAttribute('data-sticky-elTable')
    }

  },
  beforeUnmount(el) {
    const res = weakMap.get(el)
    if (res) {
      document.head.removeChild(res.style)
      weakMap.delete(el)
    }
  }
}