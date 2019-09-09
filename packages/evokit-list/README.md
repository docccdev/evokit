[evokit]: /packages/evokit/
[CHANGELOG]: /packages/evokit-list/CHANGELOG.md

[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-all-tags]: //www.w3schools.com/tags/default.asp

[create_theme]: /docs/base/theme.md
[installation]: /docs/getting-started/installation.md
[quik-start]: /docs/getting-started/quick-start.md
[use-props]: /docs/getting-started/props.md

[list-tag]: #list-tag
[list-item-tag]: #list-item-tag
[list-indent]: #list-indent
[list-style]: #list-style
[list-color]: #list-color
[list-divider]: #list-divider

# EvoKit - List

[![](https://img.shields.io/npm/v/evokit-list.svg)](https://www.npmjs.com/package/evokit-list)
[![](https://img.shields.io/badge/page-CHANGELOG-42b983)][CHANGELOG]

Used to create list. Contains two elements `<List>` and `<ListItem>`

---

## Install

> Peer dependencies [evokit]. More about [install][installation]

```bash
npm install evokit-list --save
```

## Usage

> More about [usage][quik-start]

```jsx
import { List, ListItem } from 'evokit-list';
import 'evokit-list/style.css';

<List>
    <ListItem>
        ...
    </ListItem>
</List>

```

## Props

> Also supports other valid props of the React Element. More about [use props][use-props]

### `<List />`

| Prop name     | Default value | Possible value | Description |
|---------------|---------------|----------------|-------------|
| [list-indent] | `none`        | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Indentation between elements |
| [list-style]  | `null`        | `dash` `decimal` `disc` | Marker type |
| [list-tag]    | `ul`          | [html tags][html-all-tags] | HTML tag    |

**Themes**

| Prop name      | Default value | Possible value | Description  |
|----------------|---------------|----------------|--------------|
| [list-color]   | `null`        | `{THEME_NAME}` | Marker color |
| [list-divider] | `null`        | `{THEME_NAME}` | Color separator between elements |

> `{THEME_NAME}` — use [theming][create_theme] for create custom theme


### `<ListItem />`

| Prop name       | Default value | Possible value             | Description |
|-----------------|---------------|----------------------------|-------------|
| [list-item-tag] | `li`          | [html tags][html-all-tags] | HTML tag    |

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
}
```

## Live demo

[![Edit list-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/listusage-ycfx4?fontsize=14&runonclick=0 ':include :type=iframe width=100% height=500px')

---

## `list-tag`

- Default value `ul`

```jsx
<List list-tag='ul'>
    ...
</List>
```

## `list-item-tag`

- Default value `li`

```jsx
<List>
    <ListItem list-item-tag='li'>
        ...
    </ListItem>
</List>
```

## `list-indent`

- `none` - no indent, value: `0px`
- `xxs` - css variable `--ek-list-indent-xxs`, default value: `5px`
- `xs` - css variable `--ek-list-indent-xs`, default value: `10px`
- `s` - css variable `--ek-list-indent-s`, default value: `15px`
- `m` - css variable `--ek-list-indent-m`, default value: `20px`
- `l` - css variable `--ek-list-indent-l`, default value: `25px`
- `xl` - css variable `--ek-list-indent-xl`, default value: `30px`
- `xxl` - css variable `--ek-list-indent-xxl`, default value: `35px`

```jsx
<List list-indent='xxl'>
    <ListItem>
        ...
    </ListItem>
</List>
```

## `list-style`

- `dash` - Dash marker (—)
- `decimal` - Arabic numbers (1, 2, 3, 4,...).
- `disc` - Dotted markerи (•)

```jsx
<List list-style='decimal'>
    <ListItem>
        ...
    </ListItem>
</List>
```

## `list-color`

> Set the `THEME_NAME` depending on the [theming][create_theme]

```jsx
<List list-color={THEME_NAME}>
    <ListItem>
        ...
    </ListItem>
</List>
```

## `list-divider`

> Set the `THEME_NAME` depending on the [theming][create_theme]

```jsx
<List list-divider={THEME_NAME}>
    <ListItem>
        ...
    </ListItem>
</List>
```
