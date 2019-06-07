[evokit]: /packages/evokit/
[css-variable]: //caniuse.com/#feat=css-variables
[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-tag-picture]: //www.w3schools.com/tags/tag_picture.asp
[html-tag-img]: //www.w3schools.com/tags/tag_img.asp
[postcss]: //postcss.org
[postcss-preset-env]: //preset-env.cssdb.org

[base_props]: docs/base/props
[create_theme]: docs/base/theme

[picture-fit]: #picture-fit
[picture-round]: #picture-round
[picture-border]: #picture-border

# EvoKit - Picture

[![](https://img.shields.io/npm/v/evokit-picture.svg)](https://www.npmjs.com/package/evokit-picture)

Creates a square with an image. Contains two elements `<Picture>` and `<Picture.Item>`.

---

#### Install

> Peer dependencies [evokit]

```bash
npm install evokit-picture --save
```

#### Usage

> The styles use [css-variable] and will work in all modern browsers. If you need to support more old browsers such as Interner Explorer 11 or lower, use a tool [postcss] with [postcss-preset-env] for transforming css into something most browsers can understand.

- `<Picture>` has a default html tag [picture][html-tag-picture]
- `<Picture.Item>` has a default html tag [img][html-tag-img]

```jsx
import { Picture } from 'evokit-picture';
import 'evokit-picture/style.css';

<Picture>
    <Picture.Item src='' alt='' />
</Picture>

```

[![Edit picture-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/pictureusage-q6brs?fontsize=14 ':include :type=iframe width=100% height=500px')

#### Props

Also have [base props][base_props]

| Props | Values | Description |
|-------|--------|-------------|
| [picture-fit]    | `none` `fill` `contain` `cover` `scale-down` | Filling the container relative to its height and width |
| [picture-round]  | `none` `full` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Corner rounding |
| [picture-border] | `{THEME_NAME}` | Border color - [Create Theme][create_theme] |

#### Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
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

---

##### `picture-fit`

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

##### `picture-round`

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
    <Picture.Item src='' alt='' />
</Picture>
```

##### `picture-border`

> Set the border color depending on the [created theme][create_theme], used `border color` value.

```jsx
<Picture picture-border={THEME_NAME}>
    <Picture.Item src='' alt='' />
</Picture>
```
