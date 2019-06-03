[evokit-box]: /packages/evokit-box/

# Base props

All blocks have default props, such as `tag`, `ref`, `preset`.

- `{BLOCK_NAME}-tag` - type `string`, used to change the HTML tag
- `{BLOCK_NAME}-ref` - type `function`, used to get a NODE reference
- `{BLOCK_NAME}-preset` - type `object`, used to customize the generation of class names and CSS Modules

---

> For examples, consider the use default props on the [Box][evokit-box] block.

##### `box-tag`

The block will have a tag `span`

```jsx
import { Box } from 'evokit-Box';
import 'evokit-box/style.css';

// input:
<Box box-tag='span' />
// output:
<span class='ek-box' />
```

##### `box-ref`

The passed function will receive a `target` argument that refers to the current DOM node.

```jsx
import { Box } from 'evokit-Box';
import 'evokit-box/style.css';

<Box box-ref={(target) => console.log(target)} />
```

##### `box-preset`

By default, uses the rules BEM naming and class prefix `ek-`
- `ek-block`
- `ek-block_modName_modVal`
- `ek-block__elem`
- `ek-block__elem_modName_modVal`

```js
{
    b: 'ek-', // block class name prefix => {b}block => ek-block
    e: '__', // element class name separator => block{e}elem => block__elem
    m: '_', // element modifier name separator => block{m}modName => block_modName
    v: '_', // element modifier value separator => modName{v}modVal => modName_modVal
    css: null // object CSS Module classes
}
```

Example CSS Module

```jsx
import { Box } from 'evokit-Box';
import boxCss from 'evokit-box/style.css'; // return for example {'ek-box': 'ek-box-hF7j'};

// input:
<Box box-preset={{ css: boxCss }} />
// output:
<div class='ek-box-hF7j' />

```

---

[![Edit box-props](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/boxprops-dn6w9?fontsize=14 ':include :type=iframe width=100% height=500px')
