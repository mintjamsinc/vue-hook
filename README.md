# vue-hook
A reusable hook directive for [Vue.js](https://github.com/vuejs/vue) 2.x.

## Installation

```sh
npm install --save-dev @mintjamsinc/vue-hook
```

## Usage

```js
import VueHook from '@mintjamsinc/vue-hook';
Vue.use(VueHook);
```

```vue
<div v-hook="{bind: onBind, inserted: onInserted, update: onUpdate, componentUpdated: onComponentUpdated, unbind: onUnbind}">
</div>
```

```js
export default {
  methods: {
    onBind() {},
    onInserted() {},
    onUpdate() {},
    onComponentUpdated() {},
    onUnbind() {},
  },
}
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 MintJams Inc.