[evokit-box]: /packages/evokit-box/

# Use props

All blocks have base props, such as `tag`, `ref`, `preset`. Also supports other valid props of the React Element

- `{BLOCK_NAME}-tag` - type `string`, used to change the HTML tag
- `{BLOCK_NAME}-ref` - type `function`, used to get a NODE reference
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

The passed function will receive a `target` argument that refers to the current DOM node.

```jsx
import { Box } from 'evokit-box';
import 'evokit-box/style.css';

<Box box-ref={(target) => console.log(target)} />
```

### `box-preset`

By default, uses the rules BEM naming and class prefix `ek-`
- `ek-blockName`
- `ek-blockName_modName_modVal`

```js
{
    b: 'ek-', // block class name prefix => {b}blockName => ek-blockName
    m: '_', // block modifier name separator => blockName{m}modName => block_modName
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
<Box box-padding={['s', 'xl']} />

// output:
<div class='ek-box ek-box_padding_s ek-box_padding_xl' />
```

### Optional values

```jsx
// input:
<Box box-padding={{ s: true, xl: false }} />

// output:
<div class='ek-box ek-box_padding_s' />
```

## Live demo

[![Edit box-props](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/boxprops-dn6w9?fontsize=14 ':include :type=iframe width=100% height=700px')
