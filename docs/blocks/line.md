[sizes]: base/sizes.md
[media]: base/media.md

[line-indent]: #line-indent
[line-color]: #line-color
[line-style]: #line-style

[line]: #line

# EvoKit - Line

Горизонтальная линия

!> Модификаторы имеют [media] параметры.

---

## Usage

- [Line][line]

```jsx
// Common import for all blocks and css
import { Line } from 'evokit';
import 'evokit/dist/style.css';

// Single import block and css
import Line from 'evokit/dist/Line';
import 'evokit/dist/Line/style.css';

...

<Line />

```

## Line

| Property | Type | Description |
|----------|----------|-------------|
| [line-indent]    | `string`, `object`, `array` | Отступ сверху и снизу [sizes] |
| [line-color]     | `string`, `object`, `array` | Цвет |
| [line-style]     | `string`, `object`, `array` | Стиль |

### `line-indent`

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
                        <Line line-indent={value} />
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

### `line-color`

```jsx
/*react*/
<script>
const { Line, Example } = EvoKit;

export default class ExampleLine extends React.Component {
    render() {
        return (
            <Example values={['danger', 'dark', 'default', 'info', 'light', 'minor', 'muted', 'primary', 'reset', 'second', 'success', 'warning']}>
                {(value) => (
                    <Line line-color={value} />
                )}
            </Example>
        )
    }
}
</script>
```

### `line-style`

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
