[create_theme]: create_theme/

[line]: #line
[line-indent]: #line-indent
[line-color]: #line-color
[line-style]: #line-style

# EvoKit - Line

Горизонтальная линия, применяется для разделения контента

---

## Usage

- [Line][line]

```jsx
import { Line } from 'evokit-line';
import 'evokit-line/style.css';

<Line />

```

---

## Line

| Props | Values | Description |
|-------|--------|-------------|
| [line-indent] | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Отступ сверху и снизу |
| [line-style]  | `dotted` `dashed` | Стиль |
| [line-color]  | `${themeName}` - [Create Theme][create_theme] | Цвет |

### `line-indent`

```jsx
<Line line-indent='...' />
```

```jsx
/*react*/
<script>
const { Line, Example } = EvoKit;

export default class ExampleLine extends React.Component {
    render() {
        return (
            <Example values={['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <div>
                        <Example.Box style={{ display: 'inline-block' }}>
                            text
                        </Example.Box>
                        <Line line-color='default' line-indent={value} />
                        <Example.Box style={{ display: 'inline-block' }}>
                            text
                        </Example.Box>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

### `line-style`

```jsx
<Line line-style='...' />
```

```jsx
/*react*/
<script>
const { Line, Example } = EvoKit;

export default class ExampleLine extends React.Component {
    render() {
        return (
            <Example values={['dotted', 'dashed']}>
                {(value) => (
                    <Line line-color='danger' line-style={value} />
                )}
            </Example>
        )
    }
}
</script>
```

### `line-color`

Set the color depending on the [created theme][create_theme], used `border color` value.

```jsx
<Line line-color='...' />
```

```jsx
/*react*/
<script>
const { Line, Example } = EvoKit;

export default class ExampleLine extends React.Component {
    render() {
        return (
            <Example values={['success', 'info', 'warning', 'danger']}>
                {(value) => (
                    <Line line-color='default' line-color={value} />
                )}
            </Example>
        )
    }
}
</script>
```
