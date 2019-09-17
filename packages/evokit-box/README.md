[evokit]: /packages/evokit/
[CHANGELOG]: /packages/evokit-box/CHANGELOG.md

[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-all-tags]: //www.w3schools.com/tags/default.asp

[create_theme]: /docs/base/theme.md
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/getting-started/props.md

[box-align]: #box-align
[box-background]: #box-background
[box-border]: #box-border
[box-display]: #box-display
[box-height]: #box-height
[box-margin]: #box-margin
[box-overflow]: #box-overflow
[box-padding]: #box-padding
[box-place]: #box-place
[box-position]: #box-position
[box-round]: #box-round
[box-tag]: #box-tag
[box-width]: #box-width

# EvoKit - Box

[![](https://img.shields.io/npm/v/evokit-box.svg)](https://www.npmjs.com/package/evokit-box)
[![](https://img.shields.io/badge/page-CHANGELOG-42b983)][CHANGELOG]

The content block allows to apply indents, position and more. Contains one element `<Box>`

---

## Install

> Peer dependencies [evokit]. More about [install][installation]

```bash
npm install evokit-box --save
```

## Usage

> More about [usage][quik-start]

```jsx
import React from 'react';
import { Box } from 'evokit-box';
import 'evokit-box/style.css';

const App = () => (
    <Box box-margin='xs xl'>
        ...
    </Box>
);
```

## Props

> Also supports other valid props of the React Element. More about [use props][use-props]

### `<Box />`

| Prop name          | Default value | Possible value | Description |
|--------------------|---------------|----------------|-------------|
| [box-align]        | `none`        | `none` `left` `center` `right` | Horizontal alignment |
| [box-background]   | `null`        | [Create theme][create_theme]  | Background color |
| [box-border] `*`   | `null`        | [Create theme][create_theme]  | Border color     |
| [box-display]      | `block`       | `block` `inline-block` `inline` `none` | Display type |
| [box-height]       | `auto`        | `auto` `1-1` | Set the height |
| [box-margin] `*`   | `none`        | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` `auto` | Indent around block |
| [box-overflow] `*` | `visible`     | `auto` `hidden` `scroll` `visible` | Display overflow block content |
| [box-padding] `*`  | `none`        | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Indent around an block content |
| [box-place]        | `null`      | `top` `top-left` `top-right` `center` `center-left` `center-right` `bottom` `bottom-left` `bottom-right` | Position place |
| [box-position]     | `static`      | `static` `relative` `absolute` `fixed` | Positioning method |
| [box-round] `*`    | `none`        | `none` `full` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Corner rounding |
| [box-tag]          | `div`         | [HTML tags][html-all-tags] | HTML tag    |
| [box-width]        | `auto`        | `auto` `1-1` `*-2` `*-3` `*-4` `*-5` `*-6` `*-7` `*-8` `*-9` `*-10` | Set the width |

> `*` — prop has advanced params <br>

## Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
@custom-media --ek-box-media-small only screen and (min-width: 480px);
@custom-media --ek-box-media-medium only screen and (min-width: 768px);
@custom-media --ek-box-media-large only screen and (min-width: 960px);
@custom-media --ek-box-media-wide only screen and (min-width: 1200px);
@custom-media --ek-box-media-huge only screen and (min-width: 1400px);

:root {
    /* prop 'box-padding', 'box-margin' */
    --ek-box-indent-xxs: 5px;
    --ek-box-indent-xs: 10px;
    --ek-box-indent-s: 15px;
    --ek-box-indent-m: 20px;
    --ek-box-indent-l: 25px;
    --ek-box-indent-xl: 30px;
    --ek-box-indent-xxl: 35px;
    /* prop 'box-round' */
    --ek-box-round-xxs: 2px;
    --ek-box-round-xs: 4px;
    --ek-box-round-s: 6px;
    --ek-box-round-m: 8px;
    --ek-box-round-l: 10px;
    --ek-box-round-xl: 12px;
    --ek-box-round-xxl: 14px;
}
```

## Live demo

[![Edit box-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/boxusage-3r9iy?fontsize=14&runonclick=0 ':include :type=iframe width=100% height=500px')

---

## `box-tag`

Default value `div`

```jsx
<Box box-tag='div'>
    ...
</Box>
```

## `box-display`

- `block` - shown as blocky
- `block-inline` - block element that is wrapped around by other elements
- `inline` - displayed as inline
- `none` - remove from a document

```jsx
<Box box-display='none'>
    ...
</Box>
```

## `box-align`

- `none` - No alignment
- `left` - Align to the left
- `center` - Center alignment
- `right` - Align to the right

```jsx
<Box box-align='center'>
    ...
</Box>
```

## `box-margin`

The property allows you to set the indentation value for all sides of an element at once or to determine it only for specified sides.

!> **DEPRECATED** props `box-margin-lr` and `box-margin-tb`, please use multi values

**Advanced props**

1. `box-margin-top`
2. `box-margin-right`
3. `box-margin-bottom`
4. `box-margin-left`

**Multi values** _(set value separated by a space)_

- `box-margin="{1,3} {2,4}"`
- `box-margin="{1} {2,4} {3}"`
- `box-margin="{1} {2} {3} {4}"`

**List of values**

| Value  | CSS var               | CSS value |
|--------|-----------------------|-----------|
| `none` | ---                   | `0px`     |
| `auto` | ---                   | `auto`    |
| `xxs`  | `--ek-box-indent-xxs` | `5px`     |
| `xs`   | `--ek-box-indent-xs`  | `10px`    |
| `s`    | `--ek-box-indent-s`   | `15px`    |
| `m`    | `--ek-box-indent-m`   | `20px`    |
| `l`    | `--ek-box-indent-l`   | `25px`    |
| `xl`   | `--ek-box-indent-xl`  | `30px`    |
| `xxl`  | `--ek-box-indent-xxl` | `35px`    |

```jsx
<Box box-margin='s' />
<Box box-margin='s m' />
<Box box-margin='s m l' />
<Box box-margin='s m l xl' />
<Box
    box-margin-top='s'
    box-margin-right='m'
    box-margin-bottom='l'
    box-margin-left='xl'
/>
```

## `box-padding`

The property allows you to set the indentation value for all sides of an element at once or to determine it only for specified sides.

!> **DEPRECATED** props `box-padding-lr` and `box-padding-tb`, please use multi values

**Advanced props**

1. `box-padding-top`
2. `box-padding-right`
3. `box-padding-bottom`
4. `box-padding-left`

**Multi values** _(set value separated by a space)_

- `box-padding="{1,3} {2,4}"`
- `box-padding="{1} {2,4} {3}"`
- `box-padding="{1} {2} {3} {4}"`

**List of values**

| Value  | CSS var               | CSS value |
|--------|-----------------------|-----------|
| `none` | ---                   | `0px`     |
| `xxs`  | `--ek-box-indent-xxs` | `5px`     |
| `xs`   | `--ek-box-indent-xs`  | `10px`    |
| `s`    | `--ek-box-indent-s`   | `15px`    |
| `m`    | `--ek-box-indent-m`   | `20px`    |
| `l`    | `--ek-box-indent-l`   | `25px`    |
| `xl`   | `--ek-box-indent-xl`  | `30px`    |
| `xxl`  | `--ek-box-indent-xxl` | `35px`    |

```jsx
<Box box-padding='s' />
<Box box-padding='s m' />
<Box box-padding='s m l' />
<Box box-padding='s m l xl' />
<Box
    box-padding-top='s'
    box-padding-right='m'
    box-padding-bottom='l'
    box-padding-left='xl'
/>
```

## `box-round`

The property allows you to set the fillet value for all corners of the element at the same time or to determine it only for the specified angle.

!> **DEPRECATED** props `box-round-top`, `box-round-right`, `box-round-bottom` and `box-round-left`, please use multi values

**Advanced props**

1. `box-round-top-left`
2. `box-round-top-right`
3. `box-round-bottom-right`
4. `box-round-bottom-left`

**Multi values** _(set value separated by a space)_

- `box-round="{1,3} {2,4}"`
- `box-round="{1} {2,4} {3}"`
- `box-round="{1} {2} {3} {4}"`

**List of values**

| Value  | CSS var               | CSS value |
|--------|-----------------------|-----------|
| `none` | ---                   | `0px`     |
| `full` | ---                   | `50%`     |
| `xxs`  | `--ek-box-round-xxs`  | `2px`     |
| `xs`   | `--ek-box-round-xs`   | `4px`    |
| `s`    | `--ek-box-round-s`    | `6px`    |
| `m`    | `--ek-box-round-m`    | `8px`    |
| `l`    | `--ek-box-round-l`    | `10px`    |
| `xl`   | `--ek-box-round-xl`   | `12px`    |
| `xxl`  | `--ek-box-round-xxl`  | `14px`    |

```jsx
<Box box-round='s' />
<Box box-round='s m' />
<Box box-round='s m l' />
<Box box-round='s m l xl' />
<Box
    box-round-top-left='s'
    box-round-top-right='m'
    box-round-bottom-right='l'
    box-round-bottom-left='xl'
/>
```

## `box-width`

- `auto` - value: `auto`
- See table, for example: `3-4` = `75%`

| |1|2|3|4|5|6|7|8|9|10|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|1|`100%`|`50%`|`33.33%`|`25%`|`20%`|`16.66%`|`14.28%`|`12.5%`|`11.11%`|`10%`|
|2|---|`100%`|`66.66%`|`50%`|`40%`|`33.33%`|`28.57%`|`25%`|`22.22%`|`20%`|
|3|---|---|`100%`|`75%`|`60%`|`50%`|`42.85%`|`37.5%`|`33.33%`|`30%`|
|4|---|---|---|`100%`|`80%`|`66.66%`|`57.14%`|`50%`|`44.44%`|`40%`|
|5|---|---|---|---|`100%`|`83.33%`|`71.42%`|`62.5%`|`55.55%`|`50%`|
|6|---|---|---|---|---|`100%`|`85.71%`|`75%`|`66.66%`|`60%`|
|7|---|---|---|---|---|---|`100%`|`87.5%`|`77.77%`|`70%`|
|8|---|---|---|---|---|---|---|`100%`|`88.88%`|`80%`|
|9|---|---|---|---|---|---|---|---|`100%`|`90%`|
|10|---|---|---|---|---|---|---|---|---|`100%`|

```jsx
<Box box-width='3-4'>
    ...
</Box>
```

## `box-height`

- `auto` - value: `auto`
- `1-1` - value: `100%`

```jsx
<Box box-height='1-1'>
    ...
</Box>
```

## `box-position`

```jsx
<Box box-position='absolute'>
    ...
</Box>
```

## `box-place`

> Use with prop `box-position`

```jsx
<Box box-position='absolute' box-place='center'>
    ...
</Box>
```

## `box-overflow`

The property allows you to set the value for all axes at the same time or to determine it only for the specified axis

**Advanced props**

1. `box-overflow-x`
2. `box-overflow-y`

**Multi values** _(set value separated by a space)_

- `box-overflow="{1} {2}"`

**List of values**

- `auto` - Scroll bars are added only when needed
- `hidden` - Only the area inside the element is displayed, the rest will be hidden
- `scroll` - Scroll bars are always added
- `visible` - The entire content of the element is displayed, even beyond the specified height and width

```jsx
<Box box-overflow='scroll' />
<Box box-overflow='visible scroll' />
<Box box-overflow-x='visible' box-overflow-y='scroll' />
```

## `box-border`

> Set the `THEME_NAME` depending on the [theming][create_theme]

> Has advanced props:
> - `box-border` - `top`, `right`, `bottom` or `left` for example **`box-border-right`**
> - `box-border` - `tb` or `lr` for example **`box-border-tb`**

```jsx
<Box box-border={THEME_NAME}>
    ...
</Box>
```

## `box-background`

> Set the `THEME_NAME` depending on the [theming][create_theme]

```jsx
<Box box-background={THEME_NAME}>
    ...
</Box>
```
