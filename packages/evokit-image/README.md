[evokit]: /packages/evokit/
[CHANGELOG]: /packages/evokit-image/CHANGELOG.md

[css-variable-usage]: //w3schools.com/css/css3_variables.asp

[create_theme]: /public/theming.html
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/getting-started/props.md

[image-align]: #image-align
[image-alt]: #image-alt
[image-border]: #image-border
[image-display]: #image-display
[image-fit]: #image-fit
[image-mirror]: #image-mirror
[image-round]: #image-round
[image-valign]: #image-valign
[image-width]: #image-width

# EvoKit - Image

[![](https://img.shields.io/npm/v/evokit-image.svg)](https://www.npmjs.com/package/evokit-image)
[![](https://img.shields.io/badge/page-CHANGELOG-42b983)][CHANGELOG]

Used to display the image. Contains one element `<Image>`

---

## Install

> Peer dependencies [evokit]. More about [install][installation]

```bash
npm install evokit-image --save
```

## Usage

> More about [usage][quik-start]

```jsx
import React from 'react';
import { Image } from 'evokit-image';
import 'evokit-image/style.css';

const App = () => (
    <Image image-align='center' src='...' alt='...' />
);
```

[![Edit image-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/imageusage-7qyol?fontsize=14&runonclick=0 ':include :type=iframe width=100% height=500px')

## Props

> Also supports other valid props of the React Element. More about [use props][use-props]

### `<Image />`

| Prop name          | Default value | Possible value          | Description      |
|--------------------|---------------|-------------------------|------------------|
| [image-align]      | `null`        | `left` `center` `right` | Horizontal alignment |
| [image-alt]        | `visible`     | `visible` `hidden` | Visibility alt text if the image is not uploaded |
| [image-border]     | `null`        | [Create theme][create_theme] | Border color |
| [image-display]    | `inline`      | `inline` `block` `none`         | Display type |
| [image-fit]        | `null`        | `none` `fill` `contain` `cover` `scale-down` | Filling the container relative to its height and width |
| [image-mirror]     | `null`        | `x` `y` `xy` | Mirroring |
| [image-round] `*`  | `none`        | `none` `full` `xxs` `xs` `s` `m` `l` `xl` `xxl` `3xl` `4xl` `5xl` | Corner rounding |
| [image-valign]     | `null`        | `baseline` `bottom` `middle` `sub` `super` `text-bottom` `text-top` `top` | Vertical alignment |
| [image-width]      | `auto`        | `auto` `1-1` `*-2` `*-3` `*-4` `*-5` `*-6` `*-7` `*-8` `*-9` `*-10` | Set the width |

> `*` — prop has advanced params

## Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
@custom-media --ek-image-media-small only screen and (min-width: 480px);
@custom-media --ek-image-media-medium only screen and (min-width: 768px);
@custom-media --ek-image-media-large only screen and (min-width: 960px);
@custom-media --ek-image-media-wide only screen and (min-width: 1200px);
@custom-media --ek-image-media-huge only screen and (min-width: 1400px);

:root {
    /* prop 'image-round' */
    --ek-image-round-xxs: 2px;
    --ek-image-round-xs: 4px;
    --ek-image-round-s: 6px;
    --ek-image-round-m: 8px;
    --ek-image-round-l: 10px;
    --ek-image-round-xl: 12px;
    --ek-image-round-xxl: 14px;
    --ek-image-round-3xl: 16px;
    --ek-image-round-4xl: 18px;
    --ek-image-round-5xl: 20px;
}
```

---

## `image-display`

- `inline` - displayed as inline
- `block` - shown as blocky
- `none` - remove from a document

```jsx
<Image image-display='none' src='' alt='' />
```

## `image-align`

- `left` - Align the image to the left
- `center` - Center alignment
- `right` - Align the image to the right

```jsx
<Image image-align='center' src='' alt='' />
```

## `image-valign`

- `top` - Align the top edge of the element to the top of the tallest line item.
- `bottom` - Aligns the base of the current element at the bottom of the element of the line below it all
- `middle` - The alignment of the midpoint of the element at the baseline of the parent plus half the height of the parent element
- `baseline` - Aligns the baseline of the current element to the parent's baseline
- `sub` - The element is depicted as subscript, in the form of a subscript
- `super` - The element is depicted as superscript, in the form of a superscript
- `text-top` - The top border of the element is aligned to the highest text element of the current line
- `text-bottom` - The bottom border of the element is aligned at the very bottom edge of the current line

```jsx
<Image image-valign='top' src='' alt='' />
```

## `image-mirror`

- `x` - X-axis reflection
- `y` - Y-axis reflection
- `xy` - X and Y axis reflection

```jsx
<Image image-mirror='x' src='' alt='' />
```

## `image-fit`

- `none` - Does not change its size and fills the space
- `fill` - Resizes to fill the whole area
- `contain` - Сhanges its size to fit the area
- `cover` - Сhanges its size to maintain its proportions when filling the block
- `scale-down` - Resizes by comparing the difference between `none` and` contain` to find the smallest object size

```jsx
<Image image-fit='cover' src='' alt='' />
```

## `image-width`

- `auto` - value: `auto`
- See table, for example: `3-4` = `75%`

<div class='tableHovered' data-tooltip-content='image-width'></div>

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
<Image image-width='3-4' src='' alt='' />
```

## `image-round`

The property allows you to set the fillet value for all corners of the element at the same time or to determine it only for the specified angle.

!> **DEPRECATED** props `image-round-top`, `image-round-right`, `image-round-bottom` and `image-round-left`, please use multi values

**Advanced props**

1. `image-round-top-left`
2. `image-round-top-right`
3. `image-round-bottom-right`
4. `image-round-bottom-left`

**Multi values** _(set value separated by a space)_

- `image-round="{1,3} {2,4}"`
- `image-round="{1} {2,4} {3}"`
- `image-round="{1} {2} {3} {4}"`

**List of values**

| Value  | CSS var               | CSS value |
|--------|-----------------------|-----------|
| `none` | ---                   | `0px`     |
| `full` | ---                   | `50%`     |
| `xxs`  | `--ek-image-round-xxs`  | `2px`     |
| `xs`   | `--ek-image-round-xs`   | `4px`    |
| `s`    | `--ek-image-round-s`    | `6px`    |
| `m`    | `--ek-image-round-m`    | `8px`    |
| `l`    | `--ek-image-round-l`    | `10px`    |
| `xl`   | `--ek-image-round-xl`   | `12px`    |
| `xxl`  | `--ek-image-round-xxl`  | `14px`    |
| `3xl`  | `--ek-image-round-3xl`  | `16px`    |
| `4xl`  | `--ek-image-round-4xl`  | `18px`    |
| `5xl`  | `--ek-image-round-5xl`  | `20px`    |

```jsx
<Image image-round='s' />
<Image image-round='s m' />
<Image image-round='s m l' />
<Image image-round='s m l xl' />
<Image
    image-round-top-left='s'
    image-round-top-right='m'
    image-round-bottom-right='l'
    image-round-bottom-left='xl'
/>
```

## `image-alt`

- `visible` - Visible Alt Text
- `hidden` - Hidden Alt Text

```jsx
<Image image-alt='hidden' src='' alt='' />
```

## `image-border`

> Set the `THEME_NAME` depending on the [theming][create_theme]

> Has advanced props:
> - `image-border` - `top`, `right`, `bottom` or `left` for example **`image-border-right`**
> - `image-border` - `tb` or `lr` for example **`image-border-tb`**

```jsx
<Image image-border={THEME_NAME} src='' alt='' />
```
