[picture-fit]: #picture-fit
[picture-round]: #picture-round
[picture-round-top]: #picture-round-top
[picture-round-right]: #picture-round-right
[picture-round-bottom]: #picture-round-bottom
[picture-round-left]: #picture-round-left
[picture-round-top-left]: #picture-round-top-left
[picture-round-top-right]: #picture-round-top-right
[picture-round-bottom-left]: #picture-round-bottom-left
[picture-round-bottom-right]: #picture-round-bottom-right

[picture]: #picture

# EvoKit - Picture

Создает квадрат с изображением.

---

## Usage

- [Picture][picture]

```jsx
// Common import for all blocks and css
import { Picture } from 'evokit';
import 'evokit/dist/style.css';

// Single import block and css
import Picture from 'evokit/dist/Picture';
import 'evokit/dist/Picture/style.css';

...

<Picture>
    <Picture.Item src='картинка.png' alt='картинка' />
</Picture>

```

---

## Picture

| Property | Type | Description |
|----------|----------|-------------|
| [picture-fit]    | `string`, `object`, `array` | Заполнение контейнера относительно его высоты и ширины |
| [picture-round]    | `string`, `object`, `array` | Скругление углов |
| [picture-round-top]    | `string`, `object`, `array` | Скругление углов сверху |
| [picture-round-right]    | `string`, `object`, `array` | Скругление углов справа |
| [picture-round-bottom]    | `string`, `object`, `array` | Скругление углов снизу |
| [picture-round-left]    | `string`, `object`, `array` | Скругление углов слева |
| [picture-round-top-left]    | `string`, `object`, `array` | Скругление верхнего левого угла |
| [picture-round-top-right]    | `string`, `object`, `array` | Скругление верхнего правого угла |
| [picture-round-bottom-left]    | `string`, `object`, `array` | Скругление нижнего левого угла |
| [picture-round-bottom-right]    | `string`, `object`, `array` | Скругление нижнего правого угла |

### `picture-fit`

```jsx
/*react*/
<script>
const { Picture, Box, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'fill', 'contain', 'cover', 'scale-down']}>
                {(value) => (
                    <div>
                        <Box box-margin-right='xs' box-display='inline-block' style={{ width: 100 }}>
                            <Picture picture-fit={value}>
                                <Picture.Item src='https://picsum.photos/200/100' alt='' />
                            </Picture>
                        </Box>
                        <Box box-margin-right='xs' box-display='inline-block' style={{ width: 100 }}>
                            <Picture picture-fit={value}>
                                <Picture.Item src='https://picsum.photos/100/200' alt='' />
                            </Picture>
                        </Box>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

### `picture-round`

```jsx
/*react*/
<script>
const { Picture, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <div style={{ width: 100 }}>
                        <Picture picture-round={value}>
                            <Picture.Item src='https://picsum.photos/200/200' alt='' />
                        </Picture>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

### `picture-round-top`

```jsx
/*react*/
<script>
const { Picture, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <div style={{ width: 100 }}>
                        <Picture picture-round-top={value}>
                            <Picture.Item src='https://picsum.photos/200/200' alt='' />
                        </Picture>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

### `picture-round-right`

```jsx
/*react*/
<script>
const { Picture, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <div style={{ width: 100 }}>
                        <Picture picture-round-right={value}>
                            <Picture.Item src='https://picsum.photos/200/200' alt='' />
                        </Picture>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

### `picture-round-bottom`

```jsx
/*react*/
<script>
const { Picture, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <div style={{ width: 100 }}>
                        <Picture picture-round-bottom={value}>
                            <Picture.Item src='https://picsum.photos/200/200' alt='' />
                        </Picture>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

### `picture-round-left`

```jsx
/*react*/
<script>
const { Picture, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <div style={{ width: 100 }}>
                        <Picture picture-round-left={value}>
                            <Picture.Item src='https://picsum.photos/200/200' alt='' />
                        </Picture>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

### `picture-round-top-left`

```jsx
/*react*/
<script>
const { Picture, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <div style={{ width: 100 }}>
                        <Picture picture-round-top-left={value}>
                            <Picture.Item src='https://picsum.photos/200/200' alt='' />
                        </Picture>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

### `picture-round-top-right`

```jsx
/*react*/
<script>
const { Picture, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <div style={{ width: 100 }}>
                        <Picture picture-round-top-right={value}>
                            <Picture.Item src='https://picsum.photos/200/200' alt='' />
                        </Picture>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

### `picture-round-bottom-left`

```jsx
/*react*/
<script>
const { Picture, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <div style={{ width: 100 }}>
                        <Picture picture-round-bottom-left={value}>
                            <Picture.Item src='https://picsum.photos/200/200' alt='' />
                        </Picture>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```

### `picture-round-bottom-right`

```jsx
/*react*/
<script>
const { Picture, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <div style={{ width: 100 }}>
                        <Picture picture-round-bottom-right={value}>
                            <Picture.Item src='https://picsum.photos/200/200' alt='' />
                        </Picture>
                    </div>
                )}
            </Example>
        )
    }
}
</script>
```
