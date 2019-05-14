[create_theme]: create_theme/

[box]: #box
[box-margin]: #box-margin
[box-padding]: #box-padding
[box-round]: #box-round
[box-width]: #box-width
[box-display]: #box-display
[box-position]: #box-position
[box-place]: #box-place
[box-background]: #box-background
[box-border]: #box-border

# EvoKit - Box

Блок для контента, позволяет применить внутренние/внешние отступы и много другое.

---

## Usage

- [Box][box]

```jsx
import { Box } from 'evokit-box';
import 'evokit-box/style.css';

<Box>
    content
</Box>

```

---

## Box

| Props | Values | Description |
|-------|--------|-------------|
| [box-margin]     | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` `auto` | Внешний отступ |
| [box-padding]    | `none` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Внутренний отступ |
| [box-round]      | `none` `full` `xxs` `xs` `s` `m` `l` `xl` `xxl` | Скругление углов |
| [box-width]      | `auto` `1-1` `*-2` `*-3` `*-4` `*-5` `*-6` `*-7` `*-8` `*-9` `*-10` | Ширина `9-10 = 90%` |
| [box-display]    | `none` `inline` `inline-block` `block` | Отображение в документе |
| [box-position]   | `static` `relative` `absolute` `fixed` | Cпособ позиционирования |
| [box-place]      | `top` `top-left` `top-right` `center` `center-left` `center-right` `bottom` `bottom-left` `bottom-right` | Место позиционирования |
| [box-border]     | `${themeName}` - [Create Theme][create_theme] | Добавляет рамку |
| [box-background] | `${themeName}` - [Create Theme][create_theme] | Добавляет фон |

### `box-margin`

> Имеет дополнительные параметры, например `box-margin-top`, `box-margin-lr` (left right), `box-margin-tb` (top bottom) и другие.

```jsx
<Box box-margin='...'></Box>
```

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['auto', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <div>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-margin={value}>
                                <Example.Box>
                                    {`box-margin='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-margin-top={value}>
                                <Example.Box>
                                    {`box-margin-top='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-margin-bottom={value}>
                                <Example.Box>
                                    {`box-margin-bottom='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-margin-right={value}>
                                <Example.Box>
                                    {`box-margin-right='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-margin-left={value}>
                                <Example.Box>
                                    {`box-margin-left='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-margin-tb={value}>
                                <Example.Box>
                                    {`box-margin-tb='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-margin-lr={value}>
                                <Example.Box>
                                    {`box-margin-lr='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-padding`

> Имеет дополнительные параметры, например `box-padding-top`, `box-padding-lr` (left right), `box-padding-tb` (top bottom) и другие.

```jsx
<Box box-padding='...'></Box>
```

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <div>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-padding={value}>
                                <Example.Box>
                                    {`box-padding='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-padding-top={value}>
                                <Example.Box>
                                    {`box-padding-top='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-padding-bottom={value}>
                                <Example.Box>
                                    {`box-padding-bottom='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-padding-left={value}>
                                <Example.Box>
                                    {`box-padding-left='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-padding-right={value}>
                                <Example.Box>
                                    {`box-padding-right='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-padding-tb={value}>
                                <Example.Box>
                                    {`box-padding-tb='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                        <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0, margin: '10px 0' }}>
                            <Box box-padding-lr={value}>
                                <Example.Box>
                                    {`box-padding-lr='${value || ''}'`}
                                </Example.Box>
                            </Box>
                        </Example.Box>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-round`

> Имеет дополнительные параметры, например `box-round-top`, `box-round-top-right` и другие.

- `none` - Скругление отсутствует
- `full` - Полное скругление
- `xxs, xs, s, m, l, xl, xxl` - Каждое последующее значение больше предыдущего на 2px, `xxs=2px`, `xs=4px`, `s=6px` и т.д.

```jsx
<Box box-round='...'></Box>
```

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['none', 'full', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <div>
                        <Box box-round={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            box-round
                        </Box>
                        <Box box-round-top={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            box-round-top
                        </Box>
                        <Box box-round-right={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            box-round-right
                        </Box>
                        <Box box-round-bottom={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            box-round-bottom
                        </Box>
                        <Box box-round-left={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            box-round-left
                        </Box>
                        <Box box-round-top-left={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            box-round-top-left
                        </Box>
                        <Box box-round-top-right={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            box-round-top-right
                        </Box>
                        <Box box-round-bottom-left={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            box-round-bottom-left
                        </Box>
                        <Box box-round-bottom-right={value} box-margin-tb='xs' box-padding='xs' box-border='success'>
                            box-round-bottom-right
                        </Box>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-width`

```jsx
<Box box-width='...'></Box>
```

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['auto', '1-1', '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10']}>
                {(value) => (
                    <Box box-width={value}>
                        <Example.Box>
                            content
                        </Example.Box>
                    </Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-display`

```jsx
<Box box-display='...'></Box>
```

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['none', 'inline', 'inline-block', 'block']}>
                {(value) => (
                    <Box box-display={value}>
                        <Example.Box>
                            content
                        </Example.Box>
                    </Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-position`

```jsx
<Box box-position='...'></Box>
```

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['static', 'relative', 'absolute', 'fixed']}>
                {(value) => (
                    <Box box-position={value}>
                        <Example.Box>
                            content
                        </Example.Box>
                    </Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-place`

```jsx
<Box box-place='...'></Box>
```

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['top', 'top-left', 'top-right', 'center', 'center-left', 'center-right', 'bottom', 'bottom-left', 'bottom-right']}>
                {(value) => (
                    <Box box-position='relative' style={{ background: '#f8f8f8', width: 200, height: 200 }}>
                        <Box box-position='absolute' box-place={value}>
                            <Example.Box>
                                content
                            </Example.Box>
                        </Box>
                    </Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-border`

Set the border color depending on the [created theme][create_theme], used `border color` value.

```jsx
<Box box-border='...'></Box>
```

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['success', 'info', 'warning', 'danger']}>
                {(value) => (
                    <Box box-padding='xs' box-border={value}>
                        content
                    </Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-background`

Set the background color depending on the [created theme][create_theme], used `background color` value.

```jsx
<Box box-background='...'></Box>
```

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['success', 'info', 'warning', 'danger']}>
                {(value) => (
                    <Box box-padding='xs' box-background={value}>
                        content
                    </Box>
                )}
            </Example>
        )
    }
}
</script>
```
