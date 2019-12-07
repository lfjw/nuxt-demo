# nuxt-demo

> My pioneering Nuxt.js project

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## nuxt.config.js

### loading

```js
// 开启
this.$nuxt.$loading.start();
// 关闭
this.$nuxt.$loading.finish();
```

### 配置 less

配置完成，页面 style 直接添加 lang='less'

```sh
yarn add less-loader less -D
```

如果需要全局使用，则需要安装插件

```sh
yarn add @nuxtjs/style-resources -D
```

例子：

`nuxt.config.js`

```js
export default {
export default {
  css: ['~assets/global.less'],
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    less: './assets/vars/*.less'
  }
}
};
```

`assets/global.less`

```css
h1 {
  color: @green;
}
```

`assets/vars/variables.less`

```css
@gray: #333;
```

`assets/vars/more_variables.less`

```css
@green: #00ff00;
```

`components/Test.vue`

```vue
<template>
  <div class="ymca">
    Test
  </div>
</template>

<style lang="less">
.ymca {
  color: @gray; // will be resolved to #333
}
</style>
```
