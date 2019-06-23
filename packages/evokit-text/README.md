[evokit]: /packages/evokit/
[css-variable]: //caniuse.com/#feat=css-variables
[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-tag-span]: //www.w3schools.com/tags/tag_span.asp
[postcss]: //postcss.org
[postcss-preset-env]: //preset-env.cssdb.org

[base_props]: docs/base/props
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

Used for text.  Contains one element `<Text>`

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
    ...
</Text>
```

#### Props

Also have [additioanl props][base_props]

| props | Values | Description |
|-------|--------|-------------|
| [text-size]      | `small` `default` `big` `h1` `h2` `h3` `h4` `h5` `h6` | Font size |
| [text-weight]    | `default` `thin` `light` `medium` `bold` `black` | Font weight |
| [text-align]     | `left` `center` `right` `justify` | Horizontal alignment |
| [text-valign]    | `baseline` `bottom` `middle` `sub` `super` `text-bottom` `text-top` `top` | Vertical alignment |
| [text-wrap]      | `nowrap` `break` `ellipsis` `three-line` `two-line` | Transferring and cutting text |
| [text-style]     | `italic` `strike` `underline` `overline` | Text style |
| [text-transform] | `none` `capitalize` `lowercase` `uppercase` | Text case conversion |
| [text-lheight]   | `default` `medium` `large` | Line spacing |
| [text-color]     | `{THEME_NAME}`  | Text color - [Create Theme][create_theme] |

#### Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
:root {
    /* base */
    --ek-text-line-height: 1em;
    /* prop 'text-size' */
    --ek-text-size-small: 11px;
    --ek-text-size-default: 13px;
    --ek-text-size-big: 15px;
    --ek-text-size-h1: 24px;
    --ek-text-size-h2: 22px;
    --ek-text-size-h3: 20px;
    --ek-text-size-h4: 18px;
    --ek-text-size-h5: 16px;
    --ek-text-size-h6: 14px;
    /* prop 'text-lheight' */
    --ek-text-line-height-default: var(--ek-text-line-height);
    --ek-text-line-height-medium: 1.25em;
    --ek-text-line-height-large: 1.5em;
}
```

#### Live demo

[![Edit text-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/textusage-wm53d?fontsize=14 ':include :type=iframe width=100% height=500px')

---

### `text-size`

- `small` - css variable `--ek-text-size-small`, default value: `11px`
- `default` - css variable `--ek-text-size-default`, default value: `13px`
- `big` - css variable `--ek-text-size-big`, default value: `15px`
- `h1` - css variable `--ek-text-size-h1`, default value: `24px`
- `h2` - css variable `--ek-text-size-h2`, default value: `22px`
- `h3` - css variable `--ek-text-size-h3`, default value: `20px`
- `h4` - css variable `--ek-text-size-h4`, default value: `18px`
- `h5` - css variable `--ek-text-size-h5`, default value: `16px`
- `h6` - css variable `--ek-text-size-h6`, default value: `14px`

```jsx
<Text text-size='big'>
    ...
</Text>
```

### `text-weight`

- `default` - value: `400`
- `thin` - value: `100`
- `light` - value: `300`
- `medium` - value: `500`
- `bold` - value: `700`
- `black` - value: `900`

```jsx
<Text text-weight='bold'>
    ...
</Text>
```

### `text-align`

- `left` - Align text to the left
- `center` - Center alignment of text
- `right` - Align text to the right
- `justify` - Distributes all text evenly across width

```jsx
<Text text-align='...'></Text>
```

### `text-valign`

- `top` - Align the top edge of the element to the top of the tallest line item.
- `bottom` - Aligns the base of the current element at the bottom of the element of the line below it all
- `middle` - The alignment of the midpoint of the element at the baseline of the parent plus half the height of the parent element
- `baseline` - Aligns the baseline of the current element to the parent's baseline
- `sub` - The element is depicted as subscript, in the form of a subscript
- `super` - The element is depicted as superscript, in the form of a superscript
- `text-top` - The top border of the element is aligned to the highest text element of the current line
- `text-bottom` - The bottom border of the element is aligned at the very bottom edge of the current line

```jsx
<Text text-valign='baseline'>
    ...
</Text>
```

### `text-wrap`

- `nowrap` - All text is displayed in one line
- `break` - Line wrapping is added automatically
- `ellipsis` - The text is cut and an ellipsis is added to the end of the line
- `two-line` - Text is cut in two lines
- `three-line` - Text is cut in three lines

```jsx
<Text text-wrap='ellipsis'>
    ...
</Text>
```

### `text-style`

- `italic` - Cursive text
- `strike` - Creates strikethrough text
- `underline` - Sets underlined text
- `overline` - The line runs over the text

```jsx
<Text text-style='strike'>
    ...
</Text>
```

### `text-transform`

- `none` - Does not change the case of characters
- `capitalize` - The first character of each word in the sentence will be capitalized
- `lowercase` - All text characters are lowercase (lower case)
- `uppercase` - All text characters become uppercase (upper case)

```jsx
<Text text-transform='uppercase'>
    ...
</Text>
```

### `text-lheight`

- `default` - css variable `--ek-text-line-height-default`, default value: `1em`
- `medium` - css variable `--ek-text-line-height-medium`, default value: `1.25em`
- `large` - css variable `--ek-text-line-height-large`, default value: `1.5em`

```jsx
<Text text-lheight='large'>
    ...
</Text>
```

### `text-color`

> Set the text color depending on the [created theme][create_theme], used `text color` value.

```jsx
<Text text-color={THEME_NAME}>
    ...
</Text>
```
