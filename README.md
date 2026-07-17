# z-local-storage

A small TypeScript wrapper that stores JavaScript values in `window.localStorage` with automatic JSON serialization.

[English](./README.md) | [简体中文](./README.zh-CN.md)

## Features

- Store and retrieve typed JSON values
- Support custom `JSON.parse` revivers
- Append values to stored arrays
- Add properties to stored objects
- Ship CommonJS, ES module, and UMD builds
- Zero runtime dependencies

## Installation

```bash
npm install z-local-storage
```

You can also use Yarn or pnpm:

```bash
yarn add z-local-storage
pnpm add z-local-storage
```

## Usage

```ts
import ZLocalStorage from 'z-local-storage'

ZLocalStorage.setItem('user', { name: 'Zhao', theme: 'dark' })

const user = ZLocalStorage.getItem<{ name: string; theme: string }>('user')

ZLocalStorage.push('recentIds', 42)
ZLocalStorage.add('settings', 'language', 'en')

ZLocalStorage.removeItem('user')
ZLocalStorage.clear()
```

### Browser Build

```html
<script src="https://unpkg.com/z-local-storage@1.0.7/dist/z-local-storage.umd.js"></script>
```

## API

| Method | Description |
| --- | --- |
| `setItem(key, value)` | Serialize and store a value |
| `getItem(key, reviver?)` | Parse a stored value or return `null` |
| `removeItem(key)` | Remove one key |
| `clear()` | Clear the current localStorage origin |
| `push(key, value)` | Append to a stored array |
| `add(key, property, value)` | Add or replace a stored object property |

## Development

```bash
pnpm install
pnpm test
pnpm run typecheck
pnpm run build
```

## Browser Support

This package requires a browser-like environment with `window.localStorage`. It is not safe to import during server-side rendering unless access is deferred to the client.

## License

MIT
