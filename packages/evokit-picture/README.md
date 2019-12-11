[evokit]: /packages/evokit/
[CHANGELOG]: /packages/evokit-picture/CHANGELOG.md

[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-all-tags]: //www.w3schools.com/tags/default.asp

[create_theme]: /docs/base/theme.md
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/getting-started/props.md

[picture-background]: #picture-background
[picture-border]: #picture-border
[picture-border-color]: #picture-border-color
[picture-border-width]: #picture-border-width
[picture-border-style]: #picture-border-style
[picture-display]: #picture-display
[picture-fit]: #picture-fit
[picture-item-display]: #picture-item-display
[picture-round]: #picture-round

# EvoKit - Picture

[![](https://img.shields.io/npm/v/evokit-picture.svg)](https://www.npmjs.com/package/evokit-picture)
[![](https://img.shields.io/badge/page-CHANGELOG-42b983)][CHANGELOG]

Creates a square with an image. Contains two elements `<Picture>` and `<Picture.Item>`

---

## Install

> Peer dependencies [evokit]. More about [install][installation]

```bash
npm install evokit-picture --save
```

## Usage

> More about [usage][quik-start]. You can also import and use `PictureItem` instead of `Picture.Item`

```jsx
import React from 'react';
import { Picture, PictureItem } from 'evokit-picture';
import 'evokit-picture/style.css';

const App = () => (
    <Picture picture-round='full'>
        <Picture.Item src='...' alt='...' />
    </Picture>
);
```

## Props

> Also supports other valid props of the React Element. More about [use props][use-props]

### `<Picture />`

| Prop name                  | Default value | Possible value | Description  |
|----------------------------|---------------|----------------|--------------|
| [picture-background]       | `null`        | [Create theme][create_theme]  | Background color |
| [picture-border] `*`       | `null`        | [Create theme][create_theme]  | Border color, width and style     |
| [picture-border-color] `*` | `null`        | [Create theme][create_theme]  | Border color     |
| [picture-border-width] `*` | `none`        | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` `3xl` `4xl` `5xl`  | Border width     |
| [picture-border-style] `*` | `solid`       | `solid` `dotted` `dashed`  | Border style     |
| [picture-display]          | `block`       | `block` `none` | Display type |
| [picture-fit]              | `null`        | `none` `fill` `contain` `cover` `scale-down`    | Filling the container relative to its height and width |
| [picture-round] `*`        | `none`        | `none` `full` `xxs` `xs` `s` `m` `l` `xl` `xxl` `3xl` `4xl` `5xl` | Corner rounding |

### `<Picture.Item />`

| Prop name                | Default value | Possible value             | Description  |
|--------------------------|---------------|----------------------------|--------------|
| [picture-item-display]   | `block`       | `block` `none`             | Display type |


> `*` — prop has advanced params

## Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
@custom-media --ek-picture-media-small only screen and (min-width: 480px);
@custom-media --ek-picture-media-medium only screen and (min-width: 768px);
@custom-media --ek-picture-media-large only screen and (min-width: 960px);
@custom-media --ek-picture-media-wide only screen and (min-width: 1200px);
@custom-media --ek-picture-media-huge only screen and (min-width: 1400px);

:root {
    /* prop 'picture-round' */
    --ek-picture-round-xxs: 2px;
    --ek-picture-round-xs: 4px;
    --ek-picture-round-s: 6px;
    --ek-picture-round-m: 8px;
    --ek-picture-round-l: 10px;
    --ek-picture-round-xl: 12px;
    --ek-picture-round-xxl: 14px;
    --ek-picture-round-3xl: 16px;
    --ek-picture-round-4xl: 18px;
    --ek-picture-round-5xl: 20px;
    /* prop 'picture-border-width */
    --ek-picture-border-width-xxs: 1px;
    --ek-picture-border-width-xs: 2px;
    --ek-picture-border-width-s: 3px;
    --ek-picture-border-width-m: 4px;
    --ek-picture-border-width-l: 5px;
    --ek-picture-border-width-xl: 6px;
    --ek-picture-border-width-xxl: 7px;
    --ek-picture-border-width-3xl: 8px;
    --ek-picture-border-width-4xl: 9px;
    --ek-picture-border-width-5xl: 10px;
}
```

## Live demo

[![Edit picture-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/pictureusage-q6brs?fontsize=14&runonclick=0 ':include :type=iframe width=100% height=500px')

---


## `picture-display`

- `block` - shown as blocky (default)
- `none` - remove block from document

```jsx
<Picture picture-display='none'>
    <Picture.Item src='' alt='' />
</Picture>
```


## `picture-fit`

- `none` - Does not change its size and fills the space
- `fill` - Resizes to fill the whole area
- `contain` - Сhanges its size to fit the area
- `cover` - Сhanges its size to maintain its proportions when filling the block
- `scale-down` - Resizes by comparing the difference between `none` and` contain` to find the smallest object size

```jsx
<Picture picture-fit='cover'>
    <Picture.Item src='' alt='' />
</Picture>
```


## `picture-round`

The property allows you to set the fillet value for all corners of the element at the same time or to determine it only for the specified angle.

!> **DEPRECATED** props `picture-round-top`, `picture-round-right`, `picture-round-bottom` and `picture-round-left`, please use multi values

**Advanced props**

1. `picture-round-top-left`
2. `picture-round-top-right`
3. `picture-round-bottom-right`
4. `picture-round-bottom-left`

**Multi values** _(set value separated by a space)_

- `picture-round="{1,3} {2,4}"`
- `picture-round="{1} {2,4} {3}"`
- `picture-round="{1} {2} {3} {4}"`

**List of values**

| Value  | CSS var               | CSS value |
|--------|-----------------------|-----------|
| `none` | ---                   | `0px`     |
| `full` | ---                   | `50%`     |
| `xxs`  | `--ek-picture-round-xxs`  | `2px`     |
| `xs`   | `--ek-picture-round-xs`   | `4px`    |
| `s`    | `--ek-picture-round-s`    | `6px`    |
| `m`    | `--ek-picture-round-m`    | `8px`    |
| `l`    | `--ek-picture-round-l`    | `10px`    |
| `xl`   | `--ek-picture-round-xl`   | `12px`    |
| `xxl`  | `--ek-picture-round-xxl`  | `14px`    |

```jsx
<Picture picture-round='s' />
<Picture picture-round='s m' />
<Picture picture-round='s m l' />
<Picture picture-round='s m l xl' />
<Picture
    picture-round-top-left='s'
    picture-round-top-right='m'
    picture-round-bottom-right='l'
    picture-round-bottom-left='xl'
/>
```


## `picture-border`

!> **DEPRECATED** props `picture-border-lr` and `picture-border-tb`, please use the separately `picture-border-left` and `picture-border-right` or `picture-border-top` and `picture-border-bottom`

**Advanced props**

- `picture-border-top`
- `picture-border-right`
- `picture-border-bottom`
- `picture-border-left`

**Multi values** _(set value separated by a space)_

- `picture-border="{1}"`
- `picture-border="{1} {2}"`
- `picture-border="{1} {2} {3}"`

> {1} - [color][picture-border-color], {2} - [width][picture-border-width], {3} - [style][picture-border-style]

```jsx
<Picture picture-border="{THEME_NAME}" />
<Picture picture-border="{THEME_NAME} xs" />
<Picture picture-border="{THEME_NAME} xs dotted" />

<Picture picture-border-top="{THEME_NAME}" />
<Picture picture-border-top="{THEME_NAME} xs" />
<Picture picture-border-top="{THEME_NAME} xs dotted" />
```

> Set the `THEME_NAME` depending on the [theming][create_theme]


## `picture-border-color`

The property allows you to set the border color for all sides of an element at once or to determine it only for specified sides.

**Advanced props**

- `picture-border-color-top` <sup>{1}</sup>
- `picture-border-color-right` <sup>{2}</sup>
- `picture-border-color-bottom` <sup>{3}</sup>
- `picture-border-color-left` <sup>{4}</sup>

**Multi values** _(set value separated by a space)_

- `picture-border-color="{1,3} {2,4}"`
- `picture-border-color="{1} {2,4} {3}"`
- `picture-border-color="{1} {2} {3} {4}"`

```jsx
<Picture picture-border-color='{THEME_NAME}' />
<Picture picture-border-color='{THEME_NAME} {THEME_NAME}' />
<Picture picture-border-color='{THEME_NAME} {THEME_NAME} {THEME_NAME}' />
<Picture picture-border-color='{THEME_NAME} {THEME_NAME} {THEME_NAME} {THEME_NAME}' />
<Picture
    picture-border-color-top='{THEME_NAME}'
    picture-border-color-right='{THEME_NAME}'
    picture-border-color-bottom='{THEME_NAME}'
    picture-border-color-left='{THEME_NAME}'
/>
```
> Set the `THEME_NAME` depending on the [theming][create_theme]


## `picture-border-width`

The property allows you to set the border width for all sides of an element at once or to determine it only for specified sides.

**Advanced props**

- `picture-border-width-top` <sup>{1}</sup>
- `picture-border-width-right` <sup>{2}</sup>
- `picture-border-width-bottom` <sup>{3}</sup>
- `picture-border-width-left` <sup>{4}</sup>

**Multi values** _(set value separated by a space)_

- `picture-border-width="{1,3} {2,4}"`
- `picture-border-width="{1} {2,4} {3}"`
- `picture-border-width="{1} {2} {3} {4}"`

**List of values**

| Value  | CSS var                      | CSS value |
|--------|------------------------------|-----------|
| `none` | ---                          | `0px`     |
| `xxs`  | `--ek-picture-border-width-xxs`  | `1px`     |
| `xs`   | `--ek-picture-border-width-xs`   | `2px`     |
| `s`    | `--ek-picture-border-width-s`    | `3px`     |
| `m`    | `--ek-picture-border-width-m`    | `4px`     |
| `l`    | `--ek-picture-border-width-l`    | `5px`     |
| `xl`   | `--ek-picture-border-width-xl`   | `6px`     |
| `xxl`  | `--ek-picture-border-width-xxl`  | `7px`     |
| `3xl`  | `--ek-picture-border-width-3xl`  | `8px`    |
| `4xl`  | `--ek-picture-border-width-4xl`  | `9px`    |
| `5xl`  | `--ek-picture-border-width-5xl`  | `10px`    |

```jsx
<Picture picture-border-width='s' />
<Picture picture-border-width='s m' />
<Picture picture-border-width='s m l' />
<Picture picture-border-width='s m l xl' />
<Picture
    picture-border-width-top='s'
    picture-border-width-right='m'
    picture-border-width-bottom='l'
    picture-border-width-left='xl'
/>
```


## `picture-border-style`

The property allows you to set the border style for all sides of an element at once or to determine it only for specified sides.

**Advanced props**

- `picture-border-style-top` <sup>{1}</sup>
- `picture-border-style-right` <sup>{2}</sup>
- `picture-border-style-bottom` <sup>{3}</sup>
- `picture-border-style-left` <sup>{4}</sup>

**Multi values** _(set value separated by a space)_

- `picture-border-style="{1,3} {2,4}"`
- `picture-border-style="{1} {2,4} {3}"`
- `picture-border-style="{1} {2} {3} {4}"`

**Values**

- `solid` - solid style _(default)_
- `dotted` - dotted style
- `dashed` - dashed style

```jsx
<Picture picture-border-style='solid' />
<Picture picture-border-style='solid dotted' />
<Picture picture-border-style='solid dotted dashed' />
<Picture picture-border-style='solid dotted dashed solid' />
<Picture
    picture-border-style-top='solid'
    picture-border-style-right='dotted'
    picture-border-style-bottom='dashed'
    picture-border-style-left='solid'
/>
```


## `picture-background`

```jsx
<Picture picture-background='{THEME_NAME}'>
    ...
</Picture>
```
> Set the `THEME_NAME` depending on the [theming][create_theme]


## `picture-item-display`

- `block` - shown as blocky (default)
- `none` - remove block from document

```jsx
<Picture>
    <Picture.Item picture-item-display='none' src='' alt='' />
</Picture>
```
