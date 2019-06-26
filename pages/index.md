---
layout: post
permalink: /
---

## Known Problems

- 多级目录？
  - 需要改 src/components/Leftbar.vue 里面
  - 好像也不是很需要多级。。不过现在这个目录格式肯定是得改了
- 数学公式后端渲染？
  - 需要搞个 markdown-it 的后端渲染插件
  - 參考 https://github.com/swimmingwhale/markdown-it-mathjax-svg
- elasticsearch 接入？
  - 需要改 Header.vue
- 右侧目录联动
- 中文段落名的锚点 侧面没有 clickable link
- 代码块的行号 应该默认生成
- pymdown details 插件的语法
  - vuepress 好像有实现了差不多的功能，把 pymdown 的正则抄过来应该就行了
- 页面底部的那几个 block
  - we need a Footer component
- meta 区维护作者信息
- 右上角 repo stats
