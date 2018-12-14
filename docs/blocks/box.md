[sizes]: base/sizes.md
[colors]: base/colors.md
[media]: base/media.md

[box-margin]: #box-margin
[box-margin-top]: #box-margin-top
[box-margin-right]: #box-margin-right
[box-margin-bottom]: #box-margin-bottom
[box-margin-left]: #box-margin-left
[box-margin-tb]: #box-margin-tb
[box-margin-lr]: #box-margin-lr
[box-padding]: #box-padding
[box-padding-top]: #box-padding-top
[box-padding-right]: #box-padding-right
[box-padding-bottom]: #box-padding-bottom
[box-padding-left]: #box-padding-left
[box-padding-tb]: #box-padding-tb
[box-padding-lr]: #box-padding-lr
[box-background]: #box-background
[box-border]: #box-border
[box-round]: #box-round
[box-display]: #box-display
[box-position]: #box-position
[box-place]: #box-place
[box-width]: #box-width

[box]: #box


# EvoKit - Box

Блок для контента, позволяет применить внутренние/внешние отступы и много другое.

!> Модификаторы имеют [Media][media] параметры.

---

## Usage

- [Box][box]

```jsx
// Common import for all blocks and css
import { Box } from 'evokit';
import 'evokit/dist/style.css';

// Single import block and css
import Box from 'evokit/dist/Box';
import 'evokit/dist/Box/style.css';

...

<Box>
    content
</Box>

```

---

## Box

| Property | Type | Description |
|----------|----------|-------------|
| [box-margin]         | `string`, `object`, `array` | Внешний отступ со всех сторон [sizes] |
| [box-margin-top]     | `string`, `object`, `array` | Внешний отступ сверху [sizes] |
| [box-margin-right]   | `string`, `object`, `array` | Внешний отступ справа [sizes] |
| [box-margin-bottom]  | `string`, `object`, `array` | Внешний отступ снизу [sizes] |
| [box-margin-left]    | `string`, `object`, `array` | Внешний отступ слева [sizes] |
| [box-margin-tb]      | `string`, `object`, `array` | Внешний отступ сверху и снизу [sizes] |
| [box-margin-lr]      | `string`, `object`, `array` | Внешний отступ слева и справа [sizes] |
| [box-padding]        | `string`, `object`, `array` | Внутренний отступ со всех сторон [sizes] |
| [box-padding-top]    | `string`, `object`, `array` | Внутренний отступ сверху [sizes] |
| [box-padding-right]  | `string`, `object`, `array` | Внутренний отступ справа [sizes] |
| [box-padding-bottom] | `string`, `object`, `array` | Внутренний отступ снизу [sizes] |
| [box-padding-left]   | `string`, `object`, `array` | Внутренний отступ слева [sizes] |
| [box-padding-tb]     | `string`, `object`, `array` | Внутренний отступ сверху и снизу [sizes] |
| [box-padding-lr]     | `string`, `object`, `array` | Внутренний отступ слева и справа [sizes] |
| [box-background]     | `string`, `object`, `array` | Добавляет фон |
| [box-border]         | `string`, `object`, `array` | Добавляет рамку |
| [box-round]          | `string`, `object`, `array` | Скругление углов |
| [box-display]        | `string`, `object`, `array` | Отображение в документе |
| [box-position]       | `string`, `object`, `array` | Cпособ позиционирования |
| [box-place]          | `string`, `object`, `array` | Место позиционирования |
| [box-width]          | `string`, `object`, `array` | Ширина |

### `box-margin`

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['auto', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0 }}>
                        <Box box-margin={value}>
                            <Example.Box>
                                content
                            </Example.Box>
                        </Box>
                    </Example.Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-margin-top`

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['auto', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0 }}>
                        <Box box-margin-top={value}>
                            <Example.Box>
                                content
                            </Example.Box>
                        </Box>
                    </Example.Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-margin-right`

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['auto', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0 }}>
                        <Box box-margin-right={value}>
                            <Example.Box>
                                content
                            </Example.Box>
                        </Box>
                    </Example.Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-margin-bottom`

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['auto', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0 }}>
                        <Box box-margin-bottom={value}>
                            <Example.Box>
                                content
                            </Example.Box>
                        </Box>
                    </Example.Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-margin-left`

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['auto', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0 }}>
                        <Box box-margin-left={value}>
                            <Example.Box>
                                content
                            </Example.Box>
                        </Box>
                    </Example.Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-margin-tb`

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['auto', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0 }}>
                        <Box box-margin-tb={value}>
                            <Example.Box>
                                content
                            </Example.Box>
                        </Box>
                    </Example.Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-margin-lr`

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['auto', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0 }}>
                        <Box box-margin-lr={value}>
                            <Example.Box>
                                content
                            </Example.Box>
                        </Box>
                    </Example.Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-padding`

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0 }}>
                        <Box box-padding={value}>
                            <Example.Box>
                                content
                            </Example.Box>
                        </Box>
                    </Example.Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-padding-top`

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0 }}>
                        <Box box-padding-top={value}>
                            <Example.Box>
                                content
                            </Example.Box>
                        </Box>
                    </Example.Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-padding-right`

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0 }}>
                        <Box box-padding-right={value}>
                            <Example.Box>
                                content
                            </Example.Box>
                        </Box>
                    </Example.Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-padding-bottom`

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0 }}>
                        <Box box-padding-bottom={value}>
                            <Example.Box>
                                content
                            </Example.Box>
                        </Box>
                    </Example.Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-padding-left`

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0 }}>
                        <Box box-padding-left={value}>
                            <Example.Box>
                                content
                            </Example.Box>
                        </Box>
                    </Example.Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-padding-tb`

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0 }}>
                        <Box box-padding-tb={value}>
                            <Example.Box>
                                content
                            </Example.Box>
                        </Box>
                    </Example.Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-padding-lr`

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Example.Box style={{ background: '#f8f8f8', overflow: 'hidden', padding: 0 }}>
                        <Box box-padding-lr={value}>
                            <Example.Box>
                                content
                            </Example.Box>
                        </Box>
                    </Example.Box>
                )}
            </Example>
        )
    }
}
</script>
```

### `box-background`

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['danger', 'dark', 'default', 'info', 'light', 'minor', 'muted', 'primary', 'reset', 'second', 'success', 'warning']}>
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

### `box-border`

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['danger', 'dark', 'default', 'info', 'light', 'minor', 'muted', 'primary', 'reset', 'second', 'success', 'warning']}>
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

### `box-round`

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Box box-padding='xs' box-border='success' box-round={value}>
                        content
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

### `box-width`

```jsx
/*react*/
<script>
const { Box, Example } = EvoKit;

export default class ExampleBox extends React.Component {
    render() {
        return (
            <Example values={['1-1', '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10']}>
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
