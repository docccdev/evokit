[react]: //www.npmjs.com/package/react
[prop-types]: //www.npmjs.com/package/prop-types

[![](https://img.shields.io/npm/v/evokit.svg?style=flat-square&colorB=blue)](https://www.npmjs.com/package/evokit)

# EvoKit

Tool for creating UI React blocks.

---

##### Usage

> Peer dependencies [react], [prop-types]

```bash
npm install evokit --save
```

##### `createBlock()`

```js
createBlock(
    tagName, // string
    blockName, // string
    [...blockMods], // array of string
    preset // object { b: <string>, e: <string>, m: <string>, v: <string>, css: <object CSS Module classes> }
);
```

```jsx
import { createBlock } from 'evokit';
const Block = createBlock('div', 'block', ['padding']);

<Block /> // <div class="ek-block"></div>
<Block block-padding='xxl' /> // <div class="ek-block ek-block_padding_xxl"></div>

// BLOCKS HAS A DEFAULT PROPS:
<Block block-tag='span' /> // <span class="ek-block ek-block_padding_xxl"></span>
<Block block-ref={(target) => {}} /> // React ref
<Block block-preset={{ css: cssMap }} /> // CSS Modules => cssMap['.ek-block'] and cssMap['.ek-block_padding_xxl']

```
