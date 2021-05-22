[evokit]: /packages/evokit/
[CHANGELOG]: /packages/evokit-body/CHANGELOG.md

[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[css-overflow-anchor]: //developer.mozilla.org/en-US/docs/Web/CSS/overflow-anchor

[create_theme]: /public/theming.html
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/props/base.md

[body-background]: #body-background
[body-color]: #body-color
[body-display]: #body-display
[body-indent]: #body-indent
[body-overflow-anchor]: #body-overflow-anchor
[body-overflow]: #body-overflow
[body-size]: #body-size
[body-width]: #body-width

[body-section-display]: #body-section-display
[body-section-height]: #body-section-height

# EvoKit - Body

[![](https://img.shields.io/npm/v/evokit-body.svg)](https://www.npmjs.com/package/evokit-body)
[![](https://img.shields.io/badge/page-CHANGELOG-42b983)][CHANGELOG]

Used for body of the web page and sets the basic styles. Contains two elements `<Body>` and `<Body.Section>`

---

## Install

> Peer dependencies [evokit]. More about [install][installation]

```bash
npm install evokit-body --save
```

## Usage

> More about [usage][quik-start]

```jsx
import React from 'react';
import { Body } from 'evokit-body';
import 'evokit-body/style.css';

const App = () => (
    <Body body-indent='xl'>
        <Body.Section>
            header
        </Body.Section>
        <Body.Section>
            content
        </Body.Section>
        <Body.Section>
            footer
        </Body.Section>
    </Body>
);
```

## Props

> Also supports other valid props of the React Element. More about [use props][use-props]

### `<Body />`

| Prop name           | Default value | Possible value | Description    |
|---------------------|---------------|-------------------|-------------|
| [body-background]   | `null`        | [Create theme][create_theme]    | Background color   |
| [body-color]        | `null`        | [Create theme][create_theme]    | Text color         |
| [body-display]      | `block`       | `block` `none`                  | Display type   |
| [body-indent]       | `none`        | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` `3xl` `4xl` `5xl` | Padding on the side left and right for children `<Body.Section />` |
| [body-overflow] `*` | `visible`     | `auto` `hidden` `scroll` `visible` | Overflow type |
| [body-overflow-anchor] | `auto`     | `auto` `none` | Scroll anchoring behavior |
| [body-width] `*`    | `null`        | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` `3xl` `4xl` `5xl` | Min and Max width for children `<Body.Section />` |

### `<Body.Section />`

| Prop name              | Default value | Possible value             | Description  |
|------------------------|---------------|----------------------------|--------------|
| [body-section-display] | `block`       | `block` `none`             | Display type |
| [body-section-height]  | `auto`        | `auto` `inherit` `1-1`     | Set the height |

## Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
@custom-media --ek-body-media-small only screen and (min-width: 480px);
@custom-media --ek-body-media-medium only screen and (min-width: 768px);
@custom-media --ek-body-media-large only screen and (min-width: 960px);
@custom-media --ek-body-media-wide only screen and (min-width: 1200px);
@custom-media --ek-body-media-huge only screen and (min-width: 1400px);

:root {
    /* base */
    --ek-body-font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    --ek-body-font-size: 13px;
    --ek-body-font-weight: 400;
    --ek-body-line-height: 1em;
    --ek-body-min-width: 320px;
    --ek-body-max-width: 1240px;
    /* prop 'body-indent' */
    --ek-body-indent-xxs: 5px;
    --ek-body-indent-xs: 10px;
    --ek-body-indent-s: 15px;
    --ek-body-indent-m: 20px;
    --ek-body-indent-l: 25px;
    --ek-body-indent-xl: 30px;
    --ek-body-indent-xxl: 35px;
    --ek-body-indent-3xl: 40px;
    --ek-body-indent-4xl: 45px;
    --ek-body-indent-5xl: 50px;
    /* prop 'body-width', 'body-width-min', 'body-width-max' */
    --ek-body-width-xxs: 320px;
    --ek-body-width-xs: 480px;
    --ek-body-width-s: 768px;
    --ek-body-width-m: 900px;
    --ek-body-width-l: 1024px;
    --ek-body-width-xl: 1280px;
    --ek-body-width-xxl: 1366px;
    --ek-body-width-3xl: 1440px;
    --ek-body-width-4xl: 1600px;
    --ek-body-width-5xl: 1920px;
}
```

## Live demo

[![Edit body-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/bodyusage-kz6ss?fontsize=14&runonclick=0 ':include :type=iframe width=100% height=500px')

---

## `body-display`

- `block` - shown as blocky
- `none` - remove from a document

```jsx
<Body body-display='none'>
    ...
</Body>
```

## `body-overflow`

The property allows you to set the value for all axes at the same time or to determine it only for the specified axis

**Advanced props**

- `body-overflow-x`
- `body-overflow-y`

**Multi values** _(set value separated by a space)_

- `body-overflow="{1} {2}"`

> {1} - overflow-x, {2} - overflow-y

**List of values**

- `auto` - Scroll bars are added only when needed
- `hidden` - Only the area inside the element is displayed, the rest will be hidden
- `scroll` - Scroll bars are always added
- `visible` - The entire content of the element is displayed, even beyond the specified height and width

```jsx
<Body body-overflow='scroll' />
<Body body-overflow='visible scroll' />
<Body body-overflow-x='visible' body-overflow-y='scroll' />
```

## `body-overflow-anchor`

The property provides a way to opt out of the browser's scroll anchoring behavior, which adjusts scroll position to minimize content shifts.

Scroll anchoring behavior is enabled by default in any browser that supports it. Therefore, changing the value of this property is typically only required if you are experiencing problems with scroll anchoring in a document or part of a document and need to turn the behavior off. [Read more][css-overflow-anchor]

- `auto` - The element becomes a potential anchor when adjusting scroll position.
- `none` - The element won't be selected as a potential anchor.

```jsx
<Body body-overflow-anchor='none'>
    ...
</Body>
```

## `body-indent`

- `none` - no indent, value: `0px`
- `xxs` - css variable `--ek-body-indent-xxs`, default value: `5px`
- `xs` - css variable `--ek-body-indent-xs`, default value: `10px`
- `s` - css variable `--ek-body-indent-s`, default value: `15px`
- `m` - css variable `--ek-body-indent-m`, default value: `20px`
- `l` - css variable `--ek-body-indent-l`, default value: `25px`
- `xl` - css variable `--ek-body-indent-xl`, default value: `30px`
- `xxl` - css variable `--ek-body-indent-xxl`, default value: `35px`
- `3xl` - css variable `--ek-body-indent-3xl`, default value: `40px`
- `4xl` - css variable `--ek-body-indent-4xl`, default value: `45px`
- `5xl` - css variable `--ek-body-indent-5xl`, default value: `50px`

```jsx
<Body body-indent='m'>
    ...
</Body>
```

## `body-width`

This property set the min and max width for children `<Body.Section />`

**Advanced props**

- `body-width-min`
- `body-width-max`

**Multi values** _(set value separated by a space)_

- `body-width="{1} {2}"`

> {1} - width-min, {2} - width-max

**List of values**

- `none` - no min/max width, value: `0/none`
- `xxs` - css variable `--ek-body-width-xxs`, default value: `320px`
- `xs` - css variable `--ek-body-width-xs`, default value: `480px`
- `s` - css variable `--ek-body-width-s`, default value: `768px`
- `m` - css variable `--ek-body-width-m`, default value: `900px`
- `l` - css variable `--ek-body-width-l`, default value: `1024px`
- `xl` - css variable `--ek-body-width-xl`, default value: `1280px`
- `xxl` - css variable `--ek-body-width-xxl`, default value: `1366px`
- `3xl` - css variable `--ek-body-width-3xl`, default value: `1440px`
- `4xl` - css variable `--ek-body-width-4xl`, default value: `1600px`
- `5xl` - css variable `--ek-body-width-5xl`, default value: `1920px`

```jsx
<Body body-width='l'>
    <Body.Section>
        // min-width: 1024px; max-width: 1024px;
    </Body.Section>
</Body>

<Body body-width='xxs xl'>
    <Body.Section>
        // min-width: 320px; max-width: 1280px;
    </Body.Section>
</Body>

<Body body-width-min='xxs' body-width-max='xl'>
    <Body.Section>
        // min-width: 320px; max-width: 1280px;
    </Body.Section>
</Body>
```

## `body-background`

> Set the `THEME_NAME` depending on the [theming][create_theme]

```jsx
<Body body-background={THEME_NAME}>
    ...
</Body>
```

## `body-color`

> Set the `THEME_NAME` depending on the [theming][create_theme]

```jsx
<Body body-color={THEME_NAME}>
    ...
</Body>
```

## `body-section-display`

- `block` - shown as blocky
- `none` - remove from a document

```jsx
<Body>
    <Body.Section body-section-display='none'>
        ...
    </Body.Section>
</Body>
```

## `body-section-height`

Set the height

- `auto` - value: `auto`
- `inherit` - value: `inherit`
- `1-1` - value: `100%`

```jsx
<Body>
    <Body.Section body-section-height='1-1'>
        ...
    </Body.Section>
</Body>
```

## `body-size`

!> **DEPRECATED** prop, please use [body-width]


- `xl` - css variable `--ek-body-max-width-xl`, default value: `1440px`
- `xxl` - css variable `--ek-body-max-width-xxl`, default value: `1640px`
- `xxxl` - css variable `--ek-body-max-width-xxxl`, default value: `1840px`

```jsx
<Body body-size='xl'>
    ...
</Body>
```
