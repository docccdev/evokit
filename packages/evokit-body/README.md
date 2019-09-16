[evokit]: /packages/evokit/
[CHANGELOG]: /packages/evokit-body/CHANGELOG.md

[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-all-tags]: //www.w3schools.com/tags/default.asp

[create_theme]: /docs/base/theme.md
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/getting-started/props.md

[body-background]: #body-background
[body-color]: #body-color
[body-display]: #body-display
[body-indent]: #body-indent
[body-section-display]: #body-section-display
[body-section-tag]: #body-section-tag
[body-size]: #body-size
[body-tag]: #body-tag

# EvoKit - Body

[![](https://img.shields.io/npm/v/evokit-body.svg)](https://www.npmjs.com/package/evokit-body)
[![](https://img.shields.io/badge/page-CHANGELOG-42b983)][CHANGELOG]

Used for body of the web page and sets the basic styles. Contains two elements `<Body>` and `<BodySection>`

---

## Install

> Peer dependencies [evokit]. More about [install][installation]

```bash
npm install evokit-body --save
```

## Usage

> More about [usage][quik-start]

```jsx
import { Body, BodySection } from 'evokit-body';
import 'evokit-body/style.css';

<Body>
    <BodySection>
        header
    </BodySection>
    <BodySection>
        content
    </BodySection>
    <BodySection>
        footer
    </BodySection>
</Body>
```

## Props

> Also supports other valid props of the React Element. More about [use props][use-props]

### `<Body />`

| Prop name         | Default value | Possible value | Description    |
|-------------------|---------------|-------------------|-------------|
| [body-background] | `null`        | [Create theme][create_theme]    | Background color   |
| [body-color]      | `null`        | [Create theme][create_theme]    | Text color         |
| [body-display]    | `block`       | `block` `none`                  | Display type   |
| [body-indent]     | `none`        | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Padding on the side left and right for children `<BodySection />` |
| [body-size]       | `null`        | `xl` `xxl` `xxxl` | Max width for children `<BodySection />` |
| [body-tag]        | `body`        | [HTML tags][html-all-tags] | HTML tag    |

### `<BodySection />`

| Prop name              | Default value | Possible value             | Description |
|------------------------|---------------|----------------------------|-------------|
| [body-section-display] | `block`       | `block` `none`             | Display type   |
| [body-section-tag]     | `div`         | [HTML tags][html-all-tags] | HTML tag    |


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
    /* prop 'body-size' */
    --ek-body-max-width-xl: 1440px;
    --ek-body-max-width-xxl: 1640px;
    --ek-body-max-width-xxxl: 1840px;
}
```

## Live demo

[![Edit body-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/bodyusage-kz6ss?fontsize=14&runonclick=0 ':include :type=iframe width=100% height=500px')

---

## `body-tag`

Default value `body`

```jsx
<Body body-tag='body'>
    ...
</Body>
```

## `body-display`

- `block` - shown as blocky
- `none` - remove from a document

```jsx
<Body body-display='none'>
    ...
</Body>
```

## `body-size`

- `xl` - css variable `--ek-body-max-width-xl`, default value: `1440px`
- `xxl` - css variable `--ek-body-max-width-xxl`, default value: `1640px`
- `xxxl` - css variable `--ek-body-max-width-xxxl`, default value: `1840px`

```jsx
<Body body-size='xl'>
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

```jsx
<Body body-indent='m'>
    ...
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

## `body-section-tag`

Default value `div`

```jsx
<Body>
    <BodySection body-section-tag='div'>
        ...
    </BodySection>
</Body>
```

## `body-section-display`

- `block` - shown as blocky
- `none` - remove from a document

```jsx
<Body>
    <BodySection body-section-display='none'>
        ...
    </BodySection>
</Body>
```
