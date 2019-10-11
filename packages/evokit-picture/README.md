[evokit]: /packages/evokit/
[CHANGELOG]: /packages/evokit-picture/CHANGELOG.md

[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-all-tags]: //www.w3schools.com/tags/default.asp

[create_theme]: /docs/base/theme.md
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/getting-started/props.md

[picture-border]: #picture-border
[picture-display]: #picture-display
[picture-fit]: #picture-fit
[picture-item-display]: #picture-item-display
[picture-item-tag]: #picture-item-tag
[picture-round]: #picture-round
[picture-tag]: #picture-tag

# EvoKit - Picture

[![](https://img.shields.io/npm/v/evokit-picture.svg)](https://www.npmjs.com/package/evokit-picture)
[![](https://img.shields.io/badge/page-CHANGELOG-42b983)][CHANGELOG]

Creates a square with an image. Contains two elements `<Picture>` and `<PictureItem>`

---

## Install

> Peer dependencies [evokit]. More about [install][installation]

```bash
npm install evokit-picture --save
```

## Usage

> More about [usage][quik-start]. You can also use `<Picture.Item>` instead of `<PictureItem>`

```jsx
import React from 'react';
import { Picture, PictureItem } from 'evokit-picture';
import 'evokit-picture/style.css';

const App = () => (
    <Picture picture-round='full'>
        <PictureItem src='...' alt='...' />
    </Picture>
);
```

## Props

> Also supports other valid props of the React Element. More about [use props][use-props]

### `<Picture />`

| Prop name           | Default value | Possible value | Description  |
|---------------------|---------------|----------------|--------------|
| [picture-border]    | `null`        | [Create theme][create_theme]  | Border color |
| [picture-display]   | `block`       | `block` `none` | Display type |
| [picture-fit]       | `null`        | `none` `fill` `contain` `cover` `scale-down`    | Filling the container relative to its height and width |
| [picture-round] `*` | `none`        | `none` `full` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Corner rounding |
| [picture-tag]       | `picture`     | [HTML tags][html-all-tags] | HTML tag    |

### `<PictureItem />`

| Prop name                | Default value | Possible value             | Description  |
|--------------------------|---------------|----------------------------|--------------|
| [picture-item-display]   | `block`       | `block` `none`             | Display type |
| [picture-item-tag]       | `img`         | [HTML tags][html-all-tags] | HTML tag     |


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
}
```

## Live demo

[![Edit picture-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/pictureusage-q6brs?fontsize=14&runonclick=0 ':include :type=iframe width=100% height=500px')

---

## `picture-tag`

- Default value `picture`

```jsx
<Picture picture-tag='picture'>
    ...
</Picture>
```

## `picture-display`

- `block` - shown as blocky (default)
- `none` - remove block from document

```jsx
<Picture picture-display='none'>
    <PictureItem src='' alt='' />
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
    <PictureItem src='' alt='' />
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

> Set the `THEME_NAME` depending on the [theming][create_theme]

> Has advanced props:
> - `picture-border` - `top`, `right`, `bottom` or `left` for example **`picture-border-right`**
> - `picture-border` - `tb` or `lr` for example **`picture-border-tb`**

```jsx
<Picture picture-border={THEME_NAME}>
    <PictureItem src='' alt='' />
</Picture>
```

## `picture-item-tag`

- Default value `img`

```jsx
<Picture>
    <PictureItem picture-item-tag='img' src='' alt='' />
</Picture>
```

## `picture-item-display`

- `block` - shown as blocky (default)
- `none` - remove block from document

```jsx
<Picture>
    <PictureItem picture-item-display='none' src='' alt='' />
</Picture>
```
