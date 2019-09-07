[evokit-box]: /packages/evokit-box/

# Use props

All blocks have base props, such as `tag`, `ref`, `preset`. Also supports other valid props of the React Element

- `{BLOCK_NAME}-tag` - type `string`, used to change the HTML tag
- `{BLOCK_NAME}-ref` - type `function`, used to get a NODE reference (**DEPRECATED**)
- `{BLOCK_NAME}-preset` - type `object`, used to customize the generation of class names and CSS Modules

---

## Props

For examples, consider the use base props on the [Box][evokit-box] block.

### `box-tag`

The block will have a tag `span`

```jsx
import { Box } from 'evokit-box';
import 'evokit-box/style.css';

// input:
<Box box-tag='span' />

// output:
<span class='ek-box' />
```

### `box-ref`

!> This prop is **DEPRECATED**! Please use React ref prop.

~~The passed function will receive a `target` argument that refers to the current DOM node.~~

```jsx
import { Box } from 'evokit-box';
import 'evokit-box/style.css';

// BAD
<Box box-ref={...} />

// GOOD
<Box ref={...} />
```

### `box-preset`

By default, uses the rules BEM naming and class prefix `ek-`
- `ek-blockName`
- `ek-blockName_modName_modVal`

```js
{
    b: 'ek-', // block class name prefix => {b}blockName => ek-blockName
    m: '_', // block modifier name separator => blockName{m}modName => blockName_modName
    v: '_', // block modifier value separator => modName{v}modVal => modName_modVal
    css: null // object CSS Module classes
}
```

Example CSS Module

```jsx
import { Box } from 'evokit-box';
import boxCss from 'evokit-box/style.css'; // return for example {'ek-box': 'ek-box-hF7j'};

// input:
<Box box-preset={{ css: boxCss }} />

// output:
<div class='ek-box-hF7j' />

```

## Use cases

### Single value

```jsx
// input:
<Box box-padding='xl' />

// output:
<div class='ek-box ek-box_padding_xl' />
```

### Multi values

```jsx
// input:
<Box box-padding='s m l xl' />

// output:
<div class='ek-box ek-box_padding-top_s ek-box_padding-right_m ek-box_padding-bottom_l ek-box_padding-left_xl' />
```
### Array of values

```jsx
// input:
<Box box-padding={['s', 'xl']} />

// output:
<div class='ek-box ek-box_padding_s ek-box_padding_xl' />
```

### Object of values

```jsx
// input:
<Box box-padding={{ s: true, xl: false }} />

// output:
<div class='ek-box ek-box_padding_s' />
```

## Live demo

[![Edit box-props](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/boxprops-dn6w9?fontsize=14&runonclick=0 ':include :type=iframe width=100% height=700px')
