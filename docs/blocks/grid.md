[sizes]: base/sizes.md
[media]: base/media.md

[mixes]: common/mixes.md

[grid-column]: #grid-column
[grid-indent]: #grid-indent
[grid-direction]: #grid-direction
[grid-align]: #grid-align
[grid-valign]: #grid-valign
[grid-divider]: #grid-divider
[grid-wrap]: #grid-wrap

[grid-item-order]: #grid-item-order
[grid-item-width]: #grid-item-width

[grid]: #grid
[griditem]: #griditem


# EvoKit - Grid

Cетка вмещает до 10 столбцов.

!> Модификаторы имеют [media] параметры.

---

## Usage

- [Grid][grid]
- [Grid.Item][griditem]

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

---

## Grid

| Property | Type | Description |
|----------|----------|-------------|
| [grid-column]    | `string`, `object`, `array` or `number` | Количество ячеек в ряду |
| [grid-indent]    | `string`, `object`, `array` | Отступы между ячейками [sizes] |
| [grid-direction] | `string`, `object`, `array` | Направление |
| [grid-wrap]      | `string`, `object`, `array` | Правила переноса ячеек |
| [grid-align]     | `string`, `object`, `array` | Горизонтальное выравнивание |
| [grid-valign]    | `string`, `object`, `array` | Вертикальное выравние |
| [grid-divider]   | `string`, `object`, `array` | Разделитель между ячейками |

### `grid-column`

```jsx
/*react*/
<script>
const { Grid, Example } = EvoKit;

export default class ExampleGrid extends React.Component {
    render() {
        return (
            <Example values={['expand', 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
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
                            <Grid.Item grid-item-width='1-3'>
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

### `grid-divider`

```jsx
/*react*/
<script>
const { Grid, Example } = EvoKit;

export default class ExampleGrid extends React.Component {
    render() {
        return (
            <Example values={['danger', 'dark', 'default', 'info', 'light', 'minor', 'muted', 'primary', 'reset', 'second', 'success', 'warning']}>
                {(value) => (
                    <Grid grid-column={5} grid-indent='m' grid-divider={value}>
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

---

## Grid.Item

#### Base options:

| Property | Type | Description |
|----------|------|-------------|
| [grid-item-order] | `string`, `object`, `array` or `number` | Задает порядок расположения ячейки |
| [grid-item-width] | [Mixes][mixes] | Ширина |

### `grid-item-order`

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
                        <Grid.Item grid-item-order={value}>
                            <Example.Box>
                                item 1
                            </Example.Box>
                        </Grid.Item>
                        {[2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
                            <Grid.Item grid-item-order={key}>
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

### `grid-item-width`

```jsx
/*react*/
<script>
const { Grid, Example } = EvoKit;

export default class ExampleGrid extends React.Component {
    render() {
        return (
            <Example values={['auto', 'expand', '1-1', '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10']}>
                {(value) => (
                    <Grid>
                        <Grid.Item grid-item-width={value}>
                            <Example.Box>
                                {`grid-item-width='${value || ''}'`}
                            </Example.Box>
                        </Grid.Item>
                        <Grid.Item>
                            <Example.Box>
                                aside
                            </Example.Box>
                        </Grid.Item>
                    </Grid>
                )}
            </Example>
        )
    }
}
</script>
```
