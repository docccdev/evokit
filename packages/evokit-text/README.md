[evokit]: /packages/evokit/
[CHANGELOG]: /packages/evokit-text/CHANGELOG.md

[css-variable-usage]: //w3schools.com/css/css3_variables.asp

[create_theme]: /docs/base/theme.md
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/getting-started/props.md

[text-display]: #text-display
[text-align]: #text-align
[text-color]: #text-color
[text-lheight]: #text-lheight
[text-size]: #text-size
[text-style]: #text-style
[text-transform]: #text-transform
[text-valign]: #text-valign
[text-weight]: #text-weight
[text-wrap]: #text-wrap

# EvoKit - Text

[![](https://img.shields.io/npm/v/evokit-text.svg)](https://www.npmjs.com/package/evokit-text)
[![](https://img.shields.io/badge/page-CHANGELOG-42b983)][CHANGELOG]

Used for text. Contains one element `<Text>`

---

## Install

> Peer dependencies [evokit]. More about [install][installation]

```bash
npm install evokit-text --save
```

## Usage

> More about [usage][quik-start]

```jsx
import React from 'react';
import { Text } from 'evokit-text';
import 'evokit-text/style.css';

const App = () => (
    <Text text-align='center'>
        ...
    </Text>
);
```

## Props

> Also supports other valid props of the React Element. More about [use props][use-props]

### `<Text />`

| Prop name        | Default value | Possible value   | Description |
|------------------|---------------|------------------|-------------|
| [text-align]     | `left`        | `left` `center` `right` `justify` | Horizontal alignment |
| [text-display]   | `inline`      | `inline` `none`  | Display type |
| [text-color]     | `null`        | [Create theme][create_theme] | Text color  |
| [text-lheight]   | `default`     | `default` `medium` `large` | Line spacing |
| [text-size]      | `default`     | `default` `small` `big` `h1` `h2` `h3` `h4` `h5` `h6` | Font size |
| [text-style]     | `null`        | `italic` `strike` `underline` `overline` | Text style |
| [text-transform] | `none`        | `none` `capitalize` `lowercase` `uppercase` | Text case conversion |
| [text-valign]    | `null`        | `baseline` `bottom` `middle` `sub` `super` `text-bottom` `text-top` `top` | Vertical alignment |
| [text-weight]    | `default`     | `default` `thin` `light` `medium` `bold` `black` | Font weight |
| [text-wrap]      | `normal`      | `normal` `nowrap` `break` `ellipsis` `three-line` `two-line` | Transferring and cutting text |

## Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
@custom-media --ek-text-media-small only screen and (min-width: 480px);
@custom-media --ek-text-media-medium only screen and (min-width: 768px);
@custom-media --ek-text-media-large only screen and (min-width: 960px);
@custom-media --ek-text-media-wide only screen and (min-width: 1200px);
@custom-media --ek-text-media-huge only screen and (min-width: 1400px);

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

## Live demo

[![Edit text-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/textusage-wm53d?fontsize=14&runonclick=0 ':include :type=iframe width=100% height=500px')

---

## `text-display`

- `inline` - displayed as inline
- `none` - remove from a document

```jsx
<Text text-display='none'>
    ...
</Text>
```

## `text-size`

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

## `text-weight`

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

## `text-align`

- `left` - Align text to the left
- `center` - Center alignment of text
- `right` - Align text to the right
- `justify` - Distributes all text evenly across width

```jsx
<Text text-align='...'></Text>
```

## `text-valign`

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

## `text-wrap`

- `normal` - The text is displayed as usual
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

## `text-style`

- `italic` - Cursive text
- `strike` - Creates strikethrough text
- `underline` - Sets underlined text
- `overline` - The line runs over the text

```jsx
<Text text-style='strike'>
    ...
</Text>
```

## `text-transform`

- `none` - Does not change the case of characters
- `capitalize` - The first character of each word in the sentence will be capitalized
- `lowercase` - All text characters are lowercase (lower case)
- `uppercase` - All text characters become uppercase (upper case)

```jsx
<Text text-transform='uppercase'>
    ...
</Text>
```

## `text-lheight`

- `default` - css variable `--ek-text-line-height-default`, default value: `1em`
- `medium` - css variable `--ek-text-line-height-medium`, default value: `1.25em`
- `large` - css variable `--ek-text-line-height-large`, default value: `1.5em`

```jsx
<Text text-lheight='large'>
    ...
</Text>
```

## `text-color`

> Set the `THEME_NAME` depending on the [theming][create_theme]

```jsx
<Text text-color={THEME_NAME}>
    ...
</Text>
```
