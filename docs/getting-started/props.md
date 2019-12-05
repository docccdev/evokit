[evokit-box]: /packages/evokit-box/
[evokit-link]: /packages/evokit-link/
[react-component]: //reactjs.org/docs/components-and-props.html

# Use props

All blocks have base props, such as `{BLOCK_NAME}-as`, `{BLOCK_NAME}-preset`. Also supports other valid props of the React Element

- ~~`{BLOCK_NAME}-tag` - type `string`, used to change the HTML tag~~ (**DEPRECATED**)
- ~~`{BLOCK_NAME}-ref` - type `function`, used to get a NODE reference~~ (**DEPRECATED**)
- `{BLOCK_NAME}-as` - type argument can be either a tag name string (such as `div` or `span`), a [React component][react-component] type (a class or a function)
- `{BLOCK_NAME}-preset` - type `object`, used to customize the generation of class names and CSS Modules

---

## Props

### `{BLOCK_NAME}-as`

The type argument can be either a tag name string (such as `div` or `span`), a [React component][react-component] type (a class or a function)

> For examples, consider the use base props on the [evokit-link][evokit-link] block.

```jsx
import { Link as RouterLink } from "react-router-dom";
import { Link } from 'evokit-link';
import 'evokit-link/style.css';

<Link href='#' /> // <a href='#' className='ek-link'></a>
<Link link-as='span' /> // <span className='ek-link'></span>
<Link link-as={RouterLink} to='/home' /> // <RouterLink className='ek-link' to='/home'></RouterLink>
```

### `{BLOCK_NAME}-preset`

By default, uses the rules BEM naming and class prefix `ek-`
- `ek-blockName`
- `ek-blockName_modName_modVal`

> For examples, consider the use base props on the [evokit-box][evokit-box] block.

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

### `{BLOCK_NAME}-tag`

!> **DEPRECATED** prop `{BLOCK_NAME}-tag`, please use `{BLOCK_NAME}-as`

The block will have a tag `span`

```jsx
import { Box } from 'evokit-box';
import 'evokit-box/style.css';

// input:
<Box box-tag='span' />

// output:
<span class='ek-box' />
```

### `{BLOCK_NAME}-ref`

!> **DEPRECATED** prop `{BLOCK_NAME}-ref`, please use React `ref`

The passed function will receive a `target` argument that refers to the current DOM node.

```jsx
import { Box } from 'evokit-box';
import 'evokit-box/style.css';

// BAD
<Box box-ref={...} />

// GOOD
<Box ref={...} />
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
