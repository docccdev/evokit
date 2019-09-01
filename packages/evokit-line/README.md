[evokit]: /packages/evokit/
[CHANGELOG]: /packages/evokit-line/CHANGELOG.md

[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-all-tags]: //www.w3schools.com/tags/default.asp

[create_theme]: /docs/base/theme.md
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/getting-started/props.md

[line-tag]: #line-tag
[line-display]: #line-display
[line-indent]: #line-indent
[line-style]: #line-style
[line-color]: #line-color

# EvoKit - Line

[![](https://img.shields.io/npm/v/evokit-line.svg)](https://www.npmjs.com/package/evokit-line)
[![](https://img.shields.io/badge/page-CHANGELOG-42b983)][CHANGELOG]

Horizontal line, used to separate content. Contains one element `<Line>`

---

## Install

> Peer dependencies [evokit]. More about [install][installation]

```bash
npm install evokit-line --save
```

## Usage

> More about [usage][quik-start]

```jsx
import { Line } from 'evokit-line';
import 'evokit-line/style.css';

<Line />
```

## Props

> Also supports other valid props of the React Element. More about [use props][use-props]

### `<Line />`

| Prop name      | Default value | Possible value | Description  |
|----------------|---------------|----------------|--------------|
| [line-tag]     | `hr`          | [html tags][html-all-tags] | HTML tag    |
| [line-display] | `block`       | `block` `none` | Display type |
| [line-indent]  | `none`        | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Set the margin top and bottom |
| [line-style]   | `solid`       | `solid` `dotted` `dashed` | Border style |

> Use [theming][create_theme] for creating custom `{THEME_NAME}`.

| Prop name        | Default value | Possible value | Description  |
|------------------|---------------|----------------|--------------|
| [line-color]     | `null`        | `{THEME_NAME}` | Border color |

## Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
@custom-media --ek-line-media-small only screen and (min-width: 480px);
@custom-media --ek-line-media-medium only screen and (min-width: 768px);
@custom-media --ek-line-media-large only screen and (min-width: 960px);
@custom-media --ek-line-media-wide only screen and (min-width: 1200px);
@custom-media --ek-line-media-huge only screen and (min-width: 1400px);

:root {
    /* prop 'line-indent' */
    --ek-line-indent-xxs: 5px;
    --ek-line-indent-xs: 10px;
    --ek-line-indent-s: 15px;
    --ek-line-indent-m: 20px;
    --ek-line-indent-l: 25px;
    --ek-line-indent-xl: 30px;
    --ek-line-indent-xxl: 35px
}
```

## Live demo

[![Edit line-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/lineusage-mti8w?fontsize=14&runonclick=0 ':include :type=iframe width=100% height=500px')

---

## `line-tag`

Default value `hr`

```jsx
<Line line-tag='hr' />
```

## `line-display`

- `block` - shown as blocky (default)
- `none` - remove block from document

```jsx
<Line line-display='block' />
```

## `line-indent`

- `none` - no indent, value: `0px` (default)
- `xxs` - css variable `--ek-line-indent-xxs`, default value: `5px`
- `xs` - css variable `--ek-line-indent-xs`, default value: `10px`
- `s` - css variable `--ek-line-indent-s`, default value: `15px`
- `m` - css variable `--ek-line-indent-m`, default value: `20px`
- `l` - css variable `--ek-line-indent-l`, default value: `25px`
- `xl` - css variable `--ek-line-indent-xl`, default value: `30px`
- `xxl` - css variable `--ek-line-indent-xxl`, default value: `35px`

```jsx
<Line line-indent='l' />
```

## `line-style`

- `solid` - solid style (default)
- `dotted` - dotted style
- `dashed` - dashed style

```jsx
<Line line-style='dotted' />
```

## `line-color`

> Set the `THEME_NAME` depending on the [theming][create_theme]

```jsx
<Line line-color={THEME_NAME} />
```
