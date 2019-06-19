[react]: //www.npmjs.com/package/react
[prop-types]: //www.npmjs.com/package/prop-types

# EvoKit

[![](https://img.shields.io/npm/v/evokit.svg?style=flat-square&colorB=blue)](https://www.npmjs.com/package/evokit)

Allows you to divide the user interface into independent blocks and think about them separately. EvoKit blocks can be declared with `createBlock`.

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

##### `default preset`
```js
{
    b: 'ek-', // block class name prefix => {b}block => ek-block
    e: '__', // element class name separator => block{e}elem => block__elem
    m: '_', // element modifier name separator => block{m}modName => block_modName
    v: '_', // element modifier value separator => modName{v}modVal => modName_modVal
    css: null // object CSS Module classes
}
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
