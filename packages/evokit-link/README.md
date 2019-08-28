[evokit]: /packages/evokit/

[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-all-tags]: //www.w3schools.com/tags/default.asp

[create_theme]: /docs/base/theme.md
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/getting-started/props.md

[link-tag]: #link-tag
[link-color]: #link-color
[link-size]: #link-size
[link-weight]: #link-weight
[link-valign]: #link-valign
[link-style]: #link-style
[link-lheight]: #link-lheight

# EvoKit - Link

[![](https://img.shields.io/npm/v/evokit-link.svg)](https://www.npmjs.com/package/evokit-link)

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
import { Link } from 'evokit-link';
import 'evokit-link/style.css';

<Link href='#'>
    ...
</Link>

```

## Props

> Also supports other valid props of the React Element. More about [use props][use-props]

### `<Link />`

| Prop name      | Default value | Possible value         | Description |
|----------------|---------------|------------------------|-------------|
| [link-tag]     | `a`           | [html tags][html-all-tags] | HTML tag    |
| [link-size]    | `default`     | `default` `small` `big` `h1` `h2` `h3` `h4` `h5` `h6` | Font size |
| [link-weight]  | `default`     | `default` `thin` `light` `medium` `bold` `black` | Font weight |
| [link-valign]  | `null`        | `baseline` `bottom` `middle` `sub` `super` `text-bottom` `text-top` `top` | Aligns text vertically |
| [link-style]   | `null`        | `dotted` `multi-line` | Decoration styles |
| [link-lheight] | `default`     | `default` `medium` `large` | Line spacing |

> Use [theming][create_theme] for creating custom `{THEME_NAME}`.

| Prop name        | Default value  | Possible value | Description  |
|------------------|----------------|----------------|--------------|
| [link-color]     | `null`         |`{THEME_NAME}`  | Text color   |

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

## Live demo

[![Edit link-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/linkusage-c7mgv?fontsize=14 ':include :type=iframe width=100% height=500px')

---

## `link-tag`

- Default value `a`

```jsx
<Link link-tag='a' href='#'>
    ...
</Link>
```

## `link-size`

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

- `dotted` - dotted style
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

## `link-color`

> Set the `THEME_NAME` depending on the [theming][create_theme]

```jsx
<Link link-color={THEME_NAME} href='#'>
    ...
</Link>
```
