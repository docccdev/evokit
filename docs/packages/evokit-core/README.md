[react]: //www.npmjs.com/package/react
[prop-types]: //www.npmjs.com/package/prop-types

[![](https://img.shields.io/npm/v/evokit-core.svg?style=flat-square&colorB=blue)](https://www.npmjs.com/package/evokit-core)

# EvoKit - Core

Core lib for creating EvoKit blocks.

---


### createBlock()

```js
createBlock(
    blockName, // string
    tagName, // string
    [...mods] // array of string
);
```

##### Usage

> Peer dependencies [react], [prop-types]

```jsx
import { createBlock } from 'evokit-core';
const Block = createBlock('block', 'div', ['padding']);

<Block block-padding='xxl' /> // <div class="ek-block ek-block_padding_xxl"></div>

// BLOCKS HAS A DEFAULT PROPS:
<Block block-tag='span' /> // <span class="ek-block ek-block_padding_xxl"></span>
<Block block-ref={(target) => {}} /> // React ref
<Block block-preset={{ css: cssMap }} /> // CSS Modules => cssMap['.ek-block'] and cssMap['.ek-block_padding_xxl']

```
