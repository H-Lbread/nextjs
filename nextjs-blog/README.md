This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## 记录

1、Link 标签内不能嵌入<a>标签解决办法。

```
在next.config.js中引入
    experimental: {
        newNextLinkBehavior: false,
    },
```

2、创建一个将在所有页面之间共享的布局组件

- 创建一个顶级目录`components`.

## 关于 CSS

3、要使用 CSS 模块，CSS 文件名必须以.module.css.（用到才加载）

```
xxx.module.css需要创建在 components 文件夹下
CSS模块的作用：会生成唯一的类名，不必担心类名冲突。
```

4、若要全局加载使用 CSS，请在`pages`下创建名为`_app.js`

```js
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

这个 APP 组件是顶级组件，在所有不同页面中都是通用的。
