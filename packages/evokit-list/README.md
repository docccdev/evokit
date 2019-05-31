[create_theme]: docs/base/theme

[list]: #list
[listitem]: #listitem

[list-indent]: #list-indent
[list-style]: #list-style
[list-color]: #list-color
[list-divider]: #list-divider

[![](https://img.shields.io/npm/v/evokit-list.svg?style=flat-square&colorB=blue)](https://www.npmjs.com/package/evokit-list)

# EvoKit - List

Список

---

## Usage

- [List][list]
- [List.Item][listitem]

```jsx
import { List } from 'evokit-list';
import 'evokit-list/style.css';

<List>
    <List.Item>
        content
    </List.Item>
</List>

```

---

## List

| Props | Values | Description |
|-------|--------|-------------|
| [list-indent]  | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Отступы между элементами |
| [list-style]   | `dash` `decimal` `disc` | Тип маркера |
| [list-color]   | `${themeName}` - [Create Theme][create_theme] | Цвет маркера |
| [list-divider] | `${themeName}` - [Create Theme][create_theme] | Разделитель между элементами |

### `list-indent`

- `none` - Расстояние между элементами `0px`
- `xxs, xs, s, m, l, xl, xxl` - Каждое последующее значение больше предыдущего на 5px, `xxs=5px`, `xs=10px`, `s=15px` и т.д.

```jsx
<List list-indent='...'></List>
```

```jsx
/*react*/
<script>
const { List, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <List list-indent={value}>
                        {[1, 2, 3].map((key) => (
                            <List.Item>
                                <Example.Box>
                                    item {key}
                                </Example.Box>
                            </List.Item>
                        ))}
                    </List>
                )}
            </Example>
        )
    }
}
</script>
```

### `list-style`

- `dash` - Маркер в виде прочерка (—)
- `decimal` - Арабские числа (1, 2, 3, 4,...).
- `disc` - Маркер в виде точки (•)

```jsx
<List list-indent='...'></List>
```

```jsx
/*react*/
<script>
const { List, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['dash', 'decimal', 'disc']}>
                {(value) => (
                    <List list-style={value}>
                        {[1, 2, 3].map((key) => (
                            <List.Item>
                                item {key}
                            </List.Item>
                        ))}
                    </List>
                )}
            </Example>
        )
    }
}
</script>
```

### `list-color`

```jsx
/*react*/
<script>
const { List, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['success', 'info', 'warning', 'danger']}>
                {(value) => (
                    <List list-style='disc' list-color={value}>
                        {[1, 2, 3].map((key) => (
                            <List.Item>
                                item {key}
                            </List.Item>
                        ))}
                    </List>
                )}
            </Example>
        )
    }
}
</script>
```

### `list-divider`

```jsx
/*react*/
<script>
const { List, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['success', 'info', 'warning', 'danger']}>
                {(value) => (
                    <List list-indent='m' list-divider={value}>
                        {[1, 2, 3].map((key) => (
                            <List.Item>
                                <Example.Box>
                                    item {key}
                                </Example.Box>
                            </List.Item>
                        ))}
                    </List>
                )}
            </Example>
        )
    }
}
</script>
```
