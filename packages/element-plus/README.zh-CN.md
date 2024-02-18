<h1 align="center">@planckdev/element-plus</h1>

<p align="center">
  一个基于element-plus开发的库
</p>

[英文](https://github.com/Planck-Ho/planck-dev/tree/main/packages/element-plus/README.md) | **中文**

# 安装
```base
pnpm install @planckdev/element-plus
```

# 指令 Directives
## 用法
### StickyTable
把el-table的**表头**和**横向滚动条**随页面滚动固定的vue3指令

在 **main.js** or **main.ts**：
```javascript
import { StickyTable } from '@planckdev/element-plus/directives'
const app = createApp(App)
app.directive('StickyElTable', StickyTable)
```
在 **you-page.vue**：
```html
<el-table v-sticky-el-table></el-table>
```
### 选项
```typescript
export interface StickyTableOptions {
  /**
   * 是否启用
   * 
   * 默认为启用
   */
  enable?: boolean;
  /**
   * 粘性定位顶部距离
   * 默认为0px，可设置为其他值，例如：20px、20vh
   */
  top?: string
}
```
# 通用函数 Utils
### 用法
### Popconfirm
通过函数的方式，调用popconfirm
在 **you-page.vue**：
```html
 <el-button @click="showPop">测试</el-button>
```
```typescript
import { popconfirm } from '@planckdev/element-plus/utils'

const showPop = async (e: MouseEvent) => {
  await popconfirm(e, {
    title: '是否删除？'
  })
  console.log('确定---确定')
}
```
#### 选项
```typescript
export type PopoverProps = {
    title: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    placement?: string;
};
export declare function popconfirm(ev: MouseEvent, props: PopoverProps): Promise<void>;
```

### Preview
通过函数的方式，预览图片
```html
<el-button type="primary" @click="previewImage">
  preview按钮
</el-button>
```
```typescript
import { preview } from '@planckdev/element-plus/utils'

const previewImage = async () => {
  await preview('https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg')
  console.log('关闭预览')
}
```
#### 选项
```typescript
export declare function preview(url: string, imgList?: string[]): Promise<void>;
```