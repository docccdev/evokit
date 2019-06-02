[evokit]: /packages/evokit/
[css-variable]: //caniuse.com/#feat=css-variables
[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-tag-hr]: //www.w3schools.com/tags/tag_hr.asp
[postcss]: //postcss.org
[postcss-preset-env]: //preset-env.cssdb.org

[create_theme]: docs/base/theme

[line-indent]: #line-indent
[line-color]: #line-color
[line-style]: #line-style

# EvoKit - Line

[![](https://img.shields.io/npm/v/evokit-line.svg)](https://www.npmjs.com/package/evokit-line)

Horizontal line, used to separate content. Contains one element `<Line>`.

---

#### Install

> Peer dependencies [evokit]

```bash
npm install evokit-line --save
```

#### Usage

> The styles use [css-variable] and will work in all modern browsers. If you need to support more old browsers such as Interner Explorer 11 or lower, use a tool [postcss] with [postcss-preset-env] for transforming css into something most browsers can understand.

- `<Line>` has a default html tag [hr][html-tag-hr]

```jsx
import { Line } from 'evokit-line';
import 'evokit-line/style.css';

<Line />

```

#### Props

| Props | Values | Description |
|-------|--------|-------------|
| [line-indent] | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Отступ сверху и снизу |
| [line-style]  | `dotted` `dashed` | Стиль |
| [line-color]  | `${themeName}` - [Create Theme][create_theme] | Цвет |

---

##### `line-indent`

```jsx
<Line line-indent='...' />
```

##### `line-style`

```jsx
<Line line-style='...' />
```

##### `line-color`

Set the color depending on the [created theme][create_theme], used `border color` value.

```jsx
<Line line-color='...' />
```
