[evokit]: /packages/evokit/
[css-variable]: //caniuse.com/#feat=css-variables
[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-all-tags]: //www.w3schools.com/tags/default.asp
[postcss]: //postcss.org
[postcss-preset-env]: //preset-env.cssdb.org

[create_theme]: docs/base/theme

[image-tag]: #image-tag
[image-align]: #image-align
[image-valign]: #image-valign
[image-mirror]: #image-mirror
[image-fit]: #image-fit
[image-width]: #image-width
[image-round]: #image-round
[image-border]: #image-border

[base-props]: #base-props
[main-props]: #main-props
[color-props]: #color-props

# EvoKit - Image

[![](https://img.shields.io/npm/v/evokit-image.svg)](https://www.npmjs.com/package/evokit-image)

Used to display the image. Contains one element `<Image>`

---

#### Install

> Peer dependencies [evokit]

```bash
npm install evokit-image --save
```

#### Usage

> The styles use [css-variable] and will work in all modern browsers. If you need to support more old browsers such as Interner Explorer 11 or lower, use a tool [postcss] with [postcss-preset-env] for transforming css into something most browsers can understand.

```jsx
import { Image } from 'evokit-image';
import 'evokit-image/style.css';

<Image src='' alt='' />

```

#### Props

> Also supports other valid props of the React Element

###### [Base][base-props]

| Prop name   | Default value | Possible value             | Description |
|-------------|---------------|----------------------------|-------------|
| [image-tag] | `img`         | [html tags][html-all-tags] | HTML tag    |

###### [Main][main-props]

| Prop name      | Default value | Possible value          | Description      |
|----------------|---------------|-------------------------|------------------|
| [image-align]  | `null`        | `left` `center` `right` | Horizontal alignment |
| [image-valign] | `null`        | `baseline` `bottom` `middle` `sub` `super` `text-bottom` `text-top` `top` | Vertical alignment |
| [image-mirror] | `null`        | `x` `y` `xy` | Mirroring |
| [image-fit]    | `null`        | `none` `fill` `contain` `cover` `scale-down` | Filling the container relative to its height and width |
| [image-width]  | `auto`        | `auto` `1-1` `*-2` `*-3` `*-4` `*-5` `*-6` `*-7` `*-8` `*-9` `*-10` | Set the width |
| [image-round]  | `none`        | `none` `full` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Corner rounding |

###### [Color][color-props]

> Use [theming][create_theme] for creating custom colors.

| Prop name        | Default value | Possible value | Description  |
|------------------|---------------|----------------|--------------|
| [image-border]   | `null`        | `{THEME_NAME}` | Border color |

#### Customize

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
}
```

#### Live demo

[![Edit image-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/imageusage-7qyol?fontsize=14 ':include :type=iframe width=100% height=500px')

---

#### Base props

##### `image-tag`

- Default value `img`

```jsx
<Image image-tag='img' src='' alt='' />
```


#### Main props

##### `image-align`

- `left` - Align the image to the left
- `center` - Center alignment
- `right` - Align the image to the right

```jsx
<Image image-align='center' src='' alt='' />
```

##### `image-valign`

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

##### `image-mirror`

- `x` - X-axis reflection
- `y` - Y-axis reflection
- `xy` - X and Y axis reflection

```jsx
<Image image-mirror='x' src='' alt='' />
```

##### `image-fit`

- `none` - Does not change its size and fills the space
- `fill` - Resizes to fill the whole area
- `contain` - Сhanges its size to fit the area
- `cover` - Сhanges its size to maintain its proportions when filling the block
- `scale-down` - Resizes by comparing the difference between `none` and` contain` to find the smallest object size

```jsx
<Image image-fit='cover' src='' alt='' />
```

##### `image-width`

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
<Image image-width='3-4' src='' alt='' />
```

##### `image-round`

> Has advanced props:
> - `image-round` - `top`, `right`, `bottom` or `left` for example **`image-round-right`**
> - `image-round-top` - `left` or `right` for example **`image-round-top-right`**
> - `image-round-bottom` - `left` or `right` for example **`image-round-bottom-right`**

- `none` - value: `0px`
- `full` - value: `50%`
- `xxs` - css variable `--ek-image-round-xxs`, default value: `2px`
- `xs` - css variable `--ek-image-round-xs`, default value: `4px`
- `s` - css variable `--ek-image-round-s`, default value: `6px`
- `m` - css variable `--ek-image-round-m`, default value: `8px`
- `l` - css variable `--ek-image-round-l`, default value: `10px`
- `xl` - css variable `--ek-image-round-xl`, default value: `12px`
- `xxl` - css variable `--ek-image-round-xxl`, default value: `14px`

```jsx
<Image image-round='full' src='' alt='' />
```


#### Color props

> Set the THEME NAME depending on the [theming][create_theme]

##### `image-border`

> Has advanced props:
> - `image-border` - `top`, `right`, `bottom` or `left` for example **`image-border-right`**
> - `image-border` - `tb` or `lr` for example **`image-border-tb`**

```jsx
<Image image-border={THEME_NAME} src='' alt='' />
```
