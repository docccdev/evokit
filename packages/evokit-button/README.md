[evokit]: /packages/evokit/
[CHANGELOG]: /packages/evokit-button/CHANGELOG.md

[css-variable-usage]: //w3schools.com/css/css3_variables.asp

[create_theme]: /public/theming.html
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/getting-started/props.md

[button-display]: #button-display
[button-events]: #button-events
[button-height]: #button-height
[button-padding]: #button-padding
[button-round]: #button-round
[button-size]: #button-size
[button-theme]: #button-theme
[button-valign]: #button-valign
[button-weight]: #button-weight
[button-width]: #button-width


# EvoKit - Button

<!--
<sup class='beta'>beta</sup>
-->

[![](https://img.shields.io/npm/v/evokit-button.svg)](https://www.npmjs.com/package/evokit-button)
[![](https://img.shields.io/badge/page-CHANGELOG-42b983)][CHANGELOG]

<!--
[![npm peer dependency version](https://img.shields.io/npm/dependency-version/evokit-button/peer/evokit)](https://www.npmjs.com/package/evokit)
-->

Just a button `<Button>`

---

## Install

> Peer dependencies [evokit]. More about [install][installation]

```bash
npm install evokit-button --save
```

## Usage

> More about [usage][quik-start]

```jsx
import React from 'react';
import { Button } from 'evokit-button';
import 'evokit-button/style.css';

const handleClick = () => alert('Hello world!');

const App = () => (
    <Button type='button' onClick={handleClick}>
        ...
    </Button>
);
```

## Props

> Also supports other valid props of the React Element `type`, `disabled`, `onClick` etc. More about [use props][use-props]

### `<Button />`

| Prop name          | Default value    | Possible value | Description  |
|--------------------|------------------|----------------|--------------|
| [button-display]     | `inline-flex`  | `inline-flex` `none`  | Display type    |
| [button-events]      | `auto`         | `auto` `none` | Respond to mouse/touch events |
| [button-height]      | `auto`         | `auto` `inherit` `1-1` | Set the height |
| [button-padding] `*` | `null`         | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` `3xl` `4xl` `5xl` | Inner indent around an button content |
| [button-round] `*`   | `null`         | `none` `full` `xxs` `xs` `s` `m` `l` `xl` `xxl` `3xl` `4xl` `5xl` | Corner rounding |
| [button-size]        | `null`         | `none` `inherit` `default` `small` `big` `h1` `h2` `h3` `h4` `h5` `h6` | Font size |
| [button-theme]       | `null`         | [Create theme][create_theme] | Background, border and text colors |
| [button-valign]      | `middle`       | `baseline` `bottom` `middle` `sub` `super` `text-bottom` `text-top` `top` | Vertical alignment |
| [button-weight]      | `null`         | `thin` `light` `normal` `medium` `bold` `black` | Font weight |
| [button-width]       | `auto`         | `auto` `inherit` `1-1` | Set the width |

> `*` — prop has advanced params

## Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
@custom-media --ek-button-media-small only screen and (min-width: 480px);
@custom-media --ek-button-media-medium only screen and (min-width: 768px);
@custom-media --ek-button-media-large only screen and (min-width: 960px);
@custom-media --ek-button-media-wide only screen and (min-width: 1200px);
@custom-media --ek-button-media-huge only screen and (min-width: 1400px);

:root {
    /* base */
    --ek-button-border-radius: 2px;
    --ek-button-border-width: 1px;
    --ek-button-font-size: inherit;
    --ek-button-font-weight: bold;
    --ek-button-line-height: 1em;
    --ek-button-padding: 10px 15px;
    --ek-button-transition: 150ms ease-in-out;
    /* prop 'button-padding' */
    --ek-button-indent-xxs: 5px;
    --ek-button-indent-xs: 10px;
    --ek-button-indent-s: 15px;
    --ek-button-indent-m: 20px;
    --ek-button-indent-l: 25px;
    --ek-button-indent-xl: 30px;
    --ek-button-indent-xxl: 35px;
    --ek-button-indent-3xl: 40px;
    --ek-button-indent-4xl: 45px;
    --ek-button-indent-5xl: 50px;
    /* prop 'button-round' */
    --ek-button-round-xxs: 2px;
    --ek-button-round-xs: 4px;
    --ek-button-round-s: 6px;
    --ek-button-round-m: 8px;
    --ek-button-round-l: 10px;
    --ek-button-round-xl: 12px;
    --ek-button-round-xxl: 14px;
    --ek-button-round-3xl: 16px;
    --ek-button-round-4xl: 18px;
    --ek-button-round-5xl: 20px;
    /* prop 'button-size' */
    --ek-button-size-small: 11px;
    --ek-button-size-default: var(--ek-button-font-size);
    --ek-button-size-big: 15px;
    --ek-button-size-h1: 24px;
    --ek-button-size-h2: 22px;
    --ek-button-size-h3: 20px;
    --ek-button-size-h4: 18px;
    --ek-button-size-h5: 16px;
    --ek-button-size-h6: 14px;
}
```

## Live demo

[![Edit button-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/button-usage-qxm6i?fontsize=14&runonclick=0 ':include :type=iframe width=100% height=500px')

---

## `button-display`

Display type

- `inline-flex` - block element that is wrapped around by other elements
- `none` - remove from a document

```jsx
<Button button-display='none'>
    ...
</Button>
```

## `button-height`

Set the height

- `auto` - value: `auto`
- `inherit` - value: `inherit`
- `1-1` - value: `100%`

```jsx
<Button button-height='1-1'>
    ...
</Button>
```

## `button-width`

Set the width

- `auto` - value: `auto`
- `inherit` - value: `inherit`
- `1-1` - value: `100%`

```jsx
<Button button-width='1-1'>
    ...
</Button>
```

## `button-padding`

Inner indent around an button content. The property allows you to set the indentation value for all sides at once or to determine it only for specified side.

**Advanced props**

- `button-padding-top` <sup>{1}</sup>
- `button-padding-right` <sup>{2}</sup>
- `button-padding-bottom` <sup>{3}</sup>
- `button-padding-left` <sup>{4}</sup>

**Multi values** _(set value separated by a space)_

- `button-padding="{1,3} {2,4}"`
- `button-padding="{1} {2,4} {3}"`
- `button-padding="{1} {2} {3} {4}"`

**List of values**

| Value  | CSS var               | CSS value |
|--------|-----------------------|-----------|
| `none` | ---                   | `0px`     |
| `xxs`  | `--ek-button-indent-xxs` | `5px`     |
| `xs`   | `--ek-button-indent-xs`  | `10px`    |
| `s`    | `--ek-button-indent-s`   | `15px`    |
| `m`    | `--ek-button-indent-m`   | `20px`    |
| `l`    | `--ek-button-indent-l`   | `25px`    |
| `xl`   | `--ek-button-indent-xl`  | `30px`    |
| `xxl`  | `--ek-button-indent-xxl` | `35px`    |
| `3xl`  | `--ek-button-indent-3xl` | `40px`    |
| `4xl`  | `--ek-button-indent-4xl` | `45px`    |
| `5xl`  | `--ek-button-indent-5xl` | `50px`    |

```jsx
<Button button-padding='s' />
<Button button-padding='s m' />
<Button button-padding='s m l' />
<Button button-padding='s m l xl' />
<Button
    button-padding-top='s'
    button-padding-right='m'
    button-padding-bottom='l'
    button-padding-left='xl'
/>
```

## `button-round`

Corner rounding. The property allows you to set the border radius for all corners at the same time or to determine it only for the specified angle.

**Advanced props**

- `button-round-top-left` <sup>{1}</sup>
- `button-round-top-right` <sup>{2}</sup>
- `button-round-bottom-right` <sup>{3}</sup>
- `button-round-bottom-left` <sup>{4}</sup>

**Multi values** _(set value separated by a space)_

- `button-round="{1,3} {2,4}"`
- `button-round="{1} {2,4} {3}"`
- `button-round="{1} {2} {3} {4}"`

**List of values**

| Value  | CSS var               | CSS value |
|--------|-----------------------|-----------|
| `none` | ---                   | `0px`     |
| `full` | ---                   | `50%`     |
| `xxs`  | `--ek-button-round-xxs`  | `2px`     |
| `xs`   | `--ek-button-round-xs`   | `4px`     |
| `s`    | `--ek-button-round-s`    | `6px`     |
| `m`    | `--ek-button-round-m`    | `8px`     |
| `l`    | `--ek-button-round-l`    | `10px`    |
| `xl`   | `--ek-button-round-xl`   | `12px`    |
| `xxl`  | `--ek-button-round-xxl`  | `14px`    |
| `3xl`  | `--ek-button-round-3xl`  | `16px`    |
| `4xl`  | `--ek-button-round-4xl`  | `18px`    |
| `5xl`  | `--ek-button-round-5xl`  | `20px`    |

```jsx
<Button button-round='s' />
<Button button-round='s m' />
<Button button-round='s m l' />
<Button button-round='s m l xl' />
<Button
    button-round-top-left='s'
    button-round-top-right='m'
    button-round-bottom-right='l'
    button-round-bottom-left='xl'
/>
```

## `button-weight`

Font weight

- `thin` - value: `100`
- `light` - value: `300`
- `normal` - value: `400`
- `medium` - value: `500`
- `bold` - value: `700`
- `black` - value: `900`

```jsx
<Button button-weight='normal'>
    ...
</Button>
```

## `button-size`

- `none` - value: `0px`
- `inherit` - Inherits the meaning of the parent.
- `small` - css variable `--ek-button-size-small`, default value: `11px`
- `default` - css variable `--ek-button-size-default`, default value: `13px`
- `big` - css variable `--ek-button-size-big`, default value: `15px`
- `h1` - css variable `--ek-button-size-h1`, default value: `24px`
- `h2` - css variable `--ek-button-size-h2`, default value: `22px`
- `h3` - css variable `--ek-button-size-h3`, default value: `20px`
- `h4` - css variable `--ek-button-size-h4`, default value: `18px`
- `h5` - css variable `--ek-button-size-h5`, default value: `16px`
- `h6` - css variable `--ek-button-size-h6`, default value: `14px`

```jsx
<Button button-size='big'>
    ...
</Button>
```

## `button-valign`

- `top` - Align the top edge of the element to the top of the tallest line item.
- `bottom` - Aligns the base of the current element at the bottom of the element of the line below it all
- `middle` - The alignment of the midpoint of the element at the baseline of the parent plus half the height of the parent element
- `baseline` - Aligns the baseline of the current element to the parent's baseline
- `sub` - The element is depicted as subscript, in the form of a subscript
- `super` - The element is depicted as superscript, in the form of a superscript
- `text-top` - The top border of the element is aligned to the highest text element of the current line
- `text-bottom` - The bottom border of the element is aligned at the very bottom edge of the current line

```jsx
<Button button-valign='baseline'>
    ...
</Button>
```

## `button-events`

- `auto` - Restores item functionality to default.
- `none` - Prevents mouse events and clicks on an element.

```jsx
<Button button-events='none'>
    ...
</Button>
```

## `button-theme`

Set the **background**, **border** and **text** colors.

The theme has some interactive states, such as `focus` `hover` `active` `disabled`.
If you want to display statically one of them, apply `button-theme='{THEME_NAME}:hover'`

**For example, we created a `primary` theme**

All effects:

```jsx
<Button button-theme='primary' />
```

One state without more effects:

```jsx
<Button button-theme='primary:active' />
```

> Set the `THEME_NAME` depending on the [theming][create_theme]
