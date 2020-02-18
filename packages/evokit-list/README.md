[evokit]: /packages/evokit/
[CHANGELOG]: /packages/evokit-list/CHANGELOG.md

[css-variable-usage]: //w3schools.com/css/css3_variables.asp

[create_theme]: /docs/base/theme.md
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/getting-started/props.md

[list-color]: #list-color
[list-display]: #list-display
[list-divider]: #list-divider
[list-divider-indent]: #list-divider-indent
[list-indent]: #list-indent
[list-item-display]: #list-item-display
[list-style]: #list-style

# EvoKit - List

[![](https://img.shields.io/npm/v/evokit-list.svg)](https://www.npmjs.com/package/evokit-list)
[![](https://img.shields.io/badge/page-CHANGELOG-42b983)][CHANGELOG]

Used to create list. Contains two elements `<List>` and `<List.Item>`

---

## Install

> Peer dependencies [evokit]. More about [install][installation]

```bash
npm install evokit-list --save
```

## Usage

> More about [usage][quik-start]

```jsx
import React from 'react';
import { List } from 'evokit-list';
import 'evokit-list/style.css';

const App = () => (
    <List list-indent='m'>
        <List.Item>
            ...
        </List.Item>
    </List>
);
```

## Props

> Also supports other valid props of the React Element. More about [use props][use-props]

### `<List />`

| Prop name      | Default value | Possible value | Description  |
|----------------|---------------|----------------|--------------|
| [list-color]   | `null`        | [Create theme][create_theme] | Marker color |
| [list-display] | `block`       | `block` `none` | Display type |
| [list-divider-indent]  | `none`        | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` `3xl` `4xl` `5xl` | Indentation between elements, only use with prop [list-divider] |
| [list-divider] | `null`        | [Create theme][create_theme] | Color separator between elements |
| [list-indent]  | `none`        | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` `3xl` `4xl` `5xl` | Indentation between elements |
| [list-style]   | `null`        | `dash` `decimal` `disc` | Marker type |

### `<List.Item />`

| Prop name           | Default value | Possible value             | Description  |
|---------------------|---------------|----------------------------|--------------|
| [list-item-display] | `block`       | `block` `none`             | Display type |


## Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
@custom-media --ek-list-media-small only screen and (min-width: 480px);
@custom-media --ek-list-media-medium only screen and (min-width: 768px);
@custom-media --ek-list-media-large only screen and (min-width: 960px);
@custom-media --ek-list-media-wide only screen and (min-width: 1200px);
@custom-media --ek-list-media-huge only screen and (min-width: 1400px);

:root {
    /* prop 'list-indent' */
    --ek-list-indent-xxs: 5px;
    --ek-list-indent-xs: 10px;
    --ek-list-indent-s: 15px;
    --ek-list-indent-m: 20px;
    --ek-list-indent-l: 25px;
    --ek-list-indent-xl: 30px;
    --ek-list-indent-xxl: 35px;
    --ek-list-indent-3xl: 40px;
    --ek-list-indent-4xl: 45px;
    --ek-list-indent-5xl: 50px;
}
```

## Live demo

[![Edit list-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/listusage-ycfx4?fontsize=14&runonclick=0 ':include :type=iframe width=100% height=500px')

---

## `list-display`

Display type

- `block` - shown as blocky (default)
- `none` - remove block from document

```jsx
<List list-display='none'>
    <List.Item>
        ...
    </List.Item>
</List>
```

## `list-indent`

Indentation between elements, is calculated from content to content

- `none` - no indent, value: `0px`
- `xxs` - css variable `--ek-list-indent-xxs`, default value: `5px`
- `xs` - css variable `--ek-list-indent-xs`, default value: `10px`
- `s` - css variable `--ek-list-indent-s`, default value: `15px`
- `m` - css variable `--ek-list-indent-m`, default value: `20px`
- `l` - css variable `--ek-list-indent-l`, default value: `25px`
- `xl` - css variable `--ek-list-indent-xl`, default value: `30px`
- `xxl` - css variable `--ek-list-indent-xxl`, default value: `35px`
- `3xl` - css variable `--ek-list-indent-3xl`, default value: `40px`
- `4xl` - css variable `--ek-list-indent-4xl`, default value: `45px`
- `5xl` - css variable `--ek-list-indent-5xl`, default value: `50px`

```jsx
<List list-indent='xxl'>
    <List.Item>
        ...
    </List.Item>
</List>
```

## `list-style`

Marker type

- `dash` - Dash marker (—)
- `decimal` - Arabic numbers (1, 2, 3, 4,...).
- `disc` - Dotted markerи (•)

```jsx
<List list-style='decimal'>
    <List.Item>
        ...
    </List.Item>
</List>
```

## `list-divider-indent`

Indentation between elements, is calculated from the dividing line to the content. Only use with prop [list-divider].

- `none` - no indent, value: `0px`
- `xxs` - css variable `--ek-list-indent-xxs`, default value: `5px`
- `xs` - css variable `--ek-list-indent-xs`, default value: `10px`
- `s` - css variable `--ek-list-indent-s`, default value: `15px`
- `m` - css variable `--ek-list-indent-m`, default value: `20px`
- `l` - css variable `--ek-list-indent-l`, default value: `25px`
- `xl` - css variable `--ek-list-indent-xl`, default value: `30px`
- `xxl` - css variable `--ek-list-indent-xxl`, default value: `35px`
- `3xl` - css variable `--ek-list-indent-3xl`, default value: `40px`
- `4xl` - css variable `--ek-list-indent-4xl`, default value: `45px`
- `5xl` - css variable `--ek-list-indent-5xl`, default value: `50px`

```jsx
<List list-divider={THEME_NAME} list-divider-indent='xxl'>
    <List.Item>
        ...
    </List.Item>
</List>
```

## `list-color`

Marker color

> Set the `THEME_NAME` depending on the [theming][create_theme]

```jsx
<List list-color={THEME_NAME}>
    <List.Item>
        ...
    </List.Item>
</List>
```

## `list-divider`

Color separator between elements

```jsx
<List list-divider={THEME_NAME}>
    <List.Item>
        ...
    </List.Item>
</List>
```

> Set the `THEME_NAME` depending on the [theming][create_theme]


## `list-item-display`

Display type

- `block` - shown as blocky (default)
- `none` - remove block from document

```jsx
<List>
    <List.Item list-item-display='none'>
        ...
    </List.Item>
</List>
```
