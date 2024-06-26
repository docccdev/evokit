[evokit]: /packages/evokit/
[CHANGELOG]: /packages/evokit-link/CHANGELOG.md

[css-variable-usage]: //w3schools.com/css/css3_variables.asp

[create_theme]: /public/theming.html
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/props/base.md

[link-color]: #link-color
[link-display]: #link-display
[link-lheight]: #link-lheight
[link-size]: #link-size
[link-style]: #link-style
[link-valign]: #link-valign
[link-weight]: #link-weight
[link-wrap]: #link-wrap

# EvoKit - Link

[![](https://img.shields.io/npm/v/evokit-link.svg)](https://www.npmjs.com/package/evokit-link)
[![](https://img.shields.io/badge/page-CHANGELOG-42b983)][CHANGELOG]

Used to create link. Contains one element `<Link>`

---

## Install

> Peer dependencies [evokit]. More about [install][installation]

```bash
npm install evokit-link --save
```

## Usage

> More about [usage][quik-start]

```jsx
import React from 'react';
import { Link } from 'evokit-link';
import 'evokit-link/style.css';

const App = () => (
    <Link link-weight='bold' href='#'>
        ...
    </Link>
);
```

[![Edit link-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/linkusage-c7mgv?fontsize=14&runonclick=0 ':include :type=iframe width=100% height=500px')

## Props

> Also supports other valid props of the React Element. More about [use props][use-props]

### `<Link />`

| Prop name      | Default value | Possible value         | Description |
|----------------|---------------|------------------------|-------------|
| [link-color]   | `null`        | [Create theme][create_theme]  | Text color   |
| [link-display] | `inline`      | `block` `inline-block` `inline` `none`               | Display type |
| [link-lheight] | `default`     | `default` `medium` `large`    | Line spacing |
| [link-size]    | `default`     | `none` `inherit` `default` `small` `big` `h1` `h2` `h3` `h4` `h5` `h6` | Font size |
| [link-style]   | `null`        | `solid` `dotted` `dashed` `multi-line` | Decoration styles |
| [link-valign]  | `null`        | `baseline` `bottom` `middle` `sub` `super` `text-bottom` `text-top` `top` | Aligns text vertically |
| [link-weight]  | `default`     | `default` `thin` `light` `medium` `bold` `black` `100` `200` `300` `400` `500` `600` `700` `800` `900` | Font weight |
| [link-wrap]    | `normal`      | `normal` `nowrap` `pre` `pre-wrap` `pre-line` `break` `ellipsis` | Transferring and cutting text |


## Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
@custom-media --ek-link-media-small only screen and (min-width: 480px);
@custom-media --ek-link-media-medium only screen and (min-width: 768px);
@custom-media --ek-link-media-large only screen and (min-width: 960px);
@custom-media --ek-link-media-wide only screen and (min-width: 1200px);
@custom-media --ek-link-media-huge only screen and (min-width: 1400px);

:root {
    /* base */
    --ek-link-line-height: 1em;
    /* prop 'link-size' */
    --ek-link-size-small: 11px;
    --ek-link-size-default: 13px;
    --ek-link-size-big: 15px;
    --ek-link-size-h1: 24px;
    --ek-link-size-h2: 22px;
    --ek-link-size-h3: 20px;
    --ek-link-size-h4: 18px;
    --ek-link-size-h5: 16px;
    --ek-link-size-h6: 14px;
    /* prop 'link-lheight' */
    --ek-link-line-height-default: var(--ek-link-line-height);
    --ek-link-line-height-medium: 1.25em;
    --ek-link-line-height-large: 1.5em;
}
```

---

## `link-display`

- `block` - shown as blocky
- `inline-block` - block element that is wrapped around by other elements
- `inline` - displayed as inline
- `none` - remove from a document

```jsx
<Link link-display='none' href='#'>
    ...
</Link>
```

## `link-size`

- `none` - value: `0px`
- `inherit` - inherits the meaning of the parent
- `small` - css variable `--ek-link-size-small`, default value: `11px`
- `default` - css variable `--ek-link-size-default`, default value: `13px`
- `big` - css variable `--ek-link-size-big`, default value: `15px`
- `h1` - css variable `--ek-link-size-h1`, default value: `24px`
- `h2` - css variable `--ek-link-size-h2`, default value: `22px`
- `h3` - css variable `--ek-link-size-h3`, default value: `20px`
- `h4` - css variable `--ek-link-size-h4`, default value: `18px`
- `h5` - css variable `--ek-link-size-h5`, default value: `16px`
- `h6` - css variable `--ek-link-size-h6`, default value: `14px`

```jsx
<Link link-size='h1' href='#'>
    ...
</Link>
```

## `link-weight`

- `default` - value: `400`
- `thin` - value: `100`
- `light` - value: `300`
- `medium` - value: `500`
- `bold` - value: `700`
- `black` - value: `900`

or

- `100` `200` `300` `400` `500` `600` `700` `800` `900`

```jsx
<Link link-weight='bold' href='#'>
    ...
</Link>
```

## `link-valign`

- `top` - Align the top edge of the element to the top of the tallest line item.
- `bottom` - Aligns the base of the current element at the bottom of the element of the line below it all
- `middle` - The alignment of the midpoint of the element at the baseline of the parent plus half the height of the parent element
- `baseline` - Aligns the baseline of the current element to the parent's baseline
- `sub` - The element is depicted as subscript, in the form of a subscript
- `super` - The element is depicted as superscript, in the form of a superscript
- `text-top` - The top border of the element is aligned to the highest text element of the current line
- `text-bottom` - The bottom border of the element is aligned at the very bottom edge of the current line

```jsx
<Link link-valign='middle' href='#'>
    ...
</Link>
```

## `link-style`

- `solid` - solid style
- `dotted` - dotted style
- `dashed` - dashed style
- `multi-line` - for multiline links (fix cursor pointer)

```jsx
<Link link-style='dotted' href='#'>
    ...
</Link>
```

## `link-lheight`

- `default` - css variable `--ek-link-line-height-default`, default value: `1em`
- `medium` - css variable `--ek-link-line-height-medium`, default value: `1.25em`
- `large` - css variable `--ek-link-line-height-large`, default value: `1.5em`

```jsx
<Link link-lheight='medium' href='#'>
    ...
</Link>
```

## `link-wrap`

- `normal` - The text is displayed as usual
- `nowrap` - All text is displayed in one line
- `pre` - Whitespace is preserved by the browser. Text will only wrap on line breaks. Acts like the `<pre>` tag in HTML
- `pre-wrap` - Whitespace is preserved by the browser. Text will wrap when necessary, and on line breaks
- `pre-line` - Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary, and on line breaks
- `break` - Line wrapping is added automatically
- `ellipsis` - The text is cut and an ellipsis is added to the end of the line

```jsx
<Link link-wrap='ellipsis' href='#'>
    ...
</Link>
```

## `link-color`

> Set the `THEME_NAME` depending on the [theming][create_theme]

```jsx
<Link link-color={THEME_NAME} href='#'>
    ...
</Link>
```
