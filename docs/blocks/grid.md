[sizes]: base/sizes.md
[media]: base/media.md

# Grid

### Модификаторы имеют [Media][media] параметры.

Cетка вмещает до 10 столбцов. Она использует блоки с предварительно определенными классами внутри каждой сетки, которые определяют ширину столбца. Кроме того, можно создавать вложенную разметку.

---

### Использование

```jsx
// Common import for all blocks and css
import { Grid } from 'evokit';
import 'evokit/dist/style.css';

// Single import block and css
import Grid from 'evokit/dist/Grid';
import 'evokit/dist/Grid/style.css';

...

<Grid>
    <Grid.Item>
        Item
    </Grid.Item>
</Grid>

```

#### Grid

| Property | Value | Description |
|----------|------|-------------|
| `grid-column` | `1` ... `10` or `expand` | Количество ячеек в ряду. |
| `grid-indent` | `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl` | Отступы между ячейками. [sizes] |
| `grid-direction` | `row`,`row-reverse`,`column`,`column-reverse` | Направление. |
| `grid-align` | `left`, `center`, `right`, `justify` | Горизонтальное выравнивание. |
| `grid-valign` | `top`, `middle`, `bottom`, `baseline`, `justify` | Вертикальное выравние. |
| `grid-divider` | ... | Разделитель между ячейками. |
| `grid-wrap` | `nowrap`, `wrap`, `wrap-reverse` | Правила переноса ячеек. |

#### Grid.Item

| Property | Value | Description |
|----------|------|-------------|
| `grid-width` | `1` ... `10` or `expand` | Ширина для ячейки. |
| `grid-order` | `1` ... `10` | Задает порядок расположения ячейки |

!> PropTypes: `string`, `object` `array` or `number`

---

#### Live examples

### `grid-column`

```jsx
/*react*/
<script>
const { Grid, Example } = EvoKit;

export default class ExampleGrid extends React.Component {
    render() {
        return (
            <Example values={['expand', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
                {(value) => (
                    <Grid grid-column={value}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => (
                            <Grid.Item>
                                <Example.Box>
                                    item {key}
                                </Example.Box>
                            </Grid.Item>
                        ))}
                    </Grid>
                )}
            </Example>
        )
    }
}
</script>
```

### `grid-indent`

```jsx
/*react*/
<script>
const { Grid, Example } = EvoKit;

export default class ExampleGrid extends React.Component {
    render() {
        return (
            <Example values={['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Grid grid-indent={value}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => (
                            <Grid.Item>
                                <Example.Box>
                                    item {key}
                                </Example.Box>
                            </Grid.Item>
                        ))}
                    </Grid>
                )}
            </Example>
        )
    }
}
</script>
```

### `grid-direction`

```jsx
/*react*/
<script>
const { Grid, Example } = EvoKit;

export default class ExampleGrid extends React.Component {
    render() {
        return (
            <Example values={['row', 'row-reverse', 'column', 'column-reverse']}>
                {(value) => (
                    <Grid grid-direction={value}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => (
                            <Grid.Item>
                                <Example.Box>
                                    item {key}
                                </Example.Box>
                            </Grid.Item>
                        ))}
                    </Grid>
                )}
            </Example>
        )
    }
}
</script>
```

### `grid-wrap`

```jsx
/*react*/
<script>
const { Grid, Example } = EvoKit;

export default class ExampleGrid extends React.Component {
    render() {
        return (
            <Example values={['nowrap', 'wrap', 'wrap-reverse']}>
                {(value) => (
                    <Grid grid-wrap={value}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => (
                            <Grid.Item grid-width='1-3'>
                                <Example.Box>
                                    item {key}
                                </Example.Box>
                            </Grid.Item>
                        ))}
                    </Grid>
                )}
            </Example>
        )
    }
}
</script>
```

### `grid-align`

```jsx
/*react*/
<script>
const { Grid, Example } = EvoKit;

export default class ExampleGrid extends React.Component {
    render() {
        return (
            <Example values={['left', 'center', 'right', 'justify']}>
                {(value) => (
                    <Grid grid-align={value}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => (
                            <Grid.Item>
                                <Example.Box>
                                    item {key}
                                </Example.Box>
                            </Grid.Item>
                        ))}
                    </Grid>
                )}
            </Example>
        )
    }
}
</script>
```

### `grid-valign`

```jsx
/*react*/
<script>
const { Grid, Example } = EvoKit;

export default class ExampleGrid extends React.Component {
    render() {
        return (
            <Example values={['top', 'middle', 'bottom', 'baseline', 'justify']}>
                {(value) => (
                    <Grid grid-valign={value}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => (
                            <Grid.Item>
                                <Example.Box style={{ height: `${key * 20}px` }}>
                                    item {key}
                                </Example.Box>
                            </Grid.Item>
                        ))}
                    </Grid>
                )}
            </Example>
        )
    }
}
</script>
```

### `grid-order`

```jsx
/*react*/
<script>
const { Grid, Example } = EvoKit;

export default class ExampleGrid extends React.Component {
    render() {
        return (
            <Example values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
                {(value) => (
                    <Grid>
                        <Grid.Item grid-order={value}>
                            <Example.Box>
                                item 1
                            </Example.Box>
                        </Grid.Item>
                        {[2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
                            <Grid.Item grid-order={key}>
                                <Example.Box style={{ background: '#f8f8f8', color: '#333' }}>
                                    item {key}
                                </Example.Box>
                            </Grid.Item>
                        ))}
                    </Grid>
                )}
            </Example>
        )
    }
}
</script>
```

### `grid-width`

```jsx
/*react*/
<script>
const { Grid, Example } = EvoKit;

export default class ExampleGrid extends React.Component {
    render() {
        return (
            <Example values={['expand', '1-1', '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10']}>
                {(value) => (
                    <Grid>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => (
                            <Grid.Item grid-width={value}>
                                <Example.Box>
                                    item {key}
                                </Example.Box>
                            </Grid.Item>
                        ))}
                    </Grid>
                )}
            </Example>
        )
    }
}
</script>
```
