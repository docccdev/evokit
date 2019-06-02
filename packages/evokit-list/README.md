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
        content
    </List.Item>
</List>

```

#### Props

| Props | Values | Description |
|-------|--------|-------------|
| [list-indent]  | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Отступы между элементами |
| [list-style]   | `dash` `decimal` `disc` | Тип маркера |
| [list-color]   | `${themeName}` - [Create Theme][create_theme] | Цвет маркера |
| [list-divider] | `${themeName}` - [Create Theme][create_theme] | Разделитель между элементами |

---

##### `list-indent`

- `none` - Расстояние между элементами `0px`
- `xxs, xs, s, m, l, xl, xxl` - Каждое последующее значение больше предыдущего на 5px, `xxs=5px`, `xs=10px`, `s=15px` и т.д.

```jsx
<List list-indent='...'></List>
```

##### `list-style`

- `dash` - Маркер в виде прочерка (—)
- `decimal` - Арабские числа (1, 2, 3, 4,...).
- `disc` - Маркер в виде точки (•)

```jsx
<List list-indent='...'></List>
```

### ##`list-color`

> Set the text color depending on the [created theme][create_theme], used `text color` value.

```jsx
<List list-divider={THEME_NAME}>
    <List.Item>
        {content}
    </List.Item>
    <List.Item>
        {content}
    </List.Item>
</List>
```

##### `list-divider`

> Set the border color depending on the [created theme][create_theme], used `border color` value.

```jsx
<List list-divider={THEME_NAME}>
    <List.Item>
        {content}
    </List.Item>
    <List.Item>
        {content}
    </List.Item>
</List>
```
