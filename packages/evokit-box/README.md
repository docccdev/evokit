[evokit]: /packages/evokit/
[CHANGELOG]: /packages/evokit-box/CHANGELOG.md

[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-all-tags]: //www.w3schools.com/tags/default.asp

[create_theme]: /docs/base/theme.md
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/getting-started/props.md

[box-tag]: #box-tag

[box-align]: #box-align
[box-margin]: #box-margin
[box-padding]: #box-padding
[box-round]: #box-round
[box-width]: #box-width
[box-height]: #box-height
[box-display]: #box-display
[box-position]: #box-position
[box-place]: #box-place
[box-overflow]: #box-overflow

[box-background]: #box-background
[box-border]: #box-border

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
import { Box } from 'evokit-box';
import 'evokit-box/style.css';

<Box>
    ...
</Box>
```

## Props

> Also supports other valid props of the React Element. More about [use props][use-props]

### `<Box />`

| Prop name        | Default value | Possible value | Description |
|------------------|---------------|----------------|-------------|
| [box-tag]        | `div`         | [html tags][html-all-tags] | HTML tag    |
| [box-display]    | `block`       | `block` `inline-block` `inline` `none` | Display type |
| [box-align]      | `none`        | `none` `left` `center` `right` | Horizontal alignment |
| [box-margin]     | `none`        | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` `auto` | Indent around block |
| [box-padding]    | `none`        | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Indent around an block content |
| [box-round]      | `none`        | `none` `full` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Corner rounding |
| [box-width]      | `auto`        | `auto` `1-1` `*-2` `*-3` `*-4` `*-5` `*-6` `*-7` `*-8` `*-9` `*-10` | Set the width |
| [box-height]     | `auto`        | `auto` `1-1` | Set the height |
| [box-position]   | `static`      | `static` `relative` `absolute` `fixed` | Positioning method |
| [box-place]      | `null`        | `top` `top-left` `top-right` `center` `center-left` `center-right` `bottom` `bottom-left` `bottom-right` | Position place |
| [box-overflow]   | `scroll`      | `auto` `hidden` `scroll` `visible` | Display overflow block content |

> Use [theming][create_theme] for creating custom `{THEME_NAME}`.

| Prop name        | Default value | Possible value | Description       |
|------------------|---------------|-----------------|------------------|
| [box-border]     | `null`        | `{THEME_NAME}`  | Border color     |
| [box-background] | `null`        | `{THEME_NAME}`  | Background color |

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

[![Edit box-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/boxusage-3r9iy?fontsize=14 ':include :type=iframe width=100% height=500px')

---

## `box-tag`

Default value `div`

```jsx
<Box box-tag='div'>
    ...
</Box>
```

## `box-display`

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

> Has advanced props:
> - `box-margin` - `top`, `right`, `bottom` or `left` for example **`box-margin-right`**
> - `box-margin` - `lr` or `tb` for example **`box-margin-tb`**

- `none` - value: `0px`
- `auto` - value: `auto`
- `xxs` - css variable `--ek-box-indent-xxs`, default value: `5px`
- `xs` - css variable `--ek-box-indent-xs`, default value: `10px`
- `s` - css variable `--ek-box-indent-s`, default value: `15px`
- `m` - css variable `--ek-box-indent-m`, default value: `20px`
- `l` - css variable `--ek-box-indent-l`, default value: `25px`
- `xl` - css variable `--ek-box-indent-xl`, default value: `30px`
- `xxl` - css variable `--ek-box-indent-xxl`, default value: `35px`

```jsx
<Box box-margin='xs'>
    ...
</Box>
```

## `box-padding`

> Has advanced props:
> - `box-padding` - `top`, `right`, `bottom` or `left` for example **`box-padding-right`**
> - `box-padding` - `lr` or `tb` for example **`box-padding-tb`**

- `none` - value: `0px`
- `xxs` - css variable `--ek-box-indent-xxs`, default value: `5px`
- `xs` - css variable `--ek-box-indent-xs`, default value: `10px`
- `s` - css variable `--ek-box-indent-s`, default value: `15px`
- `m` - css variable `--ek-box-indent-m`, default value: `20px`
- `l` - css variable `--ek-box-indent-l`, default value: `25px`
- `xl` - css variable `--ek-box-indent-xl`, default value: `30px`
- `xxl` - css variable `--ek-box-indent-xxl`, default value: `35px`

```jsx
<Box box-padding='xl'>
    ...
</Box>
```

## `box-round`

> Has advanced props:
> - `box-round` - `top`, `right`, `bottom` or `left` for example **`box-round-right`**
> - `box-round-top` - `left` or `right` for example **`box-round-top-right`**
> - `box-round-bottom` - `left` or `right` for example **`box-round-bottom-right`**

- `none` - value: `0px`
- `full` - value: `50%`
- `xxs` - css variable `--ek-box-round-xxs`, default value: `2px`
- `xs` - css variable `--ek-box-round-xs`, default value: `4px`
- `s` - css variable `--ek-box-round-s`, default value: `6px`
- `m` - css variable `--ek-box-round-m`, default value: `8px`
- `l` - css variable `--ek-box-round-l`, default value: `10px`
- `xl` - css variable `--ek-box-round-xl`, default value: `12px`
- `xxl` - css variable `--ek-box-round-xxl`, default value: `14px`

```jsx
<Box box-round='full'>
    ...
</Box>
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

> Has advanced props:
> - `box-overflow-x` and `box-overflow-y`

- `auto` - Scroll bars are added only when needed
- `hidden` - Only the area inside the element is displayed, the rest will be hidden
- `scroll` - Scroll bars are always added
- `visible` - The entire content of the element is displayed, even beyond the specified height and width

```jsx
<Box box-overflow='scroll'>
    ...
</Box>
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
