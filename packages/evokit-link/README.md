[evokit]: /packages/evokit/
[css-variable]: //caniuse.com/#feat=css-variables
[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-tag-a]: //www.w3schools.com/tags/tag_a.asp
[postcss]: //postcss.org
[postcss-preset-env]: //preset-env.cssdb.org

[base_props]: docs/base/props
[create_theme]: docs/base/theme

[link-color]: #link-color
[link-size]: #link-size
[link-weight]: #link-weight
[link-valign]: #link-valign
[link-style]: #link-style
[link-lheight]: #link-lheight

# EvoKit - Link

[![](https://img.shields.io/npm/v/evokit-link.svg)](https://www.npmjs.com/package/evokit-link)

Used to create links. Contains one element `<Link>`.

---

#### Install

> Peer dependencies [evokit]

```bash
npm install evokit-link --save
```

#### Usage

> The styles use [css-variable] and will work in all modern browsers. If you need to support more old browsers such as Interner Explorer 11 or lower, use a tool [postcss] with [postcss-preset-env] for transforming css into something most browsers can understand.

- `<Link>` has a default html tag [a][html-tag-a]

```jsx
import { Link } from 'evokit-link';
import 'evokit-link/style.css';

<Link href='#'>
    ...
</Link>

```

[![Edit link-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/linkusage-c7mgv?fontsize=14 ':include :type=iframe width=100% height=500px')

#### Props

Also have [base props][base_props]

| Props | Values | Description |
|-------|--------|-------------|
| [link-size]    | `small` `default` `big` `h1` `h2` `h3` `h4` `h5` `h6` | Font size |
| [link-weight]  | `default` `thin` `light` `medium` `bold` `black` | Font weight |
| [link-valign]  | `baseline` `bottom` `middle` `sub` `super` `text-bottom` `text-top` `top` | Aligns text vertically |
| [link-style]   | `dotted` `multi-line` | Decoration styles |
| [link-lheight] | `default` `medium` `large` | Line spacing |
| [link-color]   | `{THEME_NAME}` | Text color - [Create Theme][create_theme] |

#### Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
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

##### `link-size`

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
<Link href='#' link-size='h1'>
    ...
</Link>
```

##### `link-weight`

- `default` - value: `400`
- `thin` - value: `100`
- `light` - value: `300`
- `medium` - value: `500`
- `bold` - value: `700`
- `black` - value: `900`

```jsx
<Link href='#' link-weight='bold'>
    ...
</Link>
```

##### `link-valign`

- `top` - Align the top edge of the element to the top of the tallest line item.
- `bottom` - Aligns the base of the current element at the bottom of the element of the line below it all
- `middle` - The alignment of the midpoint of the element at the baseline of the parent plus half the height of the parent element
- `baseline` - Aligns the baseline of the current element to the parent's baseline
- `sub` - The element is depicted as subscript, in the form of a subscript
- `super` - The element is depicted as superscript, in the form of a superscript
- `text-top` - The top border of the element is aligned to the highest text element of the current line
- `text-bottom` - The bottom border of the element is aligned at the very bottom edge of the current line

```jsx
<Link href='#' link-valign='middle'>
    ...
</Link>
```

##### `link-style`

- `dotted` - dotted style
- `multi-line` - for multiline links (fix cursor pointer)

```jsx
<Link href='#' link-style='dotted'>
    ...
</Link>
```

##### `link-lheight`

- `default` - css variable `--ek-link-line-height-default`, default value: `1em`
- `medium` - css variable `--ek-link-line-height-medium`, default value: `1.25em`
- `large` - css variable `--ek-link-line-height-large`, default value: `1.5em`

```jsx
<Link href='#' link-lheight='medium'>
    ...
</Link>
```

##### `link-color`

> Set the text color depending on the [created theme][create_theme], used `text color` value.

```jsx
<Link href='#' link-color={THEME_NAME}>
    ...
</Link>
```
