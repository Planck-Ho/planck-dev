<h1 align="center">@planckdev/element-plus</h1>

<p align="center">
A library based on element-plus
</p>

**英文** | [中文](https://github.com/Planck-Ho/planck-dev/tree/main/packages/element-plus/README.zh-CN.md)

# Install
```base
pnpm install @planckdev/element-plus
```

# Directives
## Usage
### StickyTable
A Vue3 directive that makes the **header** and **horizontal scrollbar** of el-table stick during page scrolling

In **main.js** or **main.ts**：
```javascript
import { StickyTable } from '@planckdev/element-plus/directives'
const app = createApp(App)
app.directive('StickyElTable', StickyTable)
```
In **you-page.vue**：
```html
<el-table v-sticky-el-table></el-table>
```
### Options
```typescript
export interface StickyTableOptions {
  /**
   * Whether to enable
   * 
   * Enabled by default
   */
  enable?: boolean;
  /**
   * The top distance of sticky positioning
   * Default is 0px, can be set to other values, such as: 20px, 20vh
   */
  top?: string
}
```
# Utils
### Usage
### Popconfirm
Invoke popconfirm through a function

In **you-page.vue**：
```html
 <el-button @click="showPop">Test</el-button>
```
```typescript
import { popconfirm } from '@planckdev/element-plus/utils'

const showPop = async (e: MouseEvent) => {
  await popconfirm(e, {
    title: 'Are you sure to delete?'
  })
  console.log('Confirmed---Confirmed')
}
```
#### Options
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
Preview images through a function
```html
<el-button type="primary" @click="previewImage">
  Preview Button
</el-button>
```
```typescript
import { preview } from '@planckdev/element-plus/utils'

const previewImage = async () => {
  await preview('https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg')
  console.log('Preview Closed')
}
```
#### Options
```typescript
export declare function preview(url: string, imgList?: string[]): Promise<void>;
```