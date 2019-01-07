[image-align]: #image-align
[image-valign]: #image-valign
[image-mirror]: #image-mirror
[image-round]: #image-round
[image-round-top]: #image-round-top
[image-round-right]: #image-round-right
[image-round-bottom]: #image-round-bottom
[image-round-left]: #image-round-left
[image-round-top-left]: #image-round-top-left
[image-round-top-right]: #image-round-top-right
[image-round-bottom-left]: #image-round-bottom-left
[image-round-bottom-right]: #image-round-bottom-right

[image]: #image

# EvoKit - Image

Предназначен для отображения изображения.

---

## Usage

- [Image][image]

```jsx
// Common import for all blocks and css
import { Image } from 'evokit';
import 'evokit/dist/style.css';

// Single import block and css
import Image from 'evokit/dist/Image';
import 'evokit/dist/Image/style.css';

...

<Image src='картинка.png' alt='картинка' />

```

---

## Image

| Property | Type | Description |
|----------|----------|-------------|
| [image-align]    | `string`, `object`, `array` | Горизонтальное выравнивание |
| [image-valign]    | `string`, `object`, `array` | Вертикальное выравнивание |
| [image-mirror]     | `string`, `object`, `array` | Отзеркаливание |
| [image-round]     | `string`, `object`, `array` | Скругление углов |
| [image-round-top]    | `string`, `object`, `array` | Скругление углов сверху |
| [image-round-right]    | `string`, `object`, `array` | Скругление углов справа |
| [image-round-bottom]    | `string`, `object`, `array` | Скругление углов снизу |
| [image-round-left]    | `string`, `object`, `array` | Скругление углов слева |
| [image-round-top-left]    | `string`, `object`, `array` | Скругление верхнего левого угла |
| [image-round-top-right]    | `string`, `object`, `array` | Скругление верхнего правого угла |
| [image-round-bottom-left]    | `string`, `object`, `array` | Скругление нижнего левого угла |
| [image-round-bottom-right]    | `string`, `object`, `array` | Скругление нижнего правого угла |

### `image-align`

```jsx
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['left', 'center', 'right']}>
                {(value) => (
                    <Image
                        src='https://picsum.photos/200/200'
                        width={100}
                        height={100}
                        image-align={value}
                    />
                )}
            </Example>
        )
    }
}
</script>
```

### `image-valign`

```jsx
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['baseline', 'top', 'bottom', 'middle', 'super', 'sub', 'text-top', 'text-bottom']}>
                {(value) => (
                    <div>
                        <Example.Box style={{ display: 'inline-block' }}>
                            text
                        </Example.Box>
                        <Image
                            src='https://picsum.photos/120/120'
                            width={60}
                            height={60}
                            image-valign={value}
                        />
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

### `image-mirror`

```jsx
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['x', 'y', 'xy']}>
                {(value) => (
                    <Image
                        src='https://picsum.photos/200/200'
                        width={100}
                        height={100}
                        image-mirror={value}
                    />
                )}
            </Example>
        )
    }
}
</script>
```

### `image-round`

```jsx
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <Image
                        src='https://picsum.photos/200/200'
                        width={100}
                        height={100}
                        image-round={value}
                    />
                )}
            </Example>
        )
    }
}
</script>
```

### `image-round-top`

```jsx
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <Image
                        src='https://picsum.photos/200/200'
                        width={100}
                        height={100}
                        image-round-top={value}
                    />
                )}
            </Example>
        )
    }
}
</script>
```

### `image-round-right`

```jsx
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <Image
                        src='https://picsum.photos/200/200'
                        width={100}
                        height={100}
                        image-round-right={value}
                    />
                )}
            </Example>
        )
    }
}
</script>
```

### `image-round-bottom`

```jsx
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <Image
                        src='https://picsum.photos/200/200'
                        width={100}
                        height={100}
                        image-round-bottom={value}
                    />
                )}
            </Example>
        )
    }
}
</script>
```

### `image-round-left`

```jsx
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <Image
                        src='https://picsum.photos/200/200'
                        width={100}
                        height={100}
                        image-round-left={value}
                    />
                )}
            </Example>
        )
    }
}
</script>
```

### `image-round-top-left`

```jsx
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <Image
                        src='https://picsum.photos/200/200'
                        width={100}
                        height={100}
                        image-round-top-left={value}
                    />
                )}
            </Example>
        )
    }
}
</script>
```

### `image-round-top-right`

```jsx
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <Image
                        src='https://picsum.photos/200/200'
                        width={100}
                        height={100}
                        image-round-top-right={value}
                    />
                )}
            </Example>
        )
    }
}
</script>
```

### `image-round-bottom-left`

```jsx
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <Image
                        src='https://picsum.photos/200/200'
                        width={100}
                        height={100}
                        image-round-bottom-left={value}
                    />
                )}
            </Example>
        )
    }
}
</script>
```

### `image-round-bottom-right`

```jsx
/*react*/
<script>
const { Image, Example } = EvoKit;

export default class ExampleImage extends React.Component {
    render() {
        return (
            <Example values={['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'full']}>
                {(value) => (
                    <Image
                        src='https://picsum.photos/200/200'
                        width={100}
                        height={100}
                        image-round-bottom-right={value}
                    />
                )}
            </Example>
        )
    }
}
</script>
```
