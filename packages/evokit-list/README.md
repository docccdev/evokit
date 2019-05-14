[colors]: base/colors
[sizes]: base/sizes
[media]: base/media

[list-indent]: #list-indent
[list-style]: #list-style
[list-color]: #list-color
[list-divider]: #list-divider

[list]: #list
[listitem]: #listitem

# EvoKit - List

Cоздает список.

!> Модификаторы имеют [media] параметры.

---

## Usage

- [List][list]
- [List.Item][listitem]

```jsx
import { List } from 'evokit';
import 'evokit/dist/style.css';

...

<List>
    <List.Item>
        Item
    </List.Item>
</List>

```

---

## List

| Property | Type | Description |
|----------|----------|-------------|
| [list-indent]  | `string`, `object`, `array` | Отступ между ячейками [sizes] |
| [list-style]   | `string`, `object`, `array` | Тип маркера |
| [list-color]   | `string`, `object`, `array` | Цвет маркера |
| [list-divider] | `string`, `object`, `array` | Разделитель между ячейками |

### `list-indent`

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
            <Example values={['danger', 'dark', 'default', 'info', 'light', 'minor', 'muted', 'primary', 'reset', 'second', 'success', 'warning']}>
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
            <Example values={['danger', 'dark', 'default', 'info', 'light', 'minor', 'muted', 'primary', 'reset', 'second', 'success', 'warning']}>
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
