[evokit]: /packages/evokit/
[css-variable]: //caniuse.com/#feat=css-variables
[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-tag-span]: //www.w3schools.com/tags/tag_span.asp
[postcss]: //postcss.org
[postcss-preset-env]: //preset-env.cssdb.org

[create_theme]: docs/base/theme

[text-color]: #text-color
[text-size]: #text-size
[text-weight]: #text-weight
[text-align]: #text-align
[text-valign]: #text-valign
[text-wrap]: #text-wrap
[text-style]: #text-style
[text-transform]: #text-transform
[text-lheight]: #text-lheight

# EvoKit - Text

[![](https://img.shields.io/npm/v/evokit-text.svg)](https://www.npmjs.com/package/evokit-text)

Used for text.  Contains one element `<Text>`.

---

#### Install

> Peer dependencies [evokit]

```bash
npm install evokit-text --save
```

#### Usage

> The styles use [css-variable] and will work in all modern browsers. If you need to support more old browsers such as Interner Explorer 11 or lower, use a tool [postcss] with [postcss-preset-env] for transforming css into something most browsers can understand.

- `<Text>` has a default html tag [span][html-tag-span]

```jsx
import { Text } from 'evokit-text';
import 'evokit-text/style.css';

<Text>
    text
</Text>

```

#### Props

| props | Values | Description |
|-------|--------|-------------|
| [text-size]      | `small` `default` `big` `h1` `h2` `h3` `h4` `h5` `h6` | Размер текста |
| [text-weight]    | `default` `thin` `light` `medium` `bold` `black` | Насыщенность |
| [text-align]     | `left` `center` `right` `justify` | Горизонтальное выравнивание |
| [text-valign]    | `baseline` `bottom` `middle` `sub` `super` `text-bottom` `text-top` `top` | Вертикальное выравнивание |
| [text-wrap]      | `nowrap` `break` `ellipsis` `three-line` `two-line` | Перенос и обрезание |
| [text-style]     | `italic` `strike` `underline` `overline` | Стили (подчеркнутый/перечеркнутый) |
| [text-transform] | `none` `capitalize` `lowercase` `uppercase` | Преобразование регистра |
| [text-lheight]   | `default` `medium` `large` | Межстрочный интервал |
| [text-color]     | `${themeName}` - [Create Theme][create_theme] | Цвет текста |

---

### `text-size`

```jsx
<Text text-size='...'></Text>
```

### `text-weight`

```jsx
<Text text-weight='...'></Text>
```

### `text-align`

```jsx
<Text text-align='...'></Text>
```

### `text-valign`

```jsx
<Text text-valign='...'></Text>
```

### `text-wrap`

```jsx
<Text text-wrap='...'></Text>
```

### `text-style`

```jsx
<Text text-style='...'></Text>
```

### `text-transform`

```jsx
<Text text-transform='...'></Text>
```

### `text-lheight`

```jsx
<Text text-lheight='...'></Text>
```

### `text-color`

Set the color depending on the [created theme][create_theme], used `text color` value.

```jsx
<Text text-color='...'></Text>
```
