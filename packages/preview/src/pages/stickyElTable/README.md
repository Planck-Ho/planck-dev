# 让Element Plus Table组件支持随页面滚动的固定表头和滚动条
# 前言
- 对于长表格，需要滚动才能查看表头和横向滚动条，用户体验不好
- 通过**max-height / height**属性，给表格设置最大高度/高度，让表格内部显示一个滚动条的做法，可能会让页面有多个滚动条
- 虽然可以通过监听页面内容动态设置**max-height / height**属性，让页面保持**一屏**显示，但是当页面有多个表格或者其他内容块较多时，表格的可视区域较小
- 基于以上问题，我们需要让**el-table**支持**随页面滚动的固定表头和滚动条**

# 效果

# 原理
通过修改**el-table**内部样式，表头和滚动条设置<a target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/position">sticky粘性</a>定位实现

# 使用

## 安装
@planckdev/element-plus
文档地址：https://www.npmjs.com/package/@planckdev/element-plus
```base
pnpm install @planckdev/element-plus
```
## 调用
注册指令
```javascript
import { StickyTable } from '@planckdev/element-plus/directives'
const app = createApp(App)
app.directive('StickyElTable', StickyTable)
```
在vue文件中绑定到el-table标签上
```html
<el-table v-sticky-el-table></el-table>
```
# 谢谢您
