[evokit]: /packages/evokit/
[css-variable]: //caniuse.com/#feat=css-variables
[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-tag-a]: //www.w3schools.com/tags/tag_a.asp
[postcss]: //postcss.org
[postcss-preset-env]: //preset-env.cssdb.org

[create_theme]: docs/base/theme

[link-color]: #link-color
[link-size]: #link-size
[link-weight]: #link-weight
[link-valign]: #link-valign
[link-style]: #link-style
[link-lheight]: #link-lheight

# EvoKit - Link

[![](https://img.shields.io/npm/v/evokit-link.svg)](https://www.npmjs.com/package/evokit-link)

Used to create links. Contains one element `<Link>`.

---

#### Install

> Peer dependencies [evokit]

```bash
npm install evokit-link --save
```

#### Usage

> The styles use [css-variable] and will work in all modern browsers. If you need to support more old browsers such as Interner Explorer 11 or lower, use a tool [postcss] with [postcss-preset-env] for transforming css into something most browsers can understand.

- `<Link>` has a default html tag [a][html-tag-a]

```jsx
import { Link } from 'evokit-link';
import 'evokit-link/style.css';

<Link href='#'>
    text
</Link>

```

#### Props

| Props | Values | Description |
|-------|--------|-------------|
| [link-size]    | `small` `default` `big` `h1` `h2` `h3` `h4` `h5` `h6` | Размер |
| [link-weight]  | `default` `thin` `light` `medium` `bold` `black` | Насыщенность |
| [link-valign]  | `baseline` `bottom` `middle` `sub` `super` `text-bottom` `text-top` `top` | Вертикальное выравнивание |
| [link-style]   | `italic` `strike` `underline` `overline` | Стили |
| [link-lheight] | `default` `medium` `large` | Межстрочный интервал |
| [link-color]   | `${themeName}` - [Create Theme][create_theme] | Цвет |

---

##### `link-size`

```jsx
<Link href='' link-size='...'></Link>
```

##### `link-weight`

```jsx
<Link href='' link-weight='...'></Link>
```

##### `link-valign`

```jsx
<Link href='' link-valign='...'></Link>
```

##### `link-style`

```jsx
<Link href='' link-style='...'></Link>
```

##### `link-lheight`

```jsx
<Link href='' link-lheight='...'></Link>
```

##### `link-color`

Set the color depending on the [created theme][create_theme], used `text color` value.

```jsx
<Link href='#' link-color='...'></Link>
```
