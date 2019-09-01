[evokit]: /packages/evokit/
[CHANGELOG]: /packages/evokit-picture/CHANGELOG.md

[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-all-tags]: //www.w3schools.com/tags/default.asp

[create_theme]: /docs/base/theme.md
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/getting-started/props.md

[picture-tag]: #picture-tag
[picture-item-tag]: #picture-item-tag
[picture-fit]: #picture-fit
[picture-round]: #picture-round
[picture-border]: #picture-border

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

> More about [usage][quik-start]

```jsx
import { Picture, PictureItem } from 'evokit-picture';
import 'evokit-picture/style.css';

<Picture>
    <PictureItem src='' alt='' />
</Picture>

```

## Props

> Also supports other valid props of the React Element. More about [use props][use-props]

### `<Picture />`

| Prop name       | Default value | Possible value | Description |
|-----------------|---------------|----------------|-------------|
| [picture-tag]   | `picture`     | [html tags][html-all-tags] | HTML tag    |
| [picture-fit]   | `null`        | `none` `fill` `contain` `cover` `scale-down`    | Filling the container relative to its height and width |
| [picture-round] | `none`        | `none` `full` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Corner rounding |

> Use [theming][create_theme] for creating custom `{THEME_NAME}`.

| Prop name        | Default value  | Possible value | Description  |
|------------------|----------------|----------------|--------------|
| [picture-border] | `null`         | `{THEME_NAME}` | Border color |

### `<PictureItem />`

| Prop name          | Default value | Possible value             | Description |
|--------------------|---------------|----------------------------|-------------|
| [picture-item-tag] | `img`         | [html tags][html-all-tags] | HTML tag    |

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

## `picture-item-tag`

- Default value `img`

```jsx
<Picture>
    <PictureItem picture-item-tag='img' src='' alt='' />
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

> Has advanced props:
> - `picture-round` - `top`, `right`, `bottom` or `left` for example **`picture-round-right`**
> - `picture-round-top` - `left` or `right` for example **`picture-round-top-right`**
> - `picture-round-bottom` - `left` or `right` for example **`picture-round-bottom-right`**

- `none` - value: `0px`
- `full` - value: `50%`
- `xxs` - css variable `--ek-picture-round-xxs`, default value: `2px`
- `xs` - css variable `--ek-picture-round-xs`, default value: `4px`
- `s` - css variable `--ek-picture-round-s`, default value: `6px`
- `m` - css variable `--ek-picture-round-m`, default value: `8px`
- `l` - css variable `--ek-picture-round-l`, default value: `10px`
- `xl` - css variable `--ek-picture-round-xl`, default value: `12px`
- `xxl` - css variable `--ek-picture-round-xxl`, default value: `14px`

```jsx
<Picture picture-round='full'>
    <PictureItem src='' alt='' />
</Picture>
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
