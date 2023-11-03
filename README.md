
# easy-local-storage
Simplify working with `window.localStorage`
## Install
```sh
npm install easy-local-storage
```
```sh
yarn add easy-local-storage
```
```sh
pnpm add easy-local-storage
```

```javascript
// using ES6 modules
import EasyLocalStorage from 'easy-local-storage'
```

## Usage
```js
import EasyLocalStorage from 'easy-local-storage'

// set value
EasyLocalStorage.setItem('name', 'zhao')

// get value
EasyLocalStorage.getItem('name') // 'zhao'

// remove key
EasyLocalStorage.removeItem('name')

// clearing all keys
EasyLocalStorage.clear()

// Array-specific
EasyLocalStorage.push('arr', 10)
EasyLocalStorage.getItem('arr') // [10]

// Object-specific
EasyLocalStorage.add('user', 'name', 'zhao')
EasyLocalStorage.getItem('user') // { name: 'zhao' }
```
