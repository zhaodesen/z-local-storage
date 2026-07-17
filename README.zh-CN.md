# z-local-storage

一个轻量 TypeScript 封装，通过自动 JSON 序列化简化 `window.localStorage` 的使用。

[English](./README.md) | [简体中文](./README.zh-CN.md)

## 主要功能

- 存取带类型的 JSON 数据
- 支持自定义 `JSON.parse` reviver
- 向已存储数组追加元素
- 向已存储对象添加属性
- 提供 CommonJS、ES Module 与 UMD 构建
- 零运行时依赖

## 安装

```bash
npm install z-local-storage
```

也可以使用 Yarn 或 pnpm：

```bash
yarn add z-local-storage
pnpm add z-local-storage
```

## 使用方法

```ts
import ZLocalStorage from 'z-local-storage'

ZLocalStorage.setItem('user', { name: 'Zhao', theme: 'dark' })

const user = ZLocalStorage.getItem<{ name: string; theme: string }>('user')

ZLocalStorage.push('recentIds', 42)
ZLocalStorage.add('settings', 'language', 'zh-CN')

ZLocalStorage.removeItem('user')
ZLocalStorage.clear()
```

### 浏览器构建

```html
<script src="https://unpkg.com/z-local-storage@1.0.7/dist/z-local-storage.umd.js"></script>
```

## API

| 方法 | 说明 |
| --- | --- |
| `setItem(key, value)` | 序列化并保存数据 |
| `getItem(key, reviver?)` | 解析已存数据，不存在时返回 `null` |
| `removeItem(key)` | 删除一个键 |
| `clear()` | 清空当前来源的 localStorage |
| `push(key, value)` | 向已存数组追加元素 |
| `add(key, property, value)` | 添加或覆盖已存对象属性 |

## 本地开发

```bash
pnpm install
pnpm test
pnpm run typecheck
pnpm run build
```

## 浏览器支持

本包依赖包含 `window.localStorage` 的浏览器环境。在服务端渲染中不要直接导入，除非将访问延迟到客户端执行。

## 许可证

MIT
