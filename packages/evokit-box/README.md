[evokit]: /packages/evokit/
[CHANGELOG]: /packages/evokit-box/CHANGELOG.md

[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[react-component]: //reactjs.org/docs/react-component.html

[create_theme]: /public/theming.html
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/getting-started/props.md

[box-align]: #box-align
[box-background]: #box-background
[box-border]: #box-border
[box-border-color]: #box-border-color
[box-border-width]: #box-border-width
[box-border-style]: #box-border-style
[box-display]: #box-display
[box-empty]: #box-empty
[box-height]: #box-height
[box-margin]: #box-margin
[box-opacity]: #box-opacity
[box-overflow]: #box-overflow
[box-padding]: #box-padding
[box-place]: #box-place
[box-position]: #box-position
[box-round]: #box-round
[box-width]: #box-width
[box-zindex]: #box-zindex

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

[![Edit box-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/boxusage-3r9iy?fontsize=14&runonclick=0 ':include :type=iframe width=100% height=500px')

## Props

> Also supports other valid props of the React Element. More about [use props][use-props]

### `<Box />`

| Prop name              | Default value | Possible value | Description |
|------------------------|---------------|----------------|-------------|
| [box-align]            | `none`    | `none` `left` `center` `right` | Horizontal alignment |
| [box-background]       | `null`    | [Create theme][create_theme]  | Background color |
| [box-border] `*`       | `null`    | [Create theme][create_theme]  | Border color, width and style     |
| [box-border-color] `*` | `null`    | [Create theme][create_theme]  | Border color     |
| [box-border-width] `*` | `none`    | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` `3xl` `4xl` `5xl`  | Border width     |
| [box-border-style] `*` | `solid`   | `solid` `dotted` `dashed`  | Border style     |
| [box-display]          | `block`   | `block` `inline-block` `inline` `none` | Display type |
| [box-empty]            | `null`   | `hidden` | Hide if contain either nothing or only an HTML comment. |
| [box-height]           | `auto`    | `auto` `1-1` | Set the height |
| [box-margin] `*`       | `none`    | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` `3xl` `4xl` `5xl` `auto` | Indent around block |
| [box-opacity]          | `null`    | `0` `10` `20` `30` `40` `50` `60` `70` `80` `90` `100` | Set the opacity in % |
| [box-overflow] `*`     | `visible` | `auto` `hidden` `scroll` `visible` | Display overflow block content |
| [box-padding] `*`      | `none`    | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` `3xl` `4xl` `5xl` | Indent around an block content |
| [box-place]            | `null`    | `none` `top` `top-left` `top-right` `center` `center-left` `center-right` `bottom` `bottom-left` `bottom-right` | Position place, depending [box-position] |
| [box-position] `*`     | `static`  | `static` `relative` `absolute` `fixed` `sticky` | Positioning method |
| [box-round] `*`        | `none`    | `none` `full` `xxs` `xs` `s` `m` `l` `xl` `xxl` `3xl` `4xl` `5xl` | Corner rounding |
| [box-width]            | `auto`    | `auto` `1-1` `*-2` `*-3` `*-4` `*-5` `*-6` `*-7` `*-8` `*-9` `*-10` | Set the width |
| [box-zindex]           | `null`    | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` `3xl` `4xl` `5xl` | Position z-index, depending [box-position] |

> `*` — prop has advanced params

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
    --ek-box-indent-3xl: 40px;
    --ek-box-indent-4xl: 45px;
    --ek-box-indent-5xl: 50px;
    /* prop 'box-round' */
    --ek-box-round-xxs: 2px;
    --ek-box-round-xs: 4px;
    --ek-box-round-s: 6px;
    --ek-box-round-m: 8px;
    --ek-box-round-l: 10px;
    --ek-box-round-xl: 12px;
    --ek-box-round-xxl: 14px;
    --ek-box-round-3xl: 16px;
    --ek-box-round-4xl: 18px;
    --ek-box-round-5xl: 20px;
    /* prop 'box-border-width' */
    --ek-box-border-width-xxs: 1px;
    --ek-box-border-width-xs: 2px;
    --ek-box-border-width-s: 3px;
    --ek-box-border-width-m: 4px;
    --ek-box-border-width-l: 5px;
    --ek-box-border-width-xl: 6px;
    --ek-box-border-width-xxl: 7px;
    --ek-box-border-width-3xl: 8px;
    --ek-box-border-width-4xl: 9px;
    --ek-box-border-width-5xl: 10px;
    /* prop 'box-zindex' */
    --ek-box-zindex-xxs: 5;
    --ek-box-zindex-xs: 10;
    --ek-box-zindex-s: 15;
    --ek-box-zindex-m: 20;
    --ek-box-zindex-l: 25;
    --ek-box-zindex-xl: 30;
    --ek-box-zindex-xxl: 35;
    --ek-box-zindex-3xl: 40;
    --ek-box-zindex-4xl: 45;
    --ek-box-zindex-5xl: 50;
}
```

---

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

- `box-margin-top` <sup>{1}</sup>
- `box-margin-right` <sup>{2}</sup>
- `box-margin-bottom` <sup>{3}</sup>
- `box-margin-left` <sup>{4}</sup>

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
| `3xl`  | `--ek-box-indent-3xl` | `40px`    |
| `4xl`  | `--ek-box-indent-4xl` | `45px`    |
| `5xl`  | `--ek-box-indent-5xl` | `50px`    |

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

- `box-padding-top` <sup>{1}</sup>
- `box-padding-right` <sup>{2}</sup>
- `box-padding-bottom` <sup>{3}</sup>
- `box-padding-left` <sup>{4}</sup>

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
| `3xl`  | `--ek-box-indent-3xl` | `40px`    |
| `4xl`  | `--ek-box-indent-4xl` | `45px`    |
| `5xl`  | `--ek-box-indent-5xl` | `50px`    |

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

- `box-round-top-left` <sup>{1}</sup>
- `box-round-top-right` <sup>{2}</sup>
- `box-round-bottom-right` <sup>{3}</sup>
- `box-round-bottom-left` <sup>{4}</sup>

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
| `xs`   | `--ek-box-round-xs`   | `4px`     |
| `s`    | `--ek-box-round-s`    | `6px`     |
| `m`    | `--ek-box-round-m`    | `8px`     |
| `l`    | `--ek-box-round-l`    | `10px`    |
| `xl`   | `--ek-box-round-xl`   | `12px`    |
| `xxl`  | `--ek-box-round-xxl`  | `14px`    |
| `3xl`  | `--ek-box-round-3xl`  | `16px`    |
| `4xl`  | `--ek-box-round-4xl`  | `18px`    |
| `5xl`  | `--ek-box-round-5xl`  | `20px`    |

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

<div class='tableHovered' data-tooltip-content='box-width'></div>

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

The property allows you to set the type of positioning, location place on all sides and z-index

**Advanced props**

- `box-position` <sup>{1}</sup>
- [`box-place`][box-place] <sup>{2}</sup>
- [`box-zindex`][box-zindex] <sup>{3}</sup>

**Multi values** _(set value separated by a space)_

- `box-position="{1}"`
- `box-position="{1} {2}"`
- `box-position="{1} {2} {3}"`

```jsx
<Box box-position='absolute' />
<Box box-position='absolute center' />
<Box box-position='absolute center xs' />
```

## `box-place`

> Use with prop `box-position`

**List of values**

| Value           | Description              |
|-----------------|--------------------------|
| `none`          | Reset placement          |
| `top`           | Center top placement     |
| `top-left`      | Left top placement       |
| `top-right`     | Right top placement      |
| `center`        | Center placement         |
| `center-left`   | Left center placement    |
| `center-right`  | Right center placement   |
| `bottom`        | Center bottom placement  |
| `bottom-left`   | Left bottom placement    |
| `bottom-right`  | Right bottom placement   |

```jsx
<Box box-position='absolute' box-place='center'>
    ...
</Box>
```

## `box-zindex`

> Use with prop `box-position`

**List of values**

| Value  | CSS var               | CSS value |
|--------|-----------------------|-----------|
| `none` | ---                   | `0`       |
| `xxs`  | `--ek-box-zindex-xxs` | `5`       |
| `xs`   | `--ek-box-zindex-xs`  | `10`      |
| `s`    | `--ek-box-zindex-s`   | `15`      |
| `m`    | `--ek-box-zindex-m`   | `20`      |
| `l`    | `--ek-box-zindex-l`   | `25`      |
| `xl`   | `--ek-box-zindex-xl`  | `30`      |
| `xxl`  | `--ek-box-zindex-xxl` | `35`      |
| `3xl`  | `--ek-box-zindex-3xl` | `40`      |
| `4xl`  | `--ek-box-zindex-4xl` | `45`      |
| `5xl`  | `--ek-box-zindex-5xl` | `50`      |

```jsx
<Box box-position='absolute' box-zindex='xs'>
    ...
</Box>
```

## `box-overflow`

The property allows you to set the value for all axes at the same time or to determine it only for the specified axis

**Advanced props**

- `box-overflow-x` <sup>{1}</sup>
- `box-overflow-y` <sup>{2}</sup>

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

!> **DEPRECATED** props `box-border-lr` and `box-border-tb`, please use the separately `box-border-left` and `box-border-right` or `box-border-top` and `box-border-bottom`

**Advanced props**

- `box-border-top`
- `box-border-right`
- `box-border-bottom`
- `box-border-left`

**Multi values** _(set value separated by a space)_

- `box-border="{1}"`
- `box-border="{1} {2}"`
- `box-border="{1} {2} {3}"`

> {1} - [color][box-border-color], {2} - [width][box-border-width], {3} - [style][box-border-style]

```jsx
<Box box-border="{THEME_NAME}" />
<Box box-border="{THEME_NAME} xs" />
<Box box-border="{THEME_NAME} xs dotted" />

<Box box-border-top="{THEME_NAME}" />
<Box box-border-top="{THEME_NAME} xs" />
<Box box-border-top="{THEME_NAME} xs dotted" />
```

> Set the `THEME_NAME` depending on the [theming][create_theme]


## `box-border-width`

The property allows you to set the border width for all sides of an element at once or to determine it only for specified sides.

**Advanced props**

- `box-border-width-top` <sup>{1}</sup>
- `box-border-width-right` <sup>{2}</sup>
- `box-border-width-bottom` <sup>{3}</sup>
- `box-border-width-left` <sup>{4}</sup>

**Multi values** _(set value separated by a space)_

- `box-border-width="{1,3} {2,4}"`
- `box-border-width="{1} {2,4} {3}"`
- `box-border-width="{1} {2} {3} {4}"`

**List of values**

| Value  | CSS var                      | CSS value |
|--------|------------------------------|-----------|
| `none` | ---                          | `0px`     |
| `xxs`  | `--ek-box-border-width-xxs`  | `1px`     |
| `xs`   | `--ek-box-border-width-xs`   | `2px`     |
| `s`    | `--ek-box-border-width-s`    | `3px`     |
| `m`    | `--ek-box-border-width-m`    | `4px`     |
| `l`    | `--ek-box-border-width-l`    | `5px`     |
| `xl`   | `--ek-box-border-width-xl`   | `6px`     |
| `xxl`  | `--ek-box-border-width-xxl`  | `7px`     |
| `3xl`  | `--ek-box-border-width-3xl`  | `8px`    |
| `4xl`  | `--ek-box-border-width-4xl`  | `9px`    |
| `5xl`  | `--ek-box-border-width-5xl`  | `10px`    |

```jsx
<Box box-border-width='s' />
<Box box-border-width='s m' />
<Box box-border-width='s m l' />
<Box box-border-width='s m l xl' />
<Box
    box-border-width-top='s'
    box-border-width-right='m'
    box-border-width-bottom='l'
    box-border-width-left='xl'
/>
```

## `box-border-color`

The property allows you to set the border color for all sides of an element at once or to determine it only for specified sides.

**Advanced props**

- `box-border-color-top` <sup>{1}</sup>
- `box-border-color-right` <sup>{2}</sup>
- `box-border-color-bottom` <sup>{3}</sup>
- `box-border-color-left` <sup>{4}</sup>

**Multi values** _(set value separated by a space)_

- `box-border-color="{1,3} {2,4}"`
- `box-border-color="{1} {2,4} {3}"`
- `box-border-color="{1} {2} {3} {4}"`

```jsx
<Box box-border-color='{THEME_NAME}' />
<Box box-border-color='{THEME_NAME} {THEME_NAME}' />
<Box box-border-color='{THEME_NAME} {THEME_NAME} {THEME_NAME}' />
<Box box-border-color='{THEME_NAME} {THEME_NAME} {THEME_NAME} {THEME_NAME}' />
<Box
    box-border-color-top='{THEME_NAME}'
    box-border-color-right='{THEME_NAME}'
    box-border-color-bottom='{THEME_NAME}'
    box-border-color-left='{THEME_NAME}'
/>
```
> Set the `THEME_NAME` depending on the [theming][create_theme]

## `box-border-style`

The property allows you to set the border style for all sides of an element at once or to determine it only for specified sides.

**Advanced props**

- `box-border-style-top` <sup>{1}</sup>
- `box-border-style-right` <sup>{2}</sup>
- `box-border-style-bottom` <sup>{3}</sup>
- `box-border-style-left` <sup>{4}</sup>

**Multi values** _(set value separated by a space)_

- `box-border-style="{1,3} {2,4}"`
- `box-border-style="{1} {2,4} {3}"`
- `box-border-style="{1} {2} {3} {4}"`

**Values**

- `solid` - solid style _(default)_
- `dotted` - dotted style
- `dashed` - dashed style

```jsx
<Box box-border-style='solid' />
<Box box-border-style='solid dotted' />
<Box box-border-style='solid dotted dashed' />
<Box box-border-style='solid dotted dashed solid' />
<Box
    box-border-style-top='solid'
    box-border-style-right='dotted'
    box-border-style-bottom='dashed'
    box-border-style-left='solid'
/>
```

## `box-background`

```jsx
<Box box-background='{THEME_NAME}'>
    ...
</Box>
```
> Set the `THEME_NAME` depending on the [theming][create_theme]


## `box-opacity`

- `0` - value: `0`
- `10` - value: `0.1`
- `20` - value: `0.2`
- `30` - value: `0.3`
- `40` - value: `0.4`
- `50` - value: `0.5`
- `60` - value: `0.6`
- `70` - value: `0.7`
- `80` - value: `0.8`
- `90` - value: `0.9`
- `100` - value: `1`

```jsx
<Box box-opacity='50'>
    ...
</Box>
```

## `box-empty`

The `<Box>` will be hidden `display: none` that contain either nothing or only an HTML comment.

```jsx
<Box box-empty='hidden'>
    {null}
</Box>
```
