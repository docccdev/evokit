[evokit-box]: /packages/evokit-box/
[evokit-link]: /packages/evokit-link/
[react-component]: //reactjs.org/docs/components-and-props.html
[html-tag]: //html5book.ru/html-tags

[as]: #as
[is]: #is
[preset]: #preset

# Base props

?> All blocks have base props. Also supports other valid props of the React Element for example `ref`, `className`, `onClick` etc.

| Prop name              | Possible value | Prop types | Description |
|------------------------|----------------|------------|-------------|
| [as]      | `div` `span` etc. | `string` `func` | [HTML tag][html-tag] or [React component][react-component] |
| [preset]  | `{b:"", m:"",  v:"", css:null}` | `object` | Used to customize the generation of class names and CSS Modules |

> Props are used with the prefix of the block name — `{BLOCK_NAME}-as`

---

### `as`

The type argument can be either a tag name string (such as `div` or `span`), a [React component][react-component] type (a class or a function)

```jsx
import { Link as RouterLink } from "react-router-dom";
import { Link } from 'evokit-link';
import 'evokit-link/style.css';

<Link href='#' /> // <a href='#' className='ek-link'></a>
<Link link-as='span' /> // <span className='ek-link'></span>
<Link link-as={RouterLink} to='/home' /> // <RouterLink className='ek-link' to='/home'></RouterLink>
```
> For examples, consider the use base props on the [evokit-link][evokit-link] block.

### `preset`

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

> For examples, consider the use base props on the [evokit-box][evokit-box] block.
