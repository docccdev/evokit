[create_theme]: create_theme/

[body]: #body
[bodysection]: #bodysection

[body-size]: #body-size
[body-indent]: #body-indent
[body-background]: #body-background
[body-color]: #body-color

# EvoKit - Body

Блок предназначен для хранения содержания контента страницы

---

## Usage

- [Body][body]
- [Body.Section][bodysection]

```jsx
import { Body } from 'evokit-body';
import 'evokit-body/style.css';

<Body>
    <Body.Section>
        content
    <Body.Section>
</Body>

```

---

## Body

| props | Values | Description |
|-------|--------|-------------|
| [body-size]       | `xl` `xxl` `xxxl` | Максимальная ширина |
| [body-indent]     | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Внутренние отступы по бокам |
| [body-background] | `${themeName}` - [Create Theme][create_theme] | Цвет фона |
| [body-color]      | `${themeName}` - [Create Theme][create_theme] | Цвет текста |

---

### `body-size`

> Задает максимальную ширину. По умолчаню `1200px`

- `xl` - максимальная ширина `1440px`
- `xxl` - максимальная ширина `1640px`
- `xxxl` - максимальная ширина `1840px`

```jsx
<Body body-size='...'></Body>
```

```jsx
/*react*/
<script>
const { Body, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['xl', 'xxl', 'xxxl']}>
                {(value) => (
                    <Body body-size={value}>
                        <Body.Section>
                            <Example.Box>
                                {`body-size='${value || ''}'`}
                            </Example.Box>
                        </Body.Section>
                    </Body>
                )}
            </Example>
        )
    }
}
</script>
```

---

### `body-indent`

- `none` - Отступы отсутствуют
- `xxs, xs, s, m, l, xl, xxl` - Каждое последующее значение больше предыдущего на 5px, `xxs=5px`, `xs=10px`, `s=15px` и т.д.

```jsx
<Body body-indent='...'></Body>
```

```jsx
/*react*/
<script>
const { Body, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Body body-indent={value} body-background='muted'>
                        <Body.Section>
                            <Example.Box>
                                {`body-indent='${value || ''}'`}
                            </Example.Box>
                        </Body.Section>
                    </Body>
                )}
            </Example>
        )
    }
}
</script>
```


### `body-background`

Set the background color depending on the [created theme][create_theme], used `background color` value.

```jsx
<Body box-background='...'></Body>
```

```jsx
/*react*/
<script>
const { Body, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['success', 'info', 'warning', 'danger']}>
                {(value) => (
                    <Body body-background={value}>
                        <Body.Section>
                            {`body-indent='${value || ''}'`}
                        </Body.Section>
                    </Body>
                )}
            </Example>
        )
    }
}
</script>
```

### `body-color`

Set the color depending on the [created theme][create_theme], used `text color` value.

```jsx
<Body body-color='...'></Body>
```

```jsx
/*react*/
<script>
const { Body, Example } = EvoKit;

export default class ExampleList extends React.Component {
    render() {
        return (
            <Example values={['success', 'info', 'warning', 'danger']}>
                {(value) => (
                    <Body body-color={value}>
                        <Body.Section>
                            {`body-indent='${value || ''}'`}
                        </Body.Section>
                    </Body>
                )}
            </Example>
        )
    }
}
</script>
```
