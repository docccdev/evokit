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
const { Grid } = EvoKit;

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listValues: ['expand', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            setValue: null
        }
    }

    renderСontrol(){
        return (
            <div style={{ marginBottom: 20 }}>
                <strong>Switch:</strong>&nbsp;
                <button
                    disabled={this.state.setValue === null}
                    onClick={() => this.setState({ setValue: null })}
                    style={{ marginRight: 5 }}
                >
                    reset
                </button>
                {this.state.listValues.map((value) => (
                    <button
                        disabled={this.state.setValue === value}
                        onClick={() => this.setState({ setValue: value })}
                        style={{ marginRight: 5 }}
                    >
                        {value}
                    </button>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderСontrol()}
                <Grid grid-column={this.state.setValue}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                        <Grid.Item>
                            item {value}
                        </Grid.Item>
                    ))}
                </Grid>
            </div>
        )
    }
}
</script>
```

### `grid-indent`

```jsx
/*react*/
<script>
const { Grid } = EvoKit;

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listValues: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
            setValue: null
        }
    }

    renderСontrol(){
        return (
            <div style={{ marginBottom: 20 }}>
                <strong>Switch:</strong>&nbsp;
                <button
                    disabled={this.state.setValue === null}
                    onClick={() => this.setState({ setValue: null })}
                    style={{ marginRight: 5 }}
                >
                    reset
                </button>
                {this.state.listValues.map((value) => (
                    <button
                        disabled={this.state.setValue === value}
                        onClick={() => this.setState({ setValue: value })}
                        style={{ marginRight: 5 }}
                    >
                        {value}
                    </button>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderСontrol()}
                <Grid grid-indent={this.state.setValue}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                        <Grid.Item>
                            item {value}
                        </Grid.Item>
                    ))}
                </Grid>
            </div>
        )
    }
}
</script>
```

### `grid-direction`

```jsx
/*react*/
<script>
const { Grid } = EvoKit;

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listValues: ['row', 'row-reverse', 'column', 'column-reverse'],
            setValue: null
        }
    }

    renderСontrol(){
        return (
            <div style={{ marginBottom: 20 }}>
                <strong>Switch:</strong>&nbsp;
                <button
                    disabled={this.state.setValue === null}
                    onClick={() => this.setState({ setValue: null })}
                    style={{ marginRight: 5 }}
                >
                    reset
                </button>
                {this.state.listValues.map((value) => (
                    <button
                        disabled={this.state.setValue === value}
                        onClick={() => this.setState({ setValue: value })}
                        style={{ marginRight: 5 }}
                    >
                        {value}
                    </button>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderСontrol()}
                <Grid grid-direction={this.state.setValue}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                        <Grid.Item>
                            item {value}
                        </Grid.Item>
                    ))}
                </Grid>
            </div>
        )
    }
}
</script>
```

### `grid-wrap`

```jsx
/*react*/
<script>
const { Grid } = EvoKit;

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listValues: ['nowrap', 'wrap', 'wrap-reverse'],
            setValue: null
        }
    }

    renderСontrol(){
        return (
            <div style={{ marginBottom: 20 }}>
                <strong>Switch:</strong>&nbsp;
                <button
                    disabled={this.state.setValue === null}
                    onClick={() => this.setState({ setValue: null })}
                    style={{ marginRight: 5 }}
                >
                    reset
                </button>
                {this.state.listValues.map((value) => (
                    <button
                        disabled={this.state.setValue === value}
                        onClick={() => this.setState({ setValue: value })}
                        style={{ marginRight: 5 }}
                    >
                        {value}
                    </button>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderСontrol()}
                <Grid grid-wrap={this.state.setValue}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                        <Grid.Item grid-width='1-3'>
                            item {value}
                        </Grid.Item>
                    ))}
                </Grid>
            </div>
        )
    }
}
</script>
```

### `grid-align`

```jsx
/*react*/
<script>
const { Grid } = EvoKit;

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listValues: ['left', 'center', 'right', 'justify'],
            setValue: null
        }
    }

    renderСontrol(){
        return (
            <div style={{ marginBottom: 20 }}>
                <strong>Switch:</strong>&nbsp;
                <button
                    disabled={this.state.setValue === null}
                    onClick={() => this.setState({ setValue: null })}
                    style={{ marginRight: 5 }}
                >
                    reset
                </button>
                {this.state.listValues.map((value) => (
                    <button
                        disabled={this.state.setValue === value}
                        onClick={() => this.setState({ setValue: value })}
                        style={{ marginRight: 5 }}
                    >
                        {value}
                    </button>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderСontrol()}
                <Grid grid-align={this.state.setValue}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                        <Grid.Item>
                            item {value}
                        </Grid.Item>
                    ))}
                </Grid>
            </div>
        )
    }
}
</script>
```

### `grid-valign`

```jsx
/*react*/
<script>
const { Grid } = EvoKit;

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listValues: ['top', 'middle', 'bottom', 'baseline', 'justify'],
            setValue: null
        }
    }

    renderСontrol(){
        return (
            <div style={{ marginBottom: 20 }}>
                <strong>Switch:</strong>&nbsp;
                <button
                    disabled={this.state.setValue === null}
                    onClick={() => this.setState({ setValue: null })}
                    style={{ marginRight: 5 }}
                >
                    reset
                </button>
                {this.state.listValues.map((value) => (
                    <button
                        disabled={this.state.setValue === value}
                        onClick={() => this.setState({ setValue: value })}
                        style={{ marginRight: 5 }}
                    >
                        {value}
                    </button>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderСontrol()}
                <Grid grid-valign={this.state.setValue}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                        <Grid.Item style={{ height: `${value * 20}px`, background: 'gray' }}>
                            item {value}
                        </Grid.Item>
                    ))}
                </Grid>
            </div>
        )
    }
}
</script>
```

### `grid-order`

```jsx
/*react*/
<script>
const { Grid } = EvoKit;

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            setValue: null
        }
    }

    renderСontrol(){
        return (
            <div style={{ marginBottom: 20 }}>
                <strong>Switch:</strong>&nbsp;
                <button
                    disabled={this.state.setValue === null}
                    onClick={() => this.setState({ setValue: null })}
                    style={{ marginRight: 5 }}
                >
                    reset
                </button>
                {this.state.listValues.map((value) => (
                    <button
                        disabled={this.state.setValue === value}
                        onClick={() => this.setState({ setValue: value })}
                        style={{ marginRight: 5 }}
                    >
                        {value}
                    </button>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderСontrol()}
                <Grid>
                    <Grid.Item grid-order={this.state.setValue}>
                        <div style={{ background: 'gray' }}>
                            item 1
                        </div>
                    </Grid.Item>
                    {[2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
                        <Grid.Item grid-order={value}>
                            item {value}
                        </Grid.Item>
                    ))}
                </Grid>
            </div>
        )
    }
}
</script>
```

### `grid-width`

```jsx
/*react*/
<script>
const { Grid } = EvoKit;

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listValues: ['expand', '1-1', '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'],
            setValue: null
        }
    }

    renderСontrol(){
        return (
            <div style={{ marginBottom: 20 }}>
                <strong>Switch:</strong>&nbsp;
                <button
                    disabled={this.state.setValue === null}
                    onClick={() => this.setState({ setValue: null })}
                    style={{ marginRight: 5 }}
                >
                    reset
                </button>
                {this.state.listValues.map((value) => (
                    <button
                        disabled={this.state.setValue === value}
                        onClick={() => this.setState({ setValue: value })}
                        style={{ marginRight: 5 }}
                    >
                        {value}
                    </button>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderСontrol()}
                <Grid>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                        <Grid.Item grid-width={this.state.setValue}>
                            item {value}
                        </Grid.Item>
                    ))}
                </Grid>
            </div>
        )
    }
}
</script>
```
