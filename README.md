
# easy-local-storage
Simplify working with `window.localStorage`
## Install
```sh
npm install z-local-storage
```
```sh
yarn add z-local-storage
```
```sh
pnpm add z-local-storage
```

```javascript
// using ES6 modules
import ZLocalStorage from 'z-local-storage'
```

## Usage
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
