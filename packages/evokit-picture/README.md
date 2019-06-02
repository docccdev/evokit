[evokit]: /packages/evokit/
[css-variable]: //caniuse.com/#feat=css-variables
[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-tag-div]: //www.w3schools.com/tags/tag_div.asp
[html-tag-img]: //www.w3schools.com/tags/tag_img.asp
[postcss]: //postcss.org
[postcss-preset-env]: //preset-env.cssdb.org

[picture-fit]: #picture-fit
[picture-round]: #picture-round

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

- `<Picture>` has a default html tag [div][html-tag-div]
- `<Picture.Item>` has a default html tag [img][html-tag-img]

```jsx
import { Picture } from 'evokit-picture';
import 'evokit-picture/style.css';

<Picture>
    <Picture.Item src={imageSrc} alt='' />
</Picture>

```

#### Picture

| Props | Values | Description |
|-------|--------|-------------|
| [picture-fit]   | `none` `fill` `contain` `cover` `scale-down` | Filling the container relative to its height and width |
| [picture-round] | `none` `full` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Corner rounding |

---

##### `picture-fit`

- `none` - Does not change its size and fills the space
- `fill` - Resizes to fill the whole area
- `contain` - Сhanges its size to fit the area
- `cover` - Сhanges its size to maintain its proportions when filling the block
- `scale-down` - Resizes by comparing the difference between `none` and` contain` to find the smallest object size

```jsx
<Picture picture-fit='cover'>
    <Picture.Item src={imageSrc} alt='' />
</Picture>
```

##### `picture-round`

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
<Picture picture-round='full'>
    <Picture.Item src={imageSrc} alt='' />
</Picture>
```
