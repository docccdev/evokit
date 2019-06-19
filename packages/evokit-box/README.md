[evokit]: /packages/evokit/
[css-variable]: //caniuse.com/#feat=css-variables
[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-tag-div]: //www.w3schools.com/tags/tag_div.asp
[postcss]: //postcss.org
[postcss-preset-env]: //preset-env.cssdb.org

[base_props]: docs/base/props
[create_theme]: docs/base/theme

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

The content block allows to apply indents, position and more. Contains one element `<Box>`.

---

#### Install

> Peer dependencies [evokit]

```bash
npm install evokit-box --save
```

#### Usage

> The styles use [css-variable] and will work in all modern browsers. If you need to support more old browsers such as Interner Explorer 11 or lower, use a tool [postcss] with [postcss-preset-env] for transforming css into something most browsers can understand.

- `<Box>` has a default html tag [div][html-tag-div]

```jsx
import { Box } from 'evokit-Box';
import 'evokit-box/style.css';

<Box>
    ...
</Box>
```

[![Edit box-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/boxusage-3r9iy?fontsize=14 ':include :type=iframe width=100% height=500px')

#### Props

Also have [additioanl props][base_props]

| Props | Values | Description |
|-------|--------|-------------|
| [box-margin]     | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` `auto` | Indent around block |
| [box-padding]    | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Indent around an block content |
| [box-round]      | `none` `full` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Corner rounding |
| [box-width]      | `auto` `1-1` `*-2` `*-3` `*-4` `*-5` `*-6` `*-7` `*-8` `*-9` `*-10` | Set the width |
| [box-height]     | `auto` `1-1` | Set the height |
| [box-display]    | `none` `inline` `inline-block` `block` | Display type |
| [box-position]   | `static` `relative` `absolute` `fixed` | Positioning method |
| [box-place]      | `top` `top-left` `top-right` `center` `center-left` `center-right` `bottom` `bottom-left` `bottom-right` | Position |
| [box-overflow]   | `auto` `hidden` `scroll` `visible` | Display overflow block content |
| [box-border]     | `{THEME_NAME}` | Border color - [Create Theme][create_theme] |
| [box-background] | `{THEME_NAME}` | Background color - [Create Theme][create_theme] |

#### Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
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

---

##### `box-margin`

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

##### `box-padding`

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

##### `box-round`

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

##### `box-width`

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

##### `box-height`

- `auto` - value: `auto`
- `1-1` - value: `100%`

```jsx
<Box box-height='1-1'>
    ...
</Box>
```

##### `box-display`

```jsx
<Box box-display='none'>
    ...
</Box>
```

##### `box-position`

```jsx
<Box box-position='absolute'>
    ...
</Box>
```

##### `box-place`

```jsx
<Box box-position='absolute' box-place='center'>
    ...
</Box>
```

##### `box-overflow`

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

##### `box-border`

> Set the border color depending on the [created theme][create_theme], used `border color` value.

```jsx
<Box box-border={THEME_NAME}>
    ...
</Box>
```

##### `box-background`

> Set the background color depending on the [created theme][create_theme], used `background color` value.

```jsx
<Box box-background={THEME_NAME}>
    ...
</Box>
```
