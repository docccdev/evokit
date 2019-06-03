[evokit]: /packages/evokit/
[css-variable]: //caniuse.com/#feat=css-variables
[css-variable-usage]: //w3schools.com/css/css3_variables.asp
[html-tag-ul]: //www.w3schools.com/tags/tag_ul.asp
[html-tag-li]: //www.w3schools.com/tags/tag_li.asp
[postcss]: //postcss.org
[postcss-preset-env]: //preset-env.cssdb.org

[create_theme]: docs/base/theme

[list-indent]: #list-indent
[list-style]: #list-style
[list-color]: #list-color
[list-divider]: #list-divider

# EvoKit - List

[![](https://img.shields.io/npm/v/evokit-list.svg)](https://www.npmjs.com/package/evokit-list)

Used to create list. Contains two elements `<List>` and `<List.Item>`.

---

#### Install

> Peer dependencies [evokit]

```bash
npm install evokit-list --save
```

#### Usage

> The styles use [css-variable] and will work in all modern browsers. If you need to support more old browsers such as Interner Explorer 11 or lower, use a tool [postcss] with [postcss-preset-env] for transforming css into something most browsers can understand.

- `<List>` has a default html tag [ul][html-tag-ul]
- `<List.Item>` has a default html tag [li][html-tag-li]

```jsx
import { List } from 'evokit-list';
import 'evokit-list/style.css';

<List>
    <List.Item>
        ...
    </List.Item>
</List>

```

[![Edit list-usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/embed/listusage-ycfx4?fontsize=14 ':include :type=iframe width=100% height=500px')

#### Props

| Props | Values | Description |
|-------|--------|-------------|
| [list-indent]  | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Indentation between elements |
| [list-style]   | `dash` `decimal` `disc` | Marker type |
| [list-color]   | `{THEME_NAME}` | Marker color - [Create Theme][create_theme] |
| [list-divider] | `{THEME_NAME}` | Color separator between elements - [Create Theme][create_theme] |

#### Customize

> This set of css variables is default, if you want to override one or more value, please use the rules [css-variable-usage], define them below the css import.

```css
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

---

##### `list-indent`

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
    <List.Item>
        ...
    </List.Item>
</List>
```

##### `list-style`

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

##### `list-color`

> Set the text color depending on the [created theme][create_theme], used `text color` value.

```jsx
<List list-color={THEME_NAME}>
    <List.Item>
        ...
    </List.Item>
</List>
```

##### `list-divider`

> Set the border color depending on the [created theme][create_theme], used `border color` value.

```jsx
<List list-divider={THEME_NAME}>
    <List.Item>
        ...
    </List.Item>
</List>
```