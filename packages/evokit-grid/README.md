[create_theme]: docs/base/theme

[grid]: #grid
[griditem]: #griditem

[grid-column]: #grid-column
[grid-indent]: #grid-indent
[grid-direction]: #grid-direction
[grid-align]: #grid-align
[grid-valign]: #grid-valign
[grid-divider]: #grid-divider
[grid-wrap]: #grid-wrap

[grid-item-order]: #grid-item-order
[grid-item-width]: #grid-item-width

# EvoKit - Grid

[![](https://img.shields.io/npm/v/evokit-grid.svg)](https://www.npmjs.com/package/evokit-grid)

Cетка для размещения блоков на странице, вмещает до 10 столбцов.

---

## Usage

- [Grid][grid]
- [Grid.Item][griditem]

```jsx
import { Grid } from 'evokit-grid';
import 'evokit-grid/style.css';

<Grid>
    <Grid.Item>
        content
    </Grid.Item>
</Grid>

```

---

## Grid

| Props | Values | Description |
|-------|--------|-------------|
| [grid-column]    | `1` `2` `3` `4` `5` `6` `7` `8` `9` `10` `auto` `expand` | Количество ячеек в ряду |
| [grid-indent]    | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Отступы между ячейками |
| [grid-direction] | `row` `row-reverse` `column` `column-reverse` | Направление ячеек |
| [grid-wrap]      | `nowrap` `wrap` `wrap-reverse` | Правила переноса ячеек |
| [grid-align]     | `left` `center` `right` `justify` | Горизонтальное выравнивание ячеек |
| [grid-valign]    | `top` `middle` `bottom` `baseline` `justify` | Вертикальное выравние ячеек |
| [grid-divider]   | `${themeName}` - [Create Theme][create_theme] | Цвет разделителя между ячейками |

### `grid-column`

- `1, 2, 3, 4, 5, 6, 7, 8, 9, 10` - Количество ячеек в ряду
- `auto` - Ширина ячеек зависит от контента
- `expand` - Ширина ячеек пропорциональна их количеству

```jsx
<Grid grid-column='...'></Grid>
```

```jsx
/*react*/
<script>
const { Grid, Example } = EvoKit;

export default class ExampleGrid extends React.Component {
    render() {
        return (
            <Example values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'auto', 'expand' ]}>
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

- `none` - Расстояние между ячейками `0px`
- `xxs, xs, s, m, l, xl, xxl` - Каждое последующее значение больше предыдущего на 5px, `xxs=5px`, `xs=10px`, `s=15px` и т.д.

```jsx
<Grid grid-indent='...'></Grid>
```

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

- `row` - Направление ячеек слева на право
- `row-reverse` - Направление ячеек справа на лево
- `column` - Направление ячеек сверху вниз
- `column-reverse` - Направление ячеек снизу вверх

```jsx
<Grid grid-direction='...'></Grid>
```

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

- `nowrap` - Расположение ячеек в одну линиую
- `wrap` - Ячейки которые не влазят по ширине в одну линию, смещаются вниз
- `wrap-reverse` - Похожее поведение с `wrap` только смещение ячейки происходит вверх

```jsx
<Grid grid-wrap='...'></Grid>
```

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

- `left` - Выравнивание ячеек по левому краю
- `center` - Выравнивание ячеек по центру
- `right` - Выравнивание ячеек по правому краю
- `justify` - Равномерно распределяет все ячейки по ширине

```jsx
<Grid grid-align='...'></Grid>
```

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

- `top` - Выравнивание ячеек по верхнему краю
- `middle` - Выравнивание ячеек по середине
- `bottom` - Выравнивание ячеек по нижнему краю
- `baseline` - Выравнивание ячеек по базовой линии
- `justify` - Равномерно распределяет все ячейки по высоте

```jsx
<Grid grid-valign='...'></Grid>
```

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
<Grid grid-divider='...'></Grid>
```

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

| Props | Values | Description |
|-------|--------|-------------|
| [grid-item-order] | `1` `2` `3` `4` `5` `6` `7` `8` `9` `10` | Задает порядок расположения ячейки |
| [grid-item-width] | `auto` `expand` `1-1` `*-2` `*-3` `*-4` `*-5` `*-6` `*-7` `*-8` `*-9` `*-10` | Ширина `9-10 = 90%` |

### `grid-item-order`

- `1, 2, 3, 4, 5, 6, 7, 8, 9, 10` - Определяет порядок ячейки

```jsx
<Grid.Item grid-item-order='...'></Grid.Item>
```

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

- `1-1 *-2 *-3 *-4 *-5 *-6 *-7 *-8 *-9 *-10` - Ширина ячейки, например: `1-1=100%`, `1-2=50%`, `1-3=33.333%`, `6-10=60%` и т.д.
- `auto` - Ширина ячейки зависит от контента
- `expand` - Ширина ячейки занимает свободное пространство

```jsx
<Grid.Item grid-item-width='...'></Grid.Item>
```

```jsx
/*react*/
<script>
const { Grid, Example } = EvoKit;

export default class ExampleGrid extends React.Component {
    render() {
        return (
            <Example values={['1-1', '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10', 'auto', 'expand']}>
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
