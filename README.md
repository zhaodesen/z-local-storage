
# z-local-storage
Simplify working with `window.localStorage`
## Install
### npm
```sh
npm install z-local-storage
```
### yarn
```sh
yarn add z-local-storage
```
### pnpm
```sh
pnpm add z-local-storage
```
### browser
```html
<script src="https://unpkg.com/z-local-storage@1.0.5/dist/z-local-storage.umd.js"></script>
```

## Usage

```javascript
// using ES6 modules
import ZLocalStorage from 'z-local-storage'
// using CommonJS 
const ZLocalStorage = require('z-local-storage')
// using Browser
ZLocalStorage.setItem('name', 'zhao')
```





## Example
```js
import ZLocalStorage from 'z-local-storage'

// set value
ZLocalStorage.setItem('name', 'zhao')

// get value
ZLocalStorage.getItem('name') // 'zhao'

// remove key
ZLocalStorage.removeItem('name')

// clearing all keys
ZLocalStorage.clear()

// Array-specific
ZLocalStorage.push('arr', 10)
ZLocalStorage.getItem('arr') // [10]

// Object-specific
ZLocalStorage.add('user', 'name', 'zhao')
ZLocalStorage.getItem('user') // { name: 'zhao' }
```
